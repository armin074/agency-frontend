<template>
<TheHeaderEN />
    <div class="uberuns">
        <div class="left-uber">
            <TheFormEN />
        </div>
        <div class="right-uber">
            <img src="..//assets/images/mailbox.svg" />
        </div>
    </div>
<TheFooterEN />
    </template>
    <script>
    import TheFormEN from '../components/TheFormEN.vue';
    import TheHeaderEN from '../components/TheHeaderEN.vue';
    import TheFooterEN from '../components/TheFooterEN.vue'; 

    export default {
        components: {
            TheFormEN,
            TheHeaderEN,
            TheFooterEN
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
    }
    .right-uber img{
        margin-top: 75px;
        margin-left: 50px;
        width: 300px;
        height: 300px;
    }
    @media only screen and (max-width: 600px) {
    
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