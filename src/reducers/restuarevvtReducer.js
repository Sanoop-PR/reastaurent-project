import { FAIL, SUCCESS } from "../constants/restuarantConstant";

export const restaurantListReducer = (state={allRestaurants:[]},action) =>{
    
    switch (action.type) {
        case SUCCESS: return{
            allRestaurants:action.payload
        } 
        case FAIL: return{
            allRestaurants:action.payload
        }    
        default : return state
    }

}