<template>
  <div class="user-container">
    <img class="user-container__image" :src="user.picture" alt="User picture"> <span class="user_container__title">{{ this.user.title }} {{ this.user.firstName }} {{ this.user.lastName }}</span>
    <div class="user-container__info">

      <ul>
        <li>Gender: {{ this.user.gender }}</li>
        <li>Email: {{ this.user.email }}</li>
        <li>Phone: {{ this.user.phone }}</li>
        <li>Country: {{ this.user.location.country }}</li>
        <li>City: {{ this.user.location.city }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      user: {}
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  beforeRouteUpdate(to) {
    this.isLoading=true;
    try {
      this.axios.get(to.path, {headers: {'app-id': '6209695067b8384c09e46a19'}})
          .then((response) => this.user = response.data);
    } catch (e) {
      this.error = e;
    } finally {
      this.isLoading=false;
    }

  }
}
</script>

<style scoped>
.user_container__title {
  font-family: Arial;
  font-weight: bold;
}
</style>
