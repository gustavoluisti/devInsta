export const checkLogin = () => {
    //Temporariamente
    return {
        type:'changeStatus',
        payload: {
            status:2
        }
    }
};

export const changeName = (name)=> {
    return {
        type: 'changeName',
        payload:{
            name:name
        }
    }
}

export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: {
            email:email
        }
    }
}

export const changePassword = (pass) => {
    return {
        type: 'changePassword',
        payload: {
            password:pass
        }
    }
}