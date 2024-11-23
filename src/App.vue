<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useTodosStore } from './stores/todos'

const store = useTodosStore()
store.$subscribe((mutation) => {
  console.log(`The todos store was mutated using method ${mutation.type}`)
})

store.$onAction(({ name, args, after, onError }) => {
  const startTime = Date.now()
  // this will trigger before an action on `store` is executed
  console.log(`Start "${name}" with params [${args.join(',  ')}].`)

  // this will trigger if the action succeeds and after it has fully run.
  // it waits for any returned promised
  after((result) => {
    console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`)
  })

  // this will trigger if the action throws or returns a promise that rejects
  onError((error) => {
    console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
  })
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Todo list" />

      <nav>
        <RouterLink to="/">All items</RouterLink>
        <RouterLink to="/done">Done items</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
