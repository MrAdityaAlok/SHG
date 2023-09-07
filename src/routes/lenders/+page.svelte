<script lang="ts">
  import Header from "$lib/components/Header.svelte";

  let a: Map<string, string> = new Map([
    ["Name", "a"],
    ["ID", "123"],
    ["Address", "a,345"],
    ["Amount", "9934258031"],
    ["Paid", "false"],
  ]);
  let m: Array<Map<string, string>> = [];
  for (let i = 0; i < 50; i++) {
    m.push(a);
  }
</script>


<div class=" overflow-scroll w-full p-3 flex justify-center">
  <table class="w-4/5">
    <thead
      class="my-4 text-grey-200 overflow-clip flex justify-between relative"
    >
      {#each a as [k, _]}
        <th class="text-center p-3 select-none">{k}</th>
      {/each}
    </thead>
    {#each m as m1}
      <tr
        class="rounded-lg bg-green-600 my-4 hover:scale-105 transform transition duration-200 active:translate-y-1 overflow-clip flex justify-between"
      >
        {#each m1 as [_, v], i}
          <td class="text-center p-3 select-none">{i} {v}</td>
        {/each}
      </tr>
    {/each}
  </table>
</div>
