<template>
  <div>
    <yandex-map
      class="w-full"
      style="height: 600px"
      :zoom="15"
      :settings="yMap.settings"
      :controls="yMap.controls"
      :coords="currentCoords"
    >
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  components: {
    yandexMap,
    ymapMarker,
  },

  data() {
    return {
      currentCoords: [],
      yMap: {
        settings: {
          apiKey: "db8624d7-03c7-4419-911f-e03056ad8089",
          lang: "ru_RU",
          coordorder: "latlong",
          enterprise: false,
          version: "2.1"
        },
        controls: ["zoomControl", "fullscreenControl", "typeSelector", "routeButtonControl", "geolocationControl"],
      },
    };
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      this.currentCoords = [coords.latitude, coords.longitude]
    });
  },
};
</script>

