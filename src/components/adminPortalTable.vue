<template>
      <div class="containeradmin">
    <ul class="responsive-tableadmin">
      <li class="table-headeradmin">
        <div class="coladmin col-1admin">TaskId</div>
        <div class="coladmin col-2admin">Request/Area</div>
        <div class="coladmin col-3admin">summary</div>
        <div class="coladmin col-31admin">Assignee</div>
        <div class="coladmin col-4admin">SLA</div>
        <div class="coladmin col-5admin">Created</div>
        <div class="coladmin col-6admin">Status</div>
        <div class="coladmin col-7admin">Actions</div>
      </li>
      <li v-if="retrieveAdminRequestApi.length==0" style="justify-content: center" class="table-rowadmin">No data Found</li>
      <li v-else  v-for="(request,index) in retrieveAdminRequestApi" :key="index" class="table-rowadmin" >
        <div class="coladmin col-1admin" data-label="TaskId">{{ request.issueId }}</div>
        <div class="coladmin col-2admin" data-label="Request/Area">{{ request.type }}/{{ request.category }}</div>
        <div class="coladmin col-3admin" data-label="summary">{{ request.description }}</div>
        <div class="coladmin col-31admin" data-label="Assignee">{{request.assigneeName}} - {{ request.assigneeUserId }}</div>

        <div v-if="parseFloat(request.sla)!=0.1"  class="col col-4admin " v-bind:class="{
        'redadmin': parseInt(request.sla)<=2,
        'yellowadmin': parseInt(request.sla)<=6 && parseInt(request.sla)>2 ,
        'greenadmin': parseInt(request.sla)>6,}" data-label="SLA" >{{request.sla }}</div>
        

        <div v-else  class="col col-4admin " v-bind:class="{
        'redadmin': parseInt(request.sla)<=2,
        'yellowadmin': parseInt(request.sla)<=6 && parseInt(request.sla)>2 ,
        'greenadmin': parseInt(request.sla)>6,}" data-label="SLA" >&lt; 0.5</div>

        <div class="coladmin col-5admin" data-label="Created">{{(request.createdDate).split('T')[0] }}</div>
        <div class="coladmin col-6admin"  v-bind:class="{
        'open1': request.status=='OPEN',
         'reviewed1':request.status=='REVIEWED',
         'complete1':request.status=='COMPLETED',
         'overdue1':request.status=='OVERDUE' }"  data-label="Status">{{ request.status }}</div>
        <div class="coladmin col-7admin" data-label="Actions">
          <i
            style="padding-left: 20px;cursor: pointer;"
            class="fa fa-commenting-o fa-2x"
            aria-hidden="true"


        @click="commentAdminFlagTrue(request)"
          ></i>
          <i
            
          style="padding-left: 20px;cursor: pointer;"
            class="fa fa-eye fa-2x"
            aria-hidden="true"
            @click="commentAdminFlagAction(request)"></i>

        </div>
      </li>
      
      
      <div class="pageNatiomadmin">
      <div class="Backadmin" @click="BackPagination()">
        <i class="fa fa-hand-o-left fa-2x" aria-hidden="true"></i>

      </div>
      <div class="Nextadmin" @click="NextPagination()">
        <i class="fa fa-hand-o-right fa-2x" aria-hidden="true"></i>

      </div>
    </div>
    </ul>
  </div>
</template>

<script src="../scripts/adminPortalTable.js">

</script>


<style scoped>
@import url('../CSS/adminPortalTable.css');
</style>