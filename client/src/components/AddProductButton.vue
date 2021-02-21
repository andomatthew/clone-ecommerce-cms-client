<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-content>
      <form novalidate class="md-layout"
      @submit.prevent="addProduct"
    >
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Name</label>
                <md-input v-model="form.name" />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="last-name">image_url</label>
                <md-input v-model="form.image_url" />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="age">Price</label>
                <md-input type="number" v-model="form.price" />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="age">Stocks</label>
                <md-input type="number" v-model="form.stocks" />
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Add Product</md-button>
        </md-card-actions>
      </md-card>
    </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
  <md-button @click="showDialog = true">
    <md-icon class="material-icons">add</md-icon> Add Product
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
      form: {
        name: null,
        image_url: null,
        price: null,
        stocks: null
      }
    }
  },
  methods: {
    addProduct () {
      const newProduct = {
        name: this.form.name,
        image_url: this.form.image_url,
        price: this.form.price,
        stocks: this.form.stocks
      }
      this.$store.dispatch('addProduct', newProduct)
        .then(_ => {
          this.showDialog = false
        })
    }
  }
}
</script>

<style scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
  height: auto
}
</style>
