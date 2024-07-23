let initialState = {
    result: 0,
    id:"",
    password:""
}


function reducer(state=initialState, action){
    console.log('action', action);
    switch(action.type){
    case "INCREMENT":
        return {
            ...state, 
            result: state.result + action.payload.num}; 
    case "LOGIN":
        return {
            ...state, 
            id:action.payload.id, 
            password:action.payload.password}
    case "subtraction":
        return {
            ...state, result: state.result -1
        }
        
    default:
        return {...state};
    }

}

//state는 여러개일 수도 있기 때문에 ...state로 표현
// {...state, a: b} b의 값을 a에 넣고 return

export default reducer;