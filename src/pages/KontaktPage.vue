<template>
<TheHeader />
<div class="uberuns">
    <div class="left-uber">
        <TheForm />
    </div>
    <div class="right-uber">
        <TheMap />
    </div>
    
</div>
<TheFooter />
</template>
<script>

import TheForm from '../components/TheForm.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheMap from '../components/TheMap.vue';
export default {
    components: {
        TheForm,
        TheFooter,
        TheHeader,
        TheMap
    }
}
</script>
<style scoped>
.uberuns {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
}
.left-uber{
    width: 70%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.right-uber{
    width: 30%;
    background-color: #ffefe1;
    display: flex;
    align-items: center;
    height: 100%;
}

@media only screen and (max-width: 1100px) {

.uberuns {
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0;
   
}

.left-uber {
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
}
.right-uber{
    width: 100%;
    height: 100%;
}
.right-uber img{
    margin-top: 50px;
    margin-left: 40px;
    width: 250px;
}
input, textarea {
    width: 100%;
}
label {
    font-size: 12px;
}
}
</style>