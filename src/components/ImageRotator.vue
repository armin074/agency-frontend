<template>
  <div class="image-rotator">
    <span class="span"></span>
    <span class="span-timer"></span>
    <img
      :src="currentImage"
      alt="Pierre Blache Simon Berger Josh Hild Mihai Vlasceanu Images from pexels.com"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://i.ibb.co/zxZWTMS/vienna-slider-1.jpg',
        'https://i.ibb.co/p0GdHQC/vienna-slider-2.jpg',
        'https://i.ibb.co/RyLZxKr/vienna-slider-3.jpg',
        'https://i.ibb.co/pPVXVLN/vienna-slider-4.jpg',
        'https://i.ibb.co/Rg0F2mt/vienna-slider-5.jpg',
        'https://i.ibb.co/yNvvTMT/vienna-slider-6.jpg',
        'https://i.ibb.co/kcskNWk/vienna-slider-7.jpg'
      ],
      currentImageIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  methods: {
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  },
  mounted() {
    this.intervalId = setInterval(this.changeImage, 4000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
@media only screen and (max-width:600px){
  .image-rotator{
    width: 100%!important;
    height: 500px!important;
    margin-top: 50px!important;
    margin-bottom: 50px!important;
  }
  img{
    width: 100%!important;
    height: 500px!important;
  }
  .span {
  border: 4px solid #1c1c1c;
  left: 49.8%!important;
  position: absolute;
  top: 100.8%!important;
  width: 100%!important;
  transform: translate(-50%, -100.8%);
}
.span-timer {
  border: 4px solid #e9531d;
  left: 100%;
  position: absolute;
  top: 100.8%!important;
  transform: translate(-100%, -90.8%);
  animation: sliderCounter 4s ease-in-out infinite;
}
  /*end media mobile */
}
.image-rotator {
  margin-top: -160px;
  position: relative;
  width: 40vw;
  height: 110vh;
  z-index: 0 !important;
}
.image-rotator img {
  object-fit: cover;
  width: 40vw;
  border-radius: 4px 4px 0 0;
  height: 110vh;
  filter: grayscale(80%);
}
.span {
  border: 4px solid #1c1c1c;
  left: 50%;
  position: absolute;
  top: 100.8%;
  width: 99.81%;
  transform: translate(-50%, -100.8%);
}
.span-timer {
  border: 4px solid #e9531d;
  left: 100%;
  position: absolute;
  top: 100.8%;
  transform: translate(-100%, -100.8%);
  animation: sliderCounter 4s ease-in-out infinite;
}
@keyframes sliderCounter {
  from {
    width: 1%;
  }
  to {
    width: 100%;
  }
}
</style>
