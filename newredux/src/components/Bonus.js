
import React from 'react';
import  {useDispatch, useSelector}  from 'react-redux';
import { increment } from '../slices/BonusSlice';

function Bonus() {
  const points1=useSelector(state=>state.Bonus.points)
  const dispatch=useDispatch();

  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points1}</h3>
             <button onClick={()=>dispatch(increment())}>Increment</button>
   
      </div>
    </div>
  );
}

export default Bonus;