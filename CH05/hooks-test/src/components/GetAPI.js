import React, { useState, useEffect } from 'react';

function GetAPI({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then(data => setUser(data));
  },
  [userId]);
  
  return (
    <div>
      {!user && <p>사용자 정보 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  )
}

export default GetAPI;