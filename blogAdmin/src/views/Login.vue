<template>
	<div class="hello">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="name">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="password">
				<el-input v-model="form.password" type="password"></el-input>
			</el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<p>{{ token }}</p>
			<el-button>取消</el-button>
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
				name: 'admin',
				password: '123456'
			}
		}
	},
	computed: {
		...mapGetters(['token']),
	},
	methods: {
		async onSubmit() {
			let data = await this.axios.post('../api/login', {
				name: this.form.name,
				password: this.form.password
			}).then(res => {
				if( res.data.status == 200){
					return res.data
				}
			}).catch(err => {
				console.log(err);
			});

			this.$store.commit('loginIn', data.token);

		}
	},

	//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
