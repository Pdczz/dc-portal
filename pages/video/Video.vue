<template>
  <div>
    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      width="500px"
      @click="getVideo">
      <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="application/x-mpegURL" style="height: 100%;width: 100%;object-fit: fill;object-fit:cover"/>

    </video>
    <video
      id="my-video2"
      class="video-js"
      controls
      preload="auto"
      width="500px"
      @click="getVideo"
      poster="../../assets/beian.png">
      <source src="http://pdczz.com/video/hls/lucene.m3u8" type="application/x-mpegURL" style="height: 100%;width: 100%;object-fit: fill;object-fit:cover"/>

    </video>

  </div>
</template>

<script>
  import videojs from "video.js"
  import "videojs-contrib-hls";
  export default {
    name: 'video',
    data:{

    },
    mounted() {

    },
    methods:{
      getVideo() {
        videojs(
          "my-video",
          {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true,

          },
          function() {
            this.play();
          }
        );
        videojs(
          "my-video2",
          {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true,

          },
          function() {
            this.play();
          }
        );
      }
    }

  }
</script>

<style scoped>

</style>
