<script lang="ts">
  import Fab from "$lib/components/Fab.svelte";
  // import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "../app.scss";
</script>

<div class="wrapper">
  <Sidebar />
  <main>
    <!-- <Header /> -->
    <slot />
  </main>
</div>

<Fab />

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    /* background-color: red; */
  }
  .wrapper > main {
    flex-grow: 1;
  }
  .wrapper > main {
    padding: 0;
    /* align-items: center; */
    overflow: scroll;
  }
</style>
