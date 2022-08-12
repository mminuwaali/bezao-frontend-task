import food from "./slice/food";
import { configureStore as Store } from "@reduxjs/toolkit";

export default Store({ reducer: { food } });
