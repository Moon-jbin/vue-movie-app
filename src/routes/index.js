import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'



export default createRouter({
  // Hash
  // https://google.com/#/search    ,    # => Hash모드
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages 구분
  routes: [
    {
      path: '/', //메인 페이지로 이동 하겠다.  
      component: Home // 메인 페이지에 해당하는 component
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About // about페이지에 해당하는 component
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})