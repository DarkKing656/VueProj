<template>

<v-container>
    <v-app-bar
        color="orange"
        dense
        dark
      >
      <LinksHeader></LinksHeader>

      </v-app-bar>
</v-container>
</template>

<script>
import LinksHeader from '@/components/LinksHeader.vue'
export default {
  name: 'NavbarDef',
  components: {
    LinksHeader
  }
}
</script>
