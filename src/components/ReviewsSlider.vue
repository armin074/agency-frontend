<template>
    <div class="review-slider">
      <div
        class="slides-container"
        :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
        ref="slidesContainer"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
      >
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="slide"
          ref="slides"
          @dragstart="dragStart"
          @drag="dragging"
          @dragend="dragEnd"
        >
          <div class="name">{{ review.name }}</div>
          <div class="review">{{ review.review }}</div>
        </div>
      </div>
      <div class="navigation">
        <span @click="prevSlide" :disabled="currentSlide === 0"> <img src="../assets/images/back-arrow.svg" /></span>
        <span @click="nextSlide" :disabled="currentSlide === totalSlides - 1"> <img src="../assets/images/next-arrow.svg" /></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
        
        { name: "Aleksandar Petrović", review: "I couldn't be more grateful for the Employment Agency's assistance in finding the perfect IT job for me in Austria. Their personalized approach and understanding of my skills ensured I was matched with the right opportunity. Thanks to them, I'm now thriving in a dynamic tech environment." },
        { name: "Luca Moretti", review: "The Employment Agency made my transition into the Gastronomy field in Austria seamless and exciting. Their team's expertise and connections opened doors I never thought possible. I'm now living my dream as a chef, all thanks to their dedication." },
        { name: "Oksana Ivanenko", review: "From start to finish, the Employment Agency demonstrated their commitment to my success in Medicine. Their guidance during the licensing process and their network of healthcare institutions were invaluable. Today, I'm practicing medicine in Austria, and it's all thanks to them." },
        { name: "Dragan Jovanović", review: "I was skeptical about finding a job in a new country, but the Employment Agency exceeded my expectations. Their deep understanding of the job market in Austria, especially in IT, led to me landing a role that perfectly matched my skills and aspirations. Truly exceptional service" },
        { name: "Dimitar Petrov", review: "The Employment Agency is a game-changer for anyone looking to establish themselves in Austria's job market. As an aspiring professional in the Gastronomy field, their guidance and connections proved invaluable. I'm now proudly working in a renowned restaurant, and I couldn't be happier." },
        { name: "Milica Stojanović", review: "Securing a job in the field of Medicine in Austria was my goal, and the Employment Agency turned that dream into a reality. Their personalized approach, knowledge of industry requirements, and support throughout the process were remarkable. I'm now fulfilling my passion for healthcare, thanks to them." },
    
      ],
        currentSlide: 0,
        slideWidth: 360, // Adjust this value based on your slide width
        isDragging: false,
        startX: 0,
        currentTranslate: 0
      };
    },
    computed: {
      totalSlides() {
        return this.reviews.length;
      }
    },
    mounted() {
    // Start the auto slide change
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Adjust the interval duration (in milliseconds)
  },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
          this.currentSlide++;
        }  else {
        this.currentSlide = 0;
      }
      },
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.clientX;
        this.currentTranslate = this.currentSlide * this.slideWidth;
      },
      drag(event) {
        if (!this.isDragging) return;
        const offsetX = event.clientX - this.startX;
        this.refs.slidesContainer.style.transition = "none";
        this.refs.slidesContainer.style.transform = `translateX(${
          this.currentTranslate + offsetX
        }px)`;
      },
      endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;
        const offsetX = event.clientX - this.startX;
        const slideChangeThreshold = this.slideWidth / 3;
        if (offsetX > slideChangeThreshold && this.currentSlide > 0) {
          this.currentSlide--;
        } else if (
          offsetX < -slideChangeThreshold &&
          this.currentSlide < this.totalSlides - 1
        ) {
          this.currentSlide++;
        }
        this.refs.slidesContainer.style.transition = "transform 0.3s ease";
        this.refs.slidesContainer.style.transform = `translateX(-${
          this.currentSlide * this.slideWidth
        }px)`;
      },
      dragStart(event) {
        event.preventDefault();
      },
      dragging(event) {
        event.preventDefault();
      },
      dragEnd(event) {
        event.preventDefault();
      },
     
    }
  };
  </script>
<style scoped>
@media only screen and (max-width:600px){
  .slide {
  background-color: #ffefe1;
  padding: 25px 25px 5px 25px;
  width: 100%!important; 
  margin-right: 35px!important;
  flex-shrink: 0;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}
}
.review-slider {
  
  overflow: hidden;
}

.slides-container {
  
  display: flex;
  transition: transform 0.5s ease; /* Smooth transition */
}

.slide {
  background-color: #ffefe1;
  padding: 25px 25px 5px 25px;
  width: 350px; 
  margin-right: 65px;
  flex-shrink: 0;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}
img{
    cursor: pointer;
    width: 75px;
    margin-top: 50px;
    padding: 50px 0;
    margin-right: 10px;
    margin-left: 10px;
}
img:hover{
    transform: scale(1.05);
}
.name {
 font-family: 'Dahlia';
 font-size: 26px;
 padding-bottom: 5px;
 color: #e9531d;
}

.review {
  font-family: 'NeueMontreal';
  font-size: 12px;
  text-transform: uppercase;
  color: #e9531d;
}
</style>
