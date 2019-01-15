<template>
  <div class="rentals-container center-contents">
    <h3>{{ activeData.header }}</h3>
    <QRCode v-if="viewPage === 1" action="loan" @click.native="viewPage++" />
    <div v-else-if="viewPage === 2">
      <img src="@/assets/rentals/bag-rent.png"
        srcset="@/assets/rentals/bag-rent@2x.png 2x,
             @/assets/rentals/bag-rent@3x.png 3x"
        class="bag_rent" />
        <br />
      <button @click="viewPage = 3">Temp button</button>
    </div>
    <div v-else-if="viewPage === 3">
      Page 3
    </div>
    <div v-else>Something went wrong</div>

    <p>{{ activeData.bottomText }} <span v-if="viewPage === 3">{{ loanExpiry }}</span> </p>
    <div v-if="viewPage === 3">
      <div>
        <img src="@/assets/smiley.png"
          srcset="@/assets/smiley@2x.png 2x,
            @/assets/smiley@3x.png 3x"
          class="smiley">
      </div>
      <div>
        <q-btn @click="$router.replace('/rentals')">See my Rentals</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from '@/components/QRCode'

const viewPageContents = [
  {
    header: 'Rent a bag',
    image: '',
    bottomText: 'Scan your QR code at the vending machine'
  },
  {
    header: 'Dispensing your bag',
    image: '',
    bottomText: 'Please wait while we dispense a bag'
  },
  {
    header: 'Bag dispensed. \nEnjoy your shopping!',
    image: '',
    bottomText: 'Return your bag at the dropoff point by '
  }
]

export default {
  name: 'RentalFlow',
  components: { QRCode },
  data () {
    return {
      viewPage: 1,
      loanExpiry: '30 Jan 2019'
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
