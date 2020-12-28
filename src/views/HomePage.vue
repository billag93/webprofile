<template>
  <v-container fluid>
    <div id="header">
      <profile-header></profile-header>
    </div>
    <div id="home-body">
      <div id="intro">
        <h1 class="name">Bilal Abdurahman</h1>
        <span class="bar1"></span>
        <h2 class="physique">Mens Physique Competitor</h2>
        <span class="bar2"></span>
        <h3 class="fitness">Fitness Enthusiast</h3>
        <span class="bar3"></span>
        <h4 class="pizza">
          Pizza Lover <img src="@/assets/pizza.svg" alt="pizza" />
        </h4>
        <span class="bar4"></span>
      </div>
      <div class="parallax"></div>
      <div id="scrolling-images">
        <scrolling-images></scrolling-images>
      </div>
    </div>
    <div id="footer">
      <profile-footer></profile-footer>
    </div>
  </v-container>
</template>

<script>
import ScrollingImages from "../components/Scrolling.vue"
import ProfileFooter from "../components/Footer.vue";
import ProfileHeader from "../components/Header.vue";
export default {
  components: {
    ProfileHeader,
    ProfileFooter,
    ScrollingImages
  }
};
</script>

<style lang="scss" scoped>
#home-body {
  display: grid;
  justify-items: center;
  align-items: center;
  .parallax {
    background-image: url("../assets/animewall.jpg");
    height: 600px;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #intro {
    display: grid;
    justify-items: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-shadow: 3px 3px white;
    margin: 2% 2%;
    padding: 1% 1%;
    line-height: 10vh;
    .bar1 {
      width: 78vw;
      height: 1vh;
      background: white;
    }
    .bar2 {
      width: 65vw;
      height: 1vh;
      background: white;
    }
    .bar3 {
      width: 51vw;
      height: 1vh;
      background: white;
    }
    .bar4 {
      width: 30vw;
      height: 1vh;
      background: white;
    }
    .name {
      animation: backInDown;
      animation-duration: 2s;
    }
    .physique {
      animation: backInLeft;
      animation-duration: 1s;
    }
    .fitness {
      animation: backInRight;
      animation-duration: 1s;
    }
    .pizza {
      animation: backInUp;
      animation-duration: 1s;
      img {
        height: 25px;
      }
    }
  }
}
</style>