import React, { useState } from 'react';

const ContactCard = ({ avatarUrl, name, email, age, gender, location }) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className='contact-card'>
      <img src={avatarUrl} alt={name} />
      <div className='user-details'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <button onClick={() => setShowAge(!showAge)}>Show age</button>
        {showAge ? <p>Age: {age}</p> : null}
        <p>{location}</p>
      </div>
    </div>
  );
};

export default ContactCard;
