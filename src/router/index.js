import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EditBlogPost from '@/components/editor/EditBlogPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/editor/editblogpost',
      name: 'EditBlogPost',
      component: EditBlogPost
    }
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // }
  ]
})
