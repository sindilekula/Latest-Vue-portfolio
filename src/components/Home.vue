<template>
  <div class="container-fluid">
        <div class="wrapper">
            <div class="row">
                <div class="col-lg-7">
                    <span class="top">Hello</span>
                    <h1>I'm a <span class="multitext">Front End Web Developer</span></h1>
                    <p>Recent graduate of Life Choices Coding Academy's Web Development Bootcamp Course, with a focus on Tech Stacks including, but not limited to <span class="pink1">HTML</span>, <span class="pink2">CSS</span>, <span class= "pink3">JavaScript</span>, <span class="pink4">NODE.JS</span>, <span class="pink5">VUE.JS</span>, and <span class="pink6">MySQL</span>. I'm a student intern at Life Choices Studio (LC Studio), where I'm pursuing my <span class="pink7">WORDPRESS</span> & <span class="pink8">PHP</span> learning journey. Also, I am utilizing <span class="pink9">FIGMA</span>, <span class="pink10">PHOTOSHOP</span>, and <span class="pink11">Canva</span> to improve my UX/UI design skills.</p>
                    <div class="buttons">
                        <a href="" id="download">
                            <button class="btn">Download CV</button>
                        </a>
                        <router-link href="#" to="/contact">
                            <button class="btn">Hire Me</button>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="img-card">
                        <img src="../assets/Untitled_design-removebg-preview.png" id="decor">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
    props: {
      msg: String
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rye&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sevillana&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Special Elite', cursive;
}

.container-fluid {
    width: 100%;
    min-height: 100vh;
    overflow: hidden !important;
}

.wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 90px);
    justify-content: center;
    align-items: center;
    padding: 0 6%;
    overflow: hidden;
    margin-top: 80px;
}

.wrapper::before {
    position: absolute;
    content: '';
    min-height: 500px;
    min-width: 500px;
    border-radius: 50%;
    left: -10%;
    top: 80%;
    background: linear-gradient(45deg, #cf305f,grey);
    animation: object 6s linear infinite;
}
.wrapper::after {
    position: absolute;
    content: '';
    min-height: 200px;
    min-width: 200px;
    border-radius: 50%;
    left: 35%;
    top: 12%;
    background: linear-gradient(45deg, #cf305f,grey);
    animation: object2 10s linear infinite;
}

span.pink1, span.pink2, span.pink3, span.pink4, span.pink5, span.pink6, span.pink7, span.pink8, span.pink9, span.pink10, span.pink11 {
    color: #cf305f;
    font-size: 25px;
}


@keyframes object2 {
    50%{
        left: 0%;
        top: 10%;
    }
}

.cols {
    width: 50%;
}

.cols-lg-7 {
    z-index: 5;
}

.top {
    display: block;
    position: relative;
    font-size: 35px;
    letter-spacing: 5px;
    /* color: grey; */
}

.top::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 50px;
    bottom: 10px;
    background-color: #cf305f;
}

h1 {
    display: block;
    font-size: 55px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 50px;
}

.multitext {
    text-transform: capitalize;
    font-size: 90px;
    font-weight: 600;
    color: #cf305f;
}

p {
    display: block;
    width: 100%;
    font-size: 20px;
    color: grey;
}

a#download {
    margin-right: 40px;
}

button {
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3);
  width: 100px;
  height: 40px;
  padding: 5px;
  margin-top: 50px;
  width: 200px;
}
button .btn {
  font-size: 30px;
  color: white;
  background-color: #cf305f !important;
  padding: 10px 5px;
  margin: 40px 40px;
  letter-spacing: 3px;
  text-transform: capitalize;
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3);
  cursor: pointer;
  border: solid 1px black;
}

button:hover {
  background-color: #cf305f;
  color: white !important;
  border-color: black;
}

.img-card {
    position: relative;
    width: 100%;
    height: 100%;
}

.img-card #me {
    position: relative;
    height: 100%;
    width: calc(130% - 100px);
    top: -10px;
    right: 50px;
    animation: animateUser 3s linear infinite;
}

@keyframes animateUser {
    50%{
        right: 30px;
        top: -5px;
    }
}

.img-card #decor {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-45%) rotate(-35deg);
    width: 160%;
    filter: saturate(200%);
}

@media screen and (max-width: 1583px) {
    .wrapper {
        min-height: 100vh;
    }
    .wrapper::before {
        display: none !important;
    }
    .col-lg-5 {
        display: none;
    }
    .col-lg-7 {
        width: fit-content;
    }

}

@media screen and (max-width: 548px) {
    .multitext {
    font-size: 60px;
}
}

@media screen and (max-width: 499px) {
    a#download {
        margin-right: 0px;
    }
     .wrapper::after {
        display: none !important;
    }
}


@media screen and (max-width: 399px) {
    .col-lg-7 {
        margin-top: 70px;
    }
}


</style>