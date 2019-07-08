import  axios from "axios"
import common from "./common"
export default {
    upCompany(payload){
        return {
            type:"UP_COMPANY",
            payload
        }
    },
    getCompanyList(pageNo=1){
        return (dispatch)=>{
            dispatch((dispatch)=>{
                // 将你的isloading改为true
                dispatch(common.changeIsLoading(true))
                axios.get("/lagou/listmore.json?pageNo="+pageNo+"&pageSize=15")
                    .then(({data})=>{
                        const company = data.content.data.page.result;
                        dispatch(this.upCompany({
                            company,
                            pageNo:data.content.data.page.pageNo
                        }))
                        // 将isLoading false
                        dispatch(common.changeIsLoading(false))
                    })
            })
        }
    }









    // getCompanyList(pageNo=1){
    //     return (dispatch)=>{
    //         dispatch((dispatch)=>{
    //             // 将你的isloading改为true
    //             dispatch({
    //                 type:"CHANGE_IS_LOADING",
    //                 payload:{
    //                     isLoading:true
    //                 }
    //             })
    //             axios.get("/lagou/listmore.json?pageNo="+pageNo+"&pageSize=15")
    //                 .then(({data})=>{
    //                     const company = data.content.data.page.result;
    //                     dispatch({
    //                         type:"UP_COMPANY",
    //                         payload:{
    //                             company,
    //                             pageNo:data.content.data.page.pageNo
    //                         }
    //                     })
    //                     // 将isLoading false
    //                     dispatch({
    //                         type:"CHANGE_IS_LOADING",
    //                         payload:{
    //                             isLoading:false
    //                         }
    //                     })
    //
    //                     // console.log(data.content.data.page.result);
    //                 })
    //         })
    //     }
    // }
}