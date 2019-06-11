

const initState = { 
    isFetching: false
    ,mylist: []
    ,recommendations: []
    ,deleted:[]
    ,err: null 
  };

const Lists = (state = initState, action) => {
  switch (action.type) {
    
    case 'LIST_FETCH_START':
      return {
        ...state,
        isFetching: true
      };
    case 'LIST_FETCH_FAIL':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };

    case 'LIST_FETCH_SUCCESS':
      return {
        ...state
        ,isFetching: false
        ,err: null
        ,mylist: action.data.mylist
        ,recommendations: action.data.recommendations
        ,
      };
    case 'DELETE_LIST' :
      return {
        ...state,
        mylist: [
          ...state.mylist.slice(0, action.id),
          ...state.mylist.slice(action.id+1),
        ],
        recommendations: [
          ...state.recommendations,
        ],
        deleted: [
          ...state.deleted,
          state.mylist[action.id],
        ] 

      };
    case 'ADD_LIST':
        return {
            ...state,
            mylist: [
                ...state.mylist,
                state.recommendations[action.index],
            ],
            recommendations: [
                ...state.recommendations.slice(0, action.index),
                ...state.recommendations.slice(action.index+1),
            ],
        };
      
        case 'ADD_LIST_FROM_DELETED':
            return {
                ...state,
                mylist: [
                    ...state.mylist,
                    state.deleted[action.index],
                ],
                deleted: [
                    ...state.deleted.slice(0, action.index),
                    ...state.deleted.slice(action.index+1),
                ],
            };
        
    
    default:
      return state;
  }
};

export default Lists;
