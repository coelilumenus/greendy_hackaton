<template>
  <div>
    <div class="text-red-500 max-w-full">
      <div
        v-if="!isDetected && !isLandscapeOrientation"
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

        <div v-else-if="isDetected">
          <success-modal @closeModal="closeModal" v-if="isDataExist" />
          <new-barcode-modal @closeModal="closeModal" :barcode="code" v-else />
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
      isDataExist: false,
      isModalClosed: true,
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

    logIt({ codeResult }) {
      this.isDetected = true;
      const { code } = codeResult;
      this.code = code;

      const info = barcodeService.getBarcodeInfo(code);

      if (info?.type === "NOT_EXIST") {
        this.isDataExist = false;
        this.isModalClosed = false;
      } else if (info?.value.length) {
        this.isDataExist = true;
        this.isModalClosed = false;
      }
    },

    closeModal() {
      this.isModalClosed = false;
      this.isDetected = false;
    },
  },
};
</script>