<style>
body {
  background-color: rgb(96, 96, 96);
}
.nav_button {
  color: white;
  font-size: 30px;
}

.banner_lg1 {
position: absolute;
width: 1529px;
height: 474px;

background: #FFF3C8;
}

.banner_lg2 {
position: absolute;
width: 42px;
height: 276px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
}

.banner_lg3 {
position: absolute;
width: 42px;
height: 276px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
}

.banner_lg4 {
position: absolute;
width: 42px;
height: 276px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
}

.banner_lg5 {
position: absolute;
width: 24.05px;
height: 193.26px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
transform: matrix(0, -1, 1, 0, 0, 0);
}

.banner_lg7 {
position: absolute;
width: 24.05px;
height: 193.26px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
transform: matrix(0, -1, 1, 0, 0, 0);
}

.banner_lg6 {
position: absolute;
width: 24.05px;
height: 193.26px;

background: #FF0000;
filter: blur(50px);
border-radius: 40px;
transform: matrix(0, -1, 1, 0, 0, 0);
}

.banner_lg8 {
position: absolute;
width: 155px;
height: 212px;

background: #9D9D9D;
filter: blur(50px);
border-radius: 43px;
}

.btn_create {
  background-color: greenyellow;
  color: white;
  height: 80px;
  width: 36px;
}
</style>
<template>
  <body>
    <div class="nav">
      <a class="nav_button" href="#">Home</a>
      <a class="nav_button" href="./Download.vue">Download</a>
      <a class="nav_button" href="./Ref.vue">Ref</a>
      <a class="nav_button" href="./Services.vue">Services</a>
      <a class="nav_button" href="./Finder.vue">Finder</a>
      <a class="nav_button" href="./Faq.vue">FAQ</a>
    </div>
    <hr>
    <br>
    <div class="container">
      <div class="banner">
        <div class="banner_lg1"></div>
        <div class="banner_lg2"></div>
        <div class="banner_lg3"></div>
        <div class="banner_lg4"></div>
        <div class="banner_lg5"></div>
        <div class="banner_lg6"></div>
        <div class="banner_lg7"></div>
        <div class="banner_lg8"></div>
        <div class="banner_lg9"></div>
      </div>
      <div class="context">
        <center>
          <h1>View Source code</h1>
          <h1>https://github.com/varnet11/prod_fix_</h1>
        </center>
        <h1>Create your own server</h1>
        <form action="./Client.vue">
          <button class="btn_create ">
            Create
          </button>
        </form>
      </div>
    </div>

  </body>
</template>
