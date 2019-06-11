
import axios from 'axios';
// import addList from '../reducers/List';

const URL = 'http://localhost:8080/api/getlist';

const addFromD = (index) => {
    return {
        type: 'ADD_LIST_FROM_DELETED'
        ,index
        ,
    }
}

export const addFromDelete = (index) => {
    return (dispatch => {
        dispatch(addFromD(index));
    });
}

const addData = (index) => {
    return {
        type: 'ADD_LIST'
        ,index
        ,
    }
}

export const addToList = (index) => {
    return (dispatch => {
        dispatch(addData(index));
    });
}
const deleteData = (id) => {
    return {
        type: 'DELETE_LIST',
        id,
    };
}
export const deleteList = (id) => {
    

    return (dispatch) => {
        dispatch(deleteData(id));
    }
}

const requestStart = () => {
    return {
        type: 'LIST_FETCH_START'
    };
} 

export const getList = () => {
    // console.log('aaaaa');
    return (dispatch => {
        axios
            .get(URL)
            .then(response => {
                // console.log(response.data);
                dispatch(requestSuccess(response));
            })
            .catch(err => {
                dispatch(requestFail(err));
            });
    })
}

const requestSuccess = (response) => {
    // console.log(response.data);
    return { 
        type: 'LIST_FETCH_SUCCESS'
        ,data: response.data
    };
}

const requestFail = error => {
    return {
        type: 'LIST_FETCH_FAIL'
        ,error
    };
}


export const gataList = () => {
    return (dispatch) => {
        dispatch(requestStart());
        axios
            .get(URL)
            .then(response => {
                requestSuccess(response);
            })
            .catch(err => {
                dispatch(requestFail(err));
            })
    }
}




