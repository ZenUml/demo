import Vue from 'vue'
import Vuex from 'vuex'

import {SeqDiagram, Store} from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

import editor from './src/Editor'

Vue.use(Vuex)

Vue.component('seq-diagram', SeqDiagram)


Vue.config.productionTip = false

const store = new Vuex.Store(Store)

/* eslint-disable */
window.app = new Vue({
    el: '#workspace',
    store: store
})

window.store = store