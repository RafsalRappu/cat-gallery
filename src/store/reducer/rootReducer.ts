import { combineReducers } from "@reduxjs/toolkit";
import catGallerySliceReducer from "../../redux/slices/catGallerySlice";

const rootReducer = combineReducers({
    catGalleryData: catGallerySliceReducer,

});
export { rootReducer };
