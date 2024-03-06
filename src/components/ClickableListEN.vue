<template>
    <div class="accordion">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
      >
        <div
          class="accordion-header"
          @click="toggleItem(index)"
        >
          {{ item.title }}
          <span class="arrow" :class="{ rotated: item.isExpanded }">
        <img src="../assets/images/multiply.svg" />
        </span>
        </div>
        <transition name="slide-fade">
        <div
          class="accordion-content"
          v-if="item.isExpanded"
        >
          {{ item.content }}
        </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { title: 'CAREER COACHING', content: 'OUR CAREER COACHES WORK WITH INDIVIDUALS TO HELP THEM DEVELOP THEIR CONFIDENCE, SET CAREER GOALS AND DEVELOP A PLAN TO ACHIEVE THOSE GOALS.', isExpanded: true },
          { title: 'SKILLS DEVELOPMENT', content: 'WE OFFER A RANGE OF TRAINING PROGRAMS AND WORKSHOPS TO HELP INDIVIDUALS GAIN NEW SKILLS AND KNOWLEDGE IN THEIR AREAS OF INTEREST.', isExpanded: false },
          { title: 'NETWORKING', content: 'WE OFFER INDIVIDUALS THE OPPORTUNITY TO MAKE CONTACT WITH OTHER PROFESSIONALS IN THEIR FIELD AND EXPAND THEIR PROFESSIONAL NETWORKS.', isExpanded: false },
          { title: 'JOB PLACEMENT', content: 'WE WORK WITH EMPLOYERS TO HELP INDIVIDUALS FIND JOB OPPORTUNITIES THAT MATCH THEIR CAREER GOALS AND INTERESTS.', isExpanded: false },
          { title: 'MENTORING', content: 'WE OFFER MENTORING PROGRAMS TO HELP INDIVIDUALS LEARN FROM EXPERIENCED PROFESSIONALS IN THEIR FIELD AND EXPAND THEIR SKILLS AND KNOWLEDGE.', isExpanded: false },
        ],
      };
    },
    methods: {
      toggleItem(index) {
        this.items[index].isExpanded = !this.items[index].isExpanded;
      },
    },
  };
  </script>
  
  <style scoped>
  @media only screen and (max-width:600px){
    .accordion-header{
      font-size: 26px!important;

    }
    .accordion-content {
      font-size: 11px!important;
      color: #1c1c1c;
    }
  }
  .accordion-item {
    height: 100%;
    border-top: .1px solid #c4c4c4;
    padding-top: 15px;
    padding-bottom: 15px;
    user-select: none;
  }
  .accordion-content{
    font-family: 'NeueMontreal';
    font-size: 12px;
    text-transform: uppercase;
    color: #1c1c1c;
  }
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: 'BodegaSans';
    font-size: 36px;
    text-transform: uppercase;
    color: #e9531d;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotate(45deg);
  }
  .arrow {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: transform 0.5s ease;
  transform-origin: center;
}

.rotated {
  transform: rotate(-90deg);
}

  </style>
  