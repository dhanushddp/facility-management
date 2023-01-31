<template>
    <div>
        <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="retrieveCloseConfirmBoxFlag"
        @click="flagCloseTrue()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="retrieveCloseConfirmBoxFlag">
        <div class="commentSection2">
            <i class="fa fa-check-square-o fa-3x" aria-hidden="true"></i>

          {{message}}
        </div>


        
      </div>
    </transition>
    </div>
</template>

<script src="../scripts/userCloseConfirmBox.js">
</script>

<style scoped>
@import url('../CSS/userCloseConfirmBox.css');
</style>