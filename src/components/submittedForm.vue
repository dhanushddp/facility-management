<template>
     <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="retrievethankMessage"
        @click="flagTrue()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="retrievethankMessage">
        <div class="commentSection1">
            <i class="fa fa-check-square-o fa-3x" aria-hidden="true"></i>

          Submitted SuccessFully
        </div>


        
      </div>
    </transition>
  </div>
</template>

<script src="../scripts/submittedForm.js">
</script>

<style scoped>
@import url('../CSS/submittedForm.css');
</style>