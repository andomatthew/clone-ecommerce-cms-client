<template>
   <div>
    <form novalidate class="md-layout">
      <md-field>
        <label for="age">Stocks</label>
        <md-input type="number" />
      </md-field>
      <md-button type="submit" class="md-primary">Update</md-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UpdateStocksForm',
  data () {
    return {

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
