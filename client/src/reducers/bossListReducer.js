import { GET_BOSS_LIST, CREATE_NEW_BOSS, DELETE_BOSS, UPDATE_BOSS } from '../actions/types';

export default function (state = [], action) {
    const { payload } = action;
    switch (action.type) {
        case GET_BOSS_LIST:
            return payload.bossList;
        case CREATE_NEW_BOSS:
            return [...state, { id: payload.id, ...payload.detailsObj }];
        case DELETE_BOSS:
            return state.filter((obj) => {
                return obj.id !== payload.id
            });
        case UPDATE_BOSS:
            return state.map(obj => {
                if (obj.id === payload.id) {
                    return { id: payload.id, ...payload.newDetailsObj };
                }
                return obj;
            })
        default:
            return state;
    }


}