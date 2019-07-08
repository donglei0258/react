import stateInit  from "../state/company"
export default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_COMPANY"){
        console.log(11111,state.companyList)
        console.log(22222,payload.company)
        state.companyList = state.companyList.concat(payload.company);// = ;
        console.log(state);

        state.pageNo = payload.pageNo;
    }
    return state;
}