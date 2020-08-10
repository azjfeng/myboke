<template>
  <div class="app">
    <header style="height:100px">
      <Row>
        <Col span="12" style="text-align:center;line-height:100px">
          <h1>myboke</h1>
        </Col>
        <Col span="12">
          <Form ref="formInline" inline>
            <FormItem prop="user">
              <Input type="text" placeholder="搜索......" style="margin-top:30px;width:300px"></Input>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </header>

    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <router-link to="/home">
        <MenuItem name="1">
          <Icon type="ios-paper" />首页
        </MenuItem>
      </router-link>
      <router-link to="/test/123">
        <MenuItem name="2">
          <Icon type="ios-people" />
          笔记首页
        </MenuItem>
      </router-link>
      <router-link to="/test/456">
        <MenuItem name="3">
          <Icon type="ios-stats" />
          ANDROID
        </MenuItem>
      </router-link>
      <router-link to="/test/789">
        <MenuItem name="4">
          <Icon type="ios-construct" />
          ES6 教程
        </MenuItem>
      </router-link>
    </Menu>
    <br />
    <RadioGroup v-model="theme1">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
    </RadioGroup>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "aaaa",
      radio: "1",
      theme1: "light",
      isShow:false
    };
  },

  methods:{
  }
};
</script>

<style scoped>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background: gray;
}
</style>