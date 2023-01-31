<template>
    <div id="app">

 <transition name="fade" appear>
  <div class="modal-overlay" v-if="retrieveUserCommentFlag" @click="commentFlagTrue()"></div>
 </transition>
 <transition name="slide" appear>
  
  <div class="modal" v-if="retrieveUserCommentFlag">
   <div class="commentSection">


    <textarea readonly class="adminComment" v-model="retrieveUserSelectedInfo.comments"></textarea>
   </div>

   
   <button class="button1" @click="commentFlagFalse()">
    Close Comment
   </button>
 
  </div>
 </transition>
</div>

</template>

<script src="../scripts/userPortalComment.js">

</script>

<style scoped>
@import url('../CSS/userPortalComment.css')
</style>