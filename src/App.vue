<template>
  <div class>
    <Header />
    <Home v-if="$route.path==='home'"/>
    <router-view></router-view>
    <Footer />
    <Post/>
  </div>
</template>

<script>
import Post from './components/Post'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
    Post    
  }
};
</script>

<style>
@import './assets/global.css';
</style>
