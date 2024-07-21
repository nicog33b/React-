import { useCounter } from "../hooks/useCounter";
export const CounterWithHook = () => {

    const { count, increaceBy } = useCounter({});

    return (
        <>
            <h3>CONTADOR : <small>{count}</small></h3>
            <div>
                <button onClick={() => {
                    increaceBy(1);
                }}>+1</button>
                &nbsp;
                <button onClick={() => {
                    increaceBy(-1);
                }}>-1</button>
            </div>
        </>
    )
}