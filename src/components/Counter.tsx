import { useState } from "react"


export const Counter = () => {

    const [count, setCount] = useState<number>(10);
    const increaceBy = (value:number) => {
        setCount(count+value)
    }
    return (
        <>
            <h3>CONTADOR : <small>{count}</small></h3>
            <div>
                <button onClick={() => {
                    increaceBy(1);
                }}>+1</button>
                &nbsp;
                <button onClick={() => {
                    if (count === 0) {
                        return;
                    }
                    increaceBy(-1);
                }}>-1</button>
            </div>
        </>
    )
}