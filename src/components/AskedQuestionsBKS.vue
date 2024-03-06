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
          { title: 'Što radi agencija Cultstaff i kako mi može pomoći da nađem posao i preselim se u Austriju?', content: 'Cultstaff je uslužna agencija koja okuplja tražitelje posla s potencijalnim poslodavcima. Pomažemo tražiteljima posla da pronađu odgovarajuća slobodna radna mjesta i podržavamo poslodavce u pronalaženju pravih kandidata za svoja slobodna radna mjesta. Naša agencija pojednostavljuje postupak traženja posla usklađivanjem vještina, kvalifikacija i preferencija s dostupnim radnim mjestima, štedeći objema stranama vrijeme i trud.', isExpanded: true },
          { title: 'Jesu li vaše usluge besplatne za tražitelje zaposlenja?', content: 'Da, naše su usluge obično besplatne za tražitelje zaposlenja. Poslodavci nas ovlašćuju da pronađemo odgovarajuće kandidate za svoja slobodna radna mjesta i oni plaćaju naše naknade. To znači da možete besplatno koristiti naše usluge zapošljavanja.', isExpanded: false },
          { title: 'Koje vrste poslova nudite?', content: 'Nudimo širok spektar slobodnih radnih mjesta u raznim industrijama u Austriji. To uključuje puno radno vrijeme, skraćeno radno vrijeme, privremena i stalna radna mjesta. Naša slobodna radna mjesta pokrivaju područja kao što su administracija, IT, zdravstvo, financije, ugostiteljstvo, proizvodnja i još mnogo toga.', isExpanded: false },
          { title: 'Kako se mogu registrirati u vašoj agenciji kao tražitelj zaposlenja?', content: 'Da biste se registrovali u našoj agenciji, možete posjetiti stranicu "prijava" ili naš ured i ispuniti obrazac za registraciju. Morate navesti svoje osobne podatke, podatke za kontakt, istoriju rada, kvalifikacije i preferencije. Ove informacije pomoći će nam da vas uskladimo s odgovarajućim slobodnim radnim mjestima.', isExpanded: false },
          { title: 'Koje dokumente trebam dostaviti tokom postupka prijave?', content: 'Tokom postupka prijave od vas se može zatražiti da dostavite dokumente kao što su životopis, dokaz o kvalifikaciji, dokaz o identitetu (npr. putovnica/pasoš ili osobna iskaznica).', isExpanded: false },
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
  