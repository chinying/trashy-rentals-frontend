<template>
  <div class="profile-container">
    <div class="center-contents">
      <qriously value="quick brown fox" :size="250" />
      <div class="user-fullname">
        {{ user.name }}
      </div>
      <div class="points-container">
        Earned Points
        {{ user.points }}
      </div>
    </div>

    <div class="personal-info email-contents">
      <div>
        <span class="grey-text">Email</span>
        <br />
        <strong>{{ user.email }}</strong>
      </div>
      <div>Change</div>
    </div>
    
    <div class="personal-info phoneno-contents">
      <div>
        <span class="grey-text">Email</span>
        <br />
        <strong>{{ user.phone }}</strong>
      </div>
      <div>Change</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      user: {
        email: 'test@example.com',
        name: 'test user',
        phone: '+65 91234567',
        points: 100
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-container {
  padding: 1.5em;
}
.personal-info {
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
}
</style>
