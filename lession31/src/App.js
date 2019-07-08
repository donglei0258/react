import React from 'react';
import logo from './logo.svg';
import axios from "axios";
import PubSub from "./components/PubSub"
import pubsub from "pubsub-js"
import './App.css';
import {
    bindActionCreators
} from "redux"
import {
    connect// 高阶组件
} from "react-redux"
import companyCreator from "./store/actionCreator/company"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            num:1
        }
    }
    render(){
        return (
            <div className="App">
                <PubSub></PubSub>


                {
                    this.props.companyList.map(v=>{
                        return (
                            <div key={v.positionId}>
                                <h3>{v.companyName}</h3>
                                <img width={"50px"} src={'https://www.lgstatic.com/'+v.companyLogo} alt=""/>
                            </div>
                        )
                    })
                }
                <div style={{display:this.props.isLoading?"block":"none"}}>
                    加载中……
                </div>
                {/*<input style={{display:this.props.isLoading?"none":"block"}} type="button" onClick={this.props.getCompanyList.bind(this,this.props.pageNo+1)} value={"加载更多"}/>*/}
                <input style={{display:this.props.isLoading?"none":"block"}} type="button" onClick={()=>{
                    this.props.getCompanyList(this.props.pageNo+1)
                }} value={"加载更多"}/>
            </div>
        )
    }
    componentWillMount(){
        pubsub.subscribe("ok",(name,b)=>{
            console.log("接收到消息啦",name,b);
            console.log(pubsub)
            pubsub.unsubscribe("ok");
            // pubsub.clearAllSubscriptions();
        })
        pubsub.subscribe("okok",(name,b)=>{
            console.log("接收到消息啦",name,b)
        })
    }
    componentDidMount(){
        console.log(this.props.company);
        // this.props.getCompanyList.bind(this)();
        this.props.getCompanyList();

    }
}

function mapStateToProps(state) {
    return {
        companyList: state.company.companyList,
        pageNo:state.company.pageNo,
        isLoading:state.common.isLoading

    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(companyCreator,dispatch);
//     // return {
//         // getCompanyList(pageNo =1){
//         //     dispatch(companyCreator.getCompanyList(pageNo))
//         // }
//
//         // getCompanyList(pageNo=1){
//         //     dispatch((dispatch)=>{
//         //         // 将你的isloading改为true
//         //         dispatch({
//         //             type:"CHANGE_IS_LOADING",
//         //             payload:{
//         //                 isLoading:true
//         //             }
//         //         })
//         //         axios.get("/lagou/listmore.json?pageNo="+pageNo+"&pageSize=15")
//         //             .then(({data})=>{
//         //                 const company = data.content.data.page.result;
//         //                 dispatch({
//         //                     type:"UP_COMPANY",
//         //                     payload:{
//         //                         company,
//         //                         pageNo:data.content.data.page.pageNo
//         //                     }
//         //                 })
//         //                 // 将isLoading false
//         //                 dispatch({
//         //                     type:"CHANGE_IS_LOADING",
//         //                     payload:{
//         //                         isLoading:false
//         //                     }
//         //                 })
//         //
//         //                 // console.log(data.content.data.page.result);
//         //             })
//         //     })
//         // }
//
//
//
//
//
//         // getCompanyList(pageNo=1){
//         //
//         //     // 将你的isloading改为true
//         //     dispatch({
//         //         type:"CHANGE_IS_LOADING",
//         //         payload:{
//         //             isLoading:true
//         //         }
//         //     })
//         //     setTimeout(()=>{
//         //         axios.get("/lagou/listmore.json?pageNo="+pageNo+"&pageSize=15")
//         //             .then(({data})=>{
//         //                 const company = data.content.data.page.result;
//         //                 dispatch({
//         //                     type:"UP_COMPANY",
//         //                     payload:{
//         //                         company,
//         //                         pageNo:data.content.data.page.pageNo
//         //                     }
//         //                 })
//         //
//         //
//         //                 // 将isLoading false
//         //                 dispatch({
//         //                     type:"CHANGE_IS_LOADING",
//         //                     payload:{
//         //                         isLoading:false
//         //                     }
//         //                 })
//         //
//         //                 // console.log(data.content.data.page.result);
//         //             })
//         //     },2000)
//         //
//         // }
//     // }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, dispatch=>bindActionCreators(companyCreator,dispatch))(App);
