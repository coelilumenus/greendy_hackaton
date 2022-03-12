<template>
  <div>
    <div class="text-red-500 max-w-full">
      <div v-if="!isLandscapeOrientation">please rotate your device</div>

      <div v-else>
        <barcode-scanner
          v-if="!isDetected"
          :onDetected="logIt"
          :readerSize="readerSize"
          :readerTypes="readerTypes"
        />

        <div v-else>
          <pre>
            {{ info }}  
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarcodeScanner from "../components/scanner/BarcodeScanner.vue";

export default {
  components: {
    BarcodeScanner,
  },

  data() {
    return {
      isDetected: false,
      info: {},
      angle: window.orientation,
      readerSize: {
        width: 640,
        height: 480,
      },
      readerTypes: ['ean_reader']
    };
  },

  computed: {
    isLandscapeOrientation() {
      if (!this.angle) return;

      return this.angle === 90 || this.angle === -90;
    },
  },

  mounted() {
    window.addEventListener("orientationchange", this.listenAngle);
  },

  beforeDestroy() {
    window.removeEventListener("orientationchange", this.listenAngle);
  },

  methods: {
    listenAngle() {
      this.angle = window.orientation;
    },

    logIt(data) {
      this.isDetected = true;
      this.info = data;
    },
  },
};
</script>