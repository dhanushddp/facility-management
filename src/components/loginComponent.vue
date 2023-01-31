<template>
  <div class="divContainer">
    <div class="headerImageDiv">
      <img class="headerImage" src="../assets/quinbay.webp" />
    </div>
    <div class="container">
      <div class="box">
        <h3 id="head">Login</h3>
        <label><b>Email</b> </label>
        <input v-model="user.email"   class="input" type="text" /><br />
        <label><b>Password</b> </label>
        <input v-model="user.password" class="input" type="password" /><br /><br />
        <p v-if="showerror" style="font-size:14px;text-align: center;color:red;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Incorrect Credentials!!</p>

        <div class="signup">
          <button @click="userAuth()"  class="login" type="button"><b>LOGIN</b></button>
        </div>

      </div>
    </div>
  </div>
</template>

<script src="../scripts/loginComponent.js">
</script>

<style scoped>
@import "../CSS/loginComponent.css";
</style>
