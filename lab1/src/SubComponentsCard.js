import React from 'react'

export default function SubComponentsCard(props) {
  return (

            <div class="card">
              <img class="card-img-top" src={props.image} alt={props.name}/>
              <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">{props.price} грн.</p>
              <a href="/#" class="btn btn-primary">Замовити</a>
            </div>
    </div>
  )
}
