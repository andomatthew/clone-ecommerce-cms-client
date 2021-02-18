<template>
<div class="md-layout-item">
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{product.name}}</div>
        <div class="md-subhead">Rp. {{product.price}}</div>
          </md-card-header>
            <md-card-content>
              Stock tersedia : {{product.stocks}}
            </md-card-content>
          <md-card-actions>
          <md-button @click.prevent="deleteProduct">Delete</md-button>
          <!-- <md-button>Dialog</md-button> -->
          <EditProductButton :product="product"/>
        </md-card-actions>
    </md-ripple>
  </md-card>
</div>
</template>

<script>
import EditProductButton from './EditProductButton.vue'
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
    EditProductButton
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
}
</script>

<style>

</style>
