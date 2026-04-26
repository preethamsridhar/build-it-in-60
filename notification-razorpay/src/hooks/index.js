import { useReducer } from "react"
import {notificationConfig} from "../engine";

export const actions = {
    addNotification: 'addNotification',
    removeNotification: 'removeNotification'
}

export const notificationReducer = (state, action) => {
    const actionType = action.type;
    const payload = action.payload
    let returnState;
    switch (actionType) {
        case actions.addNotification: 
            let title = payload.title;
            let messageType = payload.type;
            returnState = {
                ...state,
                byId: {
                    ...state.byId,
                    [crypto.randomUUID()]: {
                        type: messageType,
                        title,
                        delay: 5000,
                    }
                }
            }
            return returnState;
        case actions.removeNotification: 
            returnState = {...state};
            let notificaitonId = payload.id;
            delete returnState.byId[notificaitonId];
            return returnState;
    }
    return state;
}

export const useNotification = () => {
    const [state, dispatch] = useReducer(notificationReducer, notificationConfig)

    const showNotification = (notificationObj) => {
        dispatch({
            type: actions.addNotification,
            payload: {
                type: notificationObj.type,
                title: notificationObj.message
            }
        })
    }

    const removeNotification = (id) => {
        dispatch({
            type: actions.removeNotification,
            payload: {
                id
            }
        })
    }
    return {
        state,
        showNotification,
        removeNotification
    }
}