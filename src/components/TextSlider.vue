<template>
  <div class="text-slider">
    <div class="slide-counter">{{ currentSlide + 1 }} / {{ totalSlides }}</div>
    <div class="slider-container">
      <div class="slide" v-for="(item, index) in visibleItems" :key="index">
        <h3>{{ item.headline }}</h3>
        <p>{{ item.paragraph }}</p>
      </div>
    </div>
    <div class="controls">
      <div @click="previousSlide" :disabled="currentSlide === 0">
        <img src="../assets/images/back-arrow.svg" />
      </div>
      <div @click="nextSlide" :disabled="currentSlide === totalSlides - 1">
        <img src="../assets/images/next-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    },
    visibleSlides: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.slides.length / this.visibleSlides)
    },
    visibleItems() {
      const startIndex = this.currentSlide * this.visibleSlides
      const endIndex = startIndex + this.visibleSlides
      return this.slides.slice(startIndex, endIndex)
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide++
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    }
  }
}
</script>

<style scoped>
.text-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30em;
}

.slider-container {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  margin-top: 25px;
}

.slide {
  flex: 0 0 100%;
  padding: 20px;
  text-align: center;
}

h3 {
  margin-bottom: 10px;
  font-family: 'Dahlia Regular';
  font-size: 48px;
  text-align: start;
}
p {
  text-align: left;
  font-family: 'NeueMontreal';
  text-transform: uppercase;
  font-size: 12px;
  width: 70%;
}
.controls {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  padding-left: 25px;
}
.controls img {
  width: 65px;
  height: 65px;
  cursor: pointer;
}
button {
  margin: 0 5px;
}

.slide-counter {
  font-family: 'Dahlia Regular';
  font-size: 14px;
  color: #e9531d;
  align-self: flex-end;
  margin-right: 150px;
  font-size: 36px;
}
@media only screen and (min-width: 800px) {
  .text-slider {
    display: none;
  }
}
@media only screen and (max-width: 800px){
  p {
  text-align: left;
  font-family: 'NeueMontreal';
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
}
}

</style>
