import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";

type CounterPropsType = {
    currentValue: number
    onIncrease: () => void
    onReset: () => void
    maxValue: number
    minValue: number
    activatedSet: boolean
    isError: boolean
}

export const Counter = (props: CounterPropsType) => {

    const classNameNumber = props.currentValue === props.maxValue ? s.number + ' ' + s.finish : s.number
    const startMessage = 'enter values and press "set"'
    const errorMessage = 'Incorrect value!'
    const disabled = props.isError || props.minValue >= props.maxValue || !props.activatedSet

    return (

        <div className={s.final}>

            {props.isError && <div className={s.error + ' ' + s.number}>{errorMessage}</div>}

            {!props.isError && (!props.activatedSet
                ? <div className={s.startMessage + ' ' + s.number}>{startMessage}</div>
                : <div className={classNameNumber}>{props.currentValue}</div>)}

            <div className={s.btnGroup}>
                <Button isDisabled={disabled || props.currentValue === props.maxValue} callback={props.onIncrease}
                        name={'inc'}/>
                <Button isDisabled={disabled} callback={props.onReset} name={'reset'} />
            </div>
        </div>
    );
}
