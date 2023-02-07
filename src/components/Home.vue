<template>
  <div class="container-fluid">
        <div class="wrapper">
            <div class="cols cols0">
                <span class="top">Hello</span>
                <h1>I'm a <span class="multitext">Full Stack Web Developer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam consectetur quibusdam fugiat fugit, temporibus rerum corporis dolore aspernatur similique modi harum exercitationem iusto deleniti alias sint sit dolorem ipsam?</p>
                <div class="buttons">
                    <a href="">
                        <button class="btn">Download CV</button>
                    </a>
                    <router-link href="#" to="/contact">
                        <button class="btn ms-5">Hire Me</button>
                    </router-link>
                </div>
            </div>
            <div class="cols cols1">
                <div class="img-card">
                    <img src="../assets/Untitled_design-removebg-preview.png" id="decor">
                    <!-- <img src="./images/Sindile__2_-removebg-preview.png" id="me"> -->
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
    height: 100vh;
    overflow: hidden !important;
    /* background-color: #0f0b0a; */
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
    height: 500px;
    width: 500px;
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
@keyframes object2 {
    50%{
        left: 0%;
        top: 10%;
    }
}

.cols {
    width: 50%;
}

.cols0 {
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
    font-size: 90px;
    font-weight: 400;
}

.multitext {
    text-transform: capitalize;
    font-size: 55px;
    font-weight: 600;
    color: #cf305f;
}

p {
    display: block;
    width: 90%;
    font-size: 20px;
    color: grey;
}

.hire {
    margin-left: 30px;
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



</style>