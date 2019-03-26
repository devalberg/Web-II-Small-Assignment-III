import { GET_BOSS_DETAILS, UPDATE_BOSS } from '../actions/types';

const initialState = {
    id: null,
    name: '',
    description: '',
    img: ''
}

export default function (state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GET_BOSS_DETAILS:
            const { bossDetails } = payload;
            return {
                id: bossDetails.id,
                name: bossDetails.name,
                description: bossDetails.description,
                img: bossDetails.img
            }

        case UPDATE_BOSS:
            const { newDetailsObj } = payload;
            return {
                id: state.id,
                name: newDetailsObj.name,
                description: newDetailsObj.description,
                img: newDetailsObj.img
            }
        default:
            return state;
    }
}