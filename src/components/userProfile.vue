<template>
    <div id="app">

<transition name="fade" appear>
 <div class="modal-overlay" v-if="retrieveUserProfileFlag" @click="commentFlagTrue()"></div>
</transition>
<transition name="slide" appear>
 
 <div class="modal" v-if="retrieveUserProfileFlag">
  <div class="commentSection1">
    <div class="userProfile">
    <div  class="flexUser">
        <div class="user-image">
            <i class="fa fa-user-circle fa-5x" aria-hidden="true"></i>

        </div>
        <div class="userDetails">
            <div class="userId" style="padding-bottom:10px;padding-top: 10px;">UserId : {{retrieveUserPersonalInfo.userId}}</div>
            <div class="userName1" style="padding-bottom:10px">UserName : {{ retrieveUserPersonalInfo.userName }}</div>
            <div class="role" style="padding-bottom:10px">Role: {{ retrieveUserPersonalInfo.role }}</div>
            <div class="phoneNumber" style="padding-bottom:10px">Phone: {{ retrieveUserPersonalInfo.phone }}</div>
            <div class="email" style="padding-bottom:10px">Email id: {{ retrieveUserPersonalInfo.email }}</div>
        </div>
    </div>
   </div>

  </div>

  
  <button class="button1" @click="commentFlagFalse()">
   Close 
  </button>

 </div>
</transition>
</div>
</template>

<script src="../scripts/userProfile.js">
</script>

<style scoped>
@import url('../CSS/userProfile.css');
</style>


