//This file use to controll all action of note state with reducer

import { ActionTypes } from "../constants/action-types"

//the first started value
const initialState = {
    notes:[{
        blog_title: "Hello",
        blog_author: "Kuy",
        blog_body: "<p>Help</p>",
        }
    ]

}

export const noteReducer = (state, {type, payload})=>{

    switch (type){
        case ActionTypes.SET_NOTES:
            return state;
        default:
            return state;
    }
}