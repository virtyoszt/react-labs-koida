import React, {useState} from 'react'
import TownImage from './TownImage';

export default function SelectTowns() {
    const [cityState, setCityState] = useState("")
    const cities = [
        {id:1 , name:"Житомир", image:"Zhytomyr.jpeg"},
        {id:2, name:"Київ", image:"Kiev.jpg"},
        {id:3, name:"Львів", image:"Lviv.jpg"}
    ];
  return (
    <div>
        <label>Нажми на місто - зміниться картинка</label>
            <select id = "selected_town" onChange={(e) => {
                    const selectedCity = e.target.value;
                    setCityState(selectedCity);
            }}>
                <option value = ""></option>
        {cities.map((city, index) => (  
                <option value = {city.image}>{city.name}</option>  
            ))}  
    </select>
    <TownImage image = {cityState}/>
    </div>
  )
}
