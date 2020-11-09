<template>
    <swiper ref="mySwiper" :options="swiperOptions" id="c1">
        <swiper-slide><img src="@/assets/lu8.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/lu2.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/lu3.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/lu6.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/lu7.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/7.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>


<script>
import { swiper, swiperSlide, directive  } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  },
  components: {
			swiper,
			swiperSlide
		},
    name: 'carrousel',
    data:function(){
      return {
        swiperOptions: {
          pagination:{
          el:'.swiper-pagination',
          clickable:true,
        },
          slidesPerView: 'auto',
          centeredSlides:true,
          spaceBetween: 10,
          loop:true,
          speed:1500, 
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: {
              disableOnInteraction: false,
              delay:1000
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    updated() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, false)
    },
    
  }
</script>

<style scoped>
div{
    width: 800px;
    margin-top: 20px;
}
.swiper-button-prev{
  width: 80px;
  height: 80px;
}
.swiper-button-next{
  width: 80px;
  height: 80px;
}
img{
  width: 100%;
  height: 500px;
}
</style>