<template lang="html">
  <div class="container">
    <nav class="navbar is-transparent" >
      <div class="navbar-brand">
        <router-link class="nav-item" to="/">
          Kahla's Classroom
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="nav-item is-tab" to="/recipes">
            Recipe List
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>