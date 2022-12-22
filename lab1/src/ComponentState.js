import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (proprs) {
  const prop9s = {
    color: proprs.name
  };
  return (
    <div>
      <h1>I'm a <span style={prop9s}>{proprs.name}</span> Product!</h1>
    </div>
  )
}
