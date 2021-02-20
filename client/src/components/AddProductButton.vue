<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-content>
      <md-tabs md-dynamic-height>
        <md-tab md-label="Add">
          <AddProductForm
            @submit="showDialog = false"
          />
        </md-tab>
      </md-tabs>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      <md-button class="md-primary" @click="showDialog = false">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
  <md-button @click="showDialog = true">
    <md-icon class="material-icons">add</md-icon> Add Product
  </md-button>
</div>
</template>

<script>
import AddProductForm from './AddProductForm.vue'
export default {
  name: 'DialogCustom',
  props: ['product'],
  data () {
    return {
      showDialog: false
    }
  },
  components: {
    AddProductForm
  }
}
</script>

<style scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
  height: auto
}
</style>
