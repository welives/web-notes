<style>
  .coupon-item {
    position: relative;
    width: 410px;
    height: 125px;
    background: radial-gradient(transparent 0, transparent 5px, #f39b00 5px);
    background-size: 15px 15px;
    background-position: 10px 2px;
    color: #fff;
    z-index: 10;
  }
  .coupon-item::before {
    position: absolute;
    left: 10px;
    top: 0;
    content: '';
    width: 390px;
    height: 125px;
    z-index: -1;
    background-color: #f39b00;
  }
  .coupon-item .coupon-layout {
    display: inline-flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
  .coupon-item .coupon-layout .coupon-left {
    flex: 70%;
    height: 100%;
    border-right: 2px dashed #f3c92b;
  }
  .coupon-item .coupon-layout .coupon-right {
    flex: 30%;
  }
  .coupon-item i {
    /* 一个脱离文档流的半透明蒙板 */
    position: absolute;
    left: 20%;
    top: 45px;
    width: 390px;
    height: 190px;
    background-color: rgba(255, 255, 255, 0.15);
    transform: rotate(-30deg);
  }
</style>
<div class="coupon-wrap">
  <div class="coupon-item">
    <div class="coupon-layout">
      <div class="coupon-left"></div>
      <div class="coupon-right"></div>
      <i></i>
    </div>
  </div>
</div>

```html
<style>
  .coupon-item {
    position: relative;
    width: 410px;
    height: 125px;
    background: radial-gradient(transparent 0, transparent 5px, #f39b00 5px);
    background-size: 15px 15px;
    background-position: 10px 2px;
    color: #fff;
    z-index: 10;
  }
  .coupon-item::before {
    position: absolute;
    left: 10px;
    top: 0;
    content: '';
    width: 390px;
    height: 125px;
    z-index: -1;
    background-color: #f39b00;
  }
  .coupon-item .coupon-layout {
    display: inline-flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
  .coupon-item .coupon-layout .coupon-left {
    flex: 70%;
    height: 100%;
    border-right: 2px dashed #f3c92b;
  }
  .coupon-item .coupon-layout .coupon-right {
    flex: 30%;
  }
  .coupon-item i {
    /* 一个脱离文档流的半透明蒙板 */
    position: absolute;
    left: 20%;
    top: 45px;
    width: 390px;
    height: 190px;
    background-color: rgba(255, 255, 255, 0.15);
    transform: rotate(-30deg);
  }
</style>
<div class="coupon-wrap">
  <div class="coupon-item">
    <div class="coupon-layout">
      <div class="coupon-left"></div>
      <div class="coupon-right"></div>
      <i></i>
    </div>
  </div>
</div>
```
