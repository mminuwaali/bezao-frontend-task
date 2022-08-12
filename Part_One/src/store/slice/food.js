import { createSlice } from "@reduxjs/toolkit";

// images
import food01 from "@/assets/img/food/food01.svg";
import food02 from "@/assets/img/food/food02.svg";
import food03 from "@/assets/img/food/food03.svg";
import food04 from "@/assets/img/food/food04.svg";
import food05 from "@/assets/img/food/food05.svg";
import food06 from "@/assets/img/food/food06.svg";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    load: 0,
    error: 0,
    data: [
      {
        id: 1,
        image: food01,
        price: "1,500",
        title: "Jollof Rice and Chicken",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
      {
        id: 2,
        image: food02,
        price: "1000",
        title: "Swallow with Draw Soup",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
      {
        id: 3,
        image: food03,
        price: "1,500",
        title: "Fries with Egg sauce",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
      {
        id: 4,
        image: food04,
        price: "1000",
        title: "Swallow with Egusi Soup",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
      {
        id: 5,
        image: food05,
        price: "700",
        title: "Beans",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
      {
        id: 6,
        image: food06,
        price: "600",
        title: "Fried Rice",
        content:
          "Fried potato/yam chips with egg sauce or any topping of your choice",
      },
    ],
  },
  reducers: {},
  extraReducers: {},
});

export default foodSlice.reducer;
