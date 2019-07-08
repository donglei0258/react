import stateInit from "../state/common"
export default  function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "CHANGE_IS_LOADING"){
        state.isLoading = payload.isLoading
    }
    return state;
}