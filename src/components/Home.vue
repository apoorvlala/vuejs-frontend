<template>
  <div>  
      <Banner/>  
      <BlogpostFeatured/>
  </div>
</template>
<script>
import Banner from './Banner'
import BlogpostFeatured from './BlogpostFeatured'
export default {
  name: "Home",
  components: {
      Banner ,
      BlogpostFeatured
  }
};
</script>
<style scoped>
</style>