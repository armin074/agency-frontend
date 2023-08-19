<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }}. Cultstaff. All rights reserved. Designed & Developed by Armin</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style>
  .footer {

    padding: 20px 0;
    text-align: center;
    font-family: 'Neue Montreal';
    font-size: 12px;
    text-transform: uppercase;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Media query for responsiveness */
  @media screen and (max-width: 768px) {
    .container {
      padding: 0 10px;
    }
  }
  </style>
  