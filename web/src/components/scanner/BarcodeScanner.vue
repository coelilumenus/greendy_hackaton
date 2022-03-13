<template>
  <div id="interactive" class="viewport scanner">
    <video />
    <canvas class="drawingBuffer" />
  </div>
</template>

<script>
import Quagga from 'quagga';

export default {
  name: 'QuaggaScanner',
  props: {
    onDetected: {
      type: Function,
      default(result) {
        console.log('detected: ', result);
      },
    },
    onProcessed: {
      type: Function,
      default(result) {
        let drawingCtx = Quagga.canvas.ctx.overlay;
        let drawingCanvas = Quagga.canvas.dom.overlay;
        if (result) {
          if (result.boxes) {
            drawingCtx.clearRect(
              0,
              0,
              parseInt(drawingCanvas.getAttribute('width')),
              parseInt(drawingCanvas.getAttribute('height'))
            );
            result.boxes
              .filter(function(box) {
                return box !== result.box;
              })
              .forEach(function(box) {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                  color: '#F00',
                  lineWidth: 3,
                });
              });
          }
          if (result.box) {
            if (this.locate){
              Quagga.ImageDebug.drawPath(
                result.box,
                { x: 0, y: 1 },
                drawingCtx,
                {
                  color: '#00F',
                  lineWidth: 3,
              });
            }
          }
          if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(
              result.line,
              { x: 'x', y: 'y' },
              drawingCtx,
              { color: '#FF0', lineWidth: 4 }
            );
          }
        }
      },
    },
    readerTypes: {
      type: Array,
      default: () => ['code_128_reader'],
    },
    readerSize: {
      type: Object,
      default: () => ({
        width: 640,
        height: 480,
      }),
      validator: o =>
        typeof o.width === 'number' && typeof o.height === 'number',
    },
    aspectRatio: {
      type: Object,
      default: () => ({
        min: 1,
        max: 2,
      }),
      validator: o => typeof o.min === 'number' && typeof o.max === 'number',
    },
    locate: {
      type: Boolean,
      default: () => false,
    },
    area: {
      type: Object,
      default: () => ({
        top: '30%',
        right: '30%',
        left: '30%',
        bottom: '30%',
      }),
    },
  },
  data: function() {
    return {
      quaggaState: {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: { min: this.readerSize.width },
            height: { min: this.readerSize.height },
            facingMode: 'environment',
            aspectRatio: {
              min: this.aspectRatio.min,
              max: this.aspectRatio.max,
            },
          },
          area: {
            top: this.area.top,
            right: this.area.right,
            left: this.area.left,
            bottom: this.area.bottom,
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 2,
        frequency: 10,
        decoder: {
          readers: this.readerTypes,
        },
        locate: this.locate,
      },
    };
  },
  mounted: function() {
    Quagga.init(this.quaggaState, function(err) {
      if (err) {
        return console.error(err);
      }
      Quagga.start();
    });
    Quagga.onDetected(this.onDetected);
    Quagga.onProcessed(this.onProcessed);
  },
  destroyed: function() {
    Quagga.stop();
  },
};
</script>

<style scoped>
.viewport {
  position: relative;
}
.viewport canvas,
.viewport video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>