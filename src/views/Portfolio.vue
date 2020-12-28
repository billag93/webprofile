<template>
    <div>
        <div id="body">
        <profile-header></profile-header>
        <div>
            <h1 id="portfolio">Portfolio</h1>
            <a href="https://github.com/billag93">Direct Link To Github</a>
            <div>
                <div class="card-container">
                    
                </div>
                <div class="card-container">
                    
                </div>
                <div class="card-container">
                    
                </div>
                <div class="card-container">
                    
                </div>
                <div class="card-container">
                    
                </div>
                <div class="card-container">
                    
                </div>
            </div>
        </div>
        <profile-footer></profile-footer>
        </div>
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
    display: grid;
    align-items: center;
    justify-items: center;
    font-family:"Racing Sans One", cursive;
}

</style>