
import React from 'react';
import { useState } from 'react';
import  {useDispatch, useSelector}  from 'react-redux';
import { increment,incrementByReward } from '../Reducer/RewardReducer';

function Reward() {
  const points1=useSelector(state=>state.reward.points)
  const dispatch=useDispatch();
  const [valueR, setValueR] = useState(0);
  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point :{points1} $</h3>
             <button onClick={()=>dispatch(increment())}>Increment</button>
             <input type="text" onChange={(e) => setValueR(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByReward (valueR))}>
          Increment By {valueR} +
        </button>
   
      </div>
    </div>
  );
}

export default Reward;