import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restuarantConstant";


export const AllRestuarantList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/restaurants.json");
    console.log(data.restaurants);
    dispatch({
      payload: data.restaurants,type:SUCCESS
    });
  } catch (error) {
    dispatch({
      payload: error,type:FAIL
    });
  }
};
