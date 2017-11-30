<template>
    <div>
		
		<button>456</button>
		<testChild :message="msg"></testChild>
        
    </div>
</template>

<script>

import testChild from './testChild'

export default {
	components: {
		testChild,
	},
	name: 'test',
	data() {
		return {
			msg: {
				test : [{name:1,age:2},{name:3,age:4}]
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
