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