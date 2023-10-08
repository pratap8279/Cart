
import React from 'react';
import { useGetAccountQuery ,useAddAcountMutation,useDeleteAcountMutation,useUpdateAcountMutation} from '../slices/AdminSlice';



function Admin() {
  const {data,error ,isLoading,isSuccess}=useGetAccountQuery();
  const [addAcount]=useAddAcountMutation();
  const [deleteAcount]=useDeleteAcountMutation();
  const [updatedAccount]=useUpdateAcountMutation();

return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin  Component</b>
          {isLoading? <p>Loading.....</p>: null}
          {
             isSuccess && data&& data.map(account=><p>{account.id}: {account.amount}    <button   onClick={()=>(deleteAcount(account.id))} >Delete</button>    <button   onClick={()=>(updatedAccount({id:account.id,amount:3453}))} >update</button></p>)
           
          }
        </h4>

             <button   onClick={()=>addAcount(100 +data.length*5,data.length+1)} >Add</button>
         
   
      </div>
    </div>
  );
}

export default Admin;