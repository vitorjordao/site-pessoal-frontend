import { TitleState } from './types';
import { Reducer } from 'redux';

const reducer: Reducer<TitleState> = (state: TitleState = { data: "" }, action) => {
    return action.type === "@title"? 
        { ...state, data: action.payload.data }:
        state;
};

export default reducer;