<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { RouteNames } from '@/router/RouteNames';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: RouteNames.HOME }">
          Home
        </RouterLink>
        <RouterLink :to="{ name: RouteNames.PEOPLE }">
          Test me
        </RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-green);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {
  margin-top: 2rem;
}
</style>
