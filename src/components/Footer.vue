<template>
    <div>
        <div id="mobile-footer">
            <a href="https://github.com/billag93"><img src="@/assets/github.svg" alt="Github"/></a>
            <a href="mailto:billa.abdu@gmail.com"><img src="@/assets/gmail.svg" alt="Gmail"/></a>
            <a href="https://www.linkedin.com/in/bilal-abdurahman-220078a4/"><img src="@/assets/linkedin.svg" alt="Linkedin"/></a>
            <a href="https://www.instagram.com/thedarksaiyan/?hl=en"><img src="@/assets/instagram.svg" alt="Instagram"/></a>
            <!-- Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
            <!-- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
            <!-- Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
        </div>
        <div id="footer">
            <h2>Made By Bilal Abdurahman</h2>
            <a href="https://github.com/billag93">Github</a>
            <a href="mailto:billa.abdu@gmail.com">Gmail</a>
            <a href="https://www.linkedin.com/in/bilal-abdurahman-220078a4/">LinkedIn</a>
            <a href="https://www.instagram.com/thedarksaiyan/?hl=en">Instagram</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-footer"
    }
</script>

<style lang="scss" scoped>
#mobile-footer{
    position: sticky;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.9em;
    font-family: 'Racing Sans One', cursive;
    height: 10vh;
    width: 100%;
    background:white;
    color: black;
    bottom: 0;
    
    img{
        height:50px;
    }
}

#footer{
    display: none;
}
</style>