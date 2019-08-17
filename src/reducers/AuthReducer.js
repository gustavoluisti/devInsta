const initialState = {
    name: '',
    email: '',
    password: '',
    status:0
}

const AuthReducer = (state = initialState, action) => {

    //Alteração dos states
    if(action.type === 'changeName') {
        return { ...state, name:action.payload.name}
    }

    if(action.type === 'changeEmail') {
        return { ...state, email:action.payload.email};
    }

    if(action.type === 'changePassword') {
        return { ...state, password:action.payload.password};
    }

    if(action.type === 'changeStatus') {
        return { ...state, status:action.payload.status}
    }

    return state;
}

export default AuthReducer;