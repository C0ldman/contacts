<template>
  <div id="app">
    <div id="nav">
      <UserList class="userList" :users="users"></UserList>
      <router-view>
        <UserInfo></UserInfo>
      </router-view>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/userList";
import UserInfo from "@/components/userInfo";
export default {
  components: {
    UserList,
    UserInfo
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    getUsers() {
      this.axios.get('user?limit=10',{headers: {'app-id': '6209695067b8384c09e46a19'}})
      .then((response)=>this.users=response.data.data)
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
}

.userList {
  width: 30%;
  margin-right: 10px;
}
</style>
