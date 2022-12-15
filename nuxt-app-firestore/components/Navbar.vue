<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ArduinoES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/">Compostables</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/plugins">Plugins</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/firebase">Firebase</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/fetch">Fetch</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/pinia">Pinia</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>