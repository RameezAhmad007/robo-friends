import React from 'react';

const Scroll= (props) =>{
  return(
    <div style={{overflowY: 'auto', height: '440px', padding: '20px 0'}}>
      {props.children}
    </div>
  );
}

export default Scroll;