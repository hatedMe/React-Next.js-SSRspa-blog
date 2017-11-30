<template>
    <div>

        <p>{{message.test[0]['name']}}</p>

    </div>
</template>

<script>


export default {
	props: {
        message : {
            type: null,
            required : true
        }
    }
}

</script>


<style scoped>

</style>
