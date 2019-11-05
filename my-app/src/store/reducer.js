import {combineReducers} from "redux";
import headReducer from "../components/head/store/headReducer";
import homeReducer from "../components/home/store/homeReducer";
import footreducer from "../components/foot/store/footreducer";
export default combineReducers({
    head:headReducer,
    home:homeReducer,
    foot:footreducer,
})