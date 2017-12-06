<template>
    <div id="app">
        <swiper class="mySwiper" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiperSlide>I'm Slide 1</swiperSlide>
            <swiperSlide>I'm Slide 2</swiperSlide>
            <swiperSlide>I'm Slide 3</swiperSlide>
            <swiperSlide>I'm Slide 4</swiperSlide>
            <swiperSlide>I'm Slide 5</swiperSlide>
            <swiperSlide>I'm Slide 6</swiperSlide>
            <swiperSlide>I'm Slide 7</swiperSlide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import '../node_modules/swiper/dist/css/swiper.min.css'
    import { swiper , swiperSlide } from '../dist/vue-slidexswiper';
    export default {
        name: 'app',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // .....
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            //this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style>
    #app{
        width: 800px;
        margin: 60px auto;
    }
    .mySwiper{
        height: 400px;
        text-align: center;
        line-height: 400px;
        border: 2px seagreen solid;
    }
</style>
