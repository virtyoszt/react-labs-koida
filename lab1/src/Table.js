import React from 'react'

const Occupation = () => {
  const user = {
    firstName: 'John',
    lastName: 'Silver',
    occupation: 'Pirate Captain'
  };
  const values = Object.values(user)

  return (
    <h1>
      <div id='root' >
          <table className="table">
              <tr><th>First Name</th><td>{values[0]}</td></tr>
              <tr><th>Last Name</th><td>{values[1]}</td></tr>
              <tr><th>Occupation</th><td>{values[2]}</td></tr>
          </table>
      </div>
    </h1>
  );
}

export default Occupation