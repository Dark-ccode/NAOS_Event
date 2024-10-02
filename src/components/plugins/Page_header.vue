<template>
  <!--==========================
    Header
  ============================ animate__animated animate_slideInRight-->
  <header id="header">
    <div class="container">
      <div id="logo" class="">
        <!-- Uncomment below if you prefer to use a text logo -->
        <!-- <h1><a href="#main">C<span>o</span>nf</a></h1>-->
        <a href="#intro" class="scrollto" style="font-size: 22px"
          ><img
            src="../../assets/img/naoslogo.jpg"
            alt=""
            title=""
            style="border-radius: 50%; margin-right: 10px; font-weight: bold"
          />
          NAOS WORLDWIDE</a
        >
      </div>

      <nav id="nav-menu-container" style="margin-top: -4%">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#intro">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#venue">Venue</a></li>
          <!-- <li><a href="#hotels">Hotels</a></li> -->
          <!-- <li><a href="#gallery">Gallery</a></li> -->
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="buy-tickets" @click.prevent="show_modal()">
            <a href="" @click.prevent="show_modal()">Get Confirmed</a>
          </li>
        </ul>
      </nav>
      <!-- #nav-menu-container -->
    </div>
  </header>
  <!-- #header -->

  <!--==========================
    Intro Section
  ============================-->
  <section id="intro">
    <div class="intro-container animate__animated animate__fadeIn">
      <h1 class="mb-4 pb-0">A Two-day<br /><span>National</span> Convention</h1>
      <p class="mb-4 pb-0">28-29 September, Elu High School, Ohafia</p>
      <!-- <a
        href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
        class="venobox play-btn mb-4"
        data-vbtype="video"
        data-autoplay="true"
      ></a> -->
      <!-- <a href="#about" class="about-btn scrollto desk">About The Event</a> -->
      <a class="about-btn scrollto res" @click.prevent="show_modal()"
        >Get Confirmed</a
      >
    </div>
  </section>
</template>

<script>
import "animate.css";
// const $ = require("jquery");

export default {
  data() {
    return {};
  },
  methods: {
    show_modal() {
      const modal = document.getElementById("modal");
      modal.style.display = "block";
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* Add any styles specific to this component here */
/* .desk {
  display: block;
}
.res{display: none;}
@media (max-width: 360px) {
  .res {
    display: block;
  }
 .desk {
  display: none;
}
} */
</style>
