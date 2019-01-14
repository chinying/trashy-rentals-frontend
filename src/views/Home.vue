<template>
  <q-page class="">
    <div>
      <p>Hi {{ name }}! You have rented <strong>0</strong> bags</p>
    </div>

    <q-btn>
      Rent a bag
    </q-btn>

    <q-btn>
      Return a bag
    </q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      name: 'User'
    }
  }
}
</script>
