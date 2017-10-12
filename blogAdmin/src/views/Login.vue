<template>
	<div class="login">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="form.password" type="password"></el-input>
			</el-form-item>
			<el-button type="primary" size="small" @click="onSubmit">立即创建</el-button>
			<!-- <p>{{ token }}</p> -->
			</el-form-item>
		</el-form>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'login',
	data() {
		return {
			form: {
				name: '',
				password: ''
			}
		}
	},
	computed: {
		...mapGetters(['token']),
	},
	methods: {
		async onSubmit() {
			let data = await this.axios.post('/login', {
				name: this.form.name,
				password: this.form.password
			}).then(res => {
				if( res.data.status == 200){
					return res.data
				}
			}).catch(err => {
				console.log(err);
			});
			console.log(data);
			this.$store.commit('loginIn', data.token);
			this.$router.push({ path: 'articlemanagement/editor' });  // 重定向

		}
	},

	//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login { width: 400px; height: 500px; margin: 140px auto; }
.login button{ text-align: center; display: -webkit-box; margin: 0 auto; width: 50%;}

</style>
