<template>
  <q-page class="">
    <div class="button-container">
      <div class="welcome-text">
        <p>Hi {{ name }}! You have rented <strong>0</strong> bags</p>
      </div>
      <div class="big-button" @click="$router.replace('/rent')">
        <img src="@/assets/home/bag-rent.png" alt="" />
        <span>Rent a bag</span>
      </div>

      <div class="big-button" @click="$router.replace('/return')">
        <img src="@/assets/home/bag-return-bag.png"
          srcset="@/assets/home/bag-return-bag@2x.png 2x,
             @/assets/home/bag-return-bag@3x.png 3x"
          class="bag_returnBag">
          <span>Return a bag</span>
      </div>
    </div>
  </q-page>
</template>

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

<style scoped>
.welcome-text {
  width: 100%;
  text-align: left;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  padding: 30px;
}

.big-button {
  cursor: pointer;
  width: 100%;
  height: 30vh;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 2px 2px rgba(0,0,0,0.2);
  margin: 3vh;
}

.big-button:hover {
  box-shadow: 0px 3px 5px 5px rgba(0,0,0,0.2);
}

.big-button span {
  font-size: 26px;
  margin-top: 14px;
}

</style>
