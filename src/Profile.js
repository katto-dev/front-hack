import React from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div >
        <h3>Profile</h3>
        <div>
            <button 
                color="inherit"
                
            >
                <img src={user.avatar} alt='Avatar' />
            </button>

            <button 
                className='bton bton-primary'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
        <div  variant="outlined">
            <div>
                <img src={user.avatar} alt='Avatar' />
                <p variant="h5">
                Welcome {user.fname} {user.lname}
                </p>
            </div>
        </div>
    </div>
  );
}
