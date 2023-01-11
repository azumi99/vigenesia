import createDataContext from './createDataContext';
import nnapi from '../apis/nnapi';
import { navigate } from '../Navigation/RootNavigation';

const GET_ACCOUNT = 'GET_ACCOUNT';
const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT';
const GET_NOTES = 'GET_NOTES';

const initialState = {
  account: {
    name: null,
    email: null,
  },
  notes: [],
};

function accountReducer(state, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return { ...state, account: { ...state.account, ...action.payload } };
    case CLEAR_ACCOUNT:
      return { ...state, account: { ...initialState.account } };
    case GET_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}

function getAccount(dispatch) {
  return async function () {
    try {
      const { data } = await nnapi.get('/api/vigenesia/user-profile');
      if (data.success) {
        dispatch({ type: GET_ACCOUNT, payload: data.account });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

function settings(dispatch) {
  return async function () {
    try {
    } catch (error) {}
  };
}

function clearAccount(dispatch) {
  return function () {
    dispatch({ type: CLEAR_ACCOUNT });
  };
}

function createNote(dispatch) {
  return async function ({ note, account }) {
    try {
      const { data } = await nnapi.post('/api/vigenesia/notes', { 'note':note, 'iduser':account.id});
      if (data.success) {
        navigate('LocalLogin');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

function deleteNote(dispatch) {
  return async function ({ ids }) {
    
    try {
      const { data } = await nnapi.delete('/api/vigenesia/notes/'+ids);
      if (data.success) {
        navigate('LocalLogin');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

const getNotes = (dispatch) => async () => {
  try {
    const { data } = await nnapi.get('/api/vigenesia/notes');
    if (data.success) {
      dispatch({ type: GET_NOTES, payload: data.notes});
    }
  } catch (error) {}
};

export const { Context, Provider } = createDataContext(
  accountReducer,
  { getAccount, settings, clearAccount, createNote, getNotes, deleteNote },
  initialState
);
