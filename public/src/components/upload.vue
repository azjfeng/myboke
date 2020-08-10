<style >
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
   .vertical-center-modal .ivu-modal{
            top: 0;
    }
    .v-transfer-dom .ivu-modal-mask{
        display: block
    }
    .ivu-table-column-Xf0gsO .ivu-table-cell{
        width: 80px
    }
</style>
<template>
    <div>
    <Modal
    v-model="modal9"
        title="上传"
        :visible.sync="modal9"
        :style="{top: '20px'}"
        width="780" heigt="780"
        @on-ok="onOk"
        @on-cancel="onCancel">
        <slot name="header"></slot>
        <i-table height="500" :columns="columns1" :data="data2">
            <template slot-scope="{row}" slot="option" >
                <Button type="primary" size="small" @click="showRow(row)" style="width:100px;margin-top:3px">编辑</Button>
                <Button type="primary" size="small" style="width:100px;margin-top:3px">编辑</Button>
                <Button type="primary" size="small" style="width:100px;margin-top:3px">编辑</Button>
            </template>
        </i-table>
    </Modal>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                modal9: true,
                modal10: true,
                bool:false,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title:"操作",
                        key:"option",
                        slot:"option",
                        width: 150,
                        align: "center"
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        props:[],
        methods: {
            onOk:function(){
               this.$emit('close',false)
            },
             onCancel:function(){
                this.$emit('close',false)
            },
            showRow:function(index){
                console.log(index)
            }
        },
    }
</script>
