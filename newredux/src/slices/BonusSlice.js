import { createAction, createSlice } from '@reduxjs/toolkit'
const incrementByAmountBonus =createAction('account/incrementByAmount')
const initialState = {
  points: 0,
}

export const BonusSlice = createSlice({
  name: 'Bonus',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.points += 1
    },
    decrement: (state) => {
      state.points -= 1
    },
    incrementByAmount: (state, action) => {
      state.points += action.payload
    },
  },

  extraReducers:(builder)=>{
    builder.addCase(incrementByAmountBonus,(state,action)=>{
      if(action.payload>100)
      state.points++;
    })

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = BonusSlice.actions

export default BonusSlice.reducer