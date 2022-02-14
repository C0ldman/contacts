<template>
  <div>
    <div class="user" v-for="user in users" :key="user.id">
      <router-link class="user_box" :to="{ name: 'UserInfo', params: { id: user.id }}">
        <img class="user_photo" :src="user.picture" alt="User photo">
        <div class="user_info">{{user.title}} {{user.firstName}} {{user.lastName}}</div>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "userList",
  props: {
    users: Array
  }
}
</script>

<style scoped>
.user {
  box-shadow: 4px 3px 3px 0px lightgrey;
  margin-bottom: 2px;
}

.user_box {
  display: flex;
  align-items: center;
}

.user_photo {
  width: 72px;
  height: 72px;
  margin-right: 5px;
}
</style>
