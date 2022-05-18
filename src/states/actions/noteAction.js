//This file contains every action that we can do in NOTE State

import { ActionTypes } from "../constants/action-types"

export const setNote=(Notes) =>{
    return {
        type: ActionTypes.SET_NOTES,
        payload: Notes,
    }
}

export const selectedNote=(Notes) =>{
    return {
        type: ActionTypes.SELECTED_NOTES,
        payload: Notes,
    }
}