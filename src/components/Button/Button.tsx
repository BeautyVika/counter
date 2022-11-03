import React from 'react';

type ButtonTypeProps= {
    callback: () => void
    name: string
    isDisabled: boolean
}
export const Button = (props: ButtonTypeProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button disabled={props.isDisabled}
                onClick={onClickHandler}>{props.name}
        </button>
    )
}