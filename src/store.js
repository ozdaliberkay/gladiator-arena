import { configureStore } from "@reduxjs/toolkit";
import Player from "./slices/Player";
import Arena from "./slices/Arena";

const store = configureStore({
  reducer: { player: Player, arena: Arena },
});
export default store;
