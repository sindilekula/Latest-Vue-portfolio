<template>
    <!-- <nav>
        <div class="logo"><b>S</b>indile<b>!</b></div>
        <ul class="nav-items">
            <li>
                <routerlink href="#" to="/Home">Home</routerlink>
            </li>
            <li><a href="">About</a></li>
            <li><a href="./Projects.html">Projects</a></li>
            <li><a href="">Testimonials</a></li>
        </ul>
        <div class="socials">
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
             <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </nav> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="logo"><b>S</b>indile<b>!</b></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" href="#" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" to="/testimonials">Testimonials</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" to="/contact">Contact</router-link>
                    </li>
                </ul>
                <span class="navbar-text">
                    <div class="socials">
                        <a target="_blank" href="https://github.com/sindilekula"><i class="fa-brands fa-github" data-toggle="tooltip" data-placement="top" title="Github"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/sindile-kula-2b777a238/"><i class="fa-brands fa-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn"></i></a>
                        <a target="_blank" href="https://codepen.io/your-work"><i class="fa-brands fa-codepen" data-toggle="tooltip" data-placement="top" title="Codepen"></i></a>
                        <!-- <a href=""><i class="fa-brands fa-linkedin"></i></a> -->
                    </div>
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container-fluid {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90px;
    /* background-color: grey; */
    z-index: 101;
    line-height: 90px;
}

.logo {
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 5px;
    cursor: pointer;
}

b {
    font-size: 60px;
    font-weight: 800;
    color: #cf305f;
}

.nav-items {
    display: flex;
}

.navbar-light .navbar-nav .nav-link {
    color: #2c3e50;
    font-size: 20px;
    letter-spacing: 2px;
}

nav .nav-items li a::after {
    content: '';
    width: 0;
    height: 3px;
    background: #cf305f;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.8s;
}

nav ul li a {
    position: relative;
}
nav ul li a::after {
    content: '';
    width: 0;
    height: 3px;
    background: #cf305f;
    position: absolute;
    left: 0;
    bottom: 20px;
    transition: 0.8s;
}
nav ul li a:hover::after{
    width: 100%;
}

.nav-items li a:hover::after{
    width: 100%;
}

.navbar-nav{
    margin-left: 400px;
}

.socials a:hover {
    color: #cf305f;
}

.socials a {
    color: grey;
    font-size: 30px;
    margin: 25px 10px;
}



/* .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color: white;
} */

@media screen and (max-width: 1296px) {
    .navbar-nav{
        margin-left: 250px;
    }
}
@media screen and (max-width: 1148px) {
    .navbar-nav{
        margin-left: 100px;
    }
}

@media screen and (max-width: 991px) {
    .navbar-collapse {
        /* flex-basis: 100%;
        flex-grow: 1; */
        background-color: #2c3e50;
        /* align-items: center; */
        text-align: left;
    }
    .navbar-light .navbar-nav .nav-link {
        color: white;
        font-size: 20px;
        letter-spacing: 2px;
    }

}
</style>