<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand pl-5" href="#"><img alt="Vue logo" src="./assets/logo.png" height="40px"></a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/list">List Store</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/axios">Axios</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/get_api">Get API</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/forms">Forms</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/chart">Chart</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/datatable">Datatable</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"><router-link to="/fontawesome">FontAwesome</router-link></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div class="container pb-5">
        <router-view/>
      </div>
  </div>

</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
h1, img {
  text-align: center;
  margin-bottom: 15px;
}
</style>
