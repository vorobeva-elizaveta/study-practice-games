<script setup>
import { nextTick, ref } from 'vue'

let cellsElements = ref(),
  refCells = ref([]),
  mainPlayer = ref(1),
  result = ref()

const onLoad = async () => {
  await nextTick()
  cellsElements.value = document.querySelectorAll('.game-field__cell')
}

const setValueInCell = (cellIndex) => {
  if (cellsElements?.value && cellsElements.value[cellIndex - 1].innerHTML == '') {
    cellsElements.value[cellIndex - 1].innerHTML = mainPlayer.value == 1 ? 'X' : 'O'
    if (mainPlayer.value == 1) {
      mainPlayer.value = 2
    } else {
      mainPlayer.value = 1
    }
    getResult()
  }
}

const getResult = () => {
  if (
    (cellsElements.value[0]?.innerHTML == 'X' &&
      cellsElements.value[1]?.innerHTML == 'X' &&
      cellsElements.value[2]?.innerHTML == 'X') ||
    (cellsElements.value[3]?.innerHTML == 'X' &&
      cellsElements.value[4]?.innerHTML == 'X' &&
      cellsElements.value[5]?.innerHTML == 'X') ||
    (cellsElements.value[6]?.innerHTML == 'X' &&
      cellsElements.value[7]?.innerHTML == 'X' &&
      cellsElements.value[8]?.innerHTML == 'X') ||
    (cellsElements.value[0]?.innerHTML == 'X' &&
      cellsElements.value[3]?.innerHTML == 'X' &&
      cellsElements.value[6]?.innerHTML == 'X') ||
    (cellsElements.value[1]?.innerHTML == 'X' &&
      cellsElements.value[4]?.innerHTML == 'X' &&
      cellsElements.value[7]?.innerHTML == 'X') ||
    (cellsElements.value[2]?.innerHTML == 'X' &&
      cellsElements.value[5]?.innerHTML == 'X' &&
      cellsElements.value[8]?.innerHTML == 'X') ||
    (cellsElements.value[0]?.innerHTML == 'X' &&
      cellsElements.value[4]?.innerHTML == 'X' &&
      cellsElements.value[8]?.innerHTML == 'X') ||
    (cellsElements.value[2]?.innerHTML == 'X' &&
      cellsElements.value[4]?.innerHTML == 'X' &&
      cellsElements.value[6]?.innerHTML == 'X')
  ) {
    result.value = 'Выиграл первый игрок!'
    return
  }
  if (
    (cellsElements.value[0]?.innerHTML == 'O' &&
      cellsElements.value[1]?.innerHTML == 'O' &&
      cellsElements.value[2]?.innerHTML == 'O') ||
    (cellsElements.value[3]?.innerHTML == 'O' &&
      cellsElements.value[4]?.innerHTML == 'O' &&
      cellsElements.value[5]?.innerHTML == 'O') ||
    (cellsElements.value[6]?.innerHTML == 'O' &&
      cellsElements.value[7]?.innerHTML == 'O' &&
      cellsElements.value[8]?.innerHTML == 'O') ||
    (cellsElements.value[0]?.innerHTML == 'O' &&
      cellsElements.value[3]?.innerHTML == 'O' &&
      cellsElements.value[6]?.innerHTML == 'O') ||
    (cellsElements.value[1]?.innerHTML == 'O' &&
      cellsElements.value[4]?.innerHTML == 'O' &&
      cellsElements.value[7]?.innerHTML == 'O') ||
    (cellsElements.value[2]?.innerHTML == 'O' &&
      cellsElements.value[5]?.innerHTML == 'O' &&
      cellsElements.value[8]?.innerHTML == 'O') ||
    (cellsElements.value[0]?.innerHTML == 'O' &&
      cellsElements.value[4]?.innerHTML == 'O' &&
      cellsElements.value[8]?.innerHTML == 'O') ||
    (cellsElements.value[2]?.innerHTML == 'O' &&
      cellsElements.value[4]?.innerHTML == 'O' &&
      cellsElements.value[6]?.innerHTML == 'O')
  ) {
    result.value = 'Выиграл второй игрок!'
    return
  }
  let isAllDone = !refCells.value?.map((el) => el.innerHTML != '').includes(false)
  if (isAllDone) {
    result.value = 'Ничья!'
    return
  }
}

const restart = () => {
  cellsElements.value.forEach((el) => (el.innerHTML = ''))
  result.value = null
}
onLoad()
</script>

<template>
  <div class="tic-tac-toe-page">
    <div class="flex flex-col items-center justify-center my-2" v-if="result == null">
      <p v-if="mainPlayer == 1">Ход первого игрока</p>
      <p v-if="mainPlayer == 2">Ход второго игрока</p>
    </div>
    <div class="tic-tac-toe-page__container">
      <div class="tic-tac-toe__game-field" :class="{ 'pointer-events-none': result != null }">
        <div class="game-field__row">
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[0] = el)"
            :data-index="1"
            @click="() => setValueInCell(1)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[1] = el)"
            :data-index="2"
            @click="() => setValueInCell(2)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[2] = el)"
            :data-index="3"
            @click="() => setValueInCell(3)"
          ></div>
        </div>
        <div class="game-field__row">
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[3] = el)"
            :data-index="4"
            @click="() => setValueInCell(4)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[4] = el)"
            :data-index="5"
            @click="() => setValueInCell(5)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[5] = el)"
            :data-index="6"
            @click="() => setValueInCell(6)"
          ></div>
        </div>
        <div class="game-field__row">
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[6] = el)"
            :data-index="7"
            @click="() => setValueInCell(7)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[7] = el)"
            :data-index="8"
            @click="() => setValueInCell(8)"
          ></div>
          <div
            class="game-field__cell"
            :ref="(el) => (refCells[8] = el)"
            :data-index="9"
            @click="() => setValueInCell(9)"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center my-2">
      <p>
        {{ result }}
      </p>

      <base-button class="w-fit my-2" type="primary" @click="restart" v-if="result != null">
        Начать заново
      </base-button>
    </div>
  </div>
</template>

<style lang="scss">
.tic-tac-toe-page {
  &__container {
    @apply flex items-center justify-center;
  }

  .game-field__row {
    @apply flex;
  }

  .game-field__cell {
    width: 100px;
    height: 100px;
    @apply flex items-center justify-center border border-solid border-gray-400 hover:border-blue-400 cursor-pointer;
  }
}
</style>
