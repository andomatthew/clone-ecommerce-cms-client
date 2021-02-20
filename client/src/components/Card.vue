<template>
<div class=" card md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{product.name}}</div>
        <div class="md-subhead">Rp. {{product.price}}</div>
          </md-card-header>
            <md-card-content style="display:flex;">
              Stock tersedia : {{product.stocks}}
            </md-card-content>
          <md-card-actions class="actions">
          <EditProductButton :product="product"/>
          <DeleteProductDialog :product="product"/>
          <UpdateStockButton :product="product" />
        </md-card-actions>
    </md-ripple>
  </md-card>
</div>
</template>

<script>
import EditProductButton from './EditProductButton.vue'
import DeleteProductDialog from './DeleteProductDialog'
import UpdateStockButton from './UpdateStockButton.vue'
export default {
  props: ['product'],
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  components: {
    EditProductButton,
    DeleteProductDialog,
    UpdateStockButton
  }
}
</script>

<style scoped>

.card {
  max-width: 25%;
  padding: 20px 0;
}

</style>
