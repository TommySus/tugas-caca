<template>
  <div id="cardMail">
    <div id="content">
      <h3>Jenis Surat: <b>{{ mail.jenisSurat }}</b></h3>
      <p>Kepada: <b>{{ mail.kepada }}</b></p>
      <p>Nama Penanggung Jawab: <b>{{ mail.namaPenanggungJawab }}</b></p>
      <p>Instansi Penanggung Jawab: <b>{{ mail.instansiPenanggungJawab }}</b></p>
      <p>Perihal: <b>{{ mail.perihal }}</b></p>
      <p>Tanggal Dibuat: <b>{{ mail.tanggalDiBuat }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mail']
}
</script>

<style>
  #cardMail {
    width: 400px;
    height: 400px;
    text-align: center;
  }
</style>
