<!-- Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="column">
          
        </div>
        <div class="column">
          <h4>Kontakt</h4>
          <p>Rruga: Maria Trapp Platz 1/106 1220 Vienna Austria</p>
          <p>Email: office@cultstaff.at</p>
          <p>Telefoni: +43 667 7605600</p>
        </div>
        <div class="column">
          <h4>Quick Links</h4>
          <ul>
            <li><RouterLink to="/">PUNONJËS</RouterLink></li>
            
            <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
            <!-- Add more links as needed -->
          </ul>
        </div>
        <div class="column">
          <h4>Legal</h4>
          <ul>
            <li><RouterLink to="/legal">Privacy Policy</RouterLink></li>
            <li><a style="color: white; cursor: default" href="#">/</a></li>
            <li><a style="color: white; cursor: default" href="#">/</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .footer {
    
    color: #1c1c1c;
    padding: 20px;
  }
  
  .container {
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around;
    padding: 50px 0;
    font-family: 'BodegaSans';
    text-transform: uppercase;
  
  }
  
  .column {
  
    margin: 0 20px;
    align-items: center;
    justify-content: center;
  }
  
  .column h4 {
    margin-bottom: 10px;
    color: #e9531d;
    font-size: 20px;
  }
  
  .column ul {
    list-style-type: none;
    padding: 0;
  }
  
  .column li {
    margin-bottom: 5px;
  }
  
  .column a {
    color: #1c1c1c;
    text-decoration: none;
  }
  
  .column a:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 976px) {
  .column h4 {
    font-size: 16px;
    line-height: 1.1em;
  }
  .column p{
    font-size: 12px;
  
  }
  .column a {
    font-size: 12px;
  }
  .column {
    margin: 0 6px;
  }
  }
  </style>
  