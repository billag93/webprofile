<template>
    <div>
        <profile-header></profile-header>
            <div id="body">
                <h1>Contact</h1>
                <br>
                <img src="@/assets/champ.jpg" alt="1st place">
                <br>
                <h4>Call or text for inquiries</h4>
                <br>
                <a href="tel:+403-690-2348">403-690-2348</a>
                <br>
            </div>
        <profile-footer></profile-footer>
    </div>
</template>

<script>
import ProfileFooter from "../components/Footer.vue"
import ProfileHeader from "../components/Header.vue"
    export default {
        components: {
            ProfileHeader,
            ProfileFooter
        },
    }
</script>

<style lang="scss" scoped>
#body{
    display:grid;
    align-items: center;
    justify-items: center;
    font-family:"Racing Sans One", cursive;
    margin: 2% 2%;
    padding: 2% 2%;
    a{
        text-decoration: none;
    }
    img{
        max-width: 300px;
        height: auto;
        border-radius: 8%;
    }
}

</style>