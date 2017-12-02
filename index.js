import Vue from 'vue'
import Vuex from 'vuex'

import {SeqDiagram, Store} from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

Vue.use(Vuex)
Vue.component('seq-diagram', SeqDiagram)

Vue.config.productionTip = false

const store = new Vuex.Store(Store)

/* eslint-disable */
window.app = new Vue({
    el: '#diagram',
    store
})
store.commit('code', 'a = A.methodA()')

