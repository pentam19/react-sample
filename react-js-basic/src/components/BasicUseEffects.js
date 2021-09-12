import React, {useState, useEffect} from 'react'

const BasicUseEffects = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState("")

    // レンダリングが走った時に実行される
    // 第二引数(10行目) ,[] を渡せば１回だけ実行される
    useEffect(() => {
        console.log("useEffect invoked")
    }, [count]) // countが変化したときだけ

    return (
        <div>
        <h2>hello BasicUseEffects compornent</h2>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count}</button>
            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
        </div>
    )
}

export default BasicUseEffects
