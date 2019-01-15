<template>
  <div class="rentals-container">
    <h3>My Rentals</h3>
    <div>
      <p>You have loaned <strong>{{ rentals.length }}</strong> bags</p>
    </div>

    <div class="rental-bags-list">
      <div v-for="(rental, index) in rentals" :key="index"
        class="rental-bag-item">
        <div class="bag-rental-item-left">
          <p>Bag #{{ index }}</p>
          <p>{{ rental.location }}</p>
        </div>
        <div class="bag-rental-item-right">
          <p class="rental-status">{{ rental.status }}</p>
          {{ rental.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rentals',
  data () {
    return {
      rentals: [
        {
          'location': 'Galaxis Cold Storage',
          'date': '14 Jan',
          'status': 'Not returned'
        },
        {
          'location': 'Jurong East Giant',
          'date': '15 Jan',
          'status': 'Not returned'
        }
      ]
    }
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
