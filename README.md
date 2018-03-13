## VUE Web App UI components

> 1. javascript framework vuejs
> 2. base ui element-ui
> 3. less

## 目录结构

```
+ -- dist           前端文件输出文件夹
+ -- config         webpack 及环境相关配置
+ -- mock           系统mock数据
+ -- example        引用UI的例子         
+ -- test           单元测试
+ -- lib            输出合并后的结果
+ -- scripts        npm 对应的相关命令
+ -- src            源代码
  + -- assets       资源库
  + -- css          样式文件（scss）
  + -- js           业务逻辑
  + -- index.js     入口文件

```

## 工程配置

#### 安装淘宝镜像
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 工程依赖

``` bash
# install dependencies
cnpm install

# serve with hot reload at http://localhost:9000
npm run dev 或者 npm start

# serve with hot reload use mock data at http://localhost:9000
npm run mock

# check the javascript coding unify and illegal
npm run eslint

# create a package for production
npm run build

# create a package and tag for production
npm run release

```

## 本地调试

### 配置host
``` bash
127.0.0.1           rf.smart-sampling-designer-pc.local.com
```

### 配置ngniux
``` code
server {
        listen       80;
        server_name  rf.smart-sampling-designer-pc.local.com;
        access_log  logs/rf.smart-sampling-designer-pc.access.log  main;

		location / {
      proxy_pass   http://127.0.0.1:9000;
        index  index.html index.htm;
      }
      
      location /rfucenter {
        proxy_pass http://10.60.65.181:6080/rfucenter;
      }

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }
    }
```

