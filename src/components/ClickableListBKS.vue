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
          { title: 'RAZVOJ KARIJERE', content: 'RAD SA INDIVIDUALCIMA U CILJU RAZVOJA SAMOPOUZDANJA, POSTAVLJANJA CILJEVA U KARIJERI I IZRADI PLANA DA BI ISTE POSTIGLI', isExpanded: true },
          { title: 'RAZVOJ VJEŠTINA', content: 'NUDIMO ŠIROK ASORTIMAN TRENING PROGRAMA I RADIONICA DA BISMO POMOGLI INDIVIDUALCIMA U RAZVOJU NOVIH VJEŠTINA I ZNANJA U NJIHOVOJ ZONI INTERESA', isExpanded: false },
          { title: 'NETWORKING', content: 'NUDIMO VAM MOGUĆNOST DA SE UPOZNATE SA DRUGIM PROFESIONALCIMA U VAŠOJ OBLASTI.', isExpanded: false },
          { title: 'ZAPOŠLJAVANJE', content: 'SURAĐUJEMO S POSLODAVCIMA KAKO BISMO POMOGLI POJEDINCIMA DA PRONAĐU POSAO KOJI ODGOVARA NJIHOVIM CILJEVIMA I INTERESIMA U KARIJERI.', isExpanded: false },
          { title: 'MENTORSTVO', content: 'MENTORSKI PROGRAMI KREIRANI DA VAS POVEŽU SA ISKUSNIM PROFESIONALCIMA U VAŠEM POLJU.', isExpanded: false },
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
  