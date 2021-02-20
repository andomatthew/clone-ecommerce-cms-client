<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-content>
      <EditProductForm :product="product"/>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      <md-button class="md-primary" @click="showDialog = false">Save</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-icon-button" @click="showDialog = true">
    <md-icon class="material-icons md-48">mode</md-icon>
  </md-button>
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
