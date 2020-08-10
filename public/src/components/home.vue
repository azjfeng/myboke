<template>
  <div class="test">
    <i-table :columns="columns1" :data="arr">
      <template slot-scope="{row}" slot="option">
        <Button
          type="primary"
          size="small"
          @click="showRow(row)"
          style="width:100px;margin-top:3px"
        >编辑</Button>
        <Button type="primary" size="small" style="width:100px;margin-top:3px">编辑</Button>
        <Button type="primary" size="small" style="width:100px;margin-top:3px">编辑</Button>
      </template>
    </i-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme1: "light",
      arr: [],
      columns1: [
        {
          title: "id",
          key: "id"
        },
        {
          title: "图片",
          key: "url",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("img", {
                attrs: {
                  src: params.row.url.replace(/(127.0.0.1:5000)/, "")
                },
                style: {
                  width: "100px",
                  height: "auto"
                }
              })
            ]);
          }
        },

        {
          title: "操作",
          key: "option",
          slot: "option",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  created() {
    // console.log($)
    this.getList();
  },
  methods: {
    getList: function() {
      let self = this;
      $.ajax({
        url: "/loadImgInfo",
        type: "post",
        // data: formData,
        dataType: "json",
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        beforeSend: function(xhr) {
          xhr.withCredentials = true;
        },
        success: function(res) {
          self.arr = res.arr;
          console.log(res);
        }
      });
    },
    showRow: function(index) {
      console.log(index);
    }
  }
};
</script>