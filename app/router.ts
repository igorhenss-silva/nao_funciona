import Vue from 'vue';
import Router from "vue-router";
import NewVisit from '@/views/new-visit/NewVisit.view.vue';
import Visits from '@/views/visits/Visits.view.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes : [
        { path: '/', component: Visits, name: 'visits' },
        { path: '/new_visit', component: NewVisit, name: 'new_visit' },
        { path: '/new_visit/:id', component: NewVisit, name: 'update' },
        { path: '*', redirect: '/' },
    ]
});