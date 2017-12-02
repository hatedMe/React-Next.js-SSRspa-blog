<template>
    <div>

        <p>
            {{ 
                message.test instanceof Array ? 
                message.test[1]['name'][0]['_index'] :
                '加载中。。。'
            }}
        </p>

    </div>
</template>

<script>


export default {
	props: {
        message : {
            type: null, // null 所有内省都ok
            required : true  //是否必须
        }
    }
}

</script>


<style scoped>

</style>
