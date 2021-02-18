<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-content>
      <md-tabs md-dynamic-height>
        <md-tab md-label="Edit">
          <EditProductForm :product="product"/>
        </md-tab>
      </md-tabs>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      <md-button class="md-primary" @click="showDialog = false">Save</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-primary md-raised" @click="showDialog = true">Edit</md-button>
</div>
</template>

<script>
import EditProductForm from './EditProductForm'
export default {
  name: 'DialogCustom',
  props: ['product'],
  data () {
    return {
      showDialog: false
    }
  },
  components: {
    EditProductForm
  }
}
</script>

<style scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
  height: auto
}
</style>
