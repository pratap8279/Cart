import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/accountSlices';
import { decrement } from '../slices/accountSlices';
import { incrementByAmount } from '../slices/accountSlices';
import { GetUserBtId } from '../slices/accountSlices';
  
function Account( ) {
 const account1=useSelector(state=>state.account.amount)
 const dispatch=useDispatch();
  const [value, setValue] = useState(0);

 

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
      
        <h3>Amount:${account1}</h3>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
        <button onClick={()=>dispatch(GetUserBtId(1))}>Api Call</button>
      </div>
    </div>
  );
}

export default Account;