<script>

import {RouterView} from "vue-router"
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<template>
  
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <div :key="$route">  
      <component :is=Component></component>
      </div>
    </transition>
  </router-view>
 

</template>
  
<style>

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);

}
.route-enter-active {
  transition: all .6s ease-in-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px)
}
.route-leave-active {
  transition: all .3s ease-in-out;
}
</style>