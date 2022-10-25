import React, {useState} from "react";

const Counter = () => {
    const [num, setNumber] = useState(0);
    // num 은 userState에서 지정한 기본값 0 (num = 0)
    // setNumber는 앞의 num 을 바꿀 수 있는 setter 함수

    const increase = () => {
        setNumber(num+1) // num = num + 1
    }

    const decrease = () => {
        setNumber(num-1) // num = num - 1
    }
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter