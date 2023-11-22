<template>
  <div class="construction-container">
    <h1>Under Construction</h1>
    <p>We're working hard to finish this project. Stay tuned!</p>
  </div>
</template>

<script>
export default {
  name: "UnderConstruction",
};
</script>

<style scoped>
.construction-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
}

.construction-container h1 {
  font-size: 3em;
  color: #333;
}

.construction-container p {
  font-size: 1.5em;
  color: #666;
}
</style>
