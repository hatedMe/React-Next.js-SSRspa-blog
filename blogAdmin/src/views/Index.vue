<template>
	<div class="editor">
		<button @click="uploadimg">upload</button>
		<mavonEditor v-model="value" style="height: 100%" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavonEditor>
	</div>
</template>

<script>


import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import showdown from 'showdown'


export default {
	name: 'index',
	components: {
		mavonEditor,
	},
	data() {
		return {
			img_file: {},
			value: '',
			content: ''
		}
	},
	methods: {
		$imgAdd(pos, $file) {
			this.img_file[pos] = $file;
		},
		$imgDel(pos) {
			delete this.img_file[pos];
		},
		async uploadimg() {
			
			var formdata = new FormData();
			for (var _img in this.img_file) {
				formdata.append('image', this.img_file[_img]);
			}

			let converter = new showdown.Converter();
			this.$data.content = converter.makeHtml(this.$data.value); // 转换md格式为html格式

			let lesult = await this.axios({
				method: 'post',
				url: '/api/api/addUserInfo',
				data: formdata
			});

			var re = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi;  //匹配所有img标签;
			var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;  //正则匹配src地址;
			var reIndex = -1;
			this.$data.content = this.$data.content.replace(re,function($0,$1){
				reIndex++;
				return $0 = $0.replace( srcReg ,function(_$0){
					return $0 = `src="${lesult.data.data[reIndex].fileName}"` //'src=' + '"5.png"'
				})
			})


			

			console.log(this.$data.content);
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
	margin: auto;
	padding: 20px;
	height: 580px;
}
</style>
