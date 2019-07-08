import pubsub from 'pubsub-js';
import React from "react";
class PubSub extends React.Component{
    render(){
        return (
            <div>
                <input type="button" value={"你点我呀"} onClick={()=>{
                    pubsub.publish("ok",1);
                }}/>
                <input type="button" value={"你点我呀2"} onClick={()=>{
                    pubsub.publish("okok",2);
                }}/>
            </div>
        )
    }
}
export  default PubSub;