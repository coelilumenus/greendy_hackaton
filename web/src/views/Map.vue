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
      <ymapMarker
        v-for="address of addresses"
        :key="address.id"
        :coords="address.coords"
        :properties="{balloonContent: address.name}"
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { mapService } from "../services/api/mapService.js";

export default {
  components: {
    yandexMap,
    ymapMarker,
  },

  data() {
    return {
      currentCoords: [45.03547, 38.975313],
      addresses: [],
      yMap: {
        settings: {
          apiKey: "db8624d7-03c7-4419-911f-e03056ad8089",
          lang: "ru_RU",
          coordorder: "latlong",
          enterprise: false,
          version: "2.1",
        },
        controls: [
          "zoomControl",
          "fullscreenControl",
          "typeSelector",
          "routeButtonControl",
          "geolocationControl",
        ],
      },
    };
  },

  async mounted() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.currentCoords = [coords.latitude, coords.longitude];
    });

    this.addresses = await mapService.getAddresses();
  },
};
</script>

