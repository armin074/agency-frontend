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
          { title: 'KARRIERE-COACHING', content: 'UNSERE KARRIERE-COACHES ARBEITEN MIT EINZELPERSONEN ZUSAMMEN, UM IHNEN ZU HELFEN, IHR SELBSTBEWUSSTSEIN ZU ENTWICKELN, KARRIEREZIELE ZU SETZEN UND EINEN PLAN ZU ENTWICKELN, UM DIESE ZIELE ZU ERREICHEN.', isExpanded: true },
          { title: 'ENTWICKLUNG VON FERTIGKEITEN', content: 'WIR BIETEN EINE REIHE VON SCHULUNGSPROGRAMMEN UND WORKSHOPS AN, DIE DEN EINZELNEN DABEI UNTERSTÜTZEN, NEUE FÄHIGKEITEN UND KENNTNISSE IN IHREN INTERESSENGEBIETEN ZU ERWERBEN.', isExpanded: false },
          { title: 'NETWORKING', content: 'WIR BIETEN EINZELPERSONEN DIE MÖGLICHKEIT, MIT ANDEREN FACHLEUTEN IN IHREM BEREICH IN KONTAKT ZU TRETEN UND IHRE BERUFLICHEN NETZWERKE AUSZUBAUEN.', isExpanded: false },
          { title: 'ARBEITSVERMITTLUNG', content: 'WIR ARBEITEN MIT ARBEITGEBERN ZUSAMMEN, UM EINZELPERSONEN BEI DER SUCHE NACH STELLENANGEBOTEN ZU HELFEN, DIE IHREN BERUFLICHEN ZIELEN UND INTERESSEN ENTSPRECHEN.', isExpanded: false },
          { title: 'MENTORING', content: 'WIR BIETEN MENTORING-PROGRAMME AN, UM EINZELPERSONEN DABEI ZU HELFEN, VON ERFAHRENEN FACHLEUTEN IN IHREM BEREICH ZU LERNEN UND IHRE FÄHIGKEITEN UND KENNTNISSE ZU ERWEITERN.', isExpanded: false },
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
  