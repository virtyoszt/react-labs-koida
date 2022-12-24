import { React, useState } from 'react'

export default function Counter(props) {
  const [counter, setCounter] = useState(props.initial==null ? 0 : props.initial);
  //increase counter
  const increase = () => {
    if (props.min==null) {
        if (counter < "10"){
            props.max===counter ? setCounter(counter) : setCounter(counter => counter +1 );
        }
    }
    else {
        props.max===counter ? setCounter(counter) : setCounter(counter => counter + 1);
    }
  };
 
  //decrease counter
  const decrease = () => {
    if (props.min==null) {
        if (counter > "-10"){
            props.min===counter ? setCounter(counter) : setCounter(counter => counter - 1);
        }
    }
    else {
        props.min===counter ? setCounter(counter) : setCounter(counter => counter - 1);
    }
  };
 
  //reset counter 
  const reset = () =>{
    if (props.initial==null){
        setCounter(0);
    }
    else {
        setCounter(props.initial);
    };
  }
 
  return (
    <div className="counter">
      <span className="counter__output">Рахунок: {counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
