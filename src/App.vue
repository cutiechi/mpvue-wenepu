<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
  height: 100%;
}

input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
  text-align: center;
}

button {
    background-color: #0080ff;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    height: 40px;
    line-height: 40px;

    &:after {
      border: none;
    }

    &:active {
      background-color: #fff;
      border: 1px solid #0080ff;
      color: #0080ff;
    }
}
</style>
