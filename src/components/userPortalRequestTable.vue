<template>
  <div class="container">
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">TaskId</div>
        <div class="col col-2">Request/Area</div>
        <div class="col col-3">summary</div>
        <div class="col col-4">SLA</div>
        <div class="col col-5">Created</div>
        <div class="col col-6">Status</div>
        <div class="col col-7">Actions</div>
      </li>
      <li v-if="retrieveRequestApi.length==0" style="justify-content: center" class="table-row">No data Found</li>
      <li v-else class="table-row" v-for="(issue,index) in retrieveRequestApi" :key="index">
        <div class="col col-1" data-label="TaskId">{{issue.issueId }}</div>
        <div  class="col col-2" data-label="Request/Area">{{issue.type }}/{{issue.category }}</div>
        <div  class="col col-3" data-label="summary">{{issue.description }}</div>
        <div v-if="parseFloat(issue.sla)!=0.1"  class="col col-4 " v-bind:class="{
        'red': parseInt(issue.sla)<=2,
        'yellow': parseInt(issue.sla)<=6 && parseInt(issue.sla)>2 ,
        'green': parseInt(issue.sla)>6,}" data-label="SLA" >{{issue.sla }}</div>
        

        <div v-else  class="col col-4 " v-bind:class="{
        'red': parseInt(issue.sla)<=2,
        'yellow': parseInt(issue.sla)<=6 && parseInt(issue.sla)>2 ,
        'green': parseInt(issue.sla)>6,}" data-label="SLA" >&lt; 0.5</div>
        <div class="col col-5" data-label="Created">{{(issue.createdDate).split('T')[0] }}</div>
        <div class="col col-6" v-bind:class="{
        'open1': issue.status=='OPEN',
         'reviewed1':issue.status=='REVIEWED',
         'complete1':issue.status=='COMPLETED',
         'overdue1':issue.status=='OVERDUE' }" data-label="Status">{{issue.status }}</div>
        <div class="col col-7" data-label="Actions">
          <i
            @click="commentFlagTrue(issue)"

            style="padding-left: 20px;cursor: pointer;"
            class="fa fa-commenting-o fa-2x"
            aria-hidden="true"
          ></i>
          <i
            @click="commentFlagActionTrue(issue)"
            style="padding-left: 20px;cursor: pointer;"
            class="fa fa-eye fa-2x"
            aria-hidden="true"
          ></i>
          <i
           @click="deleteRequest(issue)"
            style="padding-left: 20px;cursor: pointer;"
            class="fa fa-trash-o fa-2x"
            aria-hidden="true"
          ></i>
        </div>
      </li>
      
     
      <div class="pageNatiom">
      <div class="Back">
        <i class="fa fa-hand-o-left fa-2x" aria-hidden="true"></i>

      </div>
      <div class="Next">
        <i class="fa fa-hand-o-right fa-2x" aria-hidden="true"></i>

      </div>
    </div>
    </ul>
   <userCloseConfirmBox :message=deleteMessage />
  </div>
  
</template>

<script src="../scripts/userPortalRequestTable.js">
</script>


<style  scoped>
@import url("../CSS/userPortalRequestTable.css");
</style>