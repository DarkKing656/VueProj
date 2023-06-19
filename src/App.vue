<template>
  <v-app>
   <NavbarDef></NavbarDef>
   <router-view/>
  </v-app>
</template>

<script>
import NavbarDef from '@/components/NavbarDef.vue'
export default {
  name: 'App',
  components: {
    NavbarDef
  }
}
</script>
