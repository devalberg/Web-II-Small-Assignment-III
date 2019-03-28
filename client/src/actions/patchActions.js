import { UPDATE_BOSS } from './types';
import { API_URI } from '../api_uri';

export const updateBossDetailsFromServer = (id, newDetailsObj) => updateBossDetailsFromServerThunk(id, newDetailsObj)

export const updateBossDetailsFromServerSuccess = (id, newDetailsObj) => ({
    type: UPDATE_BOSS,
    payload: {
        id,
        newDetailsObj
    }
});

export const updateBossDetailsFromServerFail = (responseStatus) => (
    alert(`Error occurred! Server responded with a status of ${responseStatus}`)
)

const updateBossDetailsFromServerThunk = (id, newDetailsObj) => (dispatch) => {
    return fetch(`${API_URI}/bosses/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDetailsObj)
    }).then(resp => {
        if (resp.ok) dispatch(updateBossDetailsFromServerSuccess(id, newDetailsObj));
        else dispatch(updateBossDetailsFromServerFail(resp.status));
    })
}