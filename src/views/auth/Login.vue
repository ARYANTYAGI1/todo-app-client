<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="form.password" 
          placeholder="Enter your password" 
          required 
        />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Send data to backend
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });

        if (!response.ok) throw new Error(await response.text());

        const data = await response.json();

        // Save token to localStorage
        localStorage.setItem("authToken", data.data.token);
        this.$router.push("/index");
      } catch (error) {
        alert("Error during login: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Login Page Styling */
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.login-container h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #4caf50;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group input:focus {
  border-color: #4caf50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.btn {
  display: inline-block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

.login-container p {
  margin-top: 15px;
}

.login-container a {
  color: #4caf50;
  text-decoration: none;
}

.login-container a:hover {
  text-decoration: underline;
}


</style>
