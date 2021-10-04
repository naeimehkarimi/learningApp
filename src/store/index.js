import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getCourses } from "../action/courses";
import { reducers } from "../reducer";


export const myStore=createStore(reducers,compose(
    applyMiddleware(thunk)
));

//Initialize
myStore.dispatch(getCourses());