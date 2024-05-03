<script>
  import { BASE_URL } from "../../store/generalStore.js"
  import { fetchPost } from "../../util/api.js"
  import { useNavigate, useLocation } from "svelte-navigator";
  import toast, {Toaster} from "svelte-french-toast"
  import { user } from "../../store/generalStore.js"
  

  const navigate = useNavigate();
  const location = useLocation();

  let email;
  let password;




   async function handleLogin(event){
    event.preventDefault();
   
      const bodyElements = {
          email: email,
          password: password
      }
      const reponse = await fetchPost($BASE_URL + "/api/login", bodyElements )
      if(reponse.data){
        console.log("hej")
        $user = { email, password}
        toast.success('Login Success')
        const from = ($location.state && $location.state.from) || "/";
        navigate(from, {replace: true})
      }
  }

</script>

<Toaster />
<div class="container">
  <form on:submit={handleLogin}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" bind:value={email}>
      <input type="password" name="password" placeholder="Password" bind:value={password}>
      <input type="submit">
    </form>
</div>

<style>

.container {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container h2 {
  margin-bottom: 20px;
  text-align: center;
}

.container input[type="email"],
.container input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.container input[type="submit"] {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.container input[type="submit"]:hover {
  background-color: #45a049;
}

</style>