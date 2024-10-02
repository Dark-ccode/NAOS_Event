import { createApp } from "vue";
// import VueCropper from "vue-cropperjs";
// import "cropperjs/dist/cropper.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// import WOW from 'wow'
// Components
import App from "./App.vue";

// Importing CSS files
import "@/assets/lib/bootstrap/css/bootstrap.min.css";
import "@/assets/lib/font-awesome/css/font-awesome.min.css";
import "@/assets/lib/animate/animate.css";
import "@/assets/lib/venobox/venobox.css";
import "@/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/assets/css/style.css"; // Make sure the style.css is placed in the assets/css directory

// Importing JS files
import "@/assets/js/main.js";

// import "@/assets/lib/jquery/jquery.min.js";
// import "@/assets/lib/jquery/jquery-migrate.min.js";
// import "@/assets/lib/bootstrap/js/bootstrap.bundle.min.js";
// import "@/assets/lib/easing/easing.min.js";
// import "@/assets/lib/superfish/hoverIntent.js";
// import "@/assets/lib/superfish/superfish.min.js";
// import "@/assets/lib/wow/wow.min.js";
// import "@/assets/lib/venobox/venobox.min.js";
// import "@/assets/lib/owlcarousel/owl.carousel.min.js";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
});

const app = createApp(App);

// Register VueCropper as a global component
// app.component("VueCropper", VueCropper);

app.use(vuetify).mount("#app");


// app.config.globalProperties.$wow = new WOW.WOW({
//   live: false
// });