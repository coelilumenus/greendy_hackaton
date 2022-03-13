<template>
  <div>
    <RouterView />

    <footer>
      <div class="absolute bottom-0 w-full">
        <nav
          class="
            h-12
            flex
            justify-between
            items-center
            bg-green-500
            text-white
            realtive
          "
        >
          <div class="flex items-center justify-around w-1/3">
            <RouterLink to="/"><home-icon class="fill-current text-white" /></RouterLink>
            <RouterLink to="/information"><info-icon class="fill-current text-white" /></RouterLink>
          </div>

          <div class="w-1/3 flex items-center justify-center">
            <div class="w-20 h-20 absolute -top-10 bg-white rounded-full flex items-center justify-center">
              <div class="w-16 h-16 bg-green-500 flex items-center justify-center rounded-full">
                <RouterLink to="/scanner">
                  <scanner-icon class="fill-current text-white" />
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-around w-1/3">
            <RouterLink to="/map"><map-icon class="fill-current text-white" /></RouterLink>
            <RouterLink to="/profile"><profile-icon class="fill-current text-white" /></RouterLink>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ScannerIcon from "./assets/icons/ScannerIcon.vue";
import HomeIcon from "./assets/icons/HomeIcon.vue";
import InfoIcon from "./assets/icons/InfoIcon.vue";
import MapIcon from "./assets/icons/MapIcon.vue";
import ProfileIcon from "./assets/icons/ProfileIcon.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    ScannerIcon,
    HomeIcon,
    InfoIcon,
    MapIcon,
    ProfileIcon
  }
};
</script>
