<script lang="ts">
  const navElements = new Map([
    ["Dashboard", "/"],
    ["Members", "/members"],
    ["Lenders", "/lenders"],
  ]);
</script>

<aside>
  <!--#TODO <header /> -->
  <nav>
    {#each [...navElements] as [title, url]}
      <li>
        <a href={url}>{title}</a>
      </li>
    {/each}
  </nav>
  <footer><small>Made by Dheeraj Kumar</small></footer>
</aside>

<style>
  aside {
    padding: 0.5rem 0.5rem;
    width: 12rem;
    display: flex;
    flex-flow: column;
  }
  aside nav {
    flex-grow: 1;
  }
</style>
