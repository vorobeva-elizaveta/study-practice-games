<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app__container">
    <header class="app__header header">
      <div class="header__container">
        <ul class="header__menu-list">
          <li class="menu-list__item">
            <router-link :to="{ path: '/' }"> Главная </router-link>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss">
.app__container {
  @apply flex flex-col;
}
.app__header {
  display: block;
  padding: 24px 12px;
}

.header {
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.11);

  &__container {
    @apply flex items-center justify-center;
  }

  &__menu-list {
    li.menu-list__item {
      @apply font-medium hover:underline;
    }
  }
}

main {
  flex: 1 1 auto;
  padding: 12px;
}
</style>
