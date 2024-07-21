import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 1,
  stage1Gladiators: [],
  stage2Gladiators: [],
  stage3Gladiators: [],
};

const arenaSlice = createSlice({
  name: "arena",
  initialState,
  reducers: {
    getst1opponents(state, action) {
      console.log("op1", action.payload);
      state.stage1Gladiators = action.payload;
    },
    getst2opponents(state, action) {
      console.log("op2", action.payload);
      state.stage2Gladiators = action.payload;
    },
    getst3opponents(state, action) {
      console.log("op2", action.payload);
      state.stage3Gladiators = action.payload;
    },
    setStage(state, action) {
      state.stage = action.payload;
    },
  },
});

export const { getst1opponents, setStage, getst2opponents, getst3opponents } =
  arenaSlice.actions;

export default arenaSlice.reducer;
