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

## 优惠卷

<section class="code-wrap" style="height: 150px">
  <div class="css-live-wrap">
    <div class="coupon-wrap">
      <div class="coupon-item">
        <div class="coupon-layout">
          <div class="coupon-left"></div>
          <div class="coupon-right"></div>
          <i></i>
        </div>
      </div>
    </div>
    <style>
      .coupon-item {
        position: relative;
        width: 410px;
        height: 125px;
        background: radial-gradient(transparent 0, transparent 5px, #f39b00 5px);
        background-size: 15px 15px;
        background-position: 10px 2px;
        color: #fff;
        z-index: 0;
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
        position: absolute;
        left: 20%;
        top: 45px;
        width: 390px;
        height: 190px;
        background-color: rgba(255, 255, 255, 0.15);
        transform: rotate(-30deg);
      }
    </style>
  </div>
</section>

::: details 查看代码

```html
<div class="coupon-wrap">
  <div class="coupon-item">
    <div class="coupon-layout">
      <div class="coupon-left"></div>
      <div class="coupon-right"></div>
      <i></i>
    </div>
  </div>
</div>
<style>
  .coupon-item {
    position: relative;
    width: 410px;
    height: 125px;
    background: radial-gradient(transparent 0, transparent 5px, #f39b00 5px);
    background-size: 15px 15px;
    background-position: 10px 2px;
    color: #fff;
    z-index: 0;
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
```

:::

## 修改默认滚动条

<section class="code-wrap" style="height: 400px">
  <div class="css-live-wrap">
    <div class="team-item">
      <div class="member-avatar">
        <img
          src="http://www.canonchain.com/Resource/project/czr-home/img/about/consultant/MichaelSaunders.jpg"
          alt="头像"
        />
      </div>
      <div class="member-info">
        <h4 class="member-name">MICHAEL SAUNDERS</h4>
        <h5 class="member-position">首席数学家</h5>
      </div>
      <div class="member-detail-wrap">
        <p class="member-detail">
          斯坦福大学终身教授、数学家、世界算法专家
          桑德斯教授目前是SIAM(工业与应用数学学会)院士；斯坦福大学发明名人堂成员； 新西兰皇家学会院士；曾获得包括“SIAM
          Linear Algebra Prize”等众多奖项。
          在斯坦福大学管理科学与工程系/运筹学/系统优化实验室/计算与数学工程/科学计算与计算科学等学科研究与教授，
          特别是在数值优化、数值线性代数、线性/非线性规划、稀疏矩阵、迭代求解器、约束优化、稀疏线性方程组、
          稀疏最小二乘法的算法设计与实现，系统生物学中的多尺度优化问题等方面的研究处于世界领先水平。
        </p>
      </div>
    </div>
  </div>
  <style>
    .team-item {
      width: 230px;
      height: 230px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;
      color: #000;
      border-radius: 4px;
      padding: 40px 22px;
      margin-left: 70px;
      margin-bottom: 50px;
      position: relative;
      cursor: pointer;
      text-align: center;
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    }
    .team-item .member-avatar img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .team-item h4,.team-item h5,.team-item p{
      margin: 0;
    }
    .team-item p{
      line-height: 1.5;
    }
    .team-item .member-info {
      font-weight: 700;
      margin: 5px 0;
    }
    .team-item .member-info .member-position {
      font-size: 16px;
    }
    .member-detail {
      color: #99a8bf;
      font-size: 13px;
      text-align: justify;
    }
    .team-item::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .team-item::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background-color: rgba(255, 255, 255, 0.2);
    }
    .team-item::-webkit-scrollbar-track {
      border-radius: 0;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.01);
    }
  </style>
</section>

::: details 查看代码

```html
<div class="team-item">
  <div class="member-avatar">
    <img
      src="http://www.canonchain.com/Resource/project/czr-home/img/about/consultant/MichaelSaunders.jpg"
      alt="头像"
    />
  </div>
  <div class="member-info">
    <h4 class="member-name">MICHAEL SAUNDERS</h4>
    <h5 class="member-position">首席数学家</h5>
  </div>
  <div class="member-detail-wrap">
    <p class="member-detail">
      斯坦福大学终身教授、数学家、世界算法专家 桑德斯教授目前是SIAM(工业与应用数学学会)院士；斯坦福大学发明名人堂成员；
      新西兰皇家学会院士；曾获得包括“SIAM Linear Algebra Prize”等众多奖项。
      在斯坦福大学管理科学与工程系/运筹学/系统优化实验室/计算与数学工程/科学计算与计算科学等学科研究与教授，
      特别是在数值优化、数值线性代数、线性/非线性规划、稀疏矩阵、迭代求解器、约束优化、稀疏线性方程组、
      稀疏最小二乘法的算法设计与实现，系统生物学中的多尺度优化问题等方面的研究处于世界领先水平。
    </p>
  </div>
</div>
<style>
  .team-item {
    width: 230px;
    height: 230px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    padding: 40px 22px;
    margin-left: 70px;
    margin-bottom: 50px;
    position: relative;
    cursor: pointer;
    text-align: center;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
  .team-item .member-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .team-item .member-info {
    font-weight: 700;
    margin: 5px 0;
  }
  .team-item .member-info .member-position {
    font-size: 16px;
  }
  .member-detail {
    color: #99a8bf;
    font-size: 13px;
    text-align: justify;
  }
  /*滚动条样式*/
  .team-item::-webkit-scrollbar {
    /*高宽分别对应横竖滚动条的尺寸*/
    width: 6px;
    height: 6px;
    /* 如果是想要滚动效果，但是不需要滚动条，直接把滚动条的宽度设置为零就可以了 */
  }
  .team-item::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
  .team-item::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 0;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.01);
  }
</style>
```

:::

## WIFI

- **弧形条制作思路**
  1. 先画出空心圆
  2. 将空心圆的其中三个 border 设为透明便可得到一个弧形条
  3. 利用父相子绝将剩下的弧形条进行定位

<section class="code-wrap" style="height: 150px">
  <div class="css-live-wrap">
    <div class="wifi-wrap">
      <div class="wifi-icon strength-ready">
        <span class="wifi-1"></span>
        <span class="wifi-2"></span>
        <span class="wifi-3"></span>
        <span class="wifi-4"></span>
      </div>
      <div class="wifi-icon strength-ready strength-1">
        <span class="wifi-1"></span>
        <span class="wifi-2"></span>
        <span class="wifi-3"></span>
        <span class="wifi-4"></span>
      </div>
      <div class="wifi-icon strength-ready strength-2">
        <span class="wifi-1"></span>
        <span class="wifi-2"></span>
        <span class="wifi-3"></span>
        <span class="wifi-4"></span>
      </div>
      <div class="wifi-icon strength-ready strength-3">
        <span class="wifi-1"></span>
        <span class="wifi-2"></span>
        <span class="wifi-3"></span>
        <span class="wifi-4"></span>
      </div>
    </div>
  </div>
  <style>
    .wifi-wrap {
      width: 400px;
      margin: 0 auto;
    }
    .wifi-wrap *,
    .wifi-wrap *::before,
    .wifi-wrap *::after {
      box-sizing: border-box;
    }
    .strength-ready {
      color: #26a69a;
    }
    .wifi-icon {
      float: left;
      position: relative;
      width: 20px;
      height: 20px;
      overflow: hidden;
      transform: scale(4);
      margin: 40px;
    }
    .wifi-icon > span {
      position: absolute;
      border-radius: 50%;
    }
    .wifi-icon .wifi-1 {
      width: 5px;
      height: 5px;
      left: 50%;
      bottom: 1px;
      transform: translateX(-50%);
      margin: auto;
      background: currentcolor;
    }
    .wifi-icon .wifi-2,
    .wifi-icon .wifi-3,
    .wifi-icon .wifi-4 {
      border: 2px solid;
      border-color: currentColor transparent transparent;
    }
    .wifi-icon .wifi-2 {
      width: 12px;
      height: 12px;
      left: 4px;
      bottom: -2px;
    }
    .wifi-icon .wifi-3 {
      width: 20px;
      height: 20px;
      left: 0;
      bottom: -6px;
    }
    .wifi-icon .wifi-4 {
      width: 28px;
      height: 28px;
      left: -4px;
      bottom: -10px;
    }
    .strength-1 .wifi-4,
    .strength-2 .wifi-4,
    .strength-2 .wifi-3,
    .strength-3 .wifi-4,
    .strength-3 .wifi-3,
    .strength-3 .wifi-2 {
      border-color: #b0bec5 transparent transparent;
    }
  </style>
</section>

::: details 查看代码

```html
<div class="wifi-wrap">
  <div class="wifi-icon strength-ready">
    <span class="wifi-1"></span>
    <span class="wifi-2"></span>
    <span class="wifi-3"></span>
    <span class="wifi-4"></span>
  </div>
  <div class="wifi-icon strength-ready strength-1">
    <span class="wifi-1"></span>
    <span class="wifi-2"></span>
    <span class="wifi-3"></span>
    <span class="wifi-4"></span>
  </div>
  <div class="wifi-icon strength-ready strength-2">
    <span class="wifi-1"></span>
    <span class="wifi-2"></span>
    <span class="wifi-3"></span>
    <span class="wifi-4"></span>
  </div>
  <div class="wifi-icon strength-ready strength-3">
    <span class="wifi-1"></span>
    <span class="wifi-2"></span>
    <span class="wifi-3"></span>
    <span class="wifi-4"></span>
  </div>
</div>
<style>
  .wifi-wrap {
    width: 400px;
    margin: 0 auto;
  }
  .wifi-wrap *,
  .wifi-wrap *::before,
  .wifi-wrap *::after {
    box-sizing: border-box;
  }
  .strength-ready {
    color: #26a69a;
  }
  .wifi-icon {
    float: left;
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    transform: scale(4); /*放大4倍*/
    margin: 40px;
  }
  .wifi-icon > span {
    position: absolute;
    border-radius: 50%;
  }
  .wifi-icon .wifi-1 {
    width: 5px;
    height: 5px;
    left: 50%;
    bottom: 1px;
    transform: translateX(-50%);
    margin: auto;
    background: currentcolor;
  }
  .wifi-icon .wifi-2,
  .wifi-icon .wifi-3,
  .wifi-icon .wifi-4 {
    border: 2px solid;
    border-color: currentColor transparent transparent;
  }
  .wifi-icon .wifi-2 {
    width: 12px;
    height: 12px;
    left: 4px;
    bottom: -2px;
  }
  .wifi-icon .wifi-3 {
    width: 20px;
    height: 20px;
    left: 0;
    bottom: -6px;
  }
  .wifi-icon .wifi-4 {
    width: 28px;
    height: 28px;
    left: -4px;
    bottom: -10px;
  }
  .strength-1 .wifi-4,
  .strength-2 .wifi-4,
  .strength-2 .wifi-3,
  .strength-3 .wifi-4,
  .strength-3 .wifi-3,
  .strength-3 .wifi-2 {
    border-color: #b0bec5 transparent transparent;
  }
</style>
```

:::

## Loading

<section class="code-wrap" style="height: 150px">
  <div class="css-live-wrap">
    <div id="pageLoading" style="display: none;">
      <div class="spinner">
        <div class="rect-1"></div>
        <div class="rect-2"></div>
        <div class="rect-3"></div>
        <div class="rect-4"></div>
      </div>
    </div>
    <div id="divLoading" style="display: block;">
      <div class="spinner">
        <div class="rect-1"></div>
        <div class="rect-2"></div>
        <div class="rect-3"></div>
        <div class="rect-4"></div>
      </div>
    </div>
  </div>
  <style>
    #pageLoading {
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
    }
    #divLoading {
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .spinner {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100px;
      height: 30px;
      text-align: center;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .spinner > div {
      display: inline-block;
      width: 3px;
      height: 100%;
      margin: 0 2px;
      background-color: #e81b1e;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .spinner .rect-1 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .spinner .rect-2 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    .spinner .rect-3 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .spinner .rect-4 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    @-webkit-keyframes stretchdelay {
      0%,
      40%,
      100% {
        -webkit-transform: scaleY(0.4);
      }
      20% {
        -webkit-transform: scaleY(1);
      }
    }
    @keyframes stretchdelay {
      0%,
      40%,
      100% {
        -webkit-transform: scaleY(0.4);
        transform: scaleY(0.4);
      }
      20% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    }
  </style>
</section>

::: details 查看代码

```html
<div id="pageLoading" style="display: none;">
  <div class="spinner">
    <div class="rect-1"></div>
    <div class="rect-2"></div>
    <div class="rect-3"></div>
    <div class="rect-4"></div>
  </div>
</div>
<div id="divLoading" style="display: block;">
  <div class="spinner">
    <div class="rect-1"></div>
    <div class="rect-2"></div>
    <div class="rect-3"></div>
    <div class="rect-4"></div>
  </div>
</div>
<style>
  /* 全屏 loading */
  #pageLoading {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  /* 区域 loading */
  #divLoading {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 30px;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .spinner > div {
    display: inline-block;
    width: 3px;
    height: 100%;
    margin: 0 2px;
    background-color: #e81b1e;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  .spinner .rect-1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .spinner .rect-2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .spinner .rect-3 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .spinner .rect-4 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  @-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }
  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
</style>
```

:::

## 旋转

<section class="code-wrap" style="height: 100px">
  <div class="css-live-wrap">
    <div class="spin-wrap">
      <span class="spin">♬</span>
    </div>
  </div>
  <style>
    .spin-wrap {
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #808080;
      margin: 20px 0;
    }
    .spin-wrap .spin {
      font-size: 60px;
      display: inline-block;
      -webkit-animation: icon-spin 3s infinite linear;
      animation: icon-spin 3s infinite linear;
    }
    @-webkit-keyframes icon-spin {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes icon-spin {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  </style>
</section>

::: details 查看代码

```html
<div class="spin-wrap">
  <span class="spin">♬</span>
</div>
<style>
  .spin-wrap {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #808080;
    margin: 20px 0;
  }
  .spin-wrap .spin {
    font-size: 60px;
    display: inline-block;
    -webkit-animation: icon-spin 3s infinite linear;
    animation: icon-spin 3s infinite linear;
  }
  @-webkit-keyframes icon-spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes icon-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
```

:::
