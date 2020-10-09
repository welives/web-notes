## overflow:hidden 的作用

### 溢出隐藏

当元素中内容的宽度或高度超过了元素本身设置的宽度或高度时，那么内容会溢出元素

<div style="height: 80px">
  <div class="box1-1">
    今天天气很好！<br />今天天气很好！<br />
    我是溢出的内容
  </div>
  <style>
    .box1-1 {
      width: 120px;
      height: 40px;
      background: skyblue;
    }
  </style>
</div>

```html
<div style="height: 80px">
  <div class="box1-1">
    今天天气很好！<br />今天天气很好！<br />
    我是溢出的内容
  </div>
  <style>
    .box1-1 {
      width: 120px;
      height: 40px;
      background: skyblue;
    }
  </style>
</div>
```

**这时给父级元素添加`overflow:hidden`，就可以解决这个问题了**

<div style="height: 80px">
  <div class="box1-2">
    今天天气很好！<br />今天天气很好！<br />
    我是溢出的内容
  </div>
  <style>
    .box1-2 {
      width: 120px;
      height: 40px;
      background: skyblue;
      overflow: hidden;
    }
  </style>
</div>

```css
.box1-2 {
  width: 120px;
  height: 40px;
  background: skyblue;
  overflow: hidden;
}
```

一般情况下，内容溢出后会显示省略号。比如，当一行文本超出固定宽度就隐藏超出的内容显示省略号

<div class="box1-3">
  今天天气很好！今天天气很好！
</div>
<style>
  .box1-3 {
    width: 150px;
    background: skyblue;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

```html
<div class="box1-3">
  今天天气很好！今天天气很好！
</div>
<style>
  .box1-3 {
    width: 150px;
    border: 1px solid red;
    background: skyblue;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
```

### 清除浮动

一般而言，父级元素不设置高度时，高度由随内容增加自适应高度。当父级元素内部的子元素全部都设置浮动 float 之后，子元素会脱离标准流，不占位，父级元素检测不到子元素的高度，父级元素高度为 0。那么就会出现下面的情况

<div class="box2-1">
  <div class="kid kid1">子元素1</div>
  <div class="kid kid2">子元素2</div>
</div>
<div class="wrap">其他部分</div>
<style>
  .box2-1 {
    background: skyblue;
  }
  .box2-1 .kid {
    width: 100px;
    height: 100px;
    float: left;
  }
  .kid1 {
    background: yellow;
  }
  .kid2 {
    background: orange;
  }
  .wrap {
    width: 300px;
    height: 150px;
    background: blue;
    color: white;
  }
</style>

::: details 查看代码

```html
<div class="box2-1">
  <div class="kid kid1">子元素1</div>
  <div class="kid kid2">子元素2</div>
</div>
<div class="wrap">其他部分</div>
<style>
  .box2-1 {
    background: skyblue;
  }
  .box2-1 .kid {
    width: 100px;
    height: 100px;
    float: left;
  }
  .kid1 {
    background: yellow;
  }
  .kid2 {
    background: orange;
  }
  .wrap {
    width: 300px;
    height: 150px;
    background: blue;
    color: white;
  }
</style>
```

:::

如上，由于父级元素没有高度，下面的元素会顶上去，造成页面的塌陷。因此，需要给父级加个`overflow:hidden`属性，这样父级的高度就随子级容器及子级内容的高度而自适应。为了让兼容性更好，如果需要使用`overflow:hidden`来清除浮动，那么最好加上 `zoom:1`

<div class="box2-2">
  <div class="kid kid1">子元素1</div>
  <div class="kid kid2">子元素2</div>
</div>
<div class="wrap">其他部分</div>
<style>
  .box2-2 {
    background: skyblue;
    overflow: hidden;
    zoom: 1;
  }
  .box2-2 .kid {
    width: 100px;
    height: 100px;
    float: left;
  }
  .kid1 {
    background: yellow;
  }
  .kid2 {
    background: orange;
  }
  .wrap {
    width: 300px;
    height: 150px;
    background: blue;
    color: white;
  }
</style>

```css
.box2-2 {
  background: skyblue;
  overflow: hidden;
  zoom: 1;
}
```

### 解决外边距塌陷

**父级元素内部有子元素，如果给子元素添加`margin-top`样式，那么父级元素也会跟着下来，造成外边距塌陷，如下**

<div class="box3-1">
  <div class="kid">子元素1</div>
</div>
<style>
  .box3-1 {
    background: skyblue;
  }
  .box3-1 .kid {
    width: 100px;
    height: 100px;
    background: yellow;
    margin-top: 20px;
  }
</style>

```html
<div class="box3-1">
  <div class="kid">子元素1</div>
</div>
<style>
  .box3-1 {
    background: skyblue;
  }
  .box3-1 .kid {
    width: 100px;
    height: 100px;
    background: yellow;
    margin-top: 20px;
  }
</style>
```

**这时需要给父级元素加个`overflow:hidden`属性，就可以解决这个问题了**

<div class="box3-2">
  <div class="kid">子元素1</div>
</div>
<style>
  .box3-2 {
    background: skyblue;
    overflow: hidden;
  }
  .box3-2 .kid {
    width: 100px;
    height: 100px;
    background: yellow;
    margin-top: 20px;
  }
</style>

```css
.box3-2 {
  background: skyblue;
  overflow: hidden;
}
```
