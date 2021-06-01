import React from 'react';



function ProfileUser() {
    function handleClick (e) {
      e.preventDefault();
      alert("Hager");
    };
   
    return (
      <a href="/" onClick={handleClick}
      style={{
          font: 'icon',
          color: 'red',
      }}>
      
        Profile User Name
      </a>
    );
   };

   

   export default ProfileUser;


   