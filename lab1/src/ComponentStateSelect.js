import React, {useState} from 'react'
import Text from './ComponentState';


export default function TextSelect() {
    const [colorState, setColorState] = useState("")
    const colors = [
        {id:1, name: "black"},
        {id:2, name: "red"},
        {id:3, name: "green"},
        {id:4, name: "blue"},
    ];


  return (
    <div>
        <label>Вибери продукт</label>
        <select id = "selected_colors" onChange={(e) => {
                    const selectedColor = e.target.value;
                    setColorState(selectedColor);
            }}>
                <option value = ""></option>
        {colors.map((color, index) => (  
                <option value = {color.name}>{color.name}</option>  
            ))}  
        </select>

        <Text name = {colorState}/>
    </div>
  )
}
