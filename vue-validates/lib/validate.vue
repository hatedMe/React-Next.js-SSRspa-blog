


<template>
    <div class="inputbox">
        <label class="inputbox-left" style="padding: 10px 0 10px 12px;">{{ models.title }}</label>
        <div class="inputbox-right inputbox">
            <input :name="models.name" :type="models.type" v-model="models.value" class="input-text" :ref="models.name" :placeholder='models.placeholder' />
        </div>
    </div>
</template>


<script>
    import Validator from '../lib/validator.js';
    export default {
        props: {
            models : {
                type:Object
            }
        },
        name: 'Validate',
        methods: {
            clickHander(){
                this.$emit( 'childerEvent' );
            },
            emitHander (validator){
                validator.add( 
                    this.$refs[ this.$props.models.name ] ,
                    this.$props.models.validator
                )
            }
        }
    }
</script>



<style>
    /*----------------inputbox.less(start)--------------*/
    .inputbox {
        position: relative;
        display: -webkit-box;
        -webkit-box-align: center;
        /*box内的表单框*/
        /*box内顶天立地的控件*/
        /*box内文字*/
    }
    .inputbox .input-text,
    .inputbox .input-textarea,
    .inputbox .input-pre {
        -webkit-appearance: none;
        background: none;
        border: none;
        display: block;
        -webkit-box-flex: 1.0;
    }
    .inputbox .block+.icon {
        position: absolute;
        top: 50%;
        right: 0;
        -webkit-transform: translateY(-50%);
        pointer-events: none;
    }
    .inputbox label {
        line-height: 24px;
    }
    .inputbox-left {
        display: block;
        width: 30%;
    }
    .inputbox-right {
        -webkit-box-flex: 1.0;
    }
    .inputbox-search .inputbox-search-placeholder {
        pointer-events: none;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        color: #cccccc;
    }
    .inputbox-search .inputbox-search-placeholder .inputbox-search-icon {
        display: block;
        font-size: 20px;
        height: 20px;
        width: 20px;
    }
    .inputbox-search .inputbox-search-placeholder .inputbox-search-font {
        display: block;
        height: 20px;
        line-height: 22px;
        margin-left: 4px;
    }
    .inputbox-search.active .inputbox-search-placeholder {
        display: none;
    }
    .inputbox-search input[type=search]:focus~.inputbox-search-placeholder {
        display: none;
    }
    .inputbox-error {
        background-color: transparent;
        -webkit-animation-duration: 1000ms;
        -webkit-animation-fill-mode: both;
        -webkit-animation-name: inputboxError;
    }
    @-webkit-keyframes inputboxError {
        0% {
            background-color: transparent;
        }
        33% {
            background-color: #ffecec;
        }
        66% {
            background-color: transparent;
        }
        100% {
            background-color: #ffecec;
        }
    }
    /*----------------inputbox.less(end)--------------*/
    /*----------------inputtext.less(start)--------------*/
    .input-text {
        box-sizing: border-box;
        min-height: 20px;
        line-height: 20px;
        padding: 12px 8px;
        text-align: left;
    }
    /*----------------inputtext.less(end)--------------*/
    /*----------------inputcolor.less(start)--------------*/
    input[type="color"] {
        width: 44px;
        height: 24px;
        border-width: 0;
        padding: 0;
        background-color: #eee;
    }
    ::-webkit-color-swatch-wrapper {
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        background-color: white;
        border-color: #d1d1d1;
    }
    ::-webkit-color-swatch {
        position: relative;
        height: 18px;
        left: 0;
        top: -2px;
        border: none;
    }
</style>

