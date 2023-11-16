<script setup>
import { reactive, ref } from 'vue'
let today = new Date()
let form = reactive({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  }),
  result = ref()

const getDaysFromDate = () => {
  let date = new Date(form.year, form.month - 1, form.day).getTime(),
    dateNow = new Date().getTime()
  result.value = Math.round((dateNow - date) / (1000 * 60 * 60 * 24))
}
</script>

<template>
  <div class="your-days-old-page">
    <p class="my-2">Введите дату рождения</p>
    <div class="your-days-old-page__inputs-block">
      <label>
        <span>День</span>
        <base-input class="w-[100px]" v-model="form.day" />
      </label>
      <label>
        <span>Месяц</span>
        <base-input class="w-[100px]" v-model="form.month" />
      </label>
      <label> <span>Год</span> <base-input class="w-[100px]" v-model="form.year" /> </label>
    </div>
    <base-button class="w-fit my-3" @click="getDaysFromDate" type="primary">
      Получить результат
    </base-button>
    <span class="text-center my-3" v-if="result != null">
      Вы прожили
      <h2 class="your-days-old-page__result">
        {{ result }}
      </h2>
    </span>
  </div>
</template>

<style lang="scss">
.your-days-old-page {
  @apply flex flex-col items-center;

  &__inputs-block {
    @apply w-fit flex gap-3 items-center;

    label {
      @apply flex flex-col gap-1;

      span {
        @apply text-gray-400;
      }
    }
  }
  &__result {
    @apply text-2xl font-semibold;
  }
}
</style>
