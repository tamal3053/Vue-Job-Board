import Vue from 'vue'
import Router from 'vue-router'
import JobListing from '@/components/JobListing'
import SearchJobs from '@/components/SearchJobs'
import JobDetail from '@/components/JobDetail'
import Profile from '@/components/Profile'
import People from '@/components/People'
import AddJob from '@/components/AddJob'

import firebase from 'firebase'
import { firebaseApp } from '@/firebase'

Vue.use(Router)

function checkAuth(to, from, next) {
    console.log(store);
    if (store.state.userLogedIn) {
        next()
    } else {
        document.getElementById('login-button').click();
    }
}

export default new Router({
    routes: [{
            path: '/',
            name: 'JobListing',
            component: JobListing
        },
        {
            path: '/job-detail/:jobkey',
            name: 'job-detail',
            props: true,
            component: JobDetail,
            meta: {
                requiresAuth: true
            },
            beforeEnter: checkAuth
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true,
            },
            beforeEnter: checkAuth
        },
        {
            path: '/profile/:id',
            name: 'Profile-detail',
            component: Profile
        },
        {
            path: '/people',
            name: 'People',
            component: People
        },
        {
            path: '/add-job',
            name: 'AddJob',
            component: AddJob,
            meta: {
                requiresAuth: true
            },
            beforeEnter: checkAuth
        },
        {
            path: '/search-job/:term',
            name: 'SearchJobs',
            component: SearchJobs,
        }
    ]
})