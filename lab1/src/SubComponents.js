import React from 'react'
import SubComponentsCard from './SubComponentsCard'
const compon = 
[
    {
        'name' : "Павербанк Mophie powerstation Micro USB",
        'image' : "price1.jpg",
        'price' : 450
    },
    {
        'name' : "УМБ Xiaomi Redmi Power Bank 20000mAh 2xUSB",
        'image' : "price2.jpg",
        'price' : 2699
    },
    {
        'name' : "Павербанк 20000 mAh 20W с быстрой зарядкой",
        'image' : "price3.jpg",
        'price' : 2845
    },
    {
        'name' : "Внешний Аккумулятор Power Bank Baseus",
        'image' : "price4.jpg",
        'price' : 3989
    }
];


export default function SubComponents() {
  return (
    <div className = "row">
        {compon.map((card, index) => (
            <div className="col-md-3">
                <SubComponentsCard image = {card.image} name = {card.name} price = {card.price}/>
                </div>  
            ))}
    </div>
  )
}
