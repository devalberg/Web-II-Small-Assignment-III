import { CREATE_NEW_BOSS, DELETE_BOSS } from './types';
import { API_URI } from '../api_uri';

export const createNewBossFromServer = (detailsObj) => createNewBossFromServerThunk(detailsObj)

const createNewBossFromServerSuccess = (id, detailsObj) => ({
    type: CREATE_NEW_BOSS,
    payload: {
        id,
        detailsObj
    }
});

const createNewBossFromServerFail = (responseStatus) => (
    alert(`Error occured! Server responded with a status of ${responseStatus}`)
);

const createNewBossFromServerThunk = (detailsObj) => (dispatch) => {
    return fetch(`${API_URI}/bosses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detailsObj)
    }).then(resp => {
        if (resp.ok) return resp.json();
        else dispatch(createNewBossFromServerFail(resp.status));
    }).then(data => {
        if (data) dispatch(createNewBossFromServerSuccess(data.id, detailsObj));
    });
};

export const deleteBossFromServer = (id) => deleteBossFromServerThunk(id);

const deleteBossFromServerThunk = (id) => (dispatch) => {
    return fetch(`${API_URI}/bosses/${id}`, {
        method: 'DELETE'
    }).then(resp => {
        if (resp.ok) dispatch(deleteBossFromServerSuccess(id));
        else dispatch(deleteBossFromServerFail(resp.status));
    })
}

const deleteBossFromServerSuccess = (id) => ({
    type: DELETE_BOSS,
    payload: {
        id
    }
})

const deleteBossFromServerFail = (responseStatus) => (
    alert(`Error occured! Server responded with a status of ${responseStatus}`)
);

