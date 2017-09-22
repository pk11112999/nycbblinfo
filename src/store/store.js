import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showResults: false,
    queryBBl: '',
    resultsBBL: '',
    inputErrorMessage: '',
    links: {
      'Zola': {
        'heading': 'DCP Zola Map',
        'url': '',
        'thumb': './static/images/zola_thumb.png'
      },
      'Acris': {
        'heading': 'DOF ACRIS',
        'url': '',
        'thumb': './static/images/acris_thumb.png'
      },
      'DTM': {
        'heading': 'DOF Tax Map',
        'url': '',
        'thumb': './static/images/dtm_thumb.png'
      },
      'BIS': {
        'heading': 'DOB BIS',
        'url': '',
        'thumb': './static/images/bis_thumb.png'
      },
      'GOAT': {
        'heading': 'DCP GOAT',
        'url': '',
        'thumb': './static/images/goat_thumb.png'
      }
    }
  },
  getters: {
    getLinks: (state) => {
      return {
        'taxmap': state.links.DTM,
        'zolamap': state.links.Zola,
        'acris': state.links.Acris,
        'goat': state.links.GOAT,
        'bis': state.links.BIS
      }
    },
    showResults: state => {
      return state.showResults
    },
    resultsBBL: state => {
      return state.resultsBBL
    },
    inputBBL: state => {
      return state.queryBBL
    }
  },
  mutations: {
    setQueryBBL (state, bbl) {
      state.queryBBL = bbl
      state.resultsBBL = bbl
    },
    setShowResults (state, bool) {
      state.showResults = bool
    },
    setOutputUrls (state, urls) {
      state.links.BIS.url = urls.outputBis
      state.links.GOAT.url = urls.outputGoat
      state.links.Acris.url = urls.outputAcris
      state.links.Zola.url = urls.outputZolamap
      state.links.DTM.url = urls.outputTaxmap
    }
  },
  actions: {
  }
})
