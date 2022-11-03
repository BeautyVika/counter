import React, {ChangeEvent, useEffect, useReducer} from "react";
import {Button} from "../Button/Button";
import s from './SettingsCounter.module.css'

type SettingsButtonTypeProps = {
    activatedSet: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    maxValue: number
    minValue: number
    onSetSettings: () => void
    setActivatedSet: (value: boolean) => void
    isError: boolean
    setIsError: (value: boolean) => void
}

export const SettingsButton = (props: SettingsButtonTypeProps) => {

    useEffect(() => {
        onCheckValues()
    }, [props.minValue, props.maxValue])

    function onCheckValues() {
       if (props.maxValue <= props.minValue || props.minValue < 0 || props.maxValue < 0) {
           props.setIsError(true)
       }else {
           props.setIsError(false)
       }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(e.currentTarget.value))
        props.setActivatedSet(false)
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(parseInt(e.currentTarget.value))
        props.setActivatedSet(false)
    }
    let classNameInput = (props.maxValue <= props.minValue || props.minValue < 0 || props.maxValue < 0)
                         ? s.valueInput + ' ' + s.error : s.valueInput
    return (
        <div className={s.settings}>

            <div className={s.values}>
                <div className={s.value}>
                    <div className={s.maxValue}>max value</div>
                    <input type='number'
                           className={classNameInput}
                           value={props.maxValue}
                           onChange={onChangeMax}/>
                </div>

                <div className={s.value}>
                    <div className={s.minValue}>min value</div>
                    <input type='number'
                           className={classNameInput}
                           value={props.minValue}
                           onChange={onChangeMin}/>
                </div>
            </div>
            <div className={s.btn}>
                <Button isDisabled={props.activatedSet || props.isError}
                        callback={props.onSetSettings}
                        name={'set'}/>
            </div>
        </div>
    )
}


