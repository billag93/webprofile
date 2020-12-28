<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="container">
          <v-img src="@/assets/athome.jpg" alt="" />
        </v-card>
        <v-card class="container">
          <v-img src="@/assets/abs.jpg" alt="" />
        </v-card>
        <v-card class="container">
          <v-img src="@/assets/essential.jpg" alt="" />
        </v-card>
        <v-card class="container">
          <v-img src="@/assets/halloween.jpg" alt="" />
        </v-card>
        <v-card class="container">
          <v-img src="@/assets/hiking.jpg" alt="" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "scrolling-images",
};
</script>

<style lang="scss" scoped>
#scroll-images {
  display: grid;
  align-items: center;
  justify-items: center;
  .container {
    display: grid;
    align-items: center;
    justify-items: center;
    v-img {
      width: 100%;
      height: auto;
    }
  }
}
</style>