<template>
    <div class="hello">
        <Button @click="success">显示成功提示</Button>
        <Button @click="warning">显示警告提示</Button>
        <Button @click="error">显示错误提示</Button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                bottomSheet: false
            }
        },
        methods: {
            success() {
                this.$Message.success('这是一条成功的提示');
            },
            warning() {
                this.$Message.warning('这是一条警告的提示');
            },
            error() {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            }
        }
    }
</script>

<style lang="less">

</style>
