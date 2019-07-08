const express = require("express");
const app = express();
app.get("/listmore.json",function (req,res) {
    const pageNo = req.query.pageNo/1;
    const result = [];

    for(let i=(pageNo-1)*10;i<(pageNo-1)*10+10;i++){
        result.push({
            positionId:Date.now()+i+Math.random(),
            companyName:i,
            companyLogo:"image2/M00/0D/9E/CgqLKVYgVXyAT08zAAHFYA7NT1U309.JPG?cc=0.11807257845066488",
        })
    }



    const obj = {
        content:{
            data:{
                page:{
                    pageNo,
                    result
                }
            }
        }
    }
    res.json(obj)

})
app.listen(80,function () {
    console.log("success")
})