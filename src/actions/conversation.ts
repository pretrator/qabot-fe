import { axios } from '@Src/utils';
import { FETCH_CONVO } from '@Src/urls';
import { Dispatch } from 'redux';
import { SET_CONVERSATIONS } from '@Src/actionsType';

export const fetchConversations = async (dispatch: Dispatch) => {
    return axios.get(FETCH_CONVO)
      .then(res => dispatch({ type: SET_CONVERSATIONS, data: res.data }))
}