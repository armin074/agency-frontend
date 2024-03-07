<template>
    <TheHeaderBKS />
    <div class="uberuns">
        <div class="left-uber">
            <TheFormBKS />
        </div>
        <div class="right-uber">
            <TheMap />
        </div>
       
    </div>
    <TheFooterBKS />
    </template>
    <script>
    
    import TheFormBKS from '../components/TheFormBKS.vue';
    import TheFooterBKS from '../components/TheFooterBKS.vue';
    import TheHeaderBKS from '../components/TheHeaderBKS.vue';
    import TheMap from '../components/TheMap.vue';
    export default {
        components: {
            TheFormBKS,
            TheFooterBKS,
            TheHeaderBKS,
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
  
    input, textarea {
        width: 100%;
    }
    label {
        font-size: 12px;
    }
    }
    </style>