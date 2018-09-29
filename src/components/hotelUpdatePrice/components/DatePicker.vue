<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          {{trueSelectMonths}} - {{selectYear}}
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg s-row-title">
      <el-col :span="3" v-for="(item,index) in week" :key="index" class="s-col-l4">
        <div class="grid-content bg-purple">{{item}}</div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg flex-wrap s-row-body">
      <el-col :span="3" v-for="(item,index) in renderData" :key="index" class="s-col-l4">
        <div class="grid-content bg-purple">{{item}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        week: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa","Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        date: new Date(),
        selectYear: new Date().getFullYear(),
        selectMonth: new Date().getMonth() + 1,
        selectDay: new Date().getDate(),
      }
    },
    created:function(){
    },
    computed:{
      dayCount () {
        let n = new Date(this.selectYear, this.selectMonth, 0).getDate();
        this.dCount = n;
        console.log(n);
        return n;
      },
      firstDayInWeek () {
        console.log(this.selectMonth - 1);
        return new Date(this.selectYear, this.selectMonth - 1, 1).getDay();
      },
      nextMonthDay () {
        let num = 42 - this.firstDayInWeek - this.dayCount;//42个格子
        let nextDays = [];
        if (num === 0) return nextDays;

        let i = 1;
        for (; i <= num; i++) {
          // nextDays.push(i);
          nextDays.push('');
        }
        return nextDays;
      },
      renderData () {
        let nowDays = [];
        let i = 1;
        for (; i <= this.dayCount; i++) {
          nowDays.push(i);
        }
        console.log(this.lastMonthDay);
        return [...this.lastMonthDay, ...nowDays,...this.nextMonthDay]
        //return [...this.lastMonthDay, ...nowDays, ...this.nextMonthDay];
      },
      lastMonthDay () {
        let lastNum = this.firstDayInWeek;
        console.log(lastNum);
        let lastDays = [];
        if (lastNum === 0) return lastDays;

        let i = 0;
        let lastDayNum = new Date(this.selectYear, this.selectMonth - 1, 0).getDate();
        for (; i < lastNum; i++) {
          // lastDays.unshift(lastDayNum);
          lastDays.unshift('');
          lastDayNum--;
        }
        return lastDays;
      },
      trueSelectMonths() {
        switch (this.selectMonth) {
          case 1:
            return 'Jan';
            break;
          case 2:
            return 'Feb';
            break;
          case 3:
            return 'Mar';
            break;
          case 4:
            return 'Apr';
            break;
          case 5:
            return 'May';
            break;
          case 6:
            return 'Jun';
            break;
          case 7:
            return 'Jul';
            break;
          case 8:
            return 'Aug';
            break;
          case 9:
            return 'Sep';
            break;
          case 10:
            return 'Oct';
            break;
          case 11:
            return 'Nov';
            break;
          case 12:
            return 'Dec';
            break;
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .flex-wrap{
    flex-flow:row wrap;
  }
  .s-row-title{
    height: 40px;
    line-height: 40px;
    background-color:green;
  }
  .s-row-body{
    height: 80px;
  }
  .s-col-l4{
    width: 14%;
    height: 100%;
  }
</style>
