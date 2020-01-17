import React from 'react';

const Avatarlist = (props) => {
  return (
		<div className="avatar_text ma4 pa1 tc dib grow shadow-4"> 
		  <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
		  <h1>{props.name}</h1>
		   <p>{props.work}</p>
		</div>
  	);
}


export default Avatarlist;
