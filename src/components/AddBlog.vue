<template>
  <div>
    <section class="cmspage mtb-40">
      <div class="container">
        <div class="page-desc">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <h1>Add Blog Post</h1>
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="post.name"
                    class="form-control"
                    placeholder="Enter name..."
                    required
                  />
                  <!-- <div *ngIf="name.invalid && (name.dirty || name.touched)" class="error">
                    <div *ngIf="name.errors.required">Name is required.</div>
                  </div>-->
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="post.title"
                    class="form-control"
                    placeholder="Enter post title"
                    required                    
                  />
                  <!-- <div *ngIf="email.invalid && (email.dirty || email.touched)" class="error">
                    <div *ngIf="email.errors.required">Email is required.</div>
                    <div *ngIf="email.errors.email">Email must be a valid email address.</div>
                  </div>-->
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="image"
                    id="image"
                    v-model="post.image"
                    class="form-control"
                    placeholder="Enter image url"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    id="message"
                    v-model="post.detail"
                    rows="5"
                    class="form-control"
                    placeholder="Enter post detail"
                    required
                  ></textarea>
                  <!-- <div *ngIf="message.invalid && (message.dirty || message.touched)" class="error">
                    <div *ngIf="message.errors.required">Message is required.</div>
                  </div>-->
                </div>
                <div class="form-group">
                  <button class="btn btn-success">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- <div class="service-error" *ngIf="error">
          <h1>{{error.errorTitle}}</h1>
          <h3>{{error.errorDesc}}</h3>
        </div>
        <div [hidden]="!submitted" class="contact-message">
          <div *ngIf="model.id" class="contact-success">
            <h2 class="success">Success!</h2>
            <h4>Contact form has been successfully submitted.</h4>
            <br />
            <button class="btn btn-info">Go to Home</button>
          </div>
        </div>-->
      </div>
    </section>
  </div>
</template>
<script>
import {CREATE_POST_ACTION} from '@/store/actions.type'
export default {
  name: "AddBlog",
  data(){      
      return{
          post :{
              name:'',
              title:'',
              detail:'',
              image:''
          }
      }
  },
  methods:{
      onSubmit(){
          console.log(this.post)
          this.$store.dispatch(CREATE_POST_ACTION , this.post)
          .then(()=>this.$router.push({name:'blog'}))
      }
  }
};
</script>
<style scoped>
</style>