<template>
  <div>
    <section class="featured-blog mtb-40">
      <div class="">
        <div class="row">
          <div class="col-md-4" v-for="(post ,index) in posts" :key="index">
            <div class="blog-box">
              <img src="../assets/images/img1.jpg" alt="blog1" />
              <h3>{{post.title}}</h3>
              <p>
                by
                <span>{{post.name}}</span> on
                <span>{{post.date}}</span>
              </p>
              <p>{{post.detail}}</p>
              <a href="#" class="btn btn-danger">Read more...</a>
            </div>
          </div>          
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {FETCH_POST_ACTION} from '../store/actions.type'
import {mapGetters} from 'vuex'
export default {
  name: "BlogpostFeatured",
  mounted(){
    this.$store.dispatch(FETCH_POST_ACTION)
  },
    computed :{
        ...mapGetters(['posts'])   
    }  
};
</script>
<style scoped>
</style>