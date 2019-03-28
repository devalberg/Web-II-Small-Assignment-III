import { GET_BOSS_LIST, GET_BOSS_DETAILS } from './types';
import { API_URI } from '../api_uri';


export const getBossListFromServer = () => getBossListThunk;

const getBossListThunk = (dispatch) => {
	return fetch(`${API_URI}/bosses`).then(resp => {
		if (resp.ok) return resp.json();
		else dispatch(getBossListFromServerFail(resp.status));
	}).then(bossList => {
		if (bossList) dispatch(getBossListFromServerSuccess(bossList))
	})
};

const getBossListFromServerSuccess = (bossList) => ({
	type: GET_BOSS_LIST,
	payload: {
		bossList
	}
});

const getBossListFromServerFail = (responseStatus) => (
	alert(`Error occurred! Server responded with a status of ${responseStatus}`)
);

export const getBossDetailsFromServer = (id) => getBossDetailsFromServerThunk(id);

const getBossDetailsFromServerThunk = (id) => (dispatch) => {
	return fetch(`${API_URI}/bosses/${id}`).then(resp => {
		if (resp.ok) return resp.json();
		else dispatch(getBossDetailsFromServerFail(resp.status));
	}).then(bossDetails => {
		if (bossDetails) dispatch(getBossDetailsFromServerSuccess(bossDetails));
	});
};

const getBossDetailsFromServerSuccess = (bossDetails) => ({
	type: GET_BOSS_DETAILS,
	payload: {
		bossDetails
	}
});

const getBossDetailsFromServerFail = (responseStatus) => (
	alert(`Error occurred! Server responded with a status ${responseStatus}`)
)
