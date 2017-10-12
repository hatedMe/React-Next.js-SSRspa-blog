<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column align="center" label='序号' width="70" >
                <template scope="scope">{{ scope.$index+1 }}</template>
            </el-table-column>
            <el-table-column label="发布时间" >
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
            </el-table-column>
            <el-table-column label="文章标题" >
                <template scope="scope">
                    <p>{{ scope.row.title }}</p>
                </template>
            </el-table-column>
            <el-table-column label="所属分类" width='120'>
                <template scope="scope">
                    <p>{{ scope.row.category }}</p>
                </template>
            </el-table-column>
            <el-table-column label="浏览次数" width='120' >
                <template scope="scope">
                    <p>{{ scope.row.viewCount }}</p>
                </template>
            </el-table-column>
            <el-table-column label="最后修改时间" >
                <template scope="scope">
                    <p>{{ scope.row.modifyTime }}</p>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.currPage"
                :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>

import moment from 'moment'

  export default {
    data() {
        return {
            tableData: [],
            total: 0,
            listQuery: {
                currPage: 1,    // 页数
                pageSize: 10,   // 条数
                name: '',       // 搜索的名字
                type: null,     // 搜索的标签
            },
        }
    },
    async mounted () {
        this.getList();
        //console.log(this);
    },
    methods: {
        async getList () {
            let pageSize = this.listQuery.currPage;
            let pageNum = this.listQuery.pageSize;
            let data = await this.axios.get('/api/getAllArticle',{
                params:{ pageNum ,pageSize}
            }).then(response=>{
                let toDate = iNow => moment(iNow).format('YYYY-MM-DD HH:mm:ss');
                this.total = response.data.total;
                return response.data.data.map((e,i)=> {
                    e.createTime = toDate(e.createTime)
                    e.modifyTime = toDate(e.modifyTime)
                    return e
                });
            });
            this.tableData = data;
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.$router.push( { path: '/articlemanagement/revisearticle', query: { id: row.articleId } } ); //带参跳转
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log('--------一页多少条：',val)
            this.listQuery.pageSize = val;
            this.getList();
        },
        //操作分页
        handleCurrentChange(val) {
            console.log('--------当前页：',val)
            this.listQuery.currPage = val;
            this.getList(val);
        },
    }
  }
</script>
<style>
.pagination-container { margin-top: 30px}
</style>
