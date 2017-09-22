<template>
	<div class="createPost-main-container">
		<el-form :label-position="labelPosition" label-width="80px" ref="form" :model="form">
			<el-form-item label="文章标题">
				<el-input v-model="form.title"></el-input>
			</el-form-item>

			<el-form-item label="所属分类">
				<el-select v-model="form.category" placeholder="请选择所属分类">
					<el-option v-for='(item,index) in option' :label="item.cateName" key="index" :value="item.cateName"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="文章摘要">
				<el-input v-model="form.summary"></el-input>
			</el-form-item>

			

			<el-form-item label="文章内容">
				<div style="height:600px;">
					<mavonEditor v-model="form.value" style="height: 100%" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavonEditor>
				</div>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">{{ isRevise ? '马上修改' : '立即创建' }}</el-button>
				<el-button>保存草稿</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import marked from 'marked';

export default {
	components: {
		mavonEditor,
	},
	name: 'editor',
	computed: {
		...mapGetters(['isRevise']),
	},
	data() {
		return {
			labelPosition: 'top',
			form: {
				title: '',
				summary: '',
				category: '',
				labels: ['react','jsx'],
				content: '',
				value: '',
				id : ''
			},
			img_file: {},
			option:[],
		}
	},
	async beforeMount () {
		let id = this.$route.query.id;
		if( id && this.$route.path.match(/[a-zA-Z-:/]+\/([a-zA-Z]+)\??/)[1] === 'revisearticle' ){
			let reslut = await this.axios.post('/api/api/getrevisearticle',{id}).then(res => res.data );
			console.log(reslut);
			//console.log(JSON.parse( reslut.data.labels ));
			for( var attr in this.form){
				//console.log(this.form[attr]);
				//if( this.form[attr] === 'labels' ){
					//this.form[attr] = JSON.parse( reslut.data[attr] )
					//return;
				//}
				this.form[attr] = reslut.data[attr];
			}
			this.form.id = id ;
			this.$store.commit('reviseArticle',true);
		}else{
			
		}

	},
	async mounted () {
		this.axios.get('/api/api/allcategory').then(res => {
			this.option = res.data.data
		});
	},
	methods: {
		$imgAdd(pos, $file) {
			this.img_file[pos] = $file;
		},
		$imgDel(pos) {
			delete this.img_file[pos];
		},

		async onSubmit() {

			var content = this.form.content;
			var formdata = new FormData();
			for (var _img in this.img_file) {
				formdata.append('image', this.img_file[_img]);
			}

			this.form.content = marked(this.form.value);
			//console.log(this.form.content);

			//  判断是否有值，
			if (JSON.stringify(this.img_file) !== "{}") {

				 

				console.log(this.form.value);
				//formdata.append('access_token', this.$store.state.token )
				let lesult = await this.axios({
					method: 'post',
					url: 'http://api.djui.cn/api/addUserInfo',
					data: formdata
				});

				console.log(lesult);
				var reIndex = -1;
				this.form.value = this.form.value.replace(/!\[[^!]+\]\([^\)]+\)/g,function(str){
					reIndex++;
					console.log(reIndex);
					return str.replace(/\([\W\w]+\)/g,function(){
						console.log(reIndex);
						return `(http://pic.djui.cn/uploads/${lesult.data.data[reIndex].fileName})`
					})
				})
				

				// var re = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi;  //匹配所有img标签;
				// var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;  //正则匹配src地址;
				
				// this.form.content = this.form.content.replace(re, function($0, $1) {
					
				// 	return $0 = $0.replace(srcReg, function(_$0) {
				// 		return $0 = `src="${lesult.data.data[reIndex].fileName}"` //'src=' + '"5.png"'
				// 	})
				// })
			}

			// let converter = new showdown.Converter();
			// content = converter.makeHtml(this.form.value); // 转换md格式为html格式
			// content = markdown.toHTML(this.form.value );


			this.form.labels = JSON.stringify(this.form.labels);

			if( this.$store.state.isRevise ){
				await this.axios.post('/api/api/revisearticle', this.form).then(res => {
					if (res.data.status == 200) {
						this.$message({
							message: '提交数据成功！',
							type: 'success'
						});
					}
				})
			}else{
				await this.axios.post('/api/api/savearticle', this.form).then(res => {
					if (res.data.status == 200) {
						this.$message({
							message: '提交数据成功！',
							type: 'success'
						});
					}
				})
			}

			

			console.log(this.form);
		}
	},

}
</script>


<style scoped>
.createPost-main-container {
	padding: 40px 45px 20px 50px;
}
</style>
