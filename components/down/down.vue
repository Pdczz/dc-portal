<template>

        <div class="wrapper">


          <!--<el-backtop>
            UP
          </el-backtop>-->
            <div style="width:auto;margin:0 auto; padding:20px 0;text-align: center;background-color: white">
              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060502002334" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <img src="~static/img/beian.png" style="float:left;"/>
                <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; ">粤公网安备 44060502002334号</p>
              </a>
              <a target="_blank" href="https://beian.miit.gov.cn" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">

                <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; ">粤ICP备2020128924号</p>
              </a>
            </div>


        </div>


</template>

<script>
  export default {
    name: 'down'
  }
</script>

<style scoped>


  a{
    text-decoration: none;

  }
 /* .footer1 {

    !*border-top: 1px solid #e6e6e6;*!
  }*/

  .footer-bottom {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .footer-bottom .link {
    overflow: hidden;
  }

  .footer-bottom .link dl {
    float: left;
    width: 208px;
  }

  @media (min-width: 1200px) {
    .footer-bottom .link dl {
      width: 208px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .footer-bottom .link dl {
      width: 186px;
    }
  }

  @media (max-width: 1024px) {
    .footer-bottom .link dl {
      width: 150px;
    }
  }

  .footer-bottom .link dl dt {
    padding-bottom: 15px;
    padding-top: 100px;
    font-size: 16px;
    font-weight: bold;
    /*color: #bfbfbf;*/
  }

  .footer-bottom .link dl dd {
    margin-left: 0;
    font-size: 14px;
    line-height: 22px;
    /*color: #bfbfbf;*/
  }

  .footer-bottom .link .xuke {
    float: right;
    margin-top: 96px;
    /*color: #bfbfbf;*/
  }

  @media (min-width: 1200px) {
    .footer-bottom .link .xuke {
      width: 300px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .footer-bottom .link .xuke {
      width: 250px;
    }
  }

  @media (max-width: 1024px) {
    .footer-bottom .link .xuke {
      width: 200px;
    }
  }

  .footer-bottom .link .xuke p {
    margin-top: 15px;
    font-size: 14px;

  }

  .footer-bottom .Copyright {
    text-align: center;
    font-size: 14px;

  }

  .wrapper {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    background-color: #F4F6FA;
  }

  /*@media (min-width: 1200px) {
    .wrapper {
      width: 1170px;
    }
  }*/

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .wrapper {
      width: 1000px;
    }
  }

  @media (max-width: 1024px) {
    .wrapper {
      width: 800px;
    }
  }

</style>
