
import { useState } from "react";

interface Options {
    initialValue?: number;
    maxValue: number;
    minValue: number;
}

export const useCounter = ({initialValue=0, minValue=0, maxValue=10}:Options) => {
    const [count, setCount] = useState<number>(initialValue);
    
    const increaceBy = (value: number) => {

        const newValue = count + value;
        const minValueInCount = minValue;
        const maxValueInCount = maxValue
        
        if (newValue < minValueInCount || newValue >maxValueInCount) {
            return;
        }
        setCount(count + value)
    }
    return {count, increaceBy}
}