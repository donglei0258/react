const proxy = require("http-proxy-middleware");
module.exports = function(app){
    // app.get("/lagou/listmore.json",function (req,res) {
    //     res.json({
    //         ok:1,
    //         msg:"xixi"
    //     })
    // })
    // app.use("/lagou",proxy({
    //     target:"https://m.lagou.com",
    //     changeOrigin:true,
    //     pathRewrite:{
    //         "^/lagou":""
    //     }
    // }))
    // app.get("/xixi",function (req,res) {
    //     res.json({
    //         ok:1
    //     })
    // })
    app.use(proxy("/lagou",{
        // target:"https://m.lagou.com",
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/lagou":""
        }
    }))
}