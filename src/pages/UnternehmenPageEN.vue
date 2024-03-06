<template>
<TheHeaderEN />
<div class="container">
      <h1>THE RIGHT EMPLOYEES <br>FOR YOUR COMPANY</h1>
      <img class="hero-img" src="../assets/images/worker.svg"/>
    </div>
    <div class="info-hero">
      <p>Finding the right employees can be a difficult task for employers, and this is where the knowledge of experienced professionals comes into play.our team of professionals are well versed in the recruitment process and can help employers find the right employees. Helping employers find the right people for their business.</p>
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
        <div class="first-line-text"><p>HOW CAN</p></div>
        <div class="second-line-text"><p style="text-transform: lowercase">WE</p></div>
        <div class="third-line-text"><p style="text-transform: uppercase">help?</p></div>
      </div>
      </div>
    <div class="fifth__container">
      <div class="left-content">
        <div class="upper-left">
          <h2>UNDERSTANDING THE NEEDS OF EMPLOYERS</h2>
          <p>The first step in finding the right employees is to understand the employer's needs.
  needs of the employer. Our experts take the time to understand the employer's requirements
  employer's requirements, including the job description, the required skills and
  skills and experience required and the company culture. This helps us to find suitable
  candidates who meet the employer's requirements.</p>
        </div>
        <div class="bottom-left">
          <h2>IDENTIFYING THE RIGHT CANDIDATES</h2>
          <p>As soon as we have understood the employer's needs, our experts begin to
  start identifying suitable candidates. We have an extensive database of
  database of potential candidates who have experience in the medicine,it, tourism, hotel and catering industry. We also utilize our networks and partnerships to reach candidates who are not actively looking for a job.</p>
        </div>
      </div>
      <div class="right-content">
        <h2>SCREENING AND INTERVIEWS WITH THE CANDIDATES</h2>
        <p>After identifying potential candidates, our experts conduct a screening and interview to assess their suitability for the position. We use
  various tools and techniques to assess candidates skills, experience and qualifications. This enables us to identify the best candidates for the position and present them to the employer.</p>
      </div>
    </div>
    <div class="sixth__container">
      <div class="left-side">
      <h2>INTRODUCTION OF CANDIDATES TO EMPLOYERS</h2>
      <p>ONCE WE HAVE IDENTIFIED SUITABLE CANDIDATES, WE INTRODUCE THEM TO THE EMPLOYER. WE PROVIDE DETAILED INFORMATION ABOUT THE CANDIDATES, INCLUDING THEIR SKILLS, EXPERIENCE AND QUALIFICATIONS. THIS HELPS THE EMPLOYER TO MAKE AN INFORMED DECISION ABOUT HIRING A CANDIDATE</p>
    </div>
    <div class="right-side">
      <h2>SUPPORT DURING THE RECRUITMENT PROCESS</h2>
      <p>Our experts also support the recruitment process. We advise and support
  the employer throughout the entire process, from submitting an offer to the applicant through to negotiating the terms of the employment contract. This contributes
  to a smooth and seamless recruitment process.</p>
    </div>
    </div>
    <div class="seventh__container">
      <h3>Contact us today to find out more about how we can help you with your recruitment needs.</h3>
      <RouterLink to="/contact"><button>Contact us</button></RouterLink>
    </div>
    <TheFooterEN />
  </template>
  <script>
  import ClickableList from '../components/ClickableList.vue'
  import TextSlider from '../components/TextSlider.vue'
  import SpinningLogo from '../components/SpinningLogo.vue'
  import ImageRotator from '../components/ImageRotator.vue'
  import ReviewsSlider from '../components/ReviewsSlider.vue'
  import AskedQuestions from '../components/AskedQuestions.vue'
  import MarqueeText from '../components/MarqueeText.vue'
  import TheHeaderEN from '../components/TheHeaderEN.vue'
  import TheFooterEN from '../components/TheFooterEN.vue'
  export default {
    components: {
      TheHeaderEN,
      TheFooterEN,
      AskedQuestions,
      ImageRotator,
      SpinningLogo,
      TextSlider,
      ClickableList,
      ReviewsSlider,
      MarqueeText,

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
  