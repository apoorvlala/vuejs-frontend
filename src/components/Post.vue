<template>
    <div></div>
</template>
<script>
import {FETCH_POST_ACTION} from '../store/actions.type'
import {mapGetters} from 'vuex'
export default {
    name : "Post",
    mounted(){
        this.$store.dispatch(FETCH_POST_ACTION)
    },
    computed :{
        ...mapGetters(['posts'])   
    }   
}
</script>