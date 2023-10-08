import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = ({
  amount: 0,
})




// First, create the thunk
export const GetUserBtId = createAsyncThunk(
  'accounts/getuserById',
  async (userId, thunkAPI) => {
    let { data } = await axios.get(` http://localhost:8000/accounts/${userId}`)
    return data.amount
  }
)



// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

export const acountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {

      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },


  },
  extraReducers: (builder) => {
    builder.addCase(GetUserBtId.fulfilled, (state, action) => {
      state.amount += action.payload;
      state.pending = false;
    }).addCase(GetUserBtId.pending, (state, action) => {

      state.pending = true;
    }).addCase(GetUserBtId.rejected, (state, action) => {
      state.error=action.error;
      state.pending = false;
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = acountSlice.actions

export default acountSlice.reducer