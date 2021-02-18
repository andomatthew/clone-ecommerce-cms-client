<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Edit Product Detail</div>
        </md-card-header>

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
          <md-button type="submit" class="md-primary">Edit Prooduct</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddProduct',
  props: ['product'],
  data () {
    return {
      form: {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stocks: this.product.stocks
      }
    }
  }
}
</script>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
