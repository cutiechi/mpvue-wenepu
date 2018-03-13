<template>
  <div id="bind">
    <div class="background"></div>
    <div class="bind-student-form">
      <input type="text" placeholder="学号"/>
      <input type="password" placeholder="密码"/>
      <button>绑定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bind'
}
</script>

<style lang="scss" scoped>
#bind {
  height: 100%;

  .background {
    background-color: #0080ff;
    height: 100px;
  }

  .bind-student-form {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-sizing: border-box;
    margin: 0 20px;
    padding: 20px;
    position: absolute;
    top: 20px;
    width: calc(100% - 40px);
  }
}
</style>
