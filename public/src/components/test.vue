<template>
  <div>
      <upload-edit v-if="isShow"  @close="isShow = false">
        <template v-slot:header> 
            <h1>header</h1>
        </template>
      </upload-edit>
      <Form :label-width="80" :label-height="800">
        <Form-item label="文件上传">
          <div style="position:relative;margin-left:10px">
            <input type="file" @change="handleUpload" multiple style=" position:absloute;width:60px;opacity: 0;" />
            <Button style=" position:absloute;margin-left:-72px;" type="primary" :loading="loading">选择文件</Button>
          </div>
          <div class="info">
              <ul v-for="(item, index) in arr" :key="index">
                <li>
                  文件名:{{item.name}}
                </li>
                 <li>
                  文件路径:{{item.path}}
                </li>
                <li>
                  上传时间:{{item.time}}
                </li>
                <li>
                  文件大小:{{Math.floor((item.fileSize/1024))+"KB"}}
                </li>
              </ul>
          </div>
        </Form-item>
        <Form-item label="输入框">
            <i-input  placeholder="请输入"></i-input>
        </Form-item>
      </Form>
      <Button @click="isShow = true" type="primary">buitton</Button>
    </div>
</template>
<script>
import uploadEdit from './upload.vue'
export default {
  data() {
    return {
      file: null,
      loadingStatus: false,
      filename: "",
      filepath: "",
      arr:"",
      formInline: {
        user: "",
        password: ""
      },
      loading:false,
      isShow:false
    };
  },
  components:{
    uploadEdit
  },
  watch: {
    $route(newval, oldval) {
      // console.log(newval,oldval)
    }
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    handleUpload(e) {
      let self = this;
      self.loading = true
      let file = e.target.files;
      let formData, filename;
      if (file) {
        formData = new FormData();
        for (let i = 0; i < Object.keys(file).length; i++) {
          filename = file[i].name
          formData.append("filename" + i, filename);
          formData.append("file" + i, file[i]);
        }
      }
      $.ajax({
        url: "/upload",
        type: "post",
        data: formData,
        dataType: "json",
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        beforeSend: function(xhr) {
          xhr.withCredentials = true;
        },
        success: function(res) {
          self.loading = false;
                    console.log(res);
          if(res.arr.length == 0){
            self.$Message.info('此文件已上传过，请勿重复上传');
            return ;
          }
          self.arr = res.arr
        }
      });
    },
    upload() {
      this.loadingStatus = true;
      setTimeout(() => {
        this.file = null;
        this.loadingStatus = false;
        this.$Message.success("Success");
      }, 1500);
    },
    toLoading:function(){
      console.log("aa")
      this.loading = true
    },
    close:function(res){
      console.log(res)
      this.isShow = res
    }
  }
};
</script>

<style scoped>
    .info ul li{
      list-style: none;
    
    }
</style>