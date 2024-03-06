<template>
  <TheHeader />
  <div class="container">
    <h1>DIE RICHTIGEN MITARBEITER <br>FÜR IHR UNTERNEHMEN</h1>
    <img class="hero-img" src="../assets/images/worker.svg"/>
  </div>
  <div class="info-hero">
    <p>Die Suche nach den richtigen Mitarbeitern kann für Arbeitgeber eine schwierige Aufgabe sein, und hier kommt das Wissen erfahrener Fachleute ins Spiel.Unser Team von Fachleuten ist mit dem Rekrutierungsprozess bestens vertraut und kann Arbeitgebern dabei helfen, die richtigen Mitarbeiter zu finden. Arbeitgebern helfen, die richtigen Mitarbeiter für ihr Unternehmen zu finden.</p>
    <SpinningLogo :imageUrl="imageSrc" />
  </div>
  <!-- <div>
    <MarqueeText
      text="This is a larger marquee text that scrolls from left to right as you scroll"
      backgroundColor="lightblue"
      fontSize="24px"
    />    
</div> -->
  <div class="fourth__container">
    <div class="wrap">
      <div class="first-line-text"><p>WIE WIR</p></div>
      <div class="second-line-text"><p style="text-transform: lowercase">Helfen</p></div>
      <div class="third-line-text"><p style="text-transform: uppercase">können?</p></div>
    </div>
    </div>
  <div class="fifth__container">
    <div class="left-content">
      <div class="upper-left">
        <h2>Die Bedürfnisse von Arbeitgebern verstehen</h2>
        <p>Der erste Schritt, um die richtigen Mitarbeiter zu finden, besteht darin, die Bedürfnisse des
Arbeitgebers zu verstehen. Unsere Experten nehmen sich die Zeit, die Anforderungen des
Arbeitgebers zu verstehen, einschließlich der Stellenbeschreibung, der erforderlichen
Fähigkeiten und Erfahrungen sowie der Unternehmenskultur. Dies hilft uns, geeignete
Kandidaten zu finden, die den Anforderungen des Arbeitgebers entsprechen.</p>
      </div>
      <div class="bottom-left">
        <h2>Identifizierung der richtigen Kandidatinnen und Kandidaten</h2>
        <p>Sobald wir die Bedürfnisse des Arbeitgebers verstanden haben, beginnen unsere Experten
mit der Identifizierung geeigneter Kandidaten. Wir verfügen über eine umfangreiche
Datenbank mit potenziellen Kandidaten, die über Erfahrungen in den Bereichen Tourismus,
Hotellerie und Gastronomie verfügen. Wir nutzen auch unsere Netzwerke und
Partnerschaften, um Kandidaten zu erreichen, die nicht aktiv auf Stellensuche sind.</p>
      </div>
    </div>
    <div class="right-content">
      <h2>Screening und Vorstellungsgespräche mit den Kandidaten</h2>
      <p>Nach der Identifizierung potenzieller Kandidaten führen unsere Experten ein Screening und
Vorstellungsgespräche durch, um ihre Eignung für die Stelle zu beurteilen. Wir verwenden
verschiedene Instrumente und Techniken, um die Fähigkeiten, Erfahrungen und
Qualifikationen der Kandidaten zu bewerten. So können wir die besten Kandidaten für die
Stelle ermitteln und sie dem Arbeitgeber vorstellen.</p>
    </div>
  </div>
  <div class="sixth__container">
    <div class="left-side">
    <h2>Vorstellung der Kandidaten bei den Arbeitgebern</h2>
    <p>Sobald wir geeignete Kandidaten identifiziert haben, stellen wir sie dem Arbeitgeber vor. Wir
stellen detaillierte Informationen über die Kandidaten zur Verfügung, einschließlich ihrer
Fähigkeiten, Erfahrungen und Qualifikationen. Dies hilft dem Arbeitgeber, eine fundierte
Entscheidung über die Einstellung eines Kandidaten zu treffen.</p>
  </div>
  <div class="right-side">
    <h2>Unterstützung beim Einstellungsprozess</h2>
    <p>Unsere Experten unterstützen auch den Einstellungsprozess. Wir beraten und unterstützen
den Arbeitgeber während des gesamten Prozesses, von der Unterbreitung eines Angebots
an den Bewerber bis hin zur Aushandlung der Bedingungen des Arbeitsvertrags. Dies trägt
zu einem reibungslosen und nahtlosen Einstellungsprozess bei.</p>
  </div>
  </div>
  <div class="seventh__container">
    <h3>Nehmen Sie noch heute Kontakt mit uns auf, um mehr darüber zu erfahren, wie wir Ihnen bei der Personalbeschaffung helfen können.</h3>
    <RouterLink to="/kontakt"><button>Kontaktieren sie uns</button></RouterLink>
  </div>
  <TheFooter />
</template>
<script>
import ClickableList from '../components/ClickableList.vue'
import TextSlider from '../components/TextSlider.vue'
import SpinningLogo from '../components/SpinningLogo.vue'
import ImageRotator from '../components/ImageRotator.vue'
import ReviewsSlider from '../components/ReviewsSlider.vue'
import AskedQuestions from '../components/AskedQuestions.vue'
import MarqueeText from '../components/MarqueeText.vue'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {
    AskedQuestions,
    ImageRotator,
    SpinningLogo,
    TextSlider,
    ClickableList,
    ReviewsSlider,
    MarqueeText,
    TheFooter,
    TheHeader
  },
  data() {
    return {
      imageSrc: 'https://i.ibb.co/NsYsFPH/logo-spinning.png',
      
    }
  }
}
</script>

<style scoped>


.seventh__container {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 100px 50px 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
.seventh__container h3{
  font-family: 'BodegaSans';
  color: #e9531d;
  font-size: 28px;
  text-align: center;
  width: 60%;
  line-height: 1.2em;
  text-transform: uppercase;

}
.seventh__container button {
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #e9531d;
  transition: .2s ease-in-out;
  font-family: 'BodegaSans';
  text-transform: uppercase;
  font-size: 16px;
    
  padding: 10px;
  margin-top: 20px;
  height: 40px;
}
.seventh__container button:hover{
  border: 1px solid #b9b9b9;
  color: #1c1c1c;
  background-color: transparent;


}
.left-side {
  padding: 25px;
  border: 1px solid #bebebe;
  margin-right: 15px;
}
.right-side {
  border: 1px solid #bebebe;
  padding: 25px;
  margin-left: 15px;
}
.sixth__container{
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px 100px;
}
.sixth__container p {
  font-family: 'NeueMontreal';
  color: #1c1c1c;
  padding-top: 15px;
  font-size: 12px;
  text-transform: uppercase;
}
.sixth__container h2{
  font-family: 'BodegaSans';
  color: #e9531d;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1.2em;
}
.fifth__container {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 50px 100px;
}
.fifth__container p {
  font-family: 'NeueMontreal';
  color: #1c1c1c;
  padding-top: 15px;
  font-size: 12px;
  text-transform: uppercase;
}
.fifth__container h2{
  font-family: 'BodegaSans';
  color: #e9531d;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1.2em;
}
.left-content{
  padding-right: 50px;
  width: 65%;
}
.left-content .upper-left{
  margin-bottom: 50px;
  border: 1px solid #bebebe;
  padding: 25px;
}
.left-content .bottom-left {
  border: 1px solid #bebebe;
  padding: 25px;
}
.right-content{
  width: 35%;
  margin-top: 50px;
  border: 1px solid #bebebe;
  padding: 25px;
}
.info-hero{
  display: flex;
  color: #1c1c1c;
  font-family: 'NeueMontreal';
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
  height: 100px;
  align-items: center;
  margin-top: 50px;
  padding: 30px 100px;
  
}
.spinning-image-container{
  margin-top: 250px;
  margin-left: 75px;
}
.info-hero p {
  width: 50%;
  text-align: left;
  margin-right: 250px;
}

.hero-img {
  width: 525px;
  margin-top: -99px 
}
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 75px;
    width: 100%;
    flex-direction: column;
}
.container h1 {
  font-family: 'BodegaLight';
  font-size: 170px;
  line-height: 1.1em;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 25px;
  width: 80%;
  color: #e9531d;
  text-align: center;
}
.fourth__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  
  padding: 150px;
  height: 100%;
  padding: 80px;
  max-width: 100vw;
  border-radius: 8px;
}
.fourth__container .wrap {
  width: 100%;
  height: 100%;
  background-color: #ffefe1;
  border-radius: 12px;
}
.first-line-text {
  align-self: center;
  text-align: center;
  font-size: 184px;
  color: #e9531d;
  font-family: 'BodegaLight';
  text-transform: uppercase;
  line-height: 1.5em;
  width: 100%;
}
.second-line-text {
  text-align: center;
  width: 100%;
  align-self: center;
  font-family: 'NyghtLightItalic';
  text-transform: capitalize;
  font-size: 142px;
  color: #e9531d;
  line-height: 1em;
}
.third-line-text {
  text-align: center;
  width: 100%;
  line-height: 1.5em;
  align-self: center;
  font-size: 158px;
  font-family: 'BodegaLight';
  color: #2c3e50;
  text-transform: uppercase;
}
@media only screen and (max-width: 976px) {
 .container h1{
  font-size: 80px;
  margin-top: 0;
 }
 .hero-img{
  width: 400px;
  margin-top: -55px;
  
}
.info-hero {
  padding: 10px 35px;
  position: relative;
  
}
.spinning-image-container {
  display: none;
}
.info-hero p {
  width: 100%;
  margin-right: 0;

}
.fourth__container {
  padding: 25px;
  margin-top: 50px;
}
.fourth__container .first-line-text{
  font-size: 96px;
}
.fourth__container .second-line-text {
  font-size: 96px;

}
.fourth__container .third-line-text {
  font-size: 116px;
}
.fifth__container{
  flex-direction: column;
  padding: 5px 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.fifth__container .left-content{
  width: 100%;
  padding: 0;
}
.fifth__container .right-content{
  width: 100%;
  padding: 25px 30px;
}
.sixth__container{
  flex-direction: column;
  padding: 25px 30px;
}
.sixth__container .left-side {
  margin: 0;
}
.sixth__container .right-side {
  margin-left: 0;
  margin-top: 30px;

}
.seventh__container{
  padding: 0;
  margin-top: 25px;
}



}

</style>
