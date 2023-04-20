<!-- Hotjar Tracking Code for https://sindilekula.netlify.app -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3457823,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<template>
   <div class="container-fluid">
        <div class="heading">
            <h1 class="mt-5">SEND ME A MESSAGE<span class="mark">!</span></h1>
        </div>
        <div class="row" id="top">
            <div class="col-lg-4 p-2">
                <div class="">
                    <img src="../assets/phone2-removebg-preview.png" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-8">
                <form target="_blank" action="https://formspree.io/f/xqknwllo" method="POST" class="row">
                    <div class="col-md-6 p-2">
                        <label for="inputFirst" class="form-label">FIRST NAME</label>
                        <input type="text" name="first" class="form-control p-2" id="inputFirst" placeholder="Type your name here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputLast" class="form-label">LAST NAME</label>
                        <input type="text" name="last" class="form-control p-2" id="inputLast" placeholder="Type your surname here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputEmail4" class="form-label">EMAIL ADDRESS</label>
                        <input type="email" name="email" class="form-control p-2" id="inputEmail4" placeholder="Type your email address here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputPhone" class="form-label">PHONE NUMBER</label>
                        <input type="text" name="phone" class="form-control p-2" id="inputPhone" placeholder="Type your phone number here..." required>
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputSubject" class="form-label">SUBJECT</label>
                        <input type="text" name="subject" class="form-control p-2" id="inputSubject" placeholder="Type what you want to talk about..." required>
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputMessage" class="form-label">MESSAGE</label>
                        <textarea class="form-control p-2" id="inputMessage" placeholder="Type your message here..."></textarea>
                    </div>
                    <div class="col-12">
                        <a href="">
                        <button class="btn">SEND A MESSAGE</button>
                    </a>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>

export default {
    
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Special Elite', cursive;
}
.container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px white; 
}

.heading {
    margin-top: 150px;
    margin-bottom: 100px;
}

.heading h1 {
  font-size: 70px;
  font-weight: 700;
}

.mark {
  color: #cf305f;
}
.card {
    height: 400px
}
img {
    height: 500px;
    width: 400px;
    object-fit: cover;
}

form {
    margin: 20px;
    padding: 10px;
}

label.form-label {
    color: #cf305f;
    font-size: 20px;
}

.form-control {
    background-color: rgba(255, 255, 255, 0.1);
}

.form-control:focus {
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    background: rgba(0, 0, 0, 0);
}
.col-lg-6 input {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 10px;
    height: 40px;
    width: 350px;
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

button.btn:hover {
    background-color: #cf305f;
    color: white; 
}
@media screen and (max-width: 470px) {
    .card {
        width: 300px;
    }
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
}
</style>