import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HotelAddPrice2 from '@/components/hotelAddPrice/HotelAddPrice2'
import HotelUpdatePrice from '@/components/hotelUpdatePrice/HotelUpdatePrice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HotelAddPrice2',
      component: HotelAddPrice2
    },
    {
      path: '/HotelUpdatePrice',
      name: 'HotelUpdatePrice',
      component: HotelUpdatePrice
    },
  ]
})
