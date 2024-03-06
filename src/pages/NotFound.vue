<template>
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <RouterLink to="/"><button>Back to home page</button></RouterLink>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  <style scoped>
button {
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #e9531d;
  transition: .2s ease-in-out;
  font-family: 'BodegaSans';
  text-transform: uppercase;
  font-size: 16px;
    
  padding: 10px;
  margin-top: 20px;
  height: 40px;
}
button:hover{
  border: 1px solid #b9b9b9;
  color: #1c1c1c;
  background-color: transparent;


}
div {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1{
    font-family: 'BodegaSans',sans-serif;
    font-size: 92px;
    color: #1c1c1c;
}p {
    font-family: 'NeueMontreal';
    color: #1c1c1c;
    text-transform: uppercase;
}
</style>
  