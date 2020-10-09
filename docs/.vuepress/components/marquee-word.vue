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
    showMarquee: function() {
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
