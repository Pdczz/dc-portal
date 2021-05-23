<template>
  <div @click="noneshow=true,inputshow=false" style="background-color: #F4F6FA">
    <el-container :style="getWidth" v-show="barShow" style="background-color: #1C1E20">
      <a @click="drawer = true" style="padding: 15px 10px ">
        <img data-v-f248e2c2="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDI5IDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBmaWxsPSIjRkZGIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi40Ij4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLjUxNS41MTNMMjcuNTE1LjUxM00uNTE1IDEwLjUxM0wyNy41MTUgMTAuNTEzTS41MTUgMjAuNTEzTDI3LjUxNSAyMC41MTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMSAtMjkpIHRyYW5zbGF0ZSgtMzAwKSB0cmFuc2xhdGUoMzAwLjE1NikgdHJhbnNsYXRlKDMxIDI5KSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="">
      </a>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"

        :size="size">
        <span>我来啦!</span>
      </el-drawer>

      <router-link :to="{path:'/'}" class="a-link nuxt-link-active">
        <img src="~static/img/surface.png" width="170" height="50" alt="">
      </router-link>
      <a>
        <img src="~static/img/search.png" alt="" style="width: 4.933vw;height: 4.933vw;margin: 15px 10px 10px">
      </a>
    </el-container>
    <div id="__layout" v-show="!barShow">
      <el-container :style="getWidth">
        <section class="el-container is-vertical">
          <header class="el-header" style="height:120px;background-color: white">
            <ul role="menubar" id="md-menu" class="md-header el-menu--horizontal el-menu"
                style="background-color:#1C1E20;">
              <li role="menuitem" @click="activeIndex=0" :class="{active:activeIndex==0}" class="el-menu-item"
                  style="color: rgb(255, 255, 255);background-color: rgb(28, 30, 32);">
                <router-link :to="{path:'/'}" class="a-link nuxt-link-active">
                  <img src="~static/img/surface.png" width="170" height="50" alt="">
                </router-link>
              </li>
              <li role="menuitem" @click="activeIndex=1" :class="{active:activeIndex==1}" class="el-menu-item"
                  style="color: rgb(255, 255, 255);background-color: rgb(28, 30, 32);">
                <!--              <a href="/index" class="a-link">网站首页</a>-->
                <router-link class="article-link a-link" :to="{path:'/home'}">网站首页</router-link>
              </li>
              <li role="menuitem" @click="activeIndex=2" :class="{active:activeIndex==2}" class="el-menu-item"
                  style="color: rgb(255, 255, 255);background-color: rgb(28, 30, 32);">
                <!--              <a href="/jotter" class="a-link">热门文章</a>-->
                <router-link class="article-link a-link" :to="{name:'jotter'}">热门文章</router-link>
              </li>
              <li role="menuitem" @click="activeIndex=3" :class="{active:activeIndex==3}" class="el-menu-item"
                  style="color: rgb(255, 255, 255);background-color: rgb(28, 30, 32);">
                <!--              <a href="/library" class="a-link nuxt-link-exact-active nuxt-link-active" aria-current="page">书籍名著</a>-->
                <router-link class="article-link a-link" :to="{path:'/library'}">书籍名著</router-link>
              </li>
              <li role="menuitem" @click="activeIndex=4" :class="{active:activeIndex==4}" class="el-menu-item"
                  style="color: rgb(255, 255, 255); background-color: rgb(28, 30, 32);">
                <!--              <a href="/history" class="a-link">网站导航</a>-->
                <router-link class="article-link a-link" :to="{path:'/history'}">网站导航</router-link>
              </li>

              <li id="search" class="el-menu-item" style="float:right;padding-right:200px;" tabindex="0">
                <div class="el-input el-input-group el-input-group--append" style="padding-right:25px;" ><!---->
                  <input type="text" autocomplete="off" placeholder="" maxlength="30" class="el-input__inner" @click.stop="inputshow=true,noneshow=false" ><!---->
                  <!---->
                  <div class="el-input-group__append">
                    <button type="button" class="el-button el-button--default"><!---->
                      <i class="el-icon-search"></i>
                      <span>搜索</span>
                    </button>
                  </div>
                </div>
                <div class="search-hot dropdown-box bottom fadeInDown" :class="{noneshow:noneshow==true,inputshow:inputshow==true}">
                  <div class="item" style="text-align: left">
                    <p class="text-muted">&nbsp热门搜索</p>
                    <a href="/search" title="" class="search-hot-link">
                      <svg aria-hidden="true" class="svg-icon" data-v-d9965670="">
                        <use xlink:href="#icon-input-hot" data-v-d9965670="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" id="icon-input-hot">
                            <g fill="none" fill-rule="evenodd">
                              <g fill="#EB5929">
                                <g>
                                  <path
                                    d="M94.95 136.893c-.01-.117.018-.25-.07-.353l-.004.116c-.012-.002-.022-.006-.03-.012v-.002c0-.023 0-.045.007-.064.005-.014.013-.028.028-.038.004-.194-.047-.382-.098-.56-.107-.374-.225-.744-.39-1.098-.21-.447-.462-.867-.766-1.257-.022-.03-.046-.063-.087-.042-.037.02-.009.056-.007.086.016.226.06.448.066.676.017.765-.06 1.51-.487 2.174-.019.03-.018.081-.067.069-.05-.013-.043-.064-.044-.104-.01-.4-.095-.786-.19-1.173-.125-.504-.352-.954-.64-1.378-.248-.363-.524-.704-.802-1.043-.352-.43-.679-.88-.954-1.363-.003-.022 0-.048-.009-.066-.142-.286-.257-.579-.338-.89-.126-.49-.115-.964.067-1.434.017-.044.022-.092-.018-.125-.04-.032-.064.008-.094.026-.038.024-.08.04-.12.06-.47.23-.88.535-1.2.952-.49.641-.726 1.372-.738 2.178-.002.159.03.327-.01.475-.073.265-.035.537-.086.805-.033.175-.069.355-.107.528-.079.351-.24.677-.432.983-.064.104-.136.215-.27.3.03-.298-.021-.56-.1-.813-.12-.385-.308-.74-.585-1.038-.138-.149-.286-.289-.46-.395-.032-.02-.067-.068-.107-.03-.036.034-.026.089-.009.129.069.168.06.348.067.521.016.353-.038.697-.133 1.042-.092.333-.213.657-.311.988-.132.444-.26.89-.335 1.348-.072.428-.1.864-.082 1.3.006.154-.004.314.047.467.01.108.012.217.03.324.044.273.066.553.149.814.11.346.253.681.446.996.352.572.824 1.02 1.386 1.37.489.305 1.027.5 1.589.628.033.007.076.028.096-.014.018-.04-.017-.07-.046-.09-.114-.083-.213-.184-.304-.29-.62-.725-.865-1.577-.83-2.518.01-.274.046-.55.171-.803.015-.03.01-.08.064-.073.043.006.05.044.057.081.05.259.163.49.325.695.083.106.172.21.296.274.066.034.093.017.086-.056-.013-.14-.03-.28-.04-.42-.057-.835.034-1.638.436-2.394.261-.491.614-.89 1.058-1.217.03-.022.058-.074.103-.045.039.025.02.076.016.114-.038.337-.02.67.058 1 .071.304.192.583.376.834l.03-.002h.002c-.01.009-.02.01-.032.002.016.075.076.12.12.177.255.339.564.635.765 1.017.137.26.23.532.283.817.052.293.063.591.04.893-.038.497-.176.957-.43 1.384-.115.19-.249.366-.411.52-.032.03-.072.067-.048.115.016.033.061.034.098.023.263-.078.537-.133.787-.242.4-.171.788-.374 1.138-.642.552-.422 1.019-.922 1.38-1.516.338-.555.513-1.171.627-1.803.114-.628.082-1.265.027-1.898"
                                    transform="translate(-1411 -129) translate(1326)"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </use>
                      </svg>
                      Spring实战
                    </a>
                    <a href="/search" title="" class="search-hot-link">
                      <svg aria-hidden="true" class="svg-icon" data-v-d9965670="">
                        <use xlink:href="#icon-input-hot" data-v-d9965670="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" id="icon-input-hot">
                            <g fill="none" fill-rule="evenodd">
                              <g fill="#EB5929">
                                <g>
                                  <path
                                    d="M94.95 136.893c-.01-.117.018-.25-.07-.353l-.004.116c-.012-.002-.022-.006-.03-.012v-.002c0-.023 0-.045.007-.064.005-.014.013-.028.028-.038.004-.194-.047-.382-.098-.56-.107-.374-.225-.744-.39-1.098-.21-.447-.462-.867-.766-1.257-.022-.03-.046-.063-.087-.042-.037.02-.009.056-.007.086.016.226.06.448.066.676.017.765-.06 1.51-.487 2.174-.019.03-.018.081-.067.069-.05-.013-.043-.064-.044-.104-.01-.4-.095-.786-.19-1.173-.125-.504-.352-.954-.64-1.378-.248-.363-.524-.704-.802-1.043-.352-.43-.679-.88-.954-1.363-.003-.022 0-.048-.009-.066-.142-.286-.257-.579-.338-.89-.126-.49-.115-.964.067-1.434.017-.044.022-.092-.018-.125-.04-.032-.064.008-.094.026-.038.024-.08.04-.12.06-.47.23-.88.535-1.2.952-.49.641-.726 1.372-.738 2.178-.002.159.03.327-.01.475-.073.265-.035.537-.086.805-.033.175-.069.355-.107.528-.079.351-.24.677-.432.983-.064.104-.136.215-.27.3.03-.298-.021-.56-.1-.813-.12-.385-.308-.74-.585-1.038-.138-.149-.286-.289-.46-.395-.032-.02-.067-.068-.107-.03-.036.034-.026.089-.009.129.069.168.06.348.067.521.016.353-.038.697-.133 1.042-.092.333-.213.657-.311.988-.132.444-.26.89-.335 1.348-.072.428-.1.864-.082 1.3.006.154-.004.314.047.467.01.108.012.217.03.324.044.273.066.553.149.814.11.346.253.681.446.996.352.572.824 1.02 1.386 1.37.489.305 1.027.5 1.589.628.033.007.076.028.096-.014.018-.04-.017-.07-.046-.09-.114-.083-.213-.184-.304-.29-.62-.725-.865-1.577-.83-2.518.01-.274.046-.55.171-.803.015-.03.01-.08.064-.073.043.006.05.044.057.081.05.259.163.49.325.695.083.106.172.21.296.274.066.034.093.017.086-.056-.013-.14-.03-.28-.04-.42-.057-.835.034-1.638.436-2.394.261-.491.614-.89 1.058-1.217.03-.022.058-.074.103-.045.039.025.02.076.016.114-.038.337-.02.67.058 1 .071.304.192.583.376.834l.03-.002h.002c-.01.009-.02.01-.032.002.016.075.076.12.12.177.255.339.564.635.765 1.017.137.26.23.532.283.817.052.293.063.591.04.893-.038.497-.176.957-.43 1.384-.115.19-.249.366-.411.52-.032.03-.072.067-.048.115.016.033.061.034.098.023.263-.078.537-.133.787-.242.4-.171.788-.374 1.138-.642.552-.422 1.019-.922 1.38-1.516.338-.555.513-1.171.627-1.803.114-.628.082-1.265.027-1.898"
                                    transform="translate(-1411 -129) translate(1326)"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </use>
                      </svg>
                      Vue
                    </a>
                  </div>
                </div>
                <a href="" target="_banlk"><img src="~static/img/down.d7cc855.svg" width="40px" height="37px"
                                                alt="download APP"></a>
              </li>
              <div class="clear" tabindex="0"></div>
            </ul>
          </header>

        </section>
      </el-container>

    </div>


  </div>
</template>
<script>

</script>
<style scoped>
  @import "../../assets/css/index.css";
  .active {
    color: rgb(250, 150, 0);

    border-bottom-color: rgb(250, 150, 0);
  }
  .noneshow{
    display: none;
  }
  .inputshow{
    display: block;
  }
  #md-menu[data-v-8dc7cce2] {
    background-color: #1c1e20;
    padding: 0 0rem;
  }
</style>
<script>
    import NavMenu from '../common/NavMenu'

    export default {
        name: 'HeadTop',
        components: {NavMenu},
        data () {
            return {
                activeIndex: 2,
                noneshow: true,
                inputshow: false,
                drawer: false,
                direction: 'rtl',
                barShow: false,
                screenWidth: 0, //屏幕宽度等于容器宽度
                size:'50%',//手机端侧边栏宽度
            }
        },
        mounted () {
            let w = document.documentElement.offsetWidth || document.body.offsetWidth;
            if (w < 800){
                this.barShow = true;
            }
            //根据屏幕改变el-row大小
            if (w > 1200){
                this.screenWidth=1200;
            }else {
                this.screenWidth=w;
            }
        },
        methods:{
            //移除搜索框的float属性
            removeAttr(){
                return {float:''};
            }
            ,
            getWidth(){
                return {width:this.screenWidth+'px',backgroundColor:'#1C1E20'};
            }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/doc.css";

  #bg {
    /* background-image: url(../assets/katongjianpan.png);*/
    /*background-color: #c0ccda;*/
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  a {
    text-decoration: none;
  }

  #header h1 {
    font-weight: normal;
    font-size: 2.5em;
    line-height: 2;
  }

  #header a {
    color: black;
    font-family: "微软雅黑";
  }

  body {
    color: #fff;
    font-size: 14px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .header .nav-item a .router-link-active:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: calc(50% - 15px);
    width: 30px;
    height: 2px;
    background: #409eff;
  }

  .el-header[data-v-8dc7cce2] {
    background-color: #1C1E20;
    color: #333;
    line-height: 60px;
  }

  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }

  .search-hot {
    position: absolute;
    z-index: 9999;
    width: 200px;
    top: 60px;
    left: 10px;
    background-color: rgba(36, 34, 32, .6);
    padding: 18px 62px 35px 23px;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
  }
</style>



