//This file use to combine every reducer

import {combineReducer} from "redux"
import { noteReducer } from "./noteReducer";

const reducers = combineReducer({
    notes: noteReducer
});