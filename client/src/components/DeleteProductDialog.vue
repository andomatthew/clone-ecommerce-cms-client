<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      :md-title="title"
      :md-content="content"
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <md-button class="md-icon-button" @click="active = true">
      <md-icon class="material-icons md-48">delete</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      active: false,
      value: null,
      title: `Are you sure wanna delete product "${this.product.name}" ?`,
      content: 'Your action cannot be undone after you agree'
    }
  },
  methods: {
    onConfirm () {
      this.$store.dispatch('deleteProduct', this.product.id)
    },
    onCancel () {
      this.active = false
    }
  }
}
</script>

<style>

</style>
