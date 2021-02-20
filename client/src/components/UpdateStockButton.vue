<template>
<div>
  <md-dialog  :md-active.sync="showDialog">
      <form novalidate class="md-layout"
        @submit.prevent="updateStocks"
      >
          <md-dialog-content>
            <md-field>
              <label >Stocks</label>
              <md-input type="number" v-model="stocks" />
            </md-field>
          </md-dialog-content>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          <md-button type="submit" class="md-primary">Tes</md-button>
      </form>
    </md-dialog>

  <md-button class="md-icon-button" @click="showDialog = true">
    <md-icon class="material-icons">restore</md-icon>
  </md-button>
</div>
</template>

<script>
export default {
  name: 'DialogCustom',
  props: ['product'],
  data () {
    return {
      showDialog: false,
      stocks: this.product.stocks
    }
  },
  methods: {
    updateStocks () {
      this.$store.dispatch('updateStocks', { stocks: this.stocks, id: this.product.id })
    }
  }
}
</script>

<style scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>
