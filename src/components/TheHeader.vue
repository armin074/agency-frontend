
<script>
import {RouterLink} from 'vue-router';
export default {
    name: 'TheHeader'
}
</script>

<template>
<div class="container">
    <nav class="navbar">
        <img src="../assets/images/cult-logo.svg">
        <ul class="nav ul">
            <li class="nav li">
            <RouterLink to="/">Bewerber</RouterLink>
            <RouterLink to="unternehmen">Unternehmen</RouterLink>
            <RouterLink to="uberuns">Uber Uns</RouterLink>
            </li>
        </ul>
        <div class="mobile-menu">menu</div>
    </nav>
</div>
</template>
<style scoped>
.container {
    width: 85vw;
    margin: auto;
    margin-top: 35px;
    height: 5em;
    position: relative;
}
img{
    position: absolute;
    width: 155px;
    height: 145px;
    left: 0;
}
.mobile-menu{
    position: absolute;
    margin-right: 50px;
    font-family: 'Neue Montreal';
    text-transform: uppercase;
    font-size: 12px;
}
nav {
    display: flex;
    padding: 20px 10px 30px 10px;
    border-bottom: 1px solid rgb(194, 194, 194);
    align-items: center;
    justify-content: center;
   
}
ul {
    list-style-type: none;
    padding: 0;
    
}
a {
    text-decoration: none;
    color: #575656;
    font-family: 'Neue Montreal';
    text-transform: uppercase;
    font-size: 12px;
   
}
li a{
 margin: 0 15px 0 15px;
}
.mobile-menu{
    display: flex;
    right: 0;
}
</style>