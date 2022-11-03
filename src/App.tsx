import React, {useEffect, useState} from 'react';
import './App.css'
import {Counter} from "./components/counter/Counter";
import {SettingsButton} from "./components/SettingsCounter/SettingsCounter";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [activatedSet, setActivatedSet] = useState<boolean>(true)
    const [currentValue, setCurrentValue] = useState(minValue)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        const valueMin = localStorage.getItem('minValue') ?? 0
        const valueMax = localStorage.getItem('maxValue') ?? 0

        setMinValue(+valueMin)
        setMaxValue(+valueMax)
        setCurrentValue(+valueMin)
    }, [])

    const setLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const onIncrease = () => {
        if (currentValue < maxValue) {
            return setCurrentValue(currentValue + 1)
        }
    }
    const onReset = () => {
        setCurrentValue(minValue)
    }
    const onSetSettings = () => {
        setActivatedSet(!activatedSet)
        setCurrentValue(minValue)
        setLocalStorage()
    }

    return (
        <div className="App">
            <SettingsButton activatedSet={activatedSet}
                            minValue={minValue}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            setMinValue={setMinValue}
                            onSetSettings={onSetSettings}
                            setActivatedSet={setActivatedSet}
                            isError={isError}
                            setIsError={setIsError}/>
            <Counter currentValue={currentValue}
                     onIncrease={onIncrease}
                     onReset={onReset}
                     maxValue={maxValue}
                     minValue={minValue}
                     activatedSet={activatedSet}
                     isError={isError}/>
        </div>
    );
}

export default App;
