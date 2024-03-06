<template>
    <div class="spinning-image-container">
      <img :src="imageUrl" class="spinning-image" :style="imageStyle" />
      <img class="logo-inside-nospin" src="https://svgshare.com/i/12CY.svg" />
   
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        rotation: 0,
      };
    },
    computed: {
      imageStyle() {
        return {
          transform: `rotate(${this.rotation}deg)`,
        };
      },
    },
    methods: {
      startRotation() {
        const rotationSpeed = .3; // Adjust the speed of rotation as needed
        this.interval = setInterval(() => {
          this.rotation += rotationSpeed;
        }, 16); // Adjust the interval to control the smoothness of the animation
      },
      stopRotation() {
        clearInterval(this.interval);
      },
    },
    mounted() {
      this.startRotation();
    },
    beforeDestroy() {
      this.stopRotation();
    },
  };
  </script>
  
  <style>
  @media only screen and (max-width:600px){
    .logo-inside-nospin{
      width: 125px!important;
      height: 125px!important;
    }
    .spinning-image-container{
      margin-top: 15px!important;
      left: 1px;
      width: 125px!important;
      height: 125px!important;
      position: absolute!important;
    }
  }
  .logo-inside-nospin{
    position: absolute;
    width: 175px;
    height: 175px;
    user-select: none;
   
  }
  .spinning-image-container {
    z-index:99;
    position: relative;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
  }
  .spinning-image-container:hover{
    transform: scale(1.1);
    transition: 1s ease-in-out;
  }
  .spinning-image {
    width: 100%;
    height: 100%;
    transition: transform 0.1s ease-in-out;
    user-select: none;
  }
  </style>
  