<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="retrieveAdminCommentFlag"
        @click="commentAdminFlagTrue()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="retrieveAdminCommentFlag">
        <div class="commentSection">
          <textarea class="adminComment" v-model="comment" ></textarea>
        </div>

        <button class="button1" @click="commentAdminFlagFalse()">
          Close Comment
          
        </button>
        <button class="button21" @click="postComment()">
          Post Comment
        </button>
        
      </div>
    </transition>
  </div>
</template>

<script src="../scripts/adminPortalComment.js">
</script>


<style scoped>
@import url("../CSS/adminPortalComment.css");
</style>