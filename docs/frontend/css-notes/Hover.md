<style>
  .code-wrap {
    width: 100%;
    margin: 20px 0;
    position: relative;
  }
  .css-live-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    padding: 20px 0;
  }
</style>

## Hover 标签效果

<section class="code-wrap" style="height: 100px;">
  <div class="css-live-wrap">
    <summary class="hover-line">
      <strong>Hover标签效果</strong>
      <span>鼠标移入后有标签显示的效果</span>
    </summary>
  </div>
  <style>
  .hover-line {
    position: absolute;
    left: 0;
    cursor: pointer;
    color: #999999;
    font-size: 14px;
    line-height: 18px;
    margin: 20px 0 0 20px;
    padding: 0 10px;
    background: linear-gradient(#ff9800, #ff9800) no-repeat;
    background-size: 100% 1px;
    background-position: -999px bottom;
    transition: 0.5s;
  }
  .hover-line:nth-child(2) {
    margin-top: 60px;
  }
  .hover-line:nth-child(3) {
    margin-top: 100px;
  }
  .hover-line:hover {
    background-position: 0 bottom;
  }
  .hover-line strong {
    color: #000;
    font-size: 16px;
  }
</style>
</section>

::: details 查看代码

```html
<summary class="hover-line">
  <strong>Hover标签效果</strong>
  <span>鼠标移入后有标签显示的效果</span>
</summary>
<style>
  .hover-line {
    position: absolute;
    left: 0;
    cursor: pointer;
    color: #999999;
    font-size: 14px;
    line-height: 18px;
    margin: 20px 0 0 20px;
    padding: 0 10px;
    background: linear-gradient(#ff9800, #ff9800) no-repeat;
    background-size: 100% 1px;
    background-position: -999px bottom;
    transition: 0.5s;
  }
  .hover-line:nth-child(2) {
    margin-top: 60px;
  }
  .hover-line:nth-child(3) {
    margin-top: 100px;
  }
  .hover-line:hover {
    background-position: 0 bottom;
  }
  .hover-line strong {
    color: #000;
    font-size: 16px;
  }
</style>
```

:::

## Hover 凸显效果

<section class="code-wrap" style="height: 300px;">
  <div class="css-live-wrap">
    <div class="customer-case">
      <div class="hover-wrap">
        <div class="hover-item">
          <div><h3>Hover效果</h3></div>
        </div>
      </div>
    </div>
  </div>
  <style>
    .customer-case {
      background-color: #fff;
      overflow: hidden;
    }
    .customer-case .hover-wrap {
      width: 100%;
      margin-left: 50px;
    }
    .customer-case .hover-wrap .hover-item {
      float: left;
      display: inline-block;
      margin-bottom: 45px;
      width: 330px;
      height: 250px;
      text-align: center;
      vertical-align: top;
      background-color: #fff;
      border: 1px solid #eaeaea;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
    .customer-case .hover-wrap .hover-item:hover {
      cursor: pointer;
      border-bottom: 3px solid #44b549;
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    }
  </style>
</section>

::: details 查看代码

```html
<div class="customer-case">
  <div class="hover-wrap">
    <div class="hover-item">
      <div><h3>Hover效果</h3></div>
    </div>
  </div>
</div>
<style>
  .customer-case {
    background-color: #fff;
    overflow: hidden;
  }
  .customer-case .hover-wrap {
    width: 100%;
    margin-left: 50px;
  }
  .customer-case .hover-wrap .hover-item {
    float: left; /*防止父元素被撑出高度*/
    display: inline-block;
    margin-bottom: 45px;
    width: 330px;
    height: 250px;
    text-align: center;
    vertical-align: top;
    background-color: #fff;
    border: 1px solid #eaeaea;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
  .customer-case .hover-wrap .hover-item:hover {
    cursor: pointer;
    border-bottom: 3px solid #44b549;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
</style>
```

:::
