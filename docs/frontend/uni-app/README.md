HBuilderX 可视化界面创建项目参考[官方文档](https://uniapp.dcloud.net.cn/quickstart?id=%e5%88%9b%e5%bb%bauni-app)

## 在 vscode 中创建 uni-app 项目

1. **全局安装 vue-cli 3.x**

```sh
npm install -g @vue/cli
```

2. **通过 cli 创建 uni-app 项目**

```sh
vue create -p dcloudio/uni-preset-vue my-project
```

此时，会提示选择项目模板，初次体验建议选择 hello uni-app 项目模板，如下所示

<img :src="$withBase('/uni-app/select-template.png')">

一般情况下选择**默认模板**就是一个新的干净的工程了

- 当选择**自定义模板**时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为`userName/repositoryName`，如`dcloudio/uni-template-picture`就是下载图片模板

3. **导入 HBuilderX 自带的代码块**

从 github 下载[uni-app 代码块](https://github.com/zhetengbiji/uniapp-snippets-vscode)，放到项目根目录下的`.vscode`目录即可拥有和 HBuilderX 一样的代码块

4. **运行项目**

```sh
npm run dev:%PLATFORM%
```

5. **发布项目**

```sh
npm run build:%PLATFORM%
```

`%PLATFORM%`可取值如下

| 值                      | 平台                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| app-plus                | app 平台生成打包资源（支持 npm run build:app-plus，可用于持续集成。不支持 run，运行调试仍需在 HBuilderX 中操作） |
| h5                      | H5                                                                                                               |
| mp-alipay               | 支付宝小程序                                                                                                     |
| mp-baidu                | 百度小程序                                                                                                       |
| mp-weixin               | 微信小程序                                                                                                       |
| mp-toutiao              | 字节跳动小程序                                                                                                   |
| mp-qq                   | qq 小程序                                                                                                        |
| mp-360                  | 360 小程序                                                                                                       |
| quickapp-webview        | 快应用通用                                                                                                       |
| quickapp-webview-union  | 快应用联盟                                                                                                       |
| quickapp-webview-huawei | 快应用华为                                                                                                       |

## 使用 cli 创建项目和使用 HBuilderX 可视化界面创建项目有什么区别

- **编译器的区别**
  - `cli`创建的项目，编译器安装在项目下。并且不会跟随 HBuilderX 升级。如需升级编译器，执行 npm update，或者手动修改 package.json 中的 uni 相关依赖版本后执行`npm install`。更新后可能会有新增的依赖并不会自动安装，手动安装缺少的依赖即可
  - HBuilderX 可视化界面创建的项目，编译器在 HBuilderX 的安装目录下的 plugin 目录，随着 HBuilderX 的升级会自动升级编译器
  - 已经使用`cli`创建的项目，如果想继续在 HBuilderX 里使用，可以把工程拖到 HBuilderX 中。注意如果是把整个项目拖入 HBuilderX，则编译时走的是项目下的编译器。如果是把 src 目录拖入到 HBuilderX 中，则走的是 HBuilderX 安装目录下 plugin 目录下的编译器
  - `cli`版如果想安装 less、scss、ts 等编译器，需自己手动 npm 安装。在 HBuilderX 的插件管理界面安装无效，那个只作用于 HBuilderX 创建的项目
- **开发工具的区别**
  - `cli`创建的项目，内置了 d.ts，同其他常规 npm 库一样，可在 vscode、webstorm 等支持 d.ts 的开发工具里正常开发并有语法提示
  - 使用 HBuilderX 创建的项目不带 d.ts，HBuilderX 内置了 uni-app 语法提示库。如需把 HBuilderX 创建的项目在其他编辑器打开并且补充 d.ts，可以在项目下先执行`npm init`，然后`npm i @types/uni-app -D`，来补充 d.ts
  - 但 vscode 等其他开发工具，在 vue 或 uni-app 领域，开发效率比不过 HBuilderX
  - 发布 App 时，仍然需要使用 HBuilderX。其他开发工具无法发布 App，但可以发布 H5、各种小程序。如需开发 App，可以先在 HBuilderX 里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座
  - 发布 App 时，仍然需要使用 HBuilderX。其他开发工具无法发布 App，但可以发布 H5、各种小程序。如需开发 App，可以先在 HBuilderX 里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座
  - 如果使用`cli`创建项目，那下载 HBuilderX 时只需下载 10M 的标准版即可。因为编译器已经安装到项目下了

## css 样式配置

### 引入 uni-app 官方样式库

把 Hello uni-app 模板项目中的`uni.css`文件复制到你项目中的`common`文件夹

<img :src="$withBase('/uni-app/uni.css-set.png')">

**注意**：因为`uni.css`样式文件中有依赖的字体文件`uni.ttf`，所以还需要把字体文件复制到你项目中的`static`文件夹

<img :src="$withBase('/uni-app/uni.ttf-set.png')">

### 引入 Animate 动画样式库

从 [Animate.css](https://animate.style/) 官方网站或其他 [CDN](https://www.bootcdn.cn/animate.css/) 站点下载样式文件存放到你项目中的`common`文件夹

<img :src="$withBase('/uni-app/animate.css-set.png')">

**注意**：Animate.css 新的 4.x 版本中因为使用了`css变量`，导致在编译到小程序和 app 端时会导致动画失效，所以建议下载旧的 3.7.x 版本

### 引入第三方图标库，比如[阿里图标](https://www.iconfont.cn/)

把从阿里图标下载的图标项目文件解压后，复制其中的`iconfont.css`到你项目中的`common`文件夹

<img :src="$withBase('/uni-app/iconfont.css-set.png')">

同时复制`iconfont.ttf`到你项目中的`static`文件夹

<img :src="$withBase('/uni-app/iconfont.ttf-set.png')">

接着修改`iconfont.css`文件中的部分内容

<img :src="$withBase('/uni-app/edit-iconfont.css-before.png')">

修改后的内容如下：

<img :src="$withBase('/uni-app/edit-iconfont.css-after.png')">
