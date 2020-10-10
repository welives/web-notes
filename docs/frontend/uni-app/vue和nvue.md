## vue 和 nvue 的区别

#### nvue 其实就是 weex 在 uni-app 中的实现

uni-app 是逻辑和渲染分离的，渲染层在 app 端提供了两套排版引擎。

小程序方式的 webview 渲染，和 weex 方式的原生渲染，两种渲染引擎可以自己根据需要选。

**vue 文件走的 webview 渲染**  
**nvue 走 weex 方式的原生渲染**

组件和 js 写法是一样的，css 不一样，原生排版的能用的 css 必须是 flex 布局

`uni-app`的 App 端内置了一个基于 weex 改进的原生渲染引擎，提供了原生渲染能力。

在 App 端，如果使用 vue 页面，则是 webview 渲染；如果使用 nvue 页面(native vue 的缩写)，则是原生渲染。一个 App 中可以同时使用两种页面，比如首页使用 nvue，二级页使用 vue 页面，hello uni-app 示例就是如此。

虽然 nvue 也可以多端编译，输出 H5 和小程序，但 nvue 的 css 写法受限，所以如果你不开发 App，那么不需要使用 nvue。

#### nvue 和 vue 相互通讯

在 uni-app 中，nvue 和 vue 页面可以混搭使用。

**推荐使用`uni.$on`和`uni.$emit`的方式进行页面通讯**

## nvue 和 weex 开发注意事项

### 组件使用注意事项

1. 文字只能写在`<text>`中，只有 text 标签可以设置字体大小，字体颜色，并且不支持 text 标签嵌套
2. `<list>`的子组件只能包括以下四种组件或是`fix`定位的组件，其他形式的组件将不能被正确渲染
   - `<cell>` 用于定义列表中的子列表项，类似于 HTML 中的 ul 之于 li。Weex 会对`<cell>`进行高效的内存回收以达到更好的性能。
   - `<header>` 当`<header>`到达屏幕顶部时，吸附在屏幕顶部。
   - `<refresh>` 用于给列表添加下拉刷新的功能。
   - `<loading>` 用法与特性和`<refresh>`类似，用于给列表添加上拉加载更多的功能
3. `<list>`组件在执行`loadmore事件`的同时去触发`refresh事件`会导致之后无法再次触发`loadmore事件`，原因未知，等待官方解决。这个 bug 未修复之前建议使用`<loading>`组件来实现上拉加载
4. 在使用`uni-app编译模式`时，框架会给页面外层自动套了一个 scroller，这时会导致`refresh`组件和`loading`组件失效。解决办法是在 pages.json 中设置当前页面`disableScroll: true`

### CSS 样式使用注意事项

1. 对盒模型设置**宽、高、边框、内外边距**时建议使用`px`(屏幕宽度)和`wx`（固定像素单位）两种单位，确定不支持的相对单位有`em`、`rem`、`%`、`pt`、在 uni-app 中虽然可以使用`rpx`和`upx`这两种相对单位，但是不知道换算公式，**不建议使用**
2. 对文字尺寸进行设置时，上述的所有相对单位和 weex 的官方单位都有效，**但还是建议使用官方推荐的单位**
3. 宽高问题，宽度 750px 等于 100%，高度 1250px 等于 100%
4. 页面布局时不能使用相对单位，没有媒体查询。weex 中的所有元素默认为 flex 布局，其中包含的默认属性如下

```css
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: stretch;
justify-content: flex-start;
```

5. 多个 css 属性不能合并成传统的简写模式，比如`border:1px solid #000;`。虽然`margin`和`padding`是例外，但也有限制，只能写成`margin:10px;`或`padding:10px;`这样子，如果写成`margin: 10px 20px;`或`padding: 10px 20px;`这样就不会生效了
6. nvue 页面不能使用背景图片，背景颜色只能使用`background-color`，如果写成`background: #ffffff`会不能生效
7. 选择器只支持单类，比如 `.test`
8. 引入外部样式时要用`<style src="xxx.css"></style>`这样的形式
9. nvue 中不支持`z-index`控制层级，越靠后的代码层级越高
10. 不能使用阴影，可以使用模拟阴影
11. 子元素超出父元素大小是不会显示的，可以加大父元素的大小来让子元素显示
12. 在 nvue 里面不能给 image 设置`border-radius`，想要将矩形图案变为圆形需要在 image 外面包一层 div
13. 在 nvue 里面不能直接在 css 中 通过`@font-face`这样的方式引入字体文件的，需要在 js 中使用 dom 模块引入字体文件，src 字段的 url 的括号内一定要使用单引号

```js
const domModule = weex.requireModule('dom')
domModule.addRule('fontFace', {
  fontFamily: 'iconfont',
  src: "url('../../static/iconfont.ttf')",
})
```
