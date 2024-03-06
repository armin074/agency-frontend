<template>
  
  <div class="menu">
    <div class="logo">
     
        <img :src="logoSrc" alt="CultStaff Vienna" />
     
    </div>
    <div class="links">
      <RouterLink to="/">Bewerben</RouterLink>
      <RouterLink to="/unternehmen">Unternehmen</RouterLink>
      <RouterLink to="/kontakt">Kontakt</RouterLink>
    </div>
    <div class="language-dropdown" @click="toggleDropdown">
    <div class="language-selected">
     <span class="country"><img :src=langDE > </span> 
      {{ selectedLanguage }} <span class="arrow" :class="{ up: isOpen }">&#9660;</span></div>
    <div class="language-dropdown-content" v-if="isOpen">
      <RouterLink to="/en">
        <span class="country">
        <img :src=langEN /></span>
        EN</RouterLink>
      <RouterLink to="/bks">
        <span class="country">
        <img :src=langBA />
      </span>
        <span class="country">
        <img :src=langCR /></span>
        <span class="country">
        <img :src=langSR /></span>
        BKS</RouterLink>
        
       
      <RouterLink to="/al">
        <span class="country">
        <img :src=langAL /></span>
        AL</RouterLink>
    </div>
  </div>
    <div class="right-link">
      <p>{{ getTimeInVienna() }}</p>
    </div>
  </div>
   <!---MOBILE MENU-->
   <header>
    <div class="logo">
      <a href="https://cultstaff.at">
        <img :src="logoSrc" alt="CultStaff Vienna" />
      </a>
    </div>
      <button @click="toggleMenu" class="hamburger-menu" :aria-expanded="isMenuOpen.toString()" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
    <nav :class="{ 'open': isMenuOpen }">
      <ul>
        <li> <div class="language-dropdown" @click="toggleDropdown">
    <div class="language-selected">
      <span class="country">
        <img :src=langDE />
      </span>
      
      {{ selectedLanguage }} <span class="arrow" :class="{ up: isOpen }">&#9660;</span></div>
    <div class="language-dropdown-content" v-if="isOpen">
   
        <RouterLink to="/en">
        <span class="country">
        <img :src=langEN /></span>
        EN</RouterLink>
      
      <RouterLink to="/bks">
        <span class="country">
        <img :src=langBA /></span>
        <span class="country">
        <img :src=langCR /></span>
        <span class="country">
        <img :src=langSR /></span>
        BKS</RouterLink>
        <RouterLink to="/al">
        <span class="country">
        <img :src=langAL /></span>
        AL</RouterLink>
    </div>
  </div></li>
        <li><router-link to="/" @click.native="closeMenu">Bewerben</router-link></li>
        <li><router-link to="/unternehmen" @click.native="closeMenu">Unternehmen</router-link></li>
        <li><router-link to="/kontakt" @click.native="closeMenu">Kontakt</router-link></li>
        <li><button @click="exitMenu">Exit</button></li>
      </ul>
    </nav>
<!--mobile menu end-->
</template>

<style scoped>
.country img{
  width: 16px;
  height: 16px;
}
.language-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.language-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  
  padding: 10px;
}

.language-dropdown-content a {
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
}

.language-dropdown:hover .language-dropdown-content {
  display: block;
}

.rotate {
  transition: transform 0.3s ease;
}

.down {
  transform: rotate(0deg);
}

.up {
  transform: rotate(180deg);
}
.right-link p {
  font-size: 16px;
}
body {
  margin: 0;
}

.menu {
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 75px 0 75px;
  font-family: 'BodegaSans';
  text-transform: uppercase;
  height: 150px;
  z-index: 999999;
}

.logo {
  cursor: pointer;
  flex: 1;
  display: flex;
  margin-left: -50px;
}

.logo img {
  height: 140px; /* Set the height as needed */
  margin-right: 10px;
  align-self: left;
}

.links a {
  position: relative;
  color: #1c1c1c;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  overflow: hidden;
}

.links a:hover {
  text-decoration: none;
}

.links a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1.3px;
  bottom: 0;
  left: 0;
  background-color: #1c1c1c;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.links a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
.right-link {
  flex: 1;
  text-align: right;
}
@media only screen and (min-width: 976px){
  header, nav, .wrapper {
    display: none;
  }

}
@media only screen and (max-width: 976px) {
  
  .language-dropdown-content a {
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  font-size: 16px;
}
  .logo img {
    height: 120px;
    position: fixed;
  }
  .menu {
    display: none;
  }
  .links a {
    font-size: 12px; 
  }
  header {

  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  z-index: 9999999;
}

.hamburger-menu {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25px;
  height: 25px;
  position: fixed;
  right: 35px;
  top: 65px;
}
button {
  border: none;
  font-family: 'BodegaSans';
  width: 100px;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;

}
.hamburger-menu span {
  display: block;
  width: 30px;
  height: 1.25px;
  background-color: #1c1c1c;
  transition: 0.3s;
}

.hamburger-menu span:nth-child(2) {
  width: 20px;
}

.open span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}



.open span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

nav {
  background-color: #e9531d;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  font-family: 'BodegaSans';
  text-transform: uppercase;
  font-size: 26px;
}

nav.open {
  transform: translateX(0);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.2em;
}
}
</style>


<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  
  data() {
    return {
      logoSrc: 'https://svgshare.com/i/12CY.svg',
      isMenuOpen: false,
      isOpen: false,
      selectedLanguage: 'DE',
      langEN: 'https://i.ibb.co/GCpwf0H/united-kingdom.png',
      langDE: 'https://i.ibb.co/5Lwr55C/austria.png',
      langBA: 'https://i.ibb.co/F8KKNP9/bosnia-and-herzegovina.png', 
      langSR: 'https://iili.io/JVnKXi7.png',
      langCR: 'https://i.ibb.co/kyYn7tF/croatia.png',
      langAL: 'https://i.ibb.co/PD0p18K/albania.png',
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    exitMenu() {
      this.isMenuOpen = false;
        },
    getTimeInVienna() {
      const viennaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Vienna',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      })

      return viennaTime + ' Wien, Österreich'
    }
  },
  mounted() {
    setInterval(() => {
      // Force a re-render to update the time every second
      this.$forceUpdate()
    }, 1000)
  }
}
</script>
