import { useSelector, useDispatch } from "react-redux";

export { useDispatch };
export const food = () => useSelector(({ food }) => food);
