import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('sohee');
  const [age, setAge] = useState(27); 
  return (
    <div>
      <p>{`My Name is ... ${name}`}</p>
      <p>{`My age is ... ${age} years old`}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <input type="number" value={age} onChange={e => setAge(e.target.age)}/>
    </div>
  )
}

export default Profile;