import React , {useState} from 'react'
import '../App.css' 

function UseState() {
    const [count , setCount] = useState(0);
    const inc= () => setCount (count + 1);
    const dec = () => setCount (count - 1);
    const reset = () => setCount (count * 0)
    
  return (
    <>
    <div className='counter'>
        <h1 className='count'>Count {count}</h1>
        <span className='btn'>
            <button onClick={inc}>Increase</button>
        </span>
        <span className='btn'>
            <button onClick={dec}>Decrease</button>
        </span>
        <span className='btn'>
            <button onClick={reset}>Reset</button>
        </span>
    </div>
    </>
  )
}

export default UseState;