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

## 使用 border 画箭头

<section class="code-wrap" style="height: 130px;">
  <div class="css-live-wrap">
    <div class="arrow-wrap">
      <div class="left-arrow"></div>
      <div class="top-arrow"></div>
      <div class="bottom-arrow"></div>
      <div class="right-arrow"></div>
    </div>
    <div class="aid-arrow">
      <div class="right-arrow">文字文字</div>
    </div>
  </div>
  <style>
    .arrow-wrap {
      width: 100%;
      text-align: left;
      display: inline-block;
    }
    .arrow-wrap div {
      margin: 20px;
    }
    .arrow-wrap .left-arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-left: 4px solid;
      border-bottom: 4px solid;
      transform: rotate(45deg);
    }
    .arrow-wrap .top-arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-top: 4px solid;
      border-left: 4px solid;
      transform: rotate(45deg);
    }
    .arrow-wrap .bottom-arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-right: 4px solid;
      border-bottom: 4px solid;
      transform: rotate(45deg);
    }
    .arrow-wrap .right-arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-top: 4px solid;
      border-right: 4px solid;
      transform: rotate(45deg);
    }
    .aid-arrow .right-arrow {
      position: relative;
    }
    .aid-arrow .right-arrow::after {
      position: absolute;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left-color: orange;
      content: '';
    }
  </style>
</section>

::: details 查看代码

```html
<div class="arrow-wrap">
  <div class="left-arrow"></div>
  <div class="top-arrow"></div>
  <div class="bottom-arrow"></div>
  <div class="right-arrow"></div>
</div>
<div class="aid-arrow">
  <div class="right-arrow">文字文字</div>
</div>
<style>
  .arrow-wrap {
    width: 100%;
    text-align: left;
    display: inline-block;
  }
  .arrow-wrap div {
    margin: 20px;
  }
  /* 通过两个相邻的边框和transform 画出箭头 */
  .arrow-wrap .left-arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-left: 4px solid;
    border-bottom: 4px solid;
    transform: rotate(45deg);
  }
  .arrow-wrap .top-arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-top: 4px solid;
    border-left: 4px solid;
    transform: rotate(45deg);
  }
  .arrow-wrap .bottom-arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-right: 4px solid;
    border-bottom: 4px solid;
    transform: rotate(45deg);
  }
  .arrow-wrap .right-arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-top: 4px solid;
    border-right: 4px solid;
    transform: rotate(45deg);
  }
  /* 父相子绝 + border 画出三角箭头 */
  .aid-arrow .right-arrow {
    position: relative;
  }
  .aid-arrow .right-arrow::after {
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: orange;
    content: '';
  }
</style>
```

:::

## 聊天信息效果

<section class="code-wrap" style="height: 230px;">
  <div class="css-live-wrap">
    <div class="chat-wrap">
      <div class="chat-item chat-right">
        <div class="message">我的消息<span class="time">11:11</span></div>
        <img class="avatar" :src="$withBase('/img/avatar.jpg')" />
      </div>
      <div class="chat-item chat-left">
        <img class="avatar" :src="$withBase('/img/jandan.jpg')" />
        <div class="message">好友的消息<span class="time">11:11</span></div>
      </div>
    </div>
  </div>
  <style>
    .chat-left {
      text-align: left !important;
    }
    .chat-right {
      text-align: right !important;
    }
    .chat-wrap {
      height: 200px;
      background-color: #f7f7f7;
      overflow-y: auto;
    }
    .chat-item {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      vertical-align: text-top;
    }
    .chat-left .avatar {
      margin-left: 17px;
      margin-right: 10px;
    }
    .chat-right .avatar {
      margin-right: 17px;
      margin-left: 10px;
    }
    .message {
      position: relative;
      min-width: 42px;
      max-width: 50%;
      display: inline-block;
      vertical-align: text-top;
      text-align: justify;
      font-size: 14px;
      padding: 10px 15px 40px;
      border-radius: 10px;
    }
    .message::after {
      position: absolute;
      top: 20px;
      content: '';
      border: 5px solid transparent;
    }
    .chat-left .message {
      background-color: #fff;
      color: #030706;
    }
    .chat-left .message::after {
      left: -10px;
      border-right-color: #ffffff;
    }
    .chat-right .message {
      background-color: #8dc161;
      color: #ffffff;
    }
    .chat-right .message::after {
      right: -10px;
      border-left-color: #8dc161;
    }
    .message .time {
      position: absolute;
      right: 15px;
      bottom: 5px;
      font-size: 12px;
      line-height: 26px;
      opacity: 0.6;
      text-align: justify;
      color: #ffffff;
    }
    .chat-left .message .time {
      color: #91a5b5;
      left: 15px;
    }
  </style>
</section>

::: details 查看代码

```html
<div class="chat-wrap">
  <div class="chat-item chat-right">
    <div class="message">我的消息<span class="time">11:11</span></div>
    <img class="avatar" :src="$withBase('/img/avatar.jpg')" />
  </div>
  <div class="chat-item chat-left">
    <img class="avatar" :src="$withBase('/img/jandan.jpg')" />
    <div class="message">好友的消息<span class="time">11:11</span></div>
  </div>
</div>
<style>
  .chat-left {
    text-align: left !important;
  }
  .chat-right {
    text-align: right !important;
  }
  .chat-wrap {
    height: 272px;
    background-color: #f7f7f7;
    overflow-y: auto;
  }
  .chat-item {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    vertical-align: text-top; /*把元素的顶端与父元素字体的顶端对齐*/
  }
  .chat-left .avatar {
    margin-left: 17px;
    margin-right: 10px;
  }
  .chat-right .avatar {
    margin-right: 17px;
    margin-left: 10px;
  }
  .message {
    position: relative;
    min-width: 42px;
    max-width: 50%;
    display: inline-block;
    vertical-align: text-top;
    text-align: justify; /*实现两端对齐文本效果*/
    font-size: 14px;
    padding: 10px 15px 40px;
    border-radius: 10px;
  }
  /* 父相子绝 + border 画出信息框的三角箭头 */
  .message::after {
    position: absolute;
    top: 20px;
    content: '';
    border: 5px solid transparent;
  }
  .chat-left .message {
    background-color: #fff;
    color: #030706;
  }
  .chat-left .message::after {
    left: -10px;
    border-right-color: #ffffff;
  }
  .chat-right .message {
    background-color: #8dc161;
    color: #ffffff;
  }
  .chat-right .message::after {
    right: -10px;
    border-left-color: #8dc161;
  }
  .message .time {
    position: absolute;
    right: 15px;
    bottom: 5px;
    font-size: 12px;
    line-height: 26px;
    opacity: 0.6;
    text-align: justify;
    color: #ffffff;
  }
  .chat-left .message .time {
    color: #91a5b5;
    left: 15px;
  }
</style>
```

:::

## 气泡消息框

<section class="code-wrap" style="height: 150px">
  <div class="css-live-wrap">
    <div class="bubble-wrap">
      测试的消息
      <div class="bubble arrow-border"></div>
      <div class="bubble arrow-bg"></div>
    </div>
  </div>
  <style>
    .bubble-wrap {
      float: left;
      position: relative;
      width: 300px;
      height: 80px;
      padding: 10px;
      font-size: 15px;
      background-color: #b0e46e;
      border: 1px solid #8dc161;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .bubble {
      position: absolute;
      width: 0;
      height: 0;
      line-height: 0;
      border-width: 15px;
      border-style: solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    .arrow-border {
      border-top-color: #8dc161;
      bottom: -30px;
      right: 50%;
    }
    .arrow-bg {
      border-top-color: #b0e46e;
      bottom: -29px;
      right: 50%;
    }
  </style>
</section>

::: details 查看代码

```html
<div class="bubble-wrap">
  测试的消息
  <div class="bubble arrow-border"></div>
  <div class="bubble arrow-bg"></div>
</div>
<style>
  .bubble-wrap {
    float: left;
    position: relative;
    width: 300px;
    height: 80px;
    padding: 10px;
    font-size: 15px;
    background-color: #b0e46e;
    border: 1px solid #8dc161;
    border-radius: 4px;
    box-sizing: border-box;
  }
  /* 思路:背景色三角形盖在边框色三角形上，覆盖时留出1px左右的差异当作边框 */
  .bubble {
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    border-width: 15px;
    border-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .arrow-border {
    border-top-color: #8dc161;
    bottom: -30px;
    right: 50%;
  }
  .arrow-bg {
    border-top-color: #b0e46e;
    bottom: -29px;
    right: 50%;
  }
</style>
```

:::
