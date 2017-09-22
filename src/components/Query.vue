<template>
    <div id="query">
        <div class="content"
        <h2 class="content-head is-center">Enter a BBL</h2>
        <div class="l-box-lrg is-center pure-u-1">
            <div class="pure-u-2-5">
                <form class="pure-form">                    
                    <input v-model="inputBBL" id="userInputBBL" maxlength="35">
                    <p> {{ inputErrorMessage }} </p>
                    <button v-on:click="setInputBBL">Search</button>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store/store'
export default {
  name: 'query',
  store: store,
  data () {
    return {
      inputBBL: '',
      inputErrorMessage: ''
    }
  },
  watch: {
    'inputBBL' () {}
  },
  methods: {
    setInputBBL () {
      // user input
      var inputBBL = this.inputBBL

      if (validateBBL(inputBBL)) {
        var parsedBBL = parseBBL(inputBBL)
        var bbl = parsedBBL[0]
        var boro = parsedBBL[1][0]
        var block = parsedBBL[1][1]
        var lot = parsedBBL[1][2]

        var outputUrls = { outputTaxmap: 'http://maps.nyc.gov/taxmap/map.htm?searchType=BblSearch&featureTypeName=EVERY_BBL&featureName=' + bbl,
          outputZolamap: 'http://maps.nyc.gov/doitt/nycitymap/template.jsp?applicationName=ZOLA&searchType=BblSearch&featureTypeName=PLUTO&featureName=' + bbl,
          outputAcris: 'http://a836-acris.nyc.gov/bblsearch/bblsearch.asp?borough=' + boro + '&block=' + block + '&lot=' + lot,
          outputGoat: 'http://a030-goat.nyc.gov/goat/bl.aspx?boro=' + boro + '&block_num=' + block + '&lot_num=' + lot,
          outputBis: 'http://a810-bisweb.nyc.gov/bisweb/PropertyProfileOverviewServlet?boro=' + boro + '&block=' + block + '&lot=' + lot}
        this.$store.commit('setQueryBBL', this.inputBBL)
        this.$store.commit('setOutputUrls', outputUrls)
        this.$store.commit('setShowResults', true)
      } else {
        alert('Not a valid BBL. Please enter a ten digit or "-" separated BBL.')
      }

      function validateBBL (string) {
        if (string.length > 12) {
          return false
        } else {
          var bblParts = string.split('-')
          if (bblParts.length === 1 && bblParts[0].length === 10) {
            // check to make sure all numbers and valid boro code
            return true
          } else if (bblParts.length === 3) {
            var boro = bblParts[0]
            var block = bblParts[1]
            var lot = bblParts[2]
            // check to make sure all numbers and valid boro code
            if (boro.length > 1) {
              return false
            }
            if (block.length > 5) {
              return false
            }
            if (lot.length > 4) {
              return false
            }
            return true
          }
        }
      }

      function parseBBL (string, leadingZeros) {
        var parsedBBL = [] // first element array is 10 digit, second element array is array of bbl
        leadingZeros = true

        var bblParts = string.split('-')
        if (bblParts.length === 1 && bblParts[0].length === 10) {
          var boro = string.slice(0, 1)
          var block = string.slice(1, 6)
          var lot = string.slice(6)
          var splitBBL = [boro, block, lot]
          parsedBBL.push(bblParts[0], splitBBL)
          return parsedBBL
        } else if (bblParts.length === 3) {
          boro = bblParts[0]
          block = bblParts[1]
          lot = bblParts[2]
          if (leadingZeros) {
            while (block.length < 5) { block = '0' + block }
            while (lot.length < 4) { lot = '0' + lot }
          }
          var joinedBBL = boro + block + lot
          splitBBL = [boro, block, lot]
          parsedBBL.push(joinedBBL, splitBBL)
          return parsedBBL
        } else {
          return false
        }
      }
    }
  }
}

</script>

<style>

</style>

