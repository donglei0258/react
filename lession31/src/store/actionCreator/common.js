export default {
    changeIsLoading(isLoading){
        return {
            type:"CHANGE_IS_LOADING",
            payload:{
                isLoading
            }
        }
    }
}