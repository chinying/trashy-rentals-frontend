<template>
  <div class="returns-container">
    <h3>{{ activeData.header }}</h3>
    <QRCode v-if="viewPage === 1" action="return" @click.native="viewPage++" />
    <div v-else-if="viewPage === 2">
      Page 2
      <button @click="viewPage = 3">Temp button</button>
    </div>
    <div v-else-if="viewPage === 3">
      Page 3
    </div>
    <div v-else>Something went wrong</div>

    <p>{{ activeData.bottomText }} <span v-if="viewPage === 3"> {{ userPoints }} </span> points. </p>
    <div v-if="viewPage === 3">
      <q-btn>Report loss of bags</q-btn>
    </div>
  </div>
</template>

<script>
import QRCode from '@/components/QRCode'

const viewPageContents = [
  {
    header: 'Return a bag',
    image: '',
    bottomText: 'Scan your QR code at the vending machine'
  },
  {
    header: 'Slot in your bag',
    image: '',
    bottomText: 'Insert your bag into the slot to return'
  },
  {
    header: 'Return success. \nYou are a champ!',
    image: '',
    bottomText: 'You have earned '
  }
]

export default {
  name: 'ReturnFlow',
  components: { QRCode },
  data () {
    return {
      viewPage: 1,
      userPoints: 100
    }
  },
  computed: {
    activeData () {
      let index = this.$data.viewPage < 3 || this.$data.viewPage > 0 ? this.$data.viewPage - 1 : 1
      return viewPageContents[index]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
