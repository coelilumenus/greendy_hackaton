<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterView />

    <footer>
      <div>
        <nav>
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/about">Справочник</RouterLink>
          <RouterLink to="/scanner">Сканнер</RouterLink>
          <RouterLink to="/map">Карта</RouterLink>
          <RouterLink to="/profile">Профиль</RouterLink>
        </nav>
      </div>
    </footer>
  </div>
</template>