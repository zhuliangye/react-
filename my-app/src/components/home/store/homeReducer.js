const defaultState = {
    list: [],
    piclist: [],
    msg:[],
    data:[],
}
export default (state = defaultState,action)=>{
    if(action.type === 'init_home_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.list;

        newState.piclist = action.data.piclist;
        newState.msg = action.data.msg;
        newState.data = action.data.data;
        return newState;
    }
    return state;
}