import React from "react";
import dva from "dva";
import router from "./router.js";
import counter from "./models/counter.js";
import logger from "redux-logger";
// 创建一个app
const app = dva({
    onAction:logger
});
// 创建路由
app.router(router);
// 使用model
app.model(counter);
// 上树运行
app.start("#app");