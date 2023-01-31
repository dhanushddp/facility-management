<template>
  <div>
    <div class="adminHeadSection">
      <i
        style="
          position: absolute;
          left: 20px;
          cursor: pointer;
          margin-top: 10px;
        "
        @click="refresh()"
        class="fa fa-home fa-2x"
        aria-hidden="true"
       ></i>

      <div class="adminHead">
        <i class="fa fa-user fa-2x" aria-hidden="true"></i>

        <h3 class="adminName">Hello {{ adminName }}</h3>
        <i
          @click="show()"
          style="cursor: pointer"
          class="fa fa-sign-out fa-2x"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div class="overview">
      <div><h2 style="cursor: pointer" @click="all()">Overview</h2></div>
      <div style="margin-top: 20px">
        <i @click="addCat()" class="fa fa-plus fa-2x" aria-hidden="true" style="cursor:pointer"></i>
        <h3 style="display: inline; margin-left: 10px">Add category</h3>
      </div>
    </div>

    <div class="dashboard">
      <div class="inProgress" @click="filterByOpen()">
        <div class="icon">
          <i class="fa fa-tasks fa-2x" aria-hidden="true"></i>
          <h2 class="inProgressCount">{{ retrieveRequestCount.OPEN }}</h2>
        </div>
        <div style="font-size: 20px; width: fit-content">InProgress</div>
      </div>
      <div class="reviewed" @click="filterByReview()">
        <div class="icon">
          <i class="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>
          <h2 class="inProgressCount">{{ retrieveRequestCount.REVIEWED }}</h2>
        </div>
        <div style="font-size: 20px; width: fit-content">Reviewed</div>
      </div>
      <div class="completed" @click="filterByComplete()">
        <div class="icon">
          <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
          <h2 class="inProgressCount">{{ retrieveRequestCount.COMPLETED }}</h2>
        </div>
        <div style="font-size: 20px; width: fit-content">Completed</div>
      </div>
      <div class="overdue" @click="filterByOverdue()">
        <div class="icon">
          <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i>
           <h2 class="inProgressCount">{{ retrieveRequestCount.OVERDUE }}</h2>
        </div>
        <div style="font-size: 20px; width: fit-content">Overdue</div>
      </div>
    </div>
    <div class="filter">
      <div class="slaSort">
        <label
          style="
            text-align: left;
            font-size: 20px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
              seri f;
          "
        >
          SLA</label
        >
        <select
          class="typeadmin"
          name="type"
          style="border-bottom: 1px solid grey"
          @input="slaFilter"
        >
          <option value="" disabled selected hidden>
            -----Select a Type-----
          </option>

          <option value="IMMEDIATE">Very Urgent</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Moderate</option>
          <option value="LOW">Low</option>
        </select>
      </div>
      <div class="categorySort">
         <label
         style="
            text-align: left;
            font-size: 20px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
              seri f;
          "><i style="padding-right: 10px;"  class="fa fa-building-o" aria-hidden="true"></i>Category</label>

         <select  class="category1" name="category" style="border-bottom:1px solid grey"  @input="categoryInfo" >
       
          <option v-for="(category,index) in retrieveCategoriesAdmin" :key="index">{{ category?.categoryName }}</option>
       </select>
        </div>
     
    </div>
    <adminPortalTable />
    <adminPortalComment />
    <adminPortalCloseForm />
    <addAdminCategory />
  </div>
</template>

<script src="../scripts/adminPortalComponent.js">
</script>

<style scoped>
@import url("../CSS/adminPortalComponent.css");
</style>