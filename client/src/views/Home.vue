<template>
  <div class="home">
    <Navbar></Navbar>
    <div id="HomeBoard">
      <div id="HomeSearchMail">
        <form id="formSearch">
          <label for="search"><b>cari surat</b></label>
          <input v-model="id" type="text" name="search" id="searchMail" placeholder="nomor surat">
          <button @click.prevent="search">search</button>
        </form>
      </div>
      <div id="HomeCardMail">
        <MailCard
        :mail="mail"
        ></MailCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
import MailCard from '../components/MailCard'

export default {
  name: 'Home',
  data () {
    return {
      id: '',
      mail: ''
    }
  },
  components: {
    Navbar,
    MailCard
  },
  methods: {
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    search () {
      const payload = {
        id: this.id
      }
      this.$store.dispatch('searchMail', payload)
        .then(({ data }) => {
          console.log(data)
          this.mail = data
        })
        .catch(error => {
          this.mail = ''
          this.errorMessage(error.response.data.message)
        })
    }
  }
}
</script>

<style>
  #HomeSearchMail {
    width: 500px;
    height: 50px;
    margin-left: 33%;
    margin-top: 10%;
    background-color: #B0BEA9;
    border-radius: 20px;
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
  }
  #formSearch label{
    margin-top: 10px;
    margin-right: 10px;
  }
  #formSearch input{
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 10px;
    outline: none;
    border: 0;
    padding: 3px;
  }
  #formSearch button{
    background-color: black;
    color: white;
    border-radius: 10px;
    border: 0;
    outline: none;
    opacity: 0.7;
    transition: 0.5s;
  }
  #formSearch button:hover{
    transition: 0.5s;
    opacity: 1;
  }
  #HomeCardMail {
    margin-top: 5%;
    margin-left: 36%;
    margin-bottom: 30px;
  }
</style>
