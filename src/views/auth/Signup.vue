<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          placeholder="Enter your name" 
          required 
        />
      </div>
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
      <button type="submit" class="btn">Sign Up</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async handleSignup() {
      try {
        // Send data to the backend
        const response = await fetch("http://localhost:5000/api/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });

        if (!response.ok) throw new Error(await response.text());

        const data = await response.json();
        alert("Signup successful! Please log in.");
        this.$router.push("/login");
      } catch (error) {
        alert("Error during signup: " + error.message);
      }
    },
  },
};
</script>

<style scoped>

/* Signup Page Styling */
.signup-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.signup-container h1 {
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

.signup-container p {
  margin-top: 15px;
}

.signup-container a {
  color: #4caf50;
  text-decoration: none;
}

.signup-container a:hover {
  text-decoration: underline;
}

</style>
