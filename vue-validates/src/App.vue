<template>
	<div id="app">
		<vueForm ref="myform">
			<Validate v-for="(item,index) in models" :ref="item.name" :key="index" :models="item"></Validate>
		</vueForm>
		<button @click="clickHaner">按钮</button>
	</div>
</template>

<script>

	import vueForm from '../lib/vue-from';
	import Validate from '../lib/validate';

	import Validator from '../lib/validator.js';

	export default {
		name: 'app',
		components: {
			vueForm,
			Validate
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				models:[
					{
						name : 'userName',
						title : '名字',
						type : 'text',
						validator:[{
							rule : 'isNonEmpty',
                    		errorMsg : '输出的值不能为空'
						}],
						placeholder : '请输入文字'
					},
					{
						name : 'userEmail',
						title : '邮箱',
						type : 'text',
						validator:[{
							rule : 'isNonEmpty',
                    		errorMsg : '测试输出的第二个输入框'
						}],
						placeholder : '请输入邮箱'
					}
				]
			}
		},
		methods: {
			clickHaner(){
				let validator =new Validator();
				console.log( this.$refs.myform );
				this.$data.models.forEach( ( element ,index ) => {
					this.$refs[element.name][0].emitHander(validator);
				});
				let errorMsg = validator.start();
				console.log( errorMsg );
				
			},
			changehander(){
                alert( '我被触发了456' );
			}
			
			
		}
	}
</script>

<style>

</style>
