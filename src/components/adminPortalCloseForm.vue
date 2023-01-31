<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlayView"
        v-if="retrieveAdminCommentFlagAction"
        @click="commentAdminFlagActiontrue()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modalView" v-if="retrieveAdminCommentFlagAction">
        <div class="container1View">
          <div class="brand-titleView">Request/Grievances Response</div>

          <div class="inputs1View">
            <div style="width: 50%">
              <label
                ><i
                  style="padding-right: 10px"
                  class="fa fa-question-circle"
                  aria-hidden="true"
                ></i
                >Type</label
              >
              <input
                type="text"
                class="typeView"
                v-model="retrieveAdminSelectedInfo.type"
                readonly
              />
            </div>
            <div style="width: 50%">
              <label
                ><i
                  style="padding-right: 10px"
                  class="fa fa-building-o"
                  aria-hidden="true"
                ></i
                >Category</label
              >
              <input
                type="text"
                class="categoryView"
                v-model="retrieveAdminSelectedInfo.category"
                readonly
              />
            </div>
          </div>
          <div class="sideByside">
            <div class="slaView">
              <label
                ><i
                  style="padding-right: 10px"
                  class="fa fa-clock-o"
                  aria-hidden="true"
                ></i
                >SLA in hrs</label
              >

              <input
                type="text"
                class="slaFieldView"
                v-model="retrieveAdminSelectedInfo.sla"
                readonly
              />
            </div>
            <div class="slaView">
              <label
                ><i
                  class="fa fa-hourglass-half"
                  style="padding-right: 10px"
                  aria-hidden="true"
                ></i>
                Status</label
              >

              <input
                type="text"
                class="slaFieldView"
                v-model="retrieveAdminSelectedInfo.status"
                readonly
              />
            </div>
          </div>
          <div class="thirdRow">
          <div class="slaView">
            <label
              ><i class="fa fa-user-secret" aria-hidden="true"></i>

              Assignee</label
            >

            <input
              type="text"
              class="slaFieldView"
              v-model="retrieveAdminSelectedInfo.assigneeName"
              readonly
            />
          </div>
          <div class="slaView1" >
            <label
              >          <i class="fa fa-tasks" aria-hidden="true"></i>


              Created on</label
            >

            <input
              type="text"
              class="slaFieldView"
              v-model="retrieveAdminSelectedInfo.createdDate.split('T')[0] "
              readonly
            />
          </div>
        </div>
        <div class="fourthRow">
          <div class="slaView">
            <label
              >          <i class="fa fa-folder-open-o " aria-hidden="true"></i>


              Reviewed on</label
            >

            <input v-if="retrieveAdminSelectedInfo.reviewedDate"
              type="text"
              class="slaFieldView"
              v-model="retrieveAdminSelectedInfo.reviewedDate.split('T')[0]"
              readonly
            />
            <input v-else
              type="text"
              class="slaFieldView"
              value="Not assigned"
              readonly
            />
          </div>
          <div class="slaView1" >
            <label
              >          <i class="fa fa-thumbs-o-up " aria-hidden="true"></i>


              Completed on</label
            >

            <input v-if="retrieveAdminSelectedInfo.completedDate"
              type="text"
              class="slaFieldView"
              v-model="retrieveAdminSelectedInfo.completedDate.split('T')[0]"
              readonly
            />
            <input v-else
              type="text"
              class="slaFieldView"
              value="Not assigned"
              readonly
            />

          </div>
        </div>
        

          <div class="summaryView">
            <label
              ><i
                style="padding-right: 10px"
                class="fa fa-comments"
                aria-hidden="true"
              ></i
              >Summary</label
            >
            <textarea
              readonly
              class="summaryTextView"
              v-model="retrieveAdminSelectedInfo.description"
            >
This is the readonly form</textarea
            >
          </div>
          <div class="submitView">
            <button
              class="closeView buttonClassView"
              @click="commentAdminFlagActionFalse()"
              type="button"
            >
              Close
            </button>
            <button class="postView buttonClassView" @click="Reviewed()" type="button">
              Review
            </button>
            <button class="postView buttonClassView" @click="Completed()" type="button">
              Complete
            </button>
          </div>
        </div>
      </div>
    </transition>
    <userCloseConfirmBox :message=message1 />

  </div>
</template>

<script src="../scripts/adminPortalCloseForm.js">
</script>

<style scoped>
@import url("../CSS/adminPortalCloseForm.css");
</style>