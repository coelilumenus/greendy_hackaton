<template>
  <div>
    <div class="text-red-500 max-w-full">
      <div
        v-if="!isLandscapeOrientation && !isDetected"
        class="flex flex-col justify-center items-center mt-24"
      >
        <div class="font-bold text-sm text-green-500 mb-8">
          Пожалуйста, поверните телефон на 90 градусов.
        </div>
        <rotate-phone-icon
          class="fill-current text-green-500 max-w-sm max-h-sm"
        />
      </div>

      <div v-else>
        <barcode-scanner
          v-if="!isDetected"
          :onDetected="logIt"
          :readerSize="readerSize"
          :readerTypes="readerTypes"
        />

        <div v-else>
          <success-modal @closeModal="closeModal" :info="info" v-if="status" />
          <new-barcode-modal
            @closeModal="closeModal"
            :barcode="code"
            v-if="!status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarcodeScanner from "../components/scanner/BarcodeScanner.vue";
import SuccessModal from "../components/scanner/SuccessModal.vue";
import NewBarcodeModal from "../components/scanner/NewBarcodeModal.vue";
import RotatePhoneIcon from "../assets/icons/RotatePhoneIcon.vue";
import { barcodeService } from "../services/api/barcodeService.js";

export default {
  components: {
    BarcodeScanner,
    RotatePhoneIcon,
    SuccessModal,
    NewBarcodeModal,
  },

  data() {
    return {
      isDetected: false,
      info: {},
      code: null,
      angle: window.orientation,
      readerSize: {
        width: 640,
        height: 480,
      },
      readerTypes: ["ean_reader"],
    };
  },

  computed: {
    isLandscapeOrientation() {
      if (!this.angle) return;

      return this.angle === 90 || this.angle === -90;
    },

    status() {
      if (!this.info) return false;

      return this.info.status;
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

    async logIt({ codeResult }) {
      this.isDetected = true;
      const { code } = codeResult;
      this.code = code;

      const info = await barcodeService
        .getBarcodeInfo(code)
        .then(() => (this.isModalClosed = false));

      this.info = info;
    },

    closeModal() {
      this.isModalClosed = false;
      this.isDetected = false;
    },
  },
};
</script>