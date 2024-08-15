import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    data:[],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case (ActionTypes.SET_ADD_WIDGET):{
            const {selectedTabKey } = payload;

            const currentData = Array.isArray(state.data) ? [...state.data] : [];

            if (selectedTabKey < 0) {
                console.error('Index out of bounds');
                return state;
            }

            while (currentData.length <= selectedTabKey) {
                currentData.push([]);
            }
            currentData[selectedTabKey].push(payload) ;

            return {
                ...state,
                data: currentData,
            };
        }
        case (ActionTypes.SET_DELETE_WIDGET):{
            const { id, index } = payload;
            const currentData = Array.isArray(state.data) ? [...state.data] : [];
            const subArray = currentData[index];
            const updatedSubArray = subArray.filter(item => item.id !== id);
            currentData[index] = updatedSubArray;
            return {
                ...state,
                data: currentData,
            };
        }
        case(ActionTypes.SET_UPDATE_WIDGET):{
            return{
                ...state,
                ...payload
            }
        }
        default:
            return state;
    }
}