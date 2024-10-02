<template>
  <Header />
  <main id="main">
    <!--==========================
      About Section
    ============================-->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>About The Event</h2>
            <p>
              In a celebration of collective strength and shared aspirations,
              the National Association of Ohafia Students presents a two-day
              national convention, where visionaries, innovators, and leaders
              converge to shape the future of our great association.
            </p>
          </div>
          <div class="col-lg-3">
            <h3>Where</h3>
            <p>Ohafia Central School, Elu Ohafia</p>
          </div>
          <div class="col-lg-3">
            <h3>When</h3>
            <p>Saturday to Sunday<br />28-29 September 2024</p>
          </div>
        </div>
      </div>
    </section>

    <!--==========================
      Speakers Section
    ============================-->
    <section id="speakers" class="animate__animated animate__fadeInUp">
      <div class="container">
        <div class="section-header">
          <h2>Event Speakers</h2>
          <p>Here are some of our speakers</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img
                src="../assets/img/excos/president.jpg"
                alt="Speaker 1"
                class="img-fluid img-fluid1"
              />
              <div class="details">
                <h3><a href="">Uchenna Mba E.</a></h3>
                <p>NAOS President General(2022 -2024)</p>
                <div class="social">
                  <!-- <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img
                src="../assets/img/excos/VP.jpg"
                alt="Speaker 2"
                class="img-fluid img-fluid1"
              />
              <div class="details">
                <h3><a href="">Ukoha Precious Kalu</a></h3>
                <p>Acting President</p>
                <div class="social"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img
                src="../assets/img/excos/secretary.jpg"
                alt="Speaker 3"
                class="img-fluid img-fluid1"
              />
              <div class="details">
                <h3><a href="">Ukonu George C.</a></h3>
                <p>General Secretary</p>
                <div class="social"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--==========================
      Schedule Section
    ============================-->
    <section id="schedule" class="section-with-bg">
      <div class="container animate__animated animate__fadeInUp">
        <div class="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>

        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              @click="s_event('day1')"
              data-toggle="tab"
              >Day 1</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              role="tab"
              data-toggle="tab"
              @click="s_event('day2')"
              >Day 2</a
            >
          </li>
        </ul>

        <h3 class="sub-heading">
          NAOS 7th national congress and Ohafia students diamond night
        </h3>

        <div class="row justify-content-center">
          <!-- Schdule Day 1 -->
          <div class="col-lg-9" id="day-1" v-if="day == 'day1'">
            <div class="row schedule-item">
              <div class="col-md-2"><time>09:30 AM</time></div>
              <div class="col-md-10">
                <h4>Registration</h4>
                <p>
                  Arrival and registration of Ohafia students from diferent
                  institutions.
                </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>11:00 AM</time></div>
              <div class="col-md-10">
                <h4>NAOS 7TH National Congress</h4>
                <p>
                  A convergernce of Ohafia Students at Central high School Elu.
                </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>6:00 PM</time></div>
              <div class="col-md-10">
                <h4>Ohafia Students Diamond Night</h4>
                <p>
                  An event where talented Ohafia students will come together to
                  showcase their talents.
                </p>
              </div>
            </div>
          </div>

          <!-- Schdule Day 2 -->
          <div class="col-lg-9" id="day-2" v-else-if="day == 'day2'">
            <div class="row schedule-item">
              <div class="col-md-2"><time>10:00 AM</time></div>
              <div class="col-md-10">
                <h4>NAOS General Elections</h4>
                <p>2024 General Election of ohafia students at Ohafia L.G.A</p>
              </div>
            </div>
          </div>
          <!-- End Schdule Day 2 -->
        </div>
      </div>
    </section>

    <!--==========================
      Venue Section
    ============================-->
    <section id="venue" class="animate__animated animate__fadeInUp">
      <div class="container-fluid">
        <div class="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>

        <div class="row no-gutters">
          <div class="col-lg-6 venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4721.789639537157!2d7.826880641096534!3d5.635286346965454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d2b8ec6809ee7%3A0x6d0fd6ad227e079c!2sEbem%20Primary%20School!5e0!3m2!1sen!2sng!4v1726040396916!5m2!1sen!2sng"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
            ></iframe>
          </div>

          <div class="col-lg-6 venue-info">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-8">
                <h3>Ohafia Central School, Elu Ohafia.</h3>
                <p>Ohafia Central school located at elu Ohafia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="container-fluid venue-gallery-container" hidden>
        <div class="row no-gutters">
          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/1.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/1.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/2.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/2.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/3.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/3.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/4.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/4.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/5.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/5.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/6.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/6.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/7.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/7.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="venue-gallery">
              <a
                href="../assets/img/venue-gallery/8.jpg"
                class="venobox"
                data-gall="venue-gallery"
              >
                <img
                  src="../assets/img/venue-gallery/8.jpg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div> -->
    </section>

    <!--==========================
      Hotels Section
    ============================-->
    <section
      id="hotels"
      class="section-with-bg animate__animated animate__fadeInUp"
    >
      <div class="container">
        <div class="section-header">
          <h2>Hotels</h2>
          <p>Here is our base hotel</p>
        </div>

        <div class="row">
          <!-- <div class="col-lg-2 col-md-6"></div> -->

          <div class="col-lg-12 col-md-6">
            <div class="hotel">
              <div class="hotel-img">
                <img
                  src="../assets/img/hotel.jpg"
                  alt="Hotel 1"
                  class="img-fluid img-fluid1"
                />
              </div>
              <h3><a href="#">Bluespring Luxury Hotels & Resort</a></h3>
              <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p>0.4 Mile from the Venue</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--==========================
      Gallery Section
    ============================-->
    <!-- <section id="gallery" class="animate__animated animate__fadeInUp" hidden>
      <div class="container">
        <div class="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div class="owl-carousel gallery-carousel">
        <a
          href="../assets/img/gallery/1.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/1.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/2.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/2.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/3.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/3.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/4.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/4.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/5.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/5.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/6.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/6.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/7.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/7.jpg" alt=""
        /></a>
        <a
          href="../assets/img/gallery/8.jpg"
          class="venobox"
          data-gall="gallery-carousel"
          ><img src="../assets/img/gallery/8.jpg" alt=""
        /></a>
      </div>
    </section> -->

    <!--==========================
      Sponsors Section
    ============================-->
    <section
      id="sponsors"
      class="section-with-bg animate__animated animate__fadeInUp"
    >
      <div class="container">
        <div class="section-header">
          <h2>Sponsors</h2>
        </div>

        <div class="row no-gutters sponsors-wrap clearfix">
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="sponsor-logo">
              <img
                src="../assets/img/sponsors/1.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="sponsor-logo">
              <img
                src="../assets/img/sponsors/2.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="sponsor-logo">
              <img
                src="../assets/img/sponsors/1.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="sponsor-logo">
              <img
                src="../assets/img/sponsors/3.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="sponsor-logo">
              <img
                src="../assets/img/sponsors/4.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!--==========================
      F.A.Q Section
    ============================-->
    <section id="faq" class="fadeInUp" hidden>
      <div class="container">
        <div class="section-header">
          <h2>F.A.Q</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-9">
            <ul id="faq-list">
              <li>
                <a data-toggle="collapse" class="collapsed" href="#faq1"
                  >Non consectetur a erat nam at lectus urna duis?
                  <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq1" class="collapse" data-parent="#faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq2" class="collapsed"
                  >Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq2" class="collapse" data-parent="#faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq3" class="collapsed"
                  >Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi? <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq3" class="collapse" data-parent="#faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq4" class="collapsed"
                  >Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq4" class="collapse" data-parent="#faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq5" class="collapsed"
                  >Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq5" class="collapse" data-parent="#faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed"
                  >Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?
                  <i class="fa fa-minus-circle"></i
                ></a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--==========================
      Subscribe Section
    ============================-->
    <section id="subscribe">
      <div class="container animate__animated animate__fadeInUp">
        <div class="section-header">
          <h2>Newsletter</h2>
          <p>Stay updated sign up our newa letter.</p>
        </div>

        <form method="POST" action="#">
          <div class="form-row justify-content-center">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your Email"
              />
            </div>
            <div class="col-auto">
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <!--==========================
      Buy Ticket Section
    ============================-->
    <section id="buy-tickets" class="section-with-bg fadeInUp" hidden>
      <div class="container">
        <div class="section-header">
          <h2>Buy Tickets</h2>
          <p>
            Velit consequatur consequatur inventore iste fugit unde omnis eum
            aut.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Standard Access
                </h5>
                <h6 class="card-price text-center">$150</h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Regular Seating
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Coffee
                    Break
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Custom
                    Badge
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fa fa-times"></i></span
                    >Community Access
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fa fa-times"></i></span
                    >Workshop Access
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fa fa-times"></i></span>After
                    Party
                  </li>
                </ul>
                <hr />
                <div class="text-center">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#buy-ticket-modal"
                    data-ticket-type="standard-access"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Pro Access
                </h5>
                <h6 class="card-price text-center">$250</h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Regular Seating
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Coffee
                    Break
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Custom
                    Badge
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Community Access
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fa fa-times"></i></span
                    >Workshop Access
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fa fa-times"></i></span>After
                    Party
                  </li>
                </ul>
                <hr />
                <div class="text-center">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#buy-ticket-modal"
                    data-ticket-type="pro-access"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Pro Tier -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Premium Access
                </h5>
                <h6 class="card-price text-center">$350</h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Regular Seating
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Coffee
                    Break
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>Custom
                    Badge
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Community Access
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span
                    >Workshop Access
                  </li>
                  <li>
                    <span class="fa-li"><i class="fa fa-check"></i></span>After
                    Party
                  </li>
                </ul>
                <hr />
                <div class="text-center">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#buy-ticket-modal"
                    data-ticket-type="premium-access"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Order Form -->
      <div id="buy-ticket-modal" class="modal fade">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Buy Tickets</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form method="POST" action="#">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="your-name"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="your-email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <select
                    id="ticket-type"
                    name="ticket-type"
                    class="form-control"
                  >
                    <option value="">-- Select Your Ticket Type --</option>
                    <option value="standard-access">Standard Access</option>
                    <option value="pro-access">Pro Access</option>
                    <option value="premium-access">Premium Access</option>
                  </select>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn">Buy Now</button>
                </div>
              </form>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
    </section>

    <!--==========================
      Contact Section
    ============================-->
    <section
      id="contact"
      class="section-bg animate__animated animate__fadeInUp"
    >
      <div class="container">
        <div class="section-header">
          <h2>Contact Us</h2>
          <p>Contact us for more info about the event.</p>
        </div>

        <div class="row contact-info">
          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Chairman P.C</h3>
              <p><a href="tel:08181304419">+234 818 130 4419</a></p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Secretary P.C</h3>
              <p><a href="tel:09028181747">+234 902 818 1747</a></p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>P.R.O P.C</h3>
              <p><a href="tel:08123902439">+234 812 390 2439</a></p>
            </div>
          </div>
        </div>

        <div class="form" hidden>
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form action="" method="post" role="form" class="contactForm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validation"></div>
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div class="validation"></div>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              ></textarea>
              <div class="validation"></div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- #contact -->
  </main>
  <br />
  <Footer />
  <Confirmation />
</template>

<script>
import Header from "./plugins/Page_header";
import Footer from "./plugins/Page_footer";
import Confirmation from "./plugins/Confirmation_modal.vue";

import "animate.css";

export default {
  components: {
    Header,
    Footer,
    Confirmation,
  },
  data() {
    return {
      day: "day1",
    };
  },
  methods: {
    // show_modal(){
    //   const modal = document.getElementById("modal");
    //     modal.style.display = "block";

    // },
    s_event(casef) {
      if (casef == "day1") {
        this.day = "day1";
      }
      if (casef == "day2") {
        this.day = "day2";
      }
    },
  },
  mounted() {
    // this.$.init();
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
.img-fluid1 {
  height: 320px;
  width: 100%;
}
</style>
