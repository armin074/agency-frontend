<template>
    <div class="marquee-container">
      <div class="marquee-text" :style="{ fontSize: fontSize }">
        {{ text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
      fontSize: String,
    },
  };
  </script>
  
  <style scoped>
  .marquee-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    background-color: lightblue; /* Set your desired background color here */
  }
  
  .marquee-text {
    position: absolute;
    animation: marqueeAnimation 10s linear infinite;
  }
  
  @keyframes marqueeAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  