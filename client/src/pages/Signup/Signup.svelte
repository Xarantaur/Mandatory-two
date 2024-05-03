<script>
  import { navigate } from "svelte-navigator";
    import { BASE_URL } from "../../store/generalStore.js"
    import { fetchPost } from "../../util/api.js"
    import toast, {Toaster} from "svelte-french-toast"

    let email;
    let password;

    async function handleSignUp(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const bodyElements = {
      email: email,
      password: password
    };

    fetchPost($BASE_URL + "/api/signup", bodyElements)
    toast.success("Succesfully Signed Up")
    navigate("/Login")
};


</script>
<Toaster />
<div class="container">
    <form on:submit={handleSignUp}>
        <h2>Signup</h2>
        <input type="email" name="email" placeholder="Email" bind:value={email}>
        <input type="password" name="password" placeholder="Password" bind:value={password}>
        <input type="submit" value="Signup">
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
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: navy;
}


</style>