<template>
    <div>
      <div class="about-content" >
        <div class="about-big-img">
          <div class="text_box">
            <div class="text animate__animated animate__fadeInLeft">
              <h3>我们的信念</h3>
              <p>人生像一件刺绣，前半生是刺绣的正面，后半生是反面。反面虽不如正面精致漂亮、生机勃勃，但它揭示了线是如何被绣成图案的，更有启发性，更深邃。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  name: 'Appindex',


}

</script>
<style>
  @import "../../assets/css/animate.css";


</style>
<style scoped>
  .about-content .about-big-img {
    height: 570px;
    background: center center no-repeat ;
    background-size: 100% 100%;
    color: #e36209;
  }
  .about-content .about-big-img .text_box {
    max-width: 1200px;
    margin: 0 auto;
  }
  .about-content .about-big-img {
    background-size: cover !important;
  }
  .about-content .text_box .text h3 {
    font-weight: 900;
    text-align: center;
  }
  .about-content .about-big-img .text h3 {
    font-size: 36px;
    padding-bottom: 15px;
    border-bottom: 2px solid #b3b3b3;
  }
  .about-content .about-big-img .text {
    display: inline-block;
    margin: 150px 500px 0 0px;
  }
  .about-content .about-big-img .text p {
    font-size: 16px;
    line-height: 40px;
    text-align: left;
  }
  p {
    margin: 0;
  }
</style>
