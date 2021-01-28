<template>
    <div>
        <div id="add">
            <div id="add-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="margin-top: 30px; margin-left: 3%;"><b>Buat surat</b></h1>
                </div>
                <form @submit.prevent="addMail" class="d-flex flex-column">
                    <div id="form-add">
                        <label for="kepada" id="form-label">kepada</label>
                        <input v-model="kepada" type="text" id="form-input" placeholder="kepada: " required>
                    </div>
                    <div id="form-add">
                        <label for="perihal" id="form-label">perihal</label>
                        <input v-model="perihal" type="text" id="form-input" placeholder="perihal: " required>
                    </div>
                    <div id="form-add">
                        <label for="keterangan" id="form-label">keterangan</label>
                        <input v-model="keterangan" type="text" id="form-input" placeholder="keterangan: " required>
                    </div>
                   <div id="form-add">
                        <label for="instansi" id="form-label">instansi anda</label>
                        <select v-model="instansi" id="form-input">
                          <option value="HRD">HRD</option>
                          <option value="MARKETING">MARKETING</option>
                          <option value="KEUANGAN">KEUANGAN</option>
                          <option value="AUDIT">AUDIT</option>
                        </select>
                    </div>
                    <div id="form-add">
                        <label for="jenisSurat" id="form-label">jenis surat</label>
                        <select v-model="jenisSurat" id="form-input">
                          <option value="01">surat keputusan</option>
                          <option value="02">surat undangan</option>
                          <option value="03">surat permohonan</option>
                          <option value="04">surat pemberitahuan</option>
                          <option value="05">surat peminjaman</option>
                        </select>
                    </div>
                    <button class="shadow-lg" type="submit" id="btn-add">add</button>
                    <p @click="backHome" id="backToHome">Home</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      kepada: '',
      perihal: '',
      keterangan: '',
      instansi: '',
      jenisSurat: ''
    }
  },
  methods: {
    notification (mailData) {
      Swal.fire({
        title: '<strong>' + mailData.nomorSurat + '</strong><br>',
        icon: 'info',
        html:
          '<p>tanggal dibuat: <b>' + mailData.tanggalDiBuat + '</b></p><br>' +
          '<p>jenis surat: <b>' + mailData.jenisSurat + '</b></p><br>' +
          '<p>kepada: <b>' + mailData.kepada + '<b/></p><br>' +
          '<p>nama penanggung jawab: <b>' + mailData.namaPenanggungJawab + '</b></p><br>' +
          '<p>perihal: <b>' + mailData.perihal + '</b></p><br>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          'Close',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    },
    backHome () {
      this.$router.push({ path: '/' })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    addMail () {
      const payload = {
        kepada: this.kepada,
        perihal: this.perihal,
        keterangan: this.keterangan,
        instansi: this.instansi,
        jenisSurat: this.jenisSurat
      }
      this.$store.dispatch('addMail', payload)
        .then(({ data }) => {
          console.log(data)
          this.notification(data)
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    }
  }
}
</script>

<style>
  #add {
    height: 600px;
  }
  #add-box {
    width: 400px;
    margin-top: 40px;
    height: 710px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  #form-add {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10%;
    width: 60%;
    margin-left: 17%;
  }
  #form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }
  #form-input {
    margin-top: 10px;
    font-family: inherit;
    width: 110%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1rem;
    color:black;
    padding: 7px 7px;
    background: rgb(219, 219, 219);
    border-radius: 5px;
  }
  #btn-add {
    margin-top: 40px;
    width: 30%;
    height: 50px;
    margin-left: 35%;
    outline: none;
    border-radius: 5px;
    font-size: 1.5rem;
    border: 0;
    background-color: black;
    color: white;
  }
  #btn-add:hover {
    background-color: transparent;
    color: black;
    outline: none;
    transition: 0.5s;
  }
  #backToHome {
    width: 50px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 43.5%;
  }
  #backToHome:hover {
    opacity: 0.6;
  }
</style>
