<template>
  <div>
    <md-empty-state
      md-icon="search_off"
      md-label="No products data for now"
      md-description="Your products data will shown here once you add products to this system">
      <AddProductButton class="md-primary" />
    </md-empty-state>
  </div>
</template>

<script>
import AddProductButton from './AddProductButton'

export default {
  name: 'EmptyStateBasic',
  components: {
    AddProductButton
  }
}
</script>

<style scoped>
  div {
    height: 100%;
    width: 100%;
  }
</style>
