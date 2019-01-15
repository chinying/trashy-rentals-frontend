<template>
  <div class="qrcode">
    <qriously :value="generateQR" :size="200" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

export default {
  name: 'QRCode',
  props: ['action'],
  data () {
    return {
      qrData: {
        userId: 1,
        action: this.$props.action
      }
    }
  },
  computed: {
    generateQR () {
      return JSON.stringify(this.$data.qrData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// TODO: figure out how to change QR colours
</style>
