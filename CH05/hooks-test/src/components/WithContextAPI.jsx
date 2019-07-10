import React from 'react';

const UserContext = React.createContext();
const user = { name: 'sohee', age: 23 };

function ParentComponent() {
  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  )
}

function ChildComponent() {
  
  const user = useContext(UserContext);
  console.log(`user: ${user.name}, ${user.age}`);
  
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          <>
            <p>{`name is ${user.name}`}</p>
            <p>{`age is ${user.age}`}</p>
          </>
        }}
      </UserContext.Consumer>
    </div>
  )
}


export default ChildComponent;