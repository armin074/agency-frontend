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
          { title: 'Trajnerë karriere', content: 'Trajnerët tonë të karrierës bashkëpunojnë individualisht me persona, për t’i ndihmuar në zhvillimin e vetëbesimit, për të vënë qëllimet e karrierës dhe për të zhvilluar një plan se si të arrijnë deri tek ata qëllime.', isExpanded: true },
          { title: 'Zhvillimi i aftësive', content: 'Ofrojmë një serë programesh trajnimi dhe workshop-ëve që e mbështesin individin të formojë aftësi dhe njohuri në fushat e interesave të tyre.', isExpanded: false },
          { title: 'NETWORKING', content: 'Ne i ofrojmë individëve mundësinë që të hyjnë në kontakt me profesionistë të degëve që u interesojnë dhe të ndërtojnë rrjete profesionale.', isExpanded: false },
          { title: 'Kërkimi i punës', content: 'Ne bashkëpunojmë me punëdhënësit për t’i ndihmuar çdonjërit në kërkim të ofertave të punës, të cilat i përputhen interesave dhe qëllimeve profesionale të tyre.', isExpanded: false },
          { title: 'MENTORIMI', content: 'Ofrojmë programe mentorimi me profesionistë të përvojshëm, për t’i ndihmuar individëve të mësojnë për degët e punëve dhe të zhvillojnë më tej aftësitë dhe njohuritë e tyre. ', isExpanded: false },
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
  