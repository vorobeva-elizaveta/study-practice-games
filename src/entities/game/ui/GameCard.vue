<script setup>
defineProps({
  game: Object
})
</script>

<template>
  <div class="game-card">
    <div class="game-card__cover-container">
      <img v-if="game?.cover" :src="game?.cover" alt="" />
      <img v-else src="/default-image.jpeg" alt="" />
    </div>
    <div class="game-card__container">
      <p class="game-card__title">{{ game?.name }}</p>
      <p class="game-card__description">{{ game?.description }}</p>
      <div class="game-card__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.game-card {
  @apply flex flex-col rounded-2xl overflow-hidden border border-solid border-gray-200;

  &__cover-container {
    width: 100%;
    height: 150px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__container {
    padding: 12px;
    flex: 1 1 auto;
    @apply flex flex-col gap-2 justify-between;
  }
  &__title {
    @apply font-semibold text-base;
  }
  &__description {
    @apply text-sm;
  }
}
</style>
