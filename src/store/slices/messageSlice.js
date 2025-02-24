import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { text: "Global Store is Ready!" }, // Default state
  reducers: {
    setMessage: (state, action) => {
      state.text = action.payload; // Update state when action is dispatched
    },
  },
});

// Export the action to modify state
export const { setMessage } = messageSlice.actions;

// Export reducer to be added to the store
export default messageSlice.reducer;
