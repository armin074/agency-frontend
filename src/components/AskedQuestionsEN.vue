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
          { title: 'What does the Cultstaff agency do and how can it help me find a job and move to Austria?', content: 'Cultstaff is a service company that brings jobseekers together with potential employers. We help job seekers find suitable vacancies and support employers in finding the right candidates for their open positions. Our agency streamlines the job search process by matching skills, qualifications and preferences with available positions, saving both parties time and effort.', isExpanded: true },
          { title: 'Are your services free of charge for jobseekers?', content: 'Yes, our services are usually free of charge for jobseekers. We are commissioned by employers to find suitable candidates for their vacancies and they pay our fees. This means that you can use our job placement services free of charge.', isExpanded: false },
          { title: 'What types of jobs do you offer?', content: 'We offer a wide range of vacancies in various industries in Austria. These include full-time, part-time, temporary and permanent positions. Our vacancies cover areas such as administration, IT, healthcare, finance, hospitality, manufacturing and more.', isExpanded: false },
          { title: 'How do I register with your agency as a jobseeker?', content: 'To register with our agency, you can visit our contact page or our office and fill out a registration form. You will need to provide your personal details, contact information, work history, qualifications and preferences. This information will help us to match you with suitable vacancies.', isExpanded: false },
          { title: 'What documents do I need to submit during the application process?', content: 'During the application process, you may be asked to provide documents such as your CV, proof of qualification, proof of identity (e.g. passport or ID card). ', isExpanded: false },
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
  