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
    beforeMount(){

        //console.log( this.data ,'sd' );

    },


    async mounted(){
        
    let data = await new Promise((reject,relove) =>{
                setTimeout( ()=>{
                    reject( 
                        {
                            test : 
                            [
                                {name:1,age:2},
                                {
                                    name:[
                                        { '_index':'string~~~'}
                                    ],
                                    age:4
                                }
                            ]
                        }
                    )
                },1000 )
        })
        this.$data.msg = data;
        console.log( data );
    },

	data() {
        
		return {
			msg: {}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
