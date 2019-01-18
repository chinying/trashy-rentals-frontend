<template>
  <div class="rentals-container">
    <Loader v-show="loading" text="Loading" />
    <h3>My Rentals</h3>
    <div v-if="!loading">
      <p>You have loaned <strong>{{ rentals.length }}</strong> bags</p>
    </div>

    <p v-if="errorMessage.length > 0">{{ errorMessage }}</p>

    <div class="rental-bags-list" v-if="!loading">
      <div v-for="(rental, index) in rentals" :key="index"
        class="rental-bag-item">
        <div class="bag-rental-item-left">
          <p>Bag #{{ index + 1 }}</p>
          <p>{{ rental.location }}</p>
        </div>
        <div class="bag-rental-item-right">
          <p class="rental-status">{{ rental.status }}</p>
          {{ rental.expiryDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader.vue'
let { VUE_APP_BACKEND_URL: BACKEND_URL } = process.env

export default {
  name: 'Rentals',
  components: { Loader },
  data () {
    return {
      errorMessage: '',
      rentals: [],
      loading: false
    }
  },
  beforeMount () {
    this.$data.rentals = []
    this.$data.loading = true
    axios.get(`${BACKEND_URL}/loans/1`)
      .then((data) => {
        console.log(data)
        let rentals = data.data.map(d => {
          d.location = 'Galaxis Cold Storage'
          return d
        })
        this.$data.rentals = rentals
      })
      .catch((err) => {
        console.error(err)
        this.$data.errorMessage = err.message
      })
      .finally(() => {
        this.$data.loading = false
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rentals-container {
  padding: 2em;
}

.rental-bags-list {
  margin-top: 2em;
}

.rental-status {
  font-weight: 700;
  color: $trashyGreen;
}

.rental-bag-item {
  display: flex;
  justify-content: space-between;
}
</style>
