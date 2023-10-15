import { useState } from "react";

const Counter = ({ initialCount }) => {
    const [counter, setCounter] = useState(initialCount);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1)
        }
    }
    return {
        counter,
        increase,
        decrease
    }
}

export default Counter