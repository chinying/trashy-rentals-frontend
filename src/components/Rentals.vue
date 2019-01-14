<template>
  <div class="rentals-container">
    <h3>My Rentals</h3>
    <div>
      <p>You have loaned <strong>{{ rentals.length }}</strong> bags</p>
    </div>
    <ul>
      <li v-for="(rental, index) in rentals" :key="index">
        {{ rental.location }} | Expiring {{ rental.date }}
      </li>
    </ul>
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
</style>
