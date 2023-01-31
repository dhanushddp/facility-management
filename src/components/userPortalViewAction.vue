<template>
  <div id="app">
    <transition name="fade" appear>
      <div
        class="modal-overlayView"
        v-if="retrieveUserCommentFlagAction"
        @click="commentFlagActiontrue()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modalView" v-if="retrieveUserCommentFlagAction">
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
              <input type="text" class="typeView" v-model="retrieveUserSelectedInfo.type" readonly />
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
                v-model="retrieveUserSelectedInfo.category"     
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

              <input type="text" class="slaFieldView" v-model="retrieveUserSelectedInfo.sla" readonly />
            </div>
            <div class="slaView6">
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
                v-model="retrieveUserSelectedInfo.status"
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
            <textarea readonly class="summaryTextView" v-model="retrieveUserSelectedInfo.description">
This is the readonly form</textarea
            >
          </div>

          <div class="submitView">
            <button
              class="closeView buttonClassView"
              @click="commentFlagActionFalse()"
              type="button"
            >
              Close
            </button>
            <button class="postView buttonClassView" type="button" @click="CloseRequest()">
              Close Request
            </button>

          </div>
          <p style="color:red;font-size:12px" v-if="closeNot">Unable to close the request until completed status</p>
        </div>
      </div>
    </transition>
  </div>
</template>
  
  
  <script src="../scripts/userPortalViewAction.js">
</script>
  
  
  <style scoped>
@import url("../CSS/userPortalViewAction.css");
</style>