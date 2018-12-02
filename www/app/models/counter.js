export default {

    "namespace" :"counter",
    "state":{
        "v":100
    },
    "reducers":{
        add(state,action){
            return {
                "v":state.v + action.num
            }
        },
        addServersync(state,action){
            return {
                "v":state.v + action.result
            }
        }
    },
    "effects":{
        // 这里是写副作用的 --- 大多数是写异步的
        *addServer(action,{put}){
            const {result} = yield fetch("/api/api").then(data=>data.json());
           yield put({"type":"addServersync",result})

        }
    }
}

