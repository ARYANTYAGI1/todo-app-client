<template>
  <div class="dashboard">
    <h1>Welcome to TodoApp</h1>
    <div class="buttons">
      <router-link to="/login" class="button">Login</router-link>
      <router-link to="/signup" class="button">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4caf50, #8bc34a);
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 0 20px;
}

.dashboard h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Styling for Buttons */
.buttons {
  display: flex;
  gap: 20px;
}

.button {
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #4caf50;
  background-color: white;
  border: 2px solid #4caf50;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  color: white;
  background-color: #4caf50;
  cursor: pointer;
}


</style>
