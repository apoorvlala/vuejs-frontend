<template>
  <div>
    <section class="cmspage mtb-40">
      <div class="container">
        <div class="page-desc">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <h1>Contact</h1>
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="$v.user.name.$model"
                    class="form-control"
                    placeholder="Name"
                    :class="{ 'is-invalid': $v.user.name.$error }"
                  />
                  <div
                    v-if="submitted && !$v.user.name.required"
                    class="invalid-feedback"
                  >Name is required</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    v-model.trim="$v.user.email.$model"
                    class="form-control"
                    placeholder="E-Mail"
                    :class="{ 'is-invalid': $v.user.email.$error }"
                  />
                  <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                    <span v-if="!$v.user.email.required">Email is required</span>
                    <span v-if="!$v.user.email.email">Email is invalid</span>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    v-model="$v.user.phone.$model"
                    class="form-control"
                    placeholder="Phone"
                    :class="{ 'is-invalid': $v.user.phone.$error }"
                  />
                  <div
                    v-if="submitted && !$v.user.phone.required"
                    class="invalid-feedback"
                  >Phone no. is required</div>
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    id="message"
                    v-model="$v.user.message.$model"
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                    :class="{ 'is-invalid': $v.user.message.$error }"
                  ></textarea>
                  <div
                    v-if="submitted && !$v.user.message.required"
                    class="invalid-feedback"
                  >Message is required</div>
                </div>
                <div class="form-group">
                  <button class="btn btn-success">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>        
      </div>
    </section>
  </div>
</template>
<script>
import { CREATE_CONTACT_ACTION } from "../store/actions.type";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      phone: { required },
      message: { required }
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log(this.user);
      this.$store.dispatch(CREATE_CONTACT_ACTION, this.user).then(() => {
        this.resetForm();
        alert("THANKS CONTACT SAVED...");
      });
    },
    resetForm() {
      (this.user.name = ""),
      (this.user.email = ""),
      (this.user.phone = ""),
      (this.user.message = "");
    }
  }
};
</script>
<style scoped>
</style>