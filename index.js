const Koa = require('koa');// 引入koa,现在是一个类
const app = new Koa();// new一个实例

const config = require('./config');

app.use(ctx => {
    // 页面响应
    ctx.body = 'hello oooo'
});

// 监听一个端口
app.listen(config.server.PORT, () => {
    // 成功的回调
    console.log(`Server run at http://localhost:${config.server.PORT}`)
});
