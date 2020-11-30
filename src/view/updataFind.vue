<!--
 * @Author: your name
 * @Date: 2020-11-28 15:01:49
 * @LastEditTime: 2020-11-30 00:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/view/index.vue
-->
<template>
  <div class="index">
    <div class="splider">
      <div class="splide-title">FIND</div>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <i class="home"></i>首页
          </template>
          <div
            class="tip1"
            @click="gotoIndex"
          >失物招领</div>
          <div
            class="tip1"
            @click="gotoIndex_topic"
          >寻物启示</div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <i class="person"></i>个人
          </template>
          <div
            class="tip1"
            @click="gotoIndextiezi"
          >我的帖子</div>
          <div
            class="tip1"
            @click="gotoIndexHistory"
          >浏览历史</div>
          <div
            class="tip1"
            @click="gotoIndexfollow"
          >我的关注</div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <i class="updata"></i>发帖
          </template>
          <div
            class="tip1"
            @click="gotoUpDataFind"
          >失物帖</div>
          <div
            class="tip1"
            @click="gotoUpDataCall"
          >招领帖</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="inner">
      <div class="header">
        <div></div>
        <div class="self">
          <div class="self-photo"></div>
          <div class="name">{{username}}</div>
        </div>
        <div class="title">
          发帖
        </div>
      </div>
      <div class="content">
        <div class="lost-cxt">
          <p>招领帖</p>
          <div class="lost-list">
            <p>上传图片</p>
            <question-edit-photo class="push-img"></question-edit-photo>
            <p>添加文字</p>
            <div class="input-block">
              <input
                type="text"
                class="list-input"
                placeholder="请输入你对失物的描述"
              >
              <div class="list-hr"></div>
            </div>
            <div class="updata-block">
              <div
                class="updata-button"
                @click="open2"
              >
                上传帖子
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionEditPhoto from "../components/EditImage";
// import { postPushCard } from "../server";
export default {
  components: {
    QuestionEditPhoto,
  },
  data() {
    return {
      username: "",
      list: [
        { tag: "一卡通", time: "11月30日", detail: "在二教捡到的" },
        { tag: "雨伞", time: "11月30日", detail: "在二教捡到的" },
        { tag: "水杯", time: "11月30日", detail: "在二教捡到的" },
        { tag: "一卡通", time: "11月30日", detail: "在二教捡到的" },
        { tag: "雨伞", time: "11月30日", detail: "在二教捡到的" },
        { tag: "水杯", time: "11月30日", detail: "在二教捡到的" },
        { tag: "一卡通", time: "11月30日", detail: "在二教捡到的" },
      ],
      showList: [],
      currentDate: new Date(),
      activeNames: ["1"],
      dynamicTags: ["一卡通", "雨伞", "水杯"],
      inputVisible: false,
      inputValue: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      start: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      end: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "上传成功",
        type: "success",
      });
    },
    handleChange(val) {
      console.log(val);
    },
    turn() {
      console.log(1);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    gotoIndex() {
      this.$router.push("/index");
    },
    gotoIndex_topic() {
      this.$router.push("/indexTopic");
    },
    gotoIndexHistory() {
      this.$router.push("/history");
    },
    gotoIndexfollow() {
      this.$router.push("/follow");
    },
    gotoIndextiezi() {
      this.$router.push("/tiezi");
    },
    gotoUpDataFind() {
      this.$router.push("/updataFind");
    },
    gotoUpDataCall() {
      this.$router.push("/updataCall");
    },
  },
  created() {
    console.log(this.$store.state.index);
  },
};
</script>

<style lang="scss">
.push-img {
  margin-left: 30px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #f4f6f9;
  .splider {
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
    .home {
      width: 30px;
      height: 30px;
      margin-left: 30px;
      margin-right: 5px;
      background-image: url("../assets/image/icon/home_on.png");
      background-size: cover;
    }
    .person {
      width: 30px;
      height: 30px;
      margin-left: 30px;
      margin-right: 5px;
      background-image: url("../assets/image/icon/Person-1.png");
      background-size: cover;
    }
    .updata {
      width: 30px;
      height: 30px;
      margin-left: 30px;
      margin-right: 5px;
      background-image: url("../assets/image/icon/updata.png");
      background-size: cover;
    }
    .splide-title {
      height: 50px;
      width: 20vw;
      line-height: 50px;
      font-weight: 900;
      font-size: 30px;
    }
    .tip1 {
      width: 20vw;
      margin-left: 70px;
      font-weight: 900;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      transition: all 0.4s linear;
      color: black;
      &:hover {
        color: rgb(143, 140, 140);
      }
    }
    .tip2 {
      width: 20vw;
      margin-left: 40px;
      text-align: left;
    }
  }
  .inner {
    width: 80vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
      width: 80vw;
      height: 100px;
      background-color: #03dac5;
      box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
      position: relative;
      display: flex;
      justify-content: space-between;
      .self-photo {
        width: 40px;
        height: 40px;
        margin: 5px;
        margin-right: 10px;
        border-radius: 50%;
        background-image: url("../assets/image/logo.png");
        background-size: cover;
      }
      .name {
        margin-right: 20px;
      }
      .self {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        position: absolute;
        text-align: left;
        font-weight: 600;
        font-size: 40px;
        line-height: 100px;
        width: 60vw;
        height: 100px;
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
        left: 50%;
        padding-left: 30px;
        transform: translateX(-50%) translateY(50%);
      }
    }
    .content {
      width: 80vw;
      height: 89vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 80px;
      .tags {
        margin-top: 20px;
        width: 1000px;
        height: 40px;
        display: flex;
      }
      .search {
        width: 1100px;
        height: 70px;
        border-radius: 30px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          height: 40px;
          width: 900px;
          margin-left: 40px;
          border: 0;
        }
        .search-icon {
          width: 30px;
          height: 30px;
          margin-right: 30px;
          background-image: url("../assets/image/icon/search.png");
          background-size: cover;
        }
      }
      .time {
        width: 1100px;
        height: 160px;
        display: flex;
        flex-direction: column;
        p {
          text-align: left;
          font-weight: 600;
          margin-left: 20px;
        }
        .time-select {
          width: 1100px;
          height: 80px;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .block {
            margin-left: 30px;
            margin-right: 60px;
          }
        }
      }
      .lost-cxt {
        width: 1100px;
        height: 650px;
        display: flex;
        flex-direction: column;
        p {
          text-align: left;
          font-weight: 600;
          margin-left: 20px;
        }
        .lost-list {
          width: 1100px;
          height: 650px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          .input-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .list-input {
            width: 1050px;
            height: 50px;
            padding-left: 10px;
            border: 0;
            outline-style: none;
          }
          .list-hr {
            width: 1050px;
            height: 3px;
            background-color: black;
          }
          .updata-block {
            width: 1100px;
            display: flex;
            .updata-button {
              margin-top: 20px;
              margin-left: 20px;
              border-radius: 10px;
              width: 200px;
              height: 50px;
              line-height: 50px;
              font-weight: 600;
              background-color: #08ecd6;
              transition: 0.5s linear all;
              cursor: pointer;
              &:hover {
                background-color: #03dac5;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
.time2 {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>