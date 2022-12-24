import React, { useState } from 'react'
import { Button, Input } from '@mui/material';


const GuessTheNumber = () => {
    const [attempts, setAttempts] = useState(10);
    const [number, setNumber] = useState(0);
    
    const start = ()=>{
        setNumber(Math.floor(Math.random()*1000))
        document.getElementById('new_game').disabled = true;
        document.getElementById('check').disabled = false;    
        res.innerHTML = null;
    }
    const res = document.getElementById('res');
    const check = ()=>{
        const num = document.getElementById('promt').value
        const out = document.getElementById('out');
      if (num===""){
        out.innerHTML += `<p>Рядок пустий!</p>`;
      }
      else {
        console.log(num)
        setAttempts(attempts-1)
        if(num === number) {
            res.innerHTML = 'Вітаю! Ви вгадали число!';
        }
        else if(num > number){
            out.innerHTML += `<p>Число <b>${num}</b> більше за <b>загадане</b></p>`;
        }
        else{
          out.innerHTML += `<p>Число <b>${num}</b> менше за <b>загадане</b></p>`;
        }
        if(attempts === 0){
            res.innerHTML = 'Гра закінчена!';
            document.getElementById('check').disabled = true;
            document.getElementById('new_game').disabled = false;
            setAttempts(10)
        }
      }
    }

  return (
    <div className='game__container '>
        <h1>Гра "вгадай число"</h1>
        <h4>Вгадай число від 1 до 1000 за 10 спроб</h4>
        <Button id='new_game' onClick={start}>Нова гра</Button>
        <Input type="number" id='promt'/>
        <Button id='check' onClick={check} >Перевірити</Button>
        <h3>Спроби:</h3>
        <p id='out'></p>
        <p>Спроб: {attempts}</p>
        <p >Результат: <span id='res'></span></p>
    </div>
  )
}
export default GuessTheNumber