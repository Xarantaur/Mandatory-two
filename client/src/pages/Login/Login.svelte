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
  width: 300px;
  margin: 50px auto;
}


form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


h2 {
  margin-bottom: 20px;
  color: darkgreen;
}


input[type="email"],
input[type="password"] {
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: navy;
}

</style>