<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-blue">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="../assets/images/logo.png" alt="Angular Project" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">Home</a> -->
              <router-link exact :to="{name :'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">About</a> -->
              <router-link exact :to="{name:'page'}" class="nav-link">About</router-link>
            </li>           
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Blog</a> -->
              <router-link class="nav-link" exact :to="{name : 'blog'}">Blog</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Blog</a> -->
              <router-link class="nav-link" exact :to="{name : 'addblog'}">Add Blog</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Blog</a> -->
              <router-link class="nav-link" exact :to="{name : 'contact'}">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  mounted(){
    console.log(this.$route.path)
  }
};
</script>
<style scoped>
</style>