<template>
  <!-- Modal structure -->
  <div id="modal" class="modal">
    <div class="modal-backdrop" id="modalBackdrop"></div>
    <div class="modal-content">
      <h3 class="modal_head">
        Generate Confirmation Image
        <!-- <span class="close-btn" id="closeModalBtn" style="color: white">X</span> -->
        <span class="close" id="closeModalBtn">
          <span aria-hidden="true">&times;</span>
        </span>
      </h3>
      <div class="cards" id="cards">
        <div class="form_cont" v-if="!submited">
          <div class="form-group text-center" style="align-content: center">
            <div class="select_img" id="click_file" v-if="!img">
              <span class="fa fa-plus add-icon"></span><br />
              <span class="">Upload your image</span>

              <input
                type="file"
                accept="image/*"
                name="note"
                id="file"
                multiple
                hidden
                @change="handleFilesSelected"
              />
            </div>
            <div class="uploaded" id="uploaded">
              <img src="" alt="" class="img_preview" id="img_preview" />
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="name"
              placeholder="Your Name"
              maxlength="15"
              minlength="10"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="nickname"
              placeholder="Title(s) or Nick Name"
              maxlength="15"
            />
          </div>
          <!-- <div class="form-group">
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
                </div> -->
          <br />
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-dark"
              @click.prevent="submit()"
            >
              Create
            </button>
          </div>
        </div>
        <div id="mcont">
          <!-- v-if="submited" -->
          <div
            class="image_cont"
            v-if="submited"
            id="image_cont"
            ref="captureContent"
          >
            <img id="previewImage" :src="imageSrc" alt="Image Preview" />
            <div class="name_cont">
              <h4>{{ name }}</h4>
              <h5 v-if="nickname != ''">({{ nickname }})</h5>
            </div>
          </div>
        </div>
        <br />
        <div class="text-center" v-if="submited">
          <button
            type="submit"
            class="btn btn-dark"
            @click.prevent="download()"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      img: false,
      submited: false,
      name: "",
      nickname: "",
      imageSrc: "",
    };
  },
  methods: {
    // selectImg() {
    // this.img= false

    //   document
    //     .getElementById("click_file")
    //     .addEventListener("click", function () {
    //       document.getElementById("file").click();
    //     });
    // },
    submit() {
      if (this.name == "" || this.nickname == "" || this.img == false) {
        alert("Fill up the inputs to generate Confirmation");
      } else if (this.name.length <= 10) {
        alert("Name length must be greater than 10");
      } else {
        this.submited = true;
      }
    },
    handleFilesSelected(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      const preview = document.getElementById("img_preview");
      const previewcont = document.getElementById("uploaded");
      reader.onload = (e) => {
        this.img = true;

        preview.src = e.target.result;
        this.imageSrc = e.target.result;
        previewcont.style = "display:block";
      };
      reader.readAsDataURL(file);
    },

    // download() {
    //   htmlToImage
    //     .toJpeg(document.getElementById("image_cont"), {
    //       quality: 0.95,

    //     })
    //     .then(function (dataUrl) {
    //       var link = document.createElement("a");
    //       link.download = "NAOS-confirmation-img.jpeg";
    //       link.href = dataUrl;
    //       link.click();
    //     });
    // },
    download() {
      const content = this.$refs.captureContent; // Reference to the HTML content to capture
      html2canvas(content).then((canvas) => {
        // Convert the canvas to an image
        const image = canvas.toDataURL("image/png");

        // Create a link element and trigger a download
        const link = document.createElement("a");
        link.href = image;
        link.download = "captured-image.png";
        link.click();
      });
    },
  },
  mounted() {
    document
      .getElementById("click_file")
      .addEventListener("click", function () {
        document.getElementById("file").click();
      });

    document.addEventListener("DOMContentLoaded", function () {
      // const openModalBtn = document.getElementById("openModalBtn");
      const modal = document.getElementById("modal");
      const closeModalBtn = document.getElementById("closeModalBtn");
      const modalBackdrop = document.getElementById("modalBackdrop");

      // openModalBtn.addEventListener("click", function () {
      //   modal.style.display = "block";
      // });

      closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      modalBackdrop.addEventListener("click", function () {
        modal.style.display = "none";
      });

      window.addEventListener("click", function (event) {
        if (event.target === modalBackdrop) {
          modal.style.display = "none";
        }
      });
    });
  },
};
</script>

<style scoped>
/* body {
            font-family: Arial, sans-serif;
        } */
.btn {
  width: 40%;
}
#openModalBtn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black with opacity */
  z-index: 0; /* Sit on top */
}

.modal-content {
  position: relative;
  margin: auto;
  padding: 20px;
  width: 50%;
  /* max-width: 600px; */
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); */
  animation: fadeIn 0.3s ease-out;
  top: 15%;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.card {
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Animation for the modal */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.select_img {
  height: 80px;
  width: 30%;
  margin-left: 35%;
  border: 1px dotted black;
  border-radius: 12px;
  text-align: center;
  align-content: center;
  cursor: pointer;
  margin-bottom: 20px;
}
.add-icon {
  font-size: 25px;
  color: #dc3545;
}
.img_preview {
  width: 80px;
  height: 80px;
}
.uploaded {
  display: none;
}
#closeModalBtn {
  color: red;
  font-size: 24px;
}
.image_cont {
  position: relative;
  width: 50%;
  margin-left: 25%;
  height: 450px;
  margin-top: 30px;
  background-image: url(../../assets/img/Even-Confirmation.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
/* #contImg {
  width: 100%;
  height: 100;
  position: relative;
} */
.image_cont img {
  width: 130px;
  height: 130px;
  /* position: relative;
  right: 0px; */
  margin-top: 34.9%;
  margin-left: 67.9%;
  border-radius: 12px;
  margin-bottom: 4%;
}
.name_cont {
  position: absolute;
  margin-top: 0%;
  margin-left: 33.7%;
  color: white;
  text-align: center;
}
.name_cont h4 {
  color: white;
  font-size: 18px;
}
.name_cont h5 {
  color: white;
  font-size: 14px;
  margin-top: -20px;
}
/* #mcont {
  padding: 200px;
} */
@media (max-width: 2000px) {
  .image_cont {
    width: 72%;
    margin-left: 14%;
    height: 420px;
    margin-top: 30px;
    /* background-image: url(../../assets/img/Even-Confirmation.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
  }
  .image_cont img {
    width: 130px;
    height: 127px;
    /* position: relative;
  right: 0px; */
    margin-top: 34.9%;
    margin-left: 67.9%;
    border-radius: 12px;
    margin-bottom: 3.5%;
  }
  .name_cont {
    position: absolute;
    /* margin-top: 0%;
    margin-left: 47%; */
    right: 2%;
    color: white;
    text-align: center;
  }
}
@media (max-width: 1500px) {
  .image_cont {
    width: 72%;
    margin-left: 14%;
    height: 440px;
    margin-top: 30px;
    /* background-image: url(../../assets/img/Even-Confirmation.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
  }
  .image_cont img {
    width: 29%;
    height: 29%;
    /* width: 120px;
    height: 120px; */
    /* position: relative;
  right: 0px; */
    margin-top: 34.9%;
    margin-left: 67.9%;
    border-radius: 12px;
    margin-bottom: 3.5%;
  }
  .name_cont {
    position: absolute;
    margin-top: 0%;
    /* margin-left: 46.3%; */
    right: 3%;

    color: white;
    text-align: center;
  }
}

/* @media (max-width: 390px) { */
@media (max-width: 800px) {
  .modal-content {
    width: 98%;
    top: 15%;
    overflow-x: scroll;
  }
  .select_img {
    height: 80px;
    width: 50%;
    margin-left: 25%;
  }

  .image_cont {
    position: relative;
    width: 380px;
    margin-left: 0%;
    height: 380px;
    /* height: 19em; */
    margin-top: 30px;
    /* background-image: url(../../assets/img/Even-Confirmation.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
  }

  .image_cont img {
    width: 29%;
    height: 28%;
    position: absolute;
    top: 2%;
    right: 3%;
    border-radius: 12px;
    margin-bottom: 5%;
  }

  .name_cont {
    position: absolute;
    bottom: 18%;
    right: 0%;
  }
  .name_cont h4 {
    color: white;
    font-size: 16px;
  }
  .name_cont h5 {
    color: white;
    font-size: 12px;
    margin-top: -20px;
  }
  .modal_head {
    font-size: 20px;
    font-weight: bold;
  }
}

@media (max-width: 490px) {
  .image_cont img {
    width: 29.1%;
    height: 28.3%;
    top: 0%;
    right: 3.5%;
  }

  .name_cont {
    position: absolute;
    bottom: 19%;
    right: 4%;
  }
}
</style>
