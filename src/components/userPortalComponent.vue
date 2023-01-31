
import submittedForm from '@/scripts/submittedForm';

<template>
  <div>
    <div class="userHeadSection">
      <i
        @click="home()"
        style="position: absolute; left: 20px; margin-top: 10px;cursor: pointer;"
        class="fa fa-home fa-2x"
        aria-hidden="true" ></i>

      <div class="userHead">
        <i @click="userProfileShow()" class="fa fa-user fa-2x" aria-hidden="true" style="padding-right: 10px;cursor: pointer;"></i>

        <h3 class="userName">Hello {{ userData.userName }}</h3>
        <i @click="show()" class="fa fa-sign-out fa-2x" aria-hidden="true" style="cursor: pointer;"></i>
      </div>
    </div>
    <div class="addRequest">
      <div><h2>Requests</h2></div>
      <div style="cursor: pointer;">
     
        <a @click="addForm()" class="btn">
          
          <i style="color: black;" class="fa fa-plus fa-lg"></i>
        </a>
      </div>
    </div>
    <div class="addResultTag">
      <div>
        Add Request
      </div>
    </div>
    <userPortalRequestForm :userId="userId" v-if="retrieveFormFlag"/>
    <userProfile/>
    <userCloseConfirmBox/>
    <submittedForm></submittedForm>
    <userPortalRequestTable/>
    <userPortalComment/>
    <userPortalViewAction/>
  </div>
</template>

<script src="../scripts/userPortalComponent.js">
</script>


<style scoped>
@import url("../CSS/userPortalComponent.css");
</style>