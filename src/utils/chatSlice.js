import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1); //to make sure that our page doesn't lag b/c of messages we'll smartly optimize it like for every 10 messages remove 1 message from the top
      state.messages.push(action.payload); //here we've done state.messages.push because we want to push our latest chat from below and not from top
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
