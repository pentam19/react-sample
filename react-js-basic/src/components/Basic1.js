import React, {useState} from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log('Clicked!!!')
    }

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div>
        <h1>hello react</h1>
        { props.name }
            <button onClick={clickHandler}>Click!</button>
            <button onClick={() => setCount(count+1)}>Count! [{count}]</button>
            <button onClick={
                    () => {setCount2(prevCount=>prevCount+1); setCount2(prevCount=>prevCount+1);} 
                }>Count2! [{count2}]
            </button>
        </div>
    )
}

export default Basic1
