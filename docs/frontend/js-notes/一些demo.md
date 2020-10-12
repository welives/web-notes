## 单行显示的滚动文字

### 原生 js 实现方式

<ul class="list-original">
  <li>我是通过原生js来实现滚动的1</li>
  <li>我是通过原生js来实现滚动的2</li>
  <li>我是通过原生js来实现滚动的3</li>
  <li>我是通过原生js来实现滚动的4</li>
  <li>我是通过原生js来实现滚动的5</li>
</ul>
<style>
  ul.list-original {
    width: 200px;
    height: 30px;
    font-weight: bold;
    background-color: #f8f8f8;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    overflow: hidden;
  }
  ul.list-original li {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    list-style-type: none;
    transition: all 1s;
  }
</style>
<script>
  ;(function() {
    let options = { li_h: 30, time: 2000, movetime: 1000 }
    let list = document.querySelector('.list-original')
    let li_h = options.li_h || list.firstElementChild.offsetHeight
    function animate() {
      list.firstElementChild.style.marginTop = -li_h + 'px'
      let firstEl = list.firstElementChild
      setTimeout(function() {
        firstEl.style.marginTop = '0px'
        list.appendChild(firstEl)
      }, options.movetime)
      firstEl = list.firstElementChild
      firstEl.style.marginTop = -li_h + 'px'
    }
    let timer = setInterval(animate, options.time)
    list.addEventListener('mouseover', function() {
      clearInterval(timer)
    })
    list.addEventListener('mouseout', function() {
      timer = setInterval(animate, options.time)
    })
  })()
</script>

::: details 查看代码

```html
<ul class="list-original">
  <li>我是通过原生js来实现滚动的1</li>
  <li>我是通过原生js来实现滚动的2</li>
  <li>我是通过原生js来实现滚动的3</li>
  <li>我是通过原生js来实现滚动的4</li>
  <li>我是通过原生js来实现滚动的5</li>
</ul>
<style>
  ul.list-original {
    width: 200px;
    height: 30px;
    font-weight: bold;
    background-color: #f8f8f8;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    overflow: hidden;
  }
  ul.list-original li {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    list-style-type: none;
    transition: all 1s;
  }
</style>
<script>
  ;(function() {
    let options = { li_h: 30, time: 2000, movetime: 1000 }
    let list = document.querySelector('.list-original')
    let li_h = options.li_h || list.firstElementChild.offsetHeight
    function animate() {
      list.firstElementChild.style.marginTop = -li_h + 'px'
      let firstEl = list.firstElementChild
      setTimeout(function() {
        firstEl.style.marginTop = '0px'
        list.appendChild(firstEl)
      }, options.movetime)
      firstEl = list.firstElementChild
      firstEl.style.marginTop = -li_h + 'px'
    }
    let timer = setInterval(animate, options.time)
    list.addEventListener('mouseover', function() {
      clearInterval(timer)
    })
    list.addEventListener('mouseout', function() {
      timer = setInterval(animate, options.time)
    })
  })()
</script>
```

:::

### jQuery 实现方式

<ul class="list-jquery">
  <li>我是通过jQuery来实现滚动的1</li>
  <li>我是通过jQuery来实现滚动的2</li>
  <li>我是通过jQuery来实现滚动的3</li>
  <li>我是通过jQuery来实现滚动的4</li>
  <li>我是通过jQuery来实现滚动的5</li>
</ul>
<style>
  ul.list-jquery {
    width: 200px;
    height: 30px;
    font-weight: bold;
    background-color: #f8f8f8;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    overflow: hidden;
  }
  ul.list-jquery li {
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    list-style: none;
  }
</style>
<script>
  ;(function($) {
    $.fn.extend({
      slideUp: function(value) {
        var docthis = this
        //默认参数
        value = $.extend(
          {
            li_h: '30',
            time: 2000,
            movetime: 1000,
          },
          value,
        )
        //向上滑动动画
        function autoani() {
          $('li:first', docthis).animate({ 'margin-top': -value.li_h }, value.movetime, function() {
            $(this)
              .css('margin-top', 0)
              .appendTo('.list-jquery')
          })
        }
        //自动间隔时间向上滑动
        var anifun = setInterval(autoani, value.time)
        //悬停时停止滑动，离开时继续执行
        $(docthis)
          .children('li')
          .hover(
            function() {
              clearInterval(anifun) //清除自动滑动动画
            },
            function() {
              anifun = setInterval(autoani, value.time) //继续执行动画
            },
          )
      },
    })
  })(jQuery)
  $('.list-jquery').slideUp()
</script>

::: details 查看代码

```html
<ul class="list-jquery">
  <li>我是通过jQuery来实现滚动的1</li>
  <li>我是通过jQuery来实现滚动的2</li>
  <li>我是通过jQuery来实现滚动的3</li>
  <li>我是通过jQuery来实现滚动的4</li>
  <li>我是通过jQuery来实现滚动的5</li>
</ul>
<style>
  ul.list-jquery {
    width: 200px;
    height: 30px;
    font-weight: bold;
    background-color: #f8f8f8;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    overflow: hidden;
  }
  ul.list-jquery li {
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    list-style: none;
  }
</style>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
<script>
  ;(function($) {
    $.fn.extend({
      slideUp: function(value) {
        var docthis = this
        //默认参数
        value = $.extend(
          {
            li_h: '30',
            time: 2000,
            movetime: 1000,
          },
          value,
        )
        //向上滑动动画
        function autoani() {
          $('li:first', docthis).animate({ 'margin-top': -value.li_h }, value.movetime, function() {
            $(this)
              .css('margin-top', 0)
              .appendTo('.list-jquery')
          })
        }
        //自动间隔时间向上滑动
        var anifun = setInterval(autoani, value.time)
        //悬停时停止滑动，离开时继续执行
        $(docthis)
          .children('li')
          .hover(
            function() {
              clearInterval(anifun) //清除自动滑动动画
            },
            function() {
              anifun = setInterval(autoani, value.time) //继续执行动画
            },
          )
      },
    })
  })(jQuery)
  $('.list-jquery').slideUp()
</script>
```

:::

### Vue 实现方式

<br>
<marquee-word />

::: details 查看代码

```vue
<template>
  <div>
    <div class="marquee">
      <div class="marquee_box">
        <ul
          class="marquee_list"
          :class="{ marquee_top: animate }"
          @mouseover.stop="stopAni()"
          @mouseout.stop="autoAni()"
        >
          <li v-for="(item, index) in marqueeList">
            <span>{{ item.name }}</span>
            <span>-</span>
            <span class="red"> {{ item.city }}</span>
            <span>销售</span>
            <span class="red"> {{ item.amount }}</span>
            <span>万</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      animate: false,
      marqueeList: [
        {
          name: '开心果',
          city: '北京',
          amount: '320',
        },
        {
          name: '芒果干',
          city: '上海',
          amount: '470',
        },
        {
          name: '草莓干',
          city: '广州',
          amount: '970',
        },
        {
          name: '无核白葡萄干 ',
          city: '重庆',
          amount: '10',
        },
      ],
    }
  },
  created() {
    this.autoAni()
  },
  methods: {
    showMarquee() {
      this.animate = true
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0])
        this.marqueeList.shift()
        this.animate = false
      }, 1000)
    },
    autoAni() {
      this.timer = setInterval(this.showMarquee, 2000)
    },
    stopAni() {
      clearInterval(this.timer)
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.marquee {
  width: 100%;
  height: 50px;
  align-items: center;
  color: #3a3a3a;
  background-color: #ffe4ca;
  display: flex;
  box-sizing: border-box;
}
.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 30px;
  overflow: hidden;
}
.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.marquee_top {
  transition: all 1s;
  margin-top: -30px;
}
.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
}
.marquee_list li span {
  padding: 0 2px;
}
.red {
  color: #ff0101;
}
</style>
```

:::

## 表格排序

### 原生 js 实现方式

- 页面刷新后 demo 中的表格数据会失效的问题并不是 bug，而是 vuepress 在编译打包时会把`.md`文件中的 js 代码的特殊字符给转义了。反正你把下面给出的代码 cv 到 html 文件中去运行是不会有任何问题的

<div class="table-wrap">
  <table id="table-original">
    <thead>
      <tr>
        <th class="w30"><input type="checkbox" /></th>
        <th class="w100">姓名</th>
        <th class="w70">年龄</th>
        <th class="w200">邮箱</th>
        <th class="w200">手机</th>
        <th class="w100">工资</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
<style>
  .table-wrap {
    width: 700px;
    margin: 20px auto 0;
    padding: 5px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
  }
  .table-wrap thead tr,
  .table-wrap tbody tr {
    height: 30px;
    line-height: 30px;
    text-align: center;
    user-select: none;
  }
  .table-wrap thead {
    height: 30px;
    color: #fff;
    background-color: #3eaf7c;
    cursor: pointer;
  }
  .table-wrap tbody tr:nth-child(odd) {
    background-color: #ccc;
  }
  .w30 {
    width: 30px;
  }
  .w70 {
    width: 70px;
  }
  .w100 {
    width: 100px;
  }
  .w200 {
    width: 200px;
  }
  .hover-color {
    background-color: #cde074 !important;
  }
</style>
<script>
  var tableData = [
    {
      name: '用户-1',
      age: 25,
      email: '1234567890@qq.com',
      phone: '13245637823',
      score: 1340,
    },
    {
      name: '用户-2',
      age: 23,
      email: '4123456780@qq.com',
      phone: '18723456423',
      score: 1200,
    },
    {
      name: '用户-3',
      age: 32,
      email: '4123456890@qq.com',
      phone: '13800026574',
      score: 1800,
    },
    {
      name: '用户-4',
      age: 41,
      email: '5234567890@qq.com',
      phone: '13800993302',
      score: 1034,
    },
  ]
  var oTable = document.querySelector('#table-original'),
    oBody = oTable.tBodies[0],
    oRows = oBody.rows || [],
    oThs = document.querySelectorAll('#table-original th'),
    oChk = document.querySelector('#table-original input')
  var tables = {
    sort: 'asc',
    // 渲染表格
    render() {
      let str = ''
      if (tableData && tableData.length) {
        tableData.forEach(function(item, index) {
          str += '<tr><td><input type="checkbox" /></td>'
          for (const key in tableData[index]) {
            if (tableData[index].hasOwnProperty(key)) {
              str += `<td>${tableData[index][key]}</td>`
            }
          }
          str += '</tr>'
        })
      }
      oBody.innerHTML = str
      this.changeColor()
      this.selectAll(false)
    },
    // 鼠标悬停时改变行的颜色
    changeColor() {
      for (const oRow of oRows) {
        oRow.oldClass = oRow.className || ''
        oRow.onmouseover = function(e) {
          this.className = 'hover-color'
        }
        oRow.onmouseout = function(e) {
          this.className = oRow.oldClass
        }
      }
    },
    // 表格排序
    sortRows(i) {
      let oRowsArr = Array.from(oRows)
      // 给所有行对应的数组进行排序
      oRowsArr.sort(function(a, b) {
        let as = a.cells[i].innerHTML
        let bs = b.cells[i].innerHTML
        if (isNaN(as)) {
          return as.localeCompare(bs)
        } else {
          return as - bs
        }
      })
      // 实现升降序处理
      if (this.sort === 'asc') {
        oRowsArr.reverse()
        this.sort = 'desc'
      } else {
        this.sort = 'asc'
      }
      // 按照最新的顺序，把我们的每一行重新的添加到页面中
      let domFrg = document.createDocumentFragment()
      oRowsArr.forEach(function(row) {
        domFrg.appendChild(row)
      })
      oBody.appendChild(domFrg)
    },
    // 全选||取消全选
    selectAll(flag) {
      let oChks = document.querySelectorAll('#table-original input')
      oChks = [].slice.call(oChks, 1)
      for (const chk of oChks) {
        chk.checked = flag
        // 给每一行添加点击事件
        chk.onclick = function() {
          !this.checked ? (oChk.checked = false) : void 0
          let tempFlag = true
          for (let i = 0; i < oChks.length; i++) {
            // 只要有任何一个取消选中,则跳出循环
            if (!oChks[i].checked) {
              tempFlag = false
              break
            }
          }
          if (tempFlag) oChk.checked = true
        }
      }
    },
  }
  tables.render()
  for (let i = 1; i < oThs.length; i++) {
    // 给表头添加点击事件
    oThs[i].onclick = function() {
      tables.sortRows(i)
    }
  }
  oChk.onclick = function() {
    this.checked ? tables.selectAll(true) : tables.selectAll(false)
  }
</script>

::: details 查看代码

```html
<div class="table-wrap">
  <table id="table-original">
    <thead>
      <tr>
        <th class="w30"><input type="checkbox" /></th>
        <th class="w100">姓名</th>
        <th class="w70">年龄</th>
        <th class="w200">邮箱</th>
        <th class="w200">手机</th>
        <th class="w100">工资</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
<style>
  .table-wrap {
    width: 700px;
    margin: 20px auto 0;
    padding: 5px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
  }
  .table-wrap thead tr,
  .table-wrap tbody tr {
    height: 30px;
    line-height: 30px;
    text-align: center;
    user-select: none;
  }
  .table-wrap thead {
    height: 30px;
    color: #fff;
    background-color: #3eaf7c;
    cursor: pointer;
  }
  .table-wrap tbody tr:nth-child(odd) {
    background-color: #ccc;
  }
  .w30 {
    width: 30px;
  }
  .w70 {
    width: 70px;
  }
  .w100 {
    width: 100px;
  }
  .w200 {
    width: 200px;
  }
  .hover-color {
    background-color: #cde074 !important;
  }
</style>
<script>
  var tableData = [
    {
      name: '用户-1',
      age: 25,
      email: '1234567890@qq.com',
      phone: '13245637823',
      score: 1340,
    },
    {
      name: '用户-2',
      age: 23,
      email: '4123456780@qq.com',
      phone: '18723456423',
      score: 1200,
    },
    {
      name: '用户-3',
      age: 32,
      email: '4123456890@qq.com',
      phone: '13800026574',
      score: 1800,
    },
    {
      name: '用户-4',
      age: 41,
      email: '5234567890@qq.com',
      phone: '13800993302',
      score: 1034,
    },
  ]
  var oTable = document.querySelector('#table-original'),
    oBody = oTable.tBodies[0],
    oRows = oBody.rows || [],
    oThs = document.querySelectorAll('#table-original th'),
    oChk = document.querySelector('#table-original input')
  var tables = {
    sort: 'asc',
    // 渲染表格
    render() {
      let str = ''
      if (tableData && tableData.length) {
        tableData.forEach(function(item, index) {
          str += '<tr><td><input type="checkbox" /></td>'
          for (const key in tableData[index]) {
            if (tableData[index].hasOwnProperty(key)) {
              str += `<td>${tableData[index][key]}</td>`
            }
          }
          str += '</tr>'
        })
      }
      oBody.innerHTML = str
      this.changeColor()
      this.selectAll(false)
    },
    // 鼠标悬停时改变行的颜色
    changeColor() {
      for (const oRow of oRows) {
        oRow.oldClass = oRow.className || ''
        oRow.onmouseover = function(e) {
          this.className = 'hover-color'
        }
        oRow.onmouseout = function(e) {
          this.className = oRow.oldClass
        }
      }
    },
    // 表格排序
    sortRows(i) {
      let oRowsArr = Array.from(oRows)
      // 给所有行对应的数组进行排序
      oRowsArr.sort(function(a, b) {
        let as = a.cells[i].innerHTML
        let bs = b.cells[i].innerHTML
        if (isNaN(as)) {
          return as.localeCompare(bs)
        } else {
          return as - bs
        }
      })
      // 实现升降序处理
      if (this.sort === 'asc') {
        oRowsArr.reverse()
        this.sort = 'desc'
      } else {
        this.sort = 'asc'
      }
      // 按照最新的顺序，把我们的每一行重新的添加到页面中
      let domFrg = document.createDocumentFragment()
      oRowsArr.forEach(function(row) {
        domFrg.appendChild(row)
      })
      oBody.appendChild(domFrg)
    },
    // 全选||取消全选
    selectAll(flag) {
      let oChks = document.querySelectorAll('#table-original input')
      oChks = [].slice.call(oChks, 1)
      for (const chk of oChks) {
        chk.checked = flag
        // 给每一行添加点击事件
        chk.onclick = function() {
          !this.checked ? (oChk.checked = false) : void 0
          let tempFlag = true
          for (let i = 0; i < oChks.length; i++) {
            // 只要有任何一个取消选中,则跳出循环
            if (!oChks[i].checked) {
              tempFlag = false
              break
            }
          }
          if (tempFlag) oChk.checked = true
        }
      }
    },
  }
  tables.render()
  for (let i = 1; i < oThs.length; i++) {
    // 给表头添加点击事件
    oThs[i].onclick = function() {
      tables.sortRows(i)
    }
  }
  oChk.onclick = function() {
    this.checked ? tables.selectAll(true) : tables.selectAll(false)
  }
</script>
```

:::

### Vue 实现方式

<table-sort />

::: details 查看代码

```vue
<template>
  <div class="table-wrap">
    <table id="table-vue">
      <thead>
        <tr>
          <th class="w30">
            <input type="checkbox" v-model="isSelectAll" @click="selectAll(!isSelectAll)" />
          </th>
          <th :class="item.class" v-for="(item, index) in tableHead" :key="index" @click="sortRows(index + 1)">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody v-html="tableBody"></tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHead: [
        { text: '姓名', class: 'w100' },
        { text: '年龄', class: 'w70' },
        { text: '邮箱', class: 'w200' },
        { text: '手机', class: 'w200' },
        { text: '工资', class: 'w100' },
      ],
      isSelectAll: false,
      tableData: [
        {
          name: '用户-1',
          age: 25,
          email: '1234567890@qq.com',
          phone: '13245637823',
          score: 1340,
        },
        {
          name: '用户-2',
          age: 23,
          email: '4123456780@qq.com',
          phone: '18723456423',
          score: 1200,
        },
        {
          name: '用户-3',
          age: 32,
          email: '4123456890@qq.com',
          phone: '13800026574',
          score: 1800,
        },
        {
          name: '用户-4',
          age: 41,
          email: '5234567890@qq.com',
          phone: '13800993302',
          score: 1034,
        },
      ],
      tableBody: '',
      sort: 'asc',
      oTable: null,
      oBody: null,
      oRows: null,
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    // 渲染表格
    render() {
      if (this.tableData && this.tableData.length) {
        this.tableData.forEach((item, index) => {
          this.tableBody += '<tr><td><input type="checkbox" /></td>'
          for (const key in this.tableData[index]) {
            if (this.tableData[index].hasOwnProperty(key)) {
              this.tableBody += `<td>${this.tableData[index][key]}</td>`
            }
          }
          this.tableBody += '</tr>'
        })
      }
      this.oTable = document.querySelector('#table-vue')
      this.oBody = this.oTable.tBodies[0]
      this.oRows = this.oBody.rows || []
      this.changeColor()
      this.selectAll(this.isSelectAll)
    },
    // 鼠标悬停时改变行的颜色
    changeColor() {
      this.$nextTick(() => {
        for (const oRow of this.oRows) {
          oRow.oldClass = oRow.className || ''
          oRow.onmouseover = (e) => {
            oRow.className = 'hover-color'
          }
          oRow.onmouseout = (e) => {
            oRow.className = oRow.oldClass
          }
        }
      })
    },
    // 表格排序
    sortRows(i) {
      let oRowsArr = Array.from(this.oRows)
      // 给所有行对应的数组进行排序
      oRowsArr.sort((a, b) => {
        let as = a.cells[i].innerHTML
        let bs = b.cells[i].innerHTML
        if (isNaN(as)) {
          return as.localeCompare(bs)
        } else {
          return as - bs
        }
      })
      // 实现升降序处理
      if (this.sort === 'asc') {
        oRowsArr.reverse()
        this.sort = 'desc'
      } else {
        this.sort = 'asc'
      }
      // 按照最新的顺序，把我们的每一行重新的添加到页面中
      let domFrg = document.createDocumentFragment()
      oRowsArr.forEach((row) => {
        domFrg.appendChild(row)
      })
      this.oBody.appendChild(domFrg)
    },
    // 全选||取消全选
    selectAll(flag) {
      this.$nextTick(() => {
        let oChks = document.querySelectorAll('#table-vue input')
        oChks = [].slice.call(oChks, 1)
        for (const chk of oChks) {
          chk.checked = flag
          // 给每一行添加点击事件
          chk.onclick = (e) => {
            !e.target.checked ? (this.isSelectAll = false) : void 0
            let tempFlag = true
            for (let i = 0; i < oChks.length; i++) {
              // 只要有任何一个取消选中,则跳出循环
              if (!oChks[i].checked) {
                tempFlag = false
                break
              }
            }
            if (tempFlag) this.isSelectAll = true
          }
        }
      })
    },
  },
}
</script>

<style scoped>
/* 直接共享父级页面的css了 */
</style>
```

:::
