import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Table } from '@mui/material';
export default function Cart() {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "УМБ Promate Torq-10 10000 mAh Black",
            price: 1099,
            cart: true,
            quantity: 0,
          },
          {
            id: 2,
            name: "Внешний Аккумулятор Power Bank Baseus",
            price: 3989,
            cart: true,
            quantity: 0,
          },
          {
            id: 3,
            name: "УМБ Xiaomi Redmi Power Bank 20000mAh",
            price: 2699,
            cart: true,
            quantity: 0,
          },
          {
            id: 4,
            name: "Зарядная станция EcoFlow DELTA",
            price: 71999,
            cart: true,
            quantity: 0,
          },
          {
            id: 5,
            name: "Павербанк 20000 mAh 20W с быстрой зарядкой",
            price: 2845,
            cart: true,
            quantity: 0,
          }
    ])
    
    function increase(item) {
      let x = cart.map((i) => {
  
        if (item.id === i.id) {
          i.quantity += 1
        }
        return i
      })
      setCart(x)
  
    }
    function decrease(item) {
      let x = cart.map((i) => {
  
        if (item.id === i.id && i.quantity > 0) {
          i.quantity -= 1
        }
        return i
      })
      setCart(x)
    }

    function delitem(item) {
      let x = cart.map((i) => {
  
        if (item.id === i.id && i.quantity > 0) {
          i.quantity = 0
        }
        return i
      })
      setCart(x)
    }

    function total() {
      let x = 0
      cart.map((i) => {
        x += i.price * i.quantity
      })
      return x
    }


    return (
      <div className='container mt-2'>
        <div>
          <Table className="table  text-center">
            <thead>
              <tr id="trgreen">
                <th scope="col">Назва продукту</th>
                <th scope="col">Ціна</th>
                <th scope="col">Кількість</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((i) => (
                  < tr key={i.id}>
                    <td>{i.name}</td>
                    <td>
                      {i.price}
                    </td>
                    <td>
                      <Button onClick={() => decrease(i)}>-</Button>
                      &nbsp;<b>{i.quantity}</b>&nbsp;
                      <Button onClick={() => increase(i)}>+</Button>
                      &nbsp;
                      <Button onClick={() => delitem(i)}><img src="trash.png" alt="delete" /></Button>
                    </td>
                  </tr >
                ))
              }
            </tbody>
          </Table>
        </div>
        <div class="row">
          <div class="col text-center">
            <h4>TOTAL: {total()}</h4>
          </div>
        </div>
      </div >
    );
}
