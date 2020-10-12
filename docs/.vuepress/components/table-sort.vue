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
