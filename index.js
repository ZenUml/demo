import Vue from 'vue'
import Vuex from 'vuex'
import VueCodeMirror from 'vue-codemirror'
import { codemirror } from 'vue-codemirror'
import Split from 'split.js'

import {SeqDiagram, Store} from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

import editor from './src/Editor'

Vue.use(Vuex)
Vue.use(VueCodeMirror)
Vue.component('seq-diagram', SeqDiagram)
Vue.component('editor', editor)


Vue.config.productionTip = false

const store = new Vuex.Store(Store)

/* eslint-disable */
window.app = new Vue({
    el: '#workspace',
    store
})
store.commit('code', 'a = A.methodA()')
Split(['#editor', '#diagram'], { sizes: [25, 75] })

