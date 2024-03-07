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
          { title: 'Çfarë bë agjencia CultStaff dhe si mund të më ndihmojë të gjej punë dhe të zhvendosem në Austri?', content: 'CultStaff është një agjenci shërbimi që bashkon punëkërkuesit me punëdhënësit potencial. Ne ndihmojmë punëkërkuesin të gjejë vende të lira dhe të përshtatshme ndërsa punëdhënësit i mbështesim në kërkimin e kandidatëve të duhur për kompanitë e tyre. Agjencia jonë e thjeshtëson procedurën e kërkimit të punës duke përputhur aftësitë, kualifikimet dhe preferencat e juaja me vende të punës në dispozicion dhe kështu i kursejmë kohë dhe mundim të dy palëve. ', isExpanded: true },
          { title: 'A kanë punëkërkuesit nevojë të paguajnë për shërbimet tuaja?', content: 'Shërbimet tona janë, sipas rregullës, falas për punëkërkuesit. Punëdhënësit na autorizojnë të gjejmë kandidatë të përshtatshëm për pozitat e tyre dhe paguajnë tarifat tona. Kjo do të thotë se Ju i përdoroni shërbimet tona të rekrutimit falas!', isExpanded: false },
          { title: 'Çfarë lloje punësh ofroni?', content: 'Ne ofrojmë një radhë punësh të ndryshme në degë të ndryshme në Austri. Këtu numërojmë punë me orar të plotë, me orar të pjesshëm, me afat të caktuar dhe të përhershëm. Vendet e punës përfshijnë degë si administrata, informatika (IT), shërbime shëndetësore, financa, gastronomi, prodhimtari dhe shumë tjera.', isExpanded: false },
          { title: 'Si mund të lajmërohem në agjencinë tuaj për të kërkuar punë?', content: 'Për tu regjistruar në agjencinë tonë, mundeni të vizitoni faqen tonë apo ta vizitoni zyrën tonë dhe të plotësoni një formular regjistrimi. Duheni të na jepni disa nga të dhënat tuaja personale, kontaktin, informata mbi karrierën tuaj profesionale, kualifikimet tuaja dhe preferencat tuaja. Këta informata na ndihmojnë neve të ju gjejmë ofertat e punës më të përshtatshme.', isExpanded: false },
          { title: 'Cilët dokumente duhet të paraqiten gjatë procesit të lajmërimit?', content: 'Gjatë procesit të lajmërimit kërkohen dokumente të tilla si CV-ja, një vërtetim që jeni të kualifikuar, një dokument personal (p.sh. pasaporta apo karta e identitetit). Nëse nuk jeni shtetas i një shteti të BE, atëherë ju lutem lajmërohuni me këtë link. ', isExpanded: false },
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
  