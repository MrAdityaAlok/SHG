<script lang="ts">
  export let lendersData: Array<Map<string, string>>;
</script>

<!---->
<!-- <table class="table-auto border-separate border-spacing-y-2 border border-slate-500"> -->
<!--   <thead> -->
<!--     <tr> -->
<!--       {#each Object.keys(Lender) as tableHeader} -->
<!--         <th class="border border-slate-600">{tableHeader}</th> -->
<!--       {/each} -->
<!--     </tr> -->
<!--   </thead> -->
<!---->
<ul>
  {#each lendersData as d}
    <li class="border rounded bg-green-600">
      <div class="flex justify-between">
        <p>{d}</p>
      </div>
    </li>
  {/each}
</ul>
<!-- </table> -->
