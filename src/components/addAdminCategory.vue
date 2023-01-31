<template>
       <div id="app">

<transition name="fade" appear>
 <div class="modal-overlay" v-if="retrieveAddCategoryFlag" @click="commentAddFlagTrue()"></div>
</transition>
<transition name="slide" appear>
 
 <div class="modal" v-if="retrieveAddCategoryFlag">
  <div class="commentSection">


   <input type="text" style="font-size:20px" class="adminComment" v-model="category" />
  </div>
  <h4 v-if="pleaseAdd" style="font-size:14px;color:red">add category cannot be empty</h4>


  
  <button class="button1" @click="commentAddFlagFalse()">
   Add Category
  </button>
  <button class="button31" @click="closeCategory()">
   Close
  </button>

 </div>
</transition>
</div>
</template>

<script src="../scripts/addAdminCategory.js">

</script>

<style scoped>
@import url("../CSS/addAdminCategory.css");
</style>