<template>
    <div class="header"><p>FAQ</p></div>
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
          { title: 'Was macht die Agentur Cultstaff, und wie kann sie mir helfen, einen Job zu finden und nach Österreich zu ziehen?', content: 'Cultstaff ist ein Dienstleistungsunternehmen, das Arbeitssuchende mit potenziellen Arbeitgebern zusammenbringt. Wir helfen Arbeitsuchenden bei der Suche nach geeigneten Stellenangeboten und unterstützen Arbeitgeber dabei, die richtigen Kandidaten für ihre offenen Stellen zu finden. Unsere Agentur rationalisiert den Prozess der Arbeitssuche, indem sie Fähigkeiten, Qualifikationen und Vorlieben mit den verfügbaren Stellen abgleicht und so beiden Parteien Zeit und Mühe erspart.', isExpanded: true },
          { title: 'Sind Ihre Dienstleistungen für Arbeitssuchende kostenlos?', content: 'Ja, unsere Dienstleistungen sind für Arbeitssuchende in der Regel kostenlos. Wir werden von Arbeitgebern beauftragt, geeignete Kandidaten für ihre offenen Stellen zu finden, und sie übernehmen unsere Gebühren. Das bedeutet, dass Sie unsere Arbeitsvermittlungsdienste kostenlos in Anspruch nehmen können.', isExpanded: false },
          { title: 'Welche Arten von Jobs bieten Sie an?', content: 'Wir bieten eine breite Palette von Stellenangeboten in verschiedenen Branchen in Österreich. Dazu gehören Vollzeit-, Teilzeit-, befristete und unbefristete Stellen. Unsere Stellenangebote umfassen Bereiche wie Verwaltung, IT, Gesundheitswesen, Finanzen, Gastgewerbe, Produktion und mehr.', isExpanded: false },
          { title: 'Wie melde ich mich bei Ihrer Agentur als Arbeitssuchender an?', content: 'Um sich bei unserer Agentur zu registrieren, können Sie unsere Website oder unser Büro besuchen und ein Registrierungsformular ausfüllen. Sie müssen Ihre persönlichen Daten, Kontaktinformationen, Ihren beruflichen Werdegang, Ihre Qualifikationen und Ihre Präferenzen angeben. Diese Informationen helfen uns, Sie mit geeigneten Stellenangeboten zusammenzubringen.', isExpanded: false },
          { title: 'Welche Unterlagen muss ich während des Anmeldeverfahrens vorlegen?', content: 'Während des Anmeldeverfahrens können Sie aufgefordert werden, Dokumente wie Ihren Lebenslauf, einen Qualifikationsnachweis, einen Ausweis (z. B. einen Reisepass oder Personalausweis) vorzulegen. Wenn Sie kein EU-Bürger sind, bewerben Sie sich bitte über diesen Link hier.', isExpanded: false },
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
  @media only screen and (max-width: 600px){
    .header{
      font-size: 70px !important;
      padding: 30px !important;
    }
    .accordion{
      padding-left: 25px!important;
      padding-right: 25px !important;
    }
    .accordion-content{
      padding: 0!important;
      font-size: 11px!important;
      padding-top: 15px!important;
      padding-bottom: 10px!important;
    }
    img{
      width: 14px!important;
      height: 14px!important;
     
    }
    .accordion-header{
      line-height: 1.1em;
      margin-right: 10px;
    }
  }
  .header{
    font-size: 96px;
    padding-left: 45px;
    font-family: 'BodegaSans';
    background-color: #ffefe1;
    color: #2c3e50;
    border-radius: 12px 12px 0 0;
  }
  .accordion {
    border-radius: 0 0 12px 12px;
    background-color: #ffefe1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 50px;
  }
  .accordion-item {
    height: 100%;
    border-top: .1px solid #c4c4c4;
    padding-top: 15px;
    padding-bottom: 15px;
    user-select: none;
    width: 100%;
    
  }
  .accordion-content{
    font-family: 'NeueMontreal';
    font-size: 12px;
    text-transform: uppercase;
    padding-right: 100px;
    color: #3b3b3b;
  }
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: 'BodegaSans';
    font-size: 22px;
    text-transform:uppercase;
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
  