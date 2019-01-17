<template>
  <div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">{{ text }}...</div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['text']
}
</script>

<style lang="scss" scoped>
$loader-size: 75px;
$loader-circle-size: calc($loader-size/2);
.loader-container {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(241, 242, 243, .8);
  display: table;
  transition: opacity .3s ease;
}
.loader {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
  border: 3px solid #ddd;
  border-top: 3px solid #42a5f5;
  border-radius: 50%;
  height: $loader-size;
  width: $loader-size;
  position: absolute;
  // top: calc(50% - #{$loader-size});
  // left: calc(50% - #{$loader-size});
  top: 50%;
  left: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    opacity: 0;
  }
}
@-webkit-keyframes spin {
  to {
    border-top-color: #ec407a;
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  to {
    border-top-color: #ec407a;
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.loader-text {
  margin: 0;
  padding: 0;
  position: fixed;
  top: calc(50% + #{$loader-size});
  width: 100%;
  text-align: center;
}
</style>
