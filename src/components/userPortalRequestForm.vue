<template>
  <div class="container1">
    <div class="brand-title">Request/Grievances Form</div>

    <div class="inputs1">
      <div style="width: 50%">
        <label><i style="padding-right: 10px;"  class="fa fa-question-circle" aria-hidden="true"></i>Type</label>

        <select class="type" name="type" style="border-bottom:1px solid grey" v-model="requestDetails.type" >
          <option value="" disabled selected hidden>-----Select a Type-----</option>

          <option value="Request">Request</option>
          <option value="Grievance">Grievance</option>
        </select>
      </div>
      <div style="width: 50%">
        <label><i style="padding-right: 10px;"  class="fa fa-building-o" aria-hidden="true"></i>Category</label>

        <select  class="category" name="category" style="border-bottom:1px solid grey" v-model="requestDetails.category">

          <option v-for="(category,index) in retrieveCategories" :key="index">{{ category?.categoryName }}</option>
         

        </select>
      </div>
    </div>
    <div class="sla">
      <label><i style="padding-right: 10px;"  class="fa fa-clock-o" aria-hidden="true"></i>SLA in hrs</label>
      <select class="slaField" style="border-bottom:1px solid grey" name="category" v-model="requestDetails.sla">
        <option value="" disabled selected hidden>-----Select time period-----</option>
        <option value="0.1">less than half an hour</option>

        <option value="0.5">0.5</option>
        <option value="1">1</option>

        <option value="1.5">1.5</option>

        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </div>
    <div class="summary">
      <label><i style="padding-right: 10px;"    class="fa fa-comments" aria-hidden="true"></i>Summary</label>
      <textarea placeholder="Write about your request/grievanves...." class="summaryText" v-model="requestDetails.description"></textarea>
    </div>
    <p v-if="isType" style="color:red;font-size:14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">*Please Fill out all the fields</p>

    <div class="submit">
       <button class="close buttonClass"  type="button" @click="closeForm()">Close</button>
       <button class="post buttonClass"   type="button" @click="submitForm()">Submit</button>
    </div>
  </div>
</template>


<script src="../scripts/userPortalRequestForm.js">
</script>


<style scoped>
@import url("../CSS/userPortalRequestForm.css");
</style>