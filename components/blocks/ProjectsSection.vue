<template>
  <div :style="isIntro ? 'z-index: 1000;' : ''" class="projects-section">
      <div class="projects-section-header">
        <p>Mavzular</p>
        <p class="time">{{currentTime}}</p>
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div id="theme-items-count" class="item-status">
            <span class="status-number">{{getThemeCount}}</span>
            <span class="status-type">Jami mavzular</span>
          </div>
          <transition-group id="in-progress-count" name="fade" tag="div" class="item-status">
            <span v-if="!isVideoBox" key="st1" class="status-number">0</span>
            <span v-if="!isVideoBox" key="st2" class="status-type">Jarayonda</span>
          </transition-group>
        </div>
        <div class="view-actions">
          <button @click="gridMode = 0" :class="`view-btn list-view ${gridMode == 0 ? 'active' : ''}`" title="List View">
            <i class="fa-solid fa-list"></i>
          </button>
          <button @click="gridMode = 1" :class="`view-btn grid-view ${gridMode == 1 ? 'active' : ''}`" title="Grid View">
            <i class="fa-solid fa-grid-2"></i>
          </button>
        </div>
      </div>

      <ProjectBoxes :gridMode="gridMode" :indexMenu="indexMenu"/>

  </div>  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProjectBoxes from '../projects/ProjectBoxes';

function formatDateTime(sDate,FormatType) {
    var lDate = new Date(sDate)

    var month=new Array(12);
    month[0]="Yanvar";
    month[1]="Fevral";
    month[2]="Mart";
    month[3]="Aprel";
    month[4]="May";
    month[5]="Iyun";
    month[6]="Iyul";
    month[7]="Avgust";
    month[8]="Sentabr";
    month[9]="Oktabr";
    month[10]="Noyabr";
    month[11]="Dekabr";

    var weekday=new Array(7);
    weekday[0]="Yakshanba";
    weekday[1]="Dushanba";
    weekday[2]="Seshanba";
    weekday[3]="Chorshanba";
    weekday[4]="Payshanba";
    weekday[5]="Juma";
    weekday[6]="Shanba";

    var hh = lDate.getHours() < 10 ? '0' + 
        lDate.getHours() : lDate.getHours();
    var mi = lDate.getMinutes() < 10 ? '0' + 
        lDate.getMinutes() : lDate.getMinutes();
    var ss = lDate.getSeconds() < 10 ? '0' + 
        lDate.getSeconds() : lDate.getSeconds();

    var d = lDate.getDate();
    var dd = d < 10 ? '0' + d : d;
    var yyyy = lDate.getFullYear();
    var mon = eval(lDate.getMonth()+1);
    var mm = (mon<10?'0'+mon:mon);
    var monthName=month[lDate.getMonth()];
    var weekdayName=weekday[lDate.getDay()];

    if(FormatType==1) {
       return monthName + ', ' + dd;
    } else if(FormatType==2) {
       return weekdayName+', '+monthName+' '+ 
            dd +', ' + yyyy;
    } else if(FormatType==3) {
       return mm+'/'+dd+'/'+yyyy; 
    } else if(FormatType==4) {
       var dd1 = lDate.getDate();    
       return dd1+'-'+Left(monthName,3)+'-'+yyyy;    
    } else if(FormatType==5) {
        return mm+'/'+dd+'/'+yyyy+' '+hh+':'+mi+':'+ss;
    } else if(FormatType == 6) {
        return mon + '/' + d + '/' + yyyy + ' ' + 
            hh + ':' + mi + ':' + ss;
    } else if(FormatType == 7) {
        return  dd + '-' + monthName.substring(0,3) + 
            '-' + yyyy + ' ' + hh + ':' + mi + ':' + ss;
    }
}

export default {
  components:{ProjectBoxes},
  async mounted() {
    this.$axios.get('http://worldtimeapi.org/api/timezone/Asia/Tashkent').then(data => data.data)
     .then(response => {
      this.currentTime = formatDateTime(response.utc_datetime, 1);
     })
     .catch(error => this.currentTime = formatDateTime(new Date().toDateString(), 1));
  },
  data() {
    return {
      gridMode: 1,
      currentTime: null,
    }
  },
  props:{
    indexMenu:{
      type: Number,
      default: -1
    }
  },
  methods:{
    ...mapActions(['countTheme']),
  },
  computed:{
    ...mapGetters(['allThemes', 'getThemeCount', 'allVideos', 'isVideoBox', 'currentStep']),
    getAllThemeCount(){
      return this.allThemes.filter((item) => {return item.parentId == this.indexMenu}).length
    },
    isIntro(){
      return (this.currentStep >=14 && this.currentStep <= 37);
    },
  },
  watch:{
    indexMenu(){
        this.countTheme(this.getAllThemeCount);
    }
  }
}
</script>