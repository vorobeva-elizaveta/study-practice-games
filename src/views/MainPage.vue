<script setup>
import games from '@/shared/games.js'
import { GameCard } from '@/entities/game'
</script>

<template>
  <div class="main-page">
    <div class="main-page__games">
      <game-card v-for="game in games" :key="game" :game="game">
        <template #footer>
          <router-link v-if="game?.path" :to="{ path: game?.path }">
            <base-button type="primary"> Перейти </base-button>
          </router-link>
        </template>
      </game-card>
    </div>
  </div>
</template>

<style lang="scss">
.main-page {
  &__games {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
}
</style>
