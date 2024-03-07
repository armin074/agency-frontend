<template>
    <TheHeaderAL />
    <main>
      <div class="container">
        <h1>Jeto dhe puno në <br> Austri</h1>
      </div>
      <div class="container hero-section">
        <div class="intro-text">
          <h2>
            Qëllimi ynë është që të ju lehtësojmë<span class="text-dark">
                dhe thjeshtësojmë kërkimin e punës!
            </span>
          </h2>
          <p>
            Ne jemi të vetëdijshëm, që mund të jetë e vështirë të gjendet një punë në një vend të huaj. Për atë
shkak Ju ofrojmë mbështetje personale, që Juve të gjeni drejtimin tuaj në tregun e punës së Austrisë.
          </p>
          <SpinningLogo :imageUrl="imageSrc" />
        </div>
        <ImageRotator />
      </div>
      <div class="second__container">
        <div class="first-line-text"><p>SI</p></div>
        <div class="second-line-text"><p>Funksionon</p></div>
        <div class="third-line-text"><p>KJO?</p></div>
      </div>
      <div class="third__container">
        <div class="group-content">
          <div class="benefit first-benefit">
            <h1>Mbështetja me CV-në e Juaj:</h1>
            <p>
                Hapi i parë që bëni në kërkimin e punës është krijimi i një CV-je. Një CV i shkruar mirë është vendimtar
për t’i rënë në sy punëdhënësve të mundshëm dhe për të ardhur deri tek një intervistë me ta. Ekipi ynë
mund të Ju ndihmojë të krijoni një CV profesional dhe të dallueshëm, i cili thekson aftësitë, përvojën dhe
arritjet Tuaja. Ne poashtu mund të Ju ndihmojmë të shkruani letrën motivuese, si dhe me dokumentet e
tjera të nevojshme, ashtu që aplikimi Juaj të dallohet prej të tjerëve.
            </p>
          </div>
          <div class="illu">
            <img src="../assets/images/undraw-cv.svg" />
          </div>
        </div>
        <div class="group-content">
          <div class="benefit second-benefit">
            <h1>Mbështetja me akomodim:</h1>
            <p>
                Zhvendosja në një shtet të ri mund të jetë një sfidë, sidomos kur nuk keni të njohshëm dhe as e flitni
gjuhën e huaj rrjedhshëm. Ne mund të Ju ndihmojmë të gjeni një akomodim të përkohshëm apo edhe
për një kohëqëndrim më të gjatë, me qëllim që ta lehtësojmë zhvendosjen Tuaj në Austri sa më shumë
që mundemi.

            </p>
          </div>
          <div class="illu illu-1">
            <img src="../assets/images/undraw-home.svg" />
          </div>
          <div class="benefit p">
            <h1 style="color: #fff">Unterstützung bei</h1>
            <p style="margin-top: 15px">
                Ekipi jonë mund të Ju lidh kontakte me agjentë imobiliesh serioz, t’ju ndihmojë me kërkimin e një
banese apo shtëpie me qira dhe t’ju mbështes tek zgjedhja e një lagjeje sipas preferencave tuaja si dhe
buxhetit tuaj. 
            </p>
          </div>
        </div>
        <div class="group-content">
          <div class="illu">
            <img src="../assets/images/undraw-interview.svg" />
          </div>
          <div class="benefit third-benefit">
            <h1>Mbështetja me intervistën:</h1>
            <p>
                Nëse pas aplikimit jeni të ftuar në një intervistë pune, ekipi jonë mund të ju ndihmojë për të u përgatitur
për takimin. Neve mundemi të ju japim këshilla, se si duhet të visheni, çfarë të thoni dhe si të
prezantoheni, për të lënë pas një përshtypje pozitive. Ne mundemi edhe të bëjmë intervista provë me
juve, që të ushtroni përgjigjen e pyetjeve të thjeshta si dhe të fitoni më shumë vetëbesim. 
            </p>
          </div>
        </div>
      </div>
  
      <div class="fourth__container">
        <div class="first-line-text"><p>SI MUNDEMI</p></div>
        <div class="second-line-text"><p style="text-transform: lowercase">Ne Të</p></div>
        <div class="p-container">
          <div class="p-text">
            <p style="color: #e9531d">
                Kompania jonë ofron një radhë shërbimesh, që i ndihmojnë secilit individ në realizimin e qëllimeve
profesionale. Në këta shërbime përmblidhen.

            </p>
          </div>
          <div class="third-line-text"><p style="text-transform: uppercase"> ndihmojmë?</p></div>
        </div>
      </div>
  
      <div class="sixth__container">
        <div class="headline">
          <p>
            Arritjet tuaja<span class="text-diff">
                janë provë e angazhimit tonë në këtë detyrë.
            </span>
          </p>
          <br /><span class="text-info">
            Secili hap në rrugën tonë është i udhëhequr nga qëllimi ynë, që të ju mbështesim të fitoni një vend
pune, i cili do t’i përputhet aftësive, dëshirave dhe potencialit tuaj.</span>
        </div>
  
        <div class="list-items">
            <ClickableListAL />
        </div>

      </div>

      <div class="seventh__container">
        <div class="headline-career">
          <p class="h-career">
            Çliroje potencialin <br /><span class="text-diff">tënd!</span>
          </p>
          <p class="p-career">
            Pavarësisht nëse pasioni juaj gjendet tek shërimi i sëmundjeve, krijimi i të mirave të kuzhinës apo edhe
formimit të botës dixhitale, agjencia jonë do të ju udhëheqë përmes hapave të nevojshme për të
siguruar një vend punë në fushë që dëshironi!

          </p>
        </div>
        <div class="jobs-variety">
          <div class="variety medicine">
            <p class="jobs-name">/1 Mjekësi </p>
            <p class="jobs-info">Shëroni jeta dhe jini shkaku i kësaj.</p>
          </div>
          <div class="variety gastronomy">
            <p class="jobs-name">/2 Gastronomi</p>
            <p class="jobs-info">Krijimi i të mirave kulinare</p>
          </div>
          <div class="variety it">
            <p class="jobs-name">/3 Informatika (IT)</p>
            <p class="jobs-info">Formatimi i të ardhmes dixhitale</p>
          </div>
        </div>
      </div>
     <br><br>
      
      <AskedQuestionsAL />
    </main>
    <TheFooterAL />
  </template>
  <script>
  import ClickableListAL from '../components/ClickableListAL.vue'
  import TextSlider from '../components/TextSlider.vue'
  import SpinningLogo from '../components/SpinningLogo.vue'
  import ImageRotator from '../components/ImageRotator.vue'
  import ReviewsSlider from '../components/ReviewsSlider.vue'
  import AskedQuestionsAL from '../components/AskedQuestionsAL.vue'
  import TheFooterAL from '../components/TheFooterAL.vue'
  import TheHeaderAL from '../components/TheHeaderAL.vue'
  export default {
    components: {
      AskedQuestionsAL,
      ImageRotator,
      SpinningLogo,
      TextSlider,
      ClickableListAL,
      ReviewsSlider,
      TheFooterAL,
      TheHeaderAL
    },
    data() {
      return {
        imageSrc: 'https://i.ibb.co/NsYsFPH/logo-spinning.png',
        slideData: [
          {
            headline: 'CV-Unterstützung:',
            paragraph:
              'Der erste Schritt bei Ihrer Stellensuche ist die Erstellung eines aussagekräftigen Lebenslaufs. Ein gut geschriebener Lebenslauf ist entscheidend, um die Aufmerksamkeit potenzieller Arbeitgeber zu erregen und ein Vorstellungsgespräch zu gewinnen. Unser Team kann Ihnen dabei helfen, einen professionellen, aufmerksamkeitsstarken Lebenslauf zu erstellen, der Ihre Fähigkeiten, Erfahrungen und Leistungen hervorhebt. Wir können Ihnen auch bei Anschreiben und anderen Bewerbungsunterlagen helfen, damit Ihre Bewerbung aus der Masse heraussticht.'
          },
          {
            headline: 'Unterstützung bei der Unterbringung:',
            paragraph:
              'Der Umzug in ein neues Land kann eine Herausforderung sein, vor allem wenn Sie keine Beziehungen haben oder die Sprache nicht fließend sprechen. Wir können Ihnen helfen, eine vorübergehende oder langfristige Unterkunft zu finden, um Ihren Übergang nach Österreich so reibungslos wie möglich zu gestalten. Unser Team kann Sie mit seriösen Immobilienmaklern in Verbindung bringen, Ihnen bei der Suche nach einer Wohnung oder einem Haus zur Miete helfen und Sie bei der Auswahl der besten Wohngegenden je nach Ihren Vorlieben und Ihrem Budget beraten.'
          },
          {
            headline: 'Unterstützung beim Vorstellungsgespräch:',
            paragraph:
              'Wenn Sie einen Termin für ein Vorstellungsgespräch bekommen haben, kann unser Team Sie bei der Vorbereitung unterstützen. Wir können Ihnen Tipps geben, wie Sie sich kleiden, was Sie sagen und wie Sie sich präsentieren sollten, um einen positiven Eindruck zu hinterlassen. Wir können auch Probeinterviews durchführen, damit Sie die Beantwortung gängiger Fragen üben und Selbstvertrauen aufbauen können.'
          }
        ]
      }
    }
  }
  </script>
  <style scoped>
  
  @media only screen and (max-width: 976px) {
    main {
      max-width: 600px !important;
      padding: 25px !important;
    }
    .eight__container {
      padding: 0 !important;
    }
    .reviews-header {
      font-size: 32px !important;
      padding: 0 !important;
      margin-top: 25px;
    }
    .jobs-variety {
      flex-direction: column !important;
      padding-top: 25px !important;
    }
    .jobs-name {
      font-size: 24px !important;
    }
    .jobs-info {
      font-size: 11px !important;
    }
    .variety {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .seventh__container {
      height: 100% !important;
    }
    .headline-career .h-career {
      font-size: 32px !important;
    }
    .p-career {
      padding: 0 !important;
      text-align: left !important;
    }
    .sixth__container {
      padding: 0 !important;
    }
    .headline {
      width: 100% !important;
      padding: 0 !important;
      margin-top: 50px !important;
    }
    .headline p {
      font-size: 28px !important;
    }
    .list-items {
      width: 100% !important;
    }
    .p-container {
      flex-direction: column-reverse !important;
    }
    .p-text {
      padding-left: 15px;
      padding-right: 15px !important;
      width: 100% !important;
      font-size: 11px !important;
    }
    .fourth__container {
      padding: 10px !important;
      height: 100% !important;
      padding-top: 15px !important;
      padding-bottom: 25px !important;
    }
    .third__container {
      flex-direction: column;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .group-content {
      flex-direction: column !important;
      padding: 25px !important;
    }
    .benefit p {
      font-size: 11px !important;
    }
    .benefit h1 {
      font-size: 32px !important;
    }
  
    .illu img {
      padding: 50px !important;
    }
    .p h1 {
      display: none !important;
    }
    .sixth__container {
      flex-direction: column;
    }
    .first-line-text {
      font-size: 90px !important;
      line-height: 1.1em;
    }
    .fourth__container .first-line-text {
      font-size: 80px !important;
    }
    .second-line-text {
      font-size: 63px !important;
      text-align: center;
      align-self: auto !important;
    }
    .second-line-text p {
      width: 100vw !important;
      align-self: center !important;
    }
    .third-line-text {
      font-size: 80px !important;
      margin-top: -5px;
      align-self: center !important;
    }
    .second__container {
      height: 100% !important;
      padding: 10px !important;
    }
    .container {
      height: 100% !important;
      padding: 0 !important;
    
    }
    .container h1 {
      font-size: 60px;
      line-height: 1.1em;
      height: 100%;
      margin-top: 150px;
      padding-bottom: 25px;
    }
    .hero-section {
      flex-direction: column;
      padding: 0 !important;
    }
    .intro-text p {
      font-size: 11px !important;
    }
    .intro-text {
      padding: 0 !important;
    }
    .intro-text h2 {
      font-size: 32px;
    }
    .eight__container {
      margin-bottom: 10px !important;
    }
    .text-info {
      font-size: 11px!important;
      
    }
    
  }
  .text-diff{
    font-family: 'BodegaSans';
  }
  .reviews-header {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'NyghtLightItalic';
    text-transform: lowercase;
    color: #1c1c1c;
    padding-left: 45px;
    padding-right: 45px;
    font-size: 40px;
    line-height: 1.1em;
  }
  .eight__container {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    width: 100%;
    padding-left: 45px;
    padding-right: 45px;
    margin-bottom: 100px;
  }
  .jobs-variety {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding-top: 100px;
  }
  .jobs-name {
    font-family: 'BodegaSans';
    color: #ffefe1;
    font-size: 24px;
    text-transform: uppercase;
  }
  .jobs-info {
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'NeueMontreal';
    color: #ffefe1;
  }
  .seventh__container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #e9531d;
    padding: 50px 45px;
    border-radius: 12px;
    flex-direction: column;
  }
  .h-career {
    font-family: 'NyghtLightItalic';
    text-transform: lowercase;
    font-size: 55px;
    color: #ffefe1;
    text-align: center;
    line-height: 1.1em;
    padding-bottom: 25px;
  }
  .p-career {
    font-family: 'NeueMontreal';
    text-transform: uppercase;
    font-size: 12px;
    color: #ffefe1;
    text-align: center;
    padding-left: 250px;
    padding-right: 250px;
  }
  .sixth__container {
    display: flex;
    height: 100%;
    padding-top: 150px;
  
    padding-left: 40px;
    padding-right: 40px;
  }
  .text-info {
    font-size: 12px;
    font-family: 'NeueMontreal';
    text-transform: uppercase;
    color: #1c1c1c;
  }
  .list-items {
    width: 50vw;
  }
  .headline {
    width: 50vw;
    padding-right: 90px;
    margin-bottom: 25px !important;
    
  }
  .headline p {
    text-transform: uppercase !important;
    font-family: 'BodegaSans';
    line-height: 1.2em;
    font-size: 40px;
    text-transform: none;
    color: #1c1c1c;
  }
  .fifth__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .help-headline {
    font-family: 'BodegaLight';
    font-size: 32px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    color: #e9531d;
    line-height: 1.1em;
    padding-bottom: 15px;
  }
  .help-text {
    font-family: 'NeueMontreal';
    text-transform: uppercase;
    font-size: 12px;
    color: #575656;
  }
  .info__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 50px 25px;
  }
  .illu-1 img {
    width: 600px !important;
    height: 450px !important;
  }
  .illu img {
    width: 450px;
    height: 300px;
    padding: 25px;
  }
  
  .group-content {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid #dbdbdb;
    padding: 45px;
    border-radius: 4px;
  }
  .p-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .p-text {
    width: 50%;
    font-family: 'NeueMontreal';
    font-size: 12px;
    text-transform: uppercase;
    color: #575656;
    padding-right: 50px;
  }
  main,
  html {
    max-width: 1920px;
    padding: 0 50px;
    margin: auto !important;
  }
  .fourth__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: #ffefe1;
    padding: 150px;
    height: 45em;
    padding: 100px;
    max-width: 100vw;
    border-radius: 8px;
  }
  .third__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .benefit h1 {
    font-family: 'BodegaSans';
    font-size: 36px;
    text-transform: uppercase;
    color: #e9531d;
    line-height: 1.1em;
    padding-bottom: 15px;
  }
  .benefit p {
    font-family: 'NeueMontreal';
    font-size: 12px;
    text-transform: uppercase;
    color: #575656;
  }
  
  .benefit .second-benefit {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main {
    margin: 0 50px;
  }
  .second__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    background-color: #ffefe1;
    height: 45em;
    padding: 100px;
    max-width: 100vw;
    border-radius: 8px;
  }
  .first-line-text {
    align-self: center;
    font-size: 184px;
    color: #e9531d;
    margin-top: 15px;
    font-family: 'BodegaLight';
    text-transform: uppercase;
  }
  .second-line-text {
    align-self: center;
    font-family: 'NyghtLightItalic';
    text-transform: capitalize;
    font-size: 132px;
    color: #e9531d;
    line-height: 1em;
  }
  .third-line-text {
    align-self: center;
    font-size: 180px;
    font-family: 'BodegaLight';
    color: #2c3e50;
    text-transform: uppercase;
  }
  .container {
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 7em;
    text-transform: uppercase;
    font-family: 'BodegaLight';
    color: #e9531d;
    font-size: 86px;
    padding: 0 50px;
    line-height: 2.2em;
    
  }
  .hero-section {
    display: flex;
    width: 100%;
    height: 110vh;
    align-items: start;
    justify-content: center;
    padding: 10px 50px 10px 50px;
  }
  h2 {
    font-family: 'NyghtLightItalic';
    line-height: 1.2em;
    font-size: 40px;
    text-transform: none;
    color: #1c1c1c;
  }
  .text-dark {
    color: #000000;
    font-family: 'NyghtDark';
  }
  .intro-text {
    padding-right: 80px;
  }
  .intro-text p {
    color: #575656;
    font-family: 'NeueMontreal';
    font-size: 13px;
    margin-top: 25px;
    line-height: 1.5em;
  }
  .image-slider {
    margin-top: -160px;
  }
  .image-slider img {
    width: 40vw;
    border-radius: 4px;
    height: 110vh;
    filter: grayscale(100%);
  }
  .container h1 {
    margin-top: 150px;
  }
  </style>
  