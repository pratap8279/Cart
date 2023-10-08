
import { createAction, createReducer } from "@reduxjs/toolkit"
export   const increment=createAction('Reward/increment')
export const incrementByReward=createAction('Reward/incrementByReward')

const initialState = {
    points: 0,
  }
  

const RewardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
   
        state.points++
      }).addCase(incrementByReward,(state,action)=>{
        state.points+=action.payload;
      })
     
  })


  export default RewardReducer;