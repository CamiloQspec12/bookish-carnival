export default [
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../pages/login.vue').then(m=>m.default || m)
    }
]