<template>
  <div>
    <!--for form-->
    <el-row>
      <el-col :span="7">
        <div class="input-suffix">
          Start Date

          <!--<el-date-picker-->
          <!--v-model="value13"-->
          <!--type="daterange"-->
          <!--start-placeholder="开始日期"-->
          <!--end-placeholder="结束日期"-->
          <!--:default-time="['00:00:00', '23:59:59']"-->
          <!--:picker-options="pickerOptions"-->
          <!--&gt;-->
          <!--</el-date-picker>-->
          <el-date-picker
            :picker-options="pickerOptionsStart"
            v-model="startDate"
            type="date"
            placeholder="选择日期"
            @change="changeStart">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="input-suffix">
          End Date
          <el-date-picker
            :picker-options="pickerOptionsEnd"
            v-model="endDate"
            type="date"
            placeholder="选择日期"
            @change="changeEnd">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="input-suffix">
          Price Rs
          <el-input
            placeholder="请输入内容"
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="input-suffix">
          SOLDOUT

          <label class="s-label-checkbox">
            <input type="checkbox" v-model="check" class="s-checkbox"/>
            <span class="s-checkbox-icon"></span>
          </label>

        </div>
      </el-col>
      <el-col :span="2">
        <div class="input-suffix">
          <el-button type="danger" icon="el-icon-minus" circle></el-button>
        </div>
      </el-col>
    </el-row>


    <!--action-->
    <el-row>
      <el-col :span="7">
      </el-col>
      <el-col :span="7">
      </el-col>
      <el-col :span="4">
      </el-col>
      <el-col :span="4">
      </el-col>
      <el-col :span="2">
        <div class="input-suffix">
          <el-button type="primary" icon="el-icon-plus" circle></el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <el-button type="primary">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        check: true,
        value13: [],
        pickerOptions: {
          disabledDate: (time) => {
            console.log(new Date(time));
            // new Date(time.getTime()).
            return
            // return time.getTime() > new Date() || time.getTime() < new Date(2018, 9, 8);//注意是||不是&&
          }
        },
        pickerOptionsStart: {
          disabledDate: (time) => {
            // let nowed = new Date(time);
            // nowed.setDate(nowed.getDate() + 1)
            // return nowed.getTime() < Date.now();
            let nowY = new Date();
            let now = new Date();
            let nowed = new Date(time);
            nowY.setFullYear(nowY.getFullYear() + 1);
            now.setFullYear(now.getFullYear() - 1);
            if (this.endDate) {
              new Date(this.endDate).setDate(new Date(this.endDate).getDate() + 1);
              return time.getTime() > this.endDate || time.getTime() < now.getTime();
            } else {

              nowed.setDate(nowed.getDate() + 1)
              return time.getTime() > nowY || nowed.getTime() < Date.now();
            }
          }
        },
        pickerOptionsEnd: {
          disabledDate: (time) => {
            let now = new Date();
            now.setFullYear(now.getFullYear() + 1);
            if (this.startDate) {
              new Date(this.startDate).setDate(new Date(this.startDate).getDate() + 1);
              return time.getTime() < this.startDate || time.getTime() > now;
            } else {
              let nowed = new Date(time)
              nowed.setDate(nowed.getDate() + 1)
              return time.getTime() > now || nowed.getTime() < Date.now();
            }
          }
        },
        startDate: '',
        endDate: '',
      }
    },
    methods: {
      removeDate() {
        console.log(this.startDate)
        console.log(this.endDate)
        // if(this.endDate.getTime()<this.startDate.getTime()){
        //   this.startDate='';
        // }
      },
      changeStart() {
        this.pickerOptionsStart = Object.assign({}, this.pickerOptionsStart, {
          disabledDate: (time) => {
            // let nowed = new Date(time);
            // nowed.setDate(nowed.getDate() + 1)
            // return nowed.getTime() < Date.now();
            let now = new Date();
            now.setFullYear(now.getFullYear() + 1);

            let nowed = new Date(time)
            nowed.setDate(nowed.getDate() + 1)
            return time.getTime() > now || nowed.getTime() < Date.now();

          }
        })
      },
      changeEnd() {
        this.pickerOptionsEnd = Object.assign({}, this.pickerOptionsEnd, {
          disabledDate: (time) => {
            let now = new Date();
            now.setFullYear(now.getFullYear() + 1);
            if (this.startDate) {
              new Date(this.startDate).setDate(new Date(this.startDate).getDate() + 1);
              return time.getTime() < this.startDate || time.getTime() > now;
            } else {
              let nowed = new Date(time)
              nowed.setDate(nowed.getDate() + 1)
              return time.getTime() > now || nowed.getTime() < Date.now();
            }
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .el-input {
    width: auto;
  }

  .el-col {
    height: 40px;
  }

  .s-label-checkbox {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border: 2px solid red;
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
    position: relative;
    white-space: nowrap;
  }

  .s-checkbox {
    display: none;
  }

  .s-checkbox:checked + .s-checkbox-icon::after {
    content: '';
    box-sizing: content-box;
    width: 7px;
    height: 14px;
    transform: rotate(45deg) scaleY(1);
    border: 2px solid red;
    border-left-color: transparent;
    border-top-color: transparent;
    transform-origin: center;
    display: table;
    position: absolute;
    left: 9px;
    top: 3px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
