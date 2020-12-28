<template>
  <div>
    <profile-header></profile-header>
    <div id="about-me">
      <div class="animation1" id="profile">
        <h1 class="writing">About Me</h1>
        <img src="@/assets/vaca.jpg" alt="" />
        <a class="writing" href="@/assets/Bilal_Abdurahman_Resume.PDF"
          >Download a pdf copy of my resume.</a
        >
      </div>
      <div  id="list-of-skills">
        <h3 class="animation2">Technical Skills</h3>
        <div class="animation3"  id="all-skills">
          <div>
            <h4>Databases</h4>
            <h4>Wireframes (FIGMA)</h4>
            <h4>Communications</h4>
            <h4>MS Office</h4>
            <h4>HTML, CSS, Javascript</h4>
          </div>
          <div>
            <h4>VueJS</h4>
            <h4>REST APIs</h4>
            <h4>Git Control</h4>
            <h4>Python</h4>
            <h4>MySQL (DBeaver)</h4>
          </div>
          <div>
            <h4>Flask</h4>
            <h4>SASS</h4>
            <h4>Responsive Web Design</h4>
            <h4>Apache</h4>
          </div>
        </div>
      </div>
      <div class="animation4" id="moreme">
        <p>
          Nothing compares to the dopamine response of overcoming a challnge.
          That is why I am excited to begin my career in the tech industry.
          Everytime I learn something new I find that there is so much more to
          learn. I am looking forward to the upcoming challnges that I will face!
        </p>
      </div>
    </div>
    <profile-footer></profile-footer>
  </div>
</template>

<script>
import ProfileFooter from "../components/Footer.vue";
import ProfileHeader from "../components/Header.vue";
export default {
  components: {
    ProfileHeader,
    ProfileFooter
  }
};
</script>

<style lang="scss" scoped>
#about-me {
  display: grid;
  align-items: center;
  justify-items: center;
  .animation1{
  animation:animate__slideInDown;
  animation-delay: 0s;
  }
  .animation2{
  animation:animate__slideInDown;
  animation-delay: 1s;
  }
  .animation3{
  animation:animate__slideInDown;
  animation-delay: 2s;
  }
  .animation4{
  animation:animate__slideInDown;
  animation-delay: 3s;
  }
  #profile {
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: "Racing Sans One", cursive;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px black;
    text-decoration: none;
    img {
      width: 100%;
      height: 200px;
      border-radius: 100%;
      padding: 2% 2%;
      margin: 2% 2%;
      animation:animate__slideInDown;
    animation-delay: 1s;
    }
  }
  #list-of-skills {
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 2% 2%;
    padding: 2% 2%;
    font-family: "Open Sans", sans-serif;
    #all-skills {
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 2% 2%;
      padding: 3% 3%;
      background: whitesmoke;
      border: 2px solid black;
      border-radius: 5%;
        animation:animate__slideInDown;
    animation-delay: 2s;
  }
  }
  #moreme{
    display:grid;
    text-align: left;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    width: 80%;
    margin: 3% 2%;
    padding: 2% 2%;
    animation:animate__slideInDown;
    animation-delay: 3s;
    }
  
}

</style>