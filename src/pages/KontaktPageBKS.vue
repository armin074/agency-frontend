<template>
    <TheHeaderBKS />
    <div class="uberuns">
        <div class="left-uber">
            <TheFormBKS />
        </div>
        <div class="right-uber">
            <img src="..//assets/images/mailbox.svg" />
        </div>
    </div>
    <TheFooter />
    </template>
    <script>
    import TheFormBKS from '../components/TheFormBKS.vue';
    import TheFooterBKS from '../components/TheFooterBKS.vue'
    import TheHeaderBKS from '../components/TheHeaderBKS.vue'
    export default {
        components: {
            TheFormBKS,
            TheFooterBKS,
            TheHeaderBKS
        }
    }
    </script>
    <style scoped>
    body {
        width: 100%;
        height: 100%;
    }
 .uberuns {
    height: 120vh;
    width: 100%;
    display: flex;
    justify-content: center;

}

.left-uber {
    width: 70%;
    height: 100vh;
    
    box-sizing: border-box; 
}

.right-uber {
    width: 30%;
    background-color: #ffefe1;
    display: flex;
    align-items: center;
}

.right-uber img {
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