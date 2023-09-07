 <!-- interface memberData { -->
 <!--    name: string; -->
 <!--    account_no: number; -->
 <!--    address: string; -->
 <!--    contact: string; -->
 <!--    invested_this_month: boolean; -->
 <!--  } -->
  
<script lang="ts">
  let a: Map<string, string> = new Map([
    ["name", "a"],
    ["id", "123"],
    ["address", "a,345"],
    ["amount", "9934258031"],
    ["paid", "false"],
  ]);
  let m: Array<Map<string, string>> = [];
  for (let i = 0; i < 50; i++) {
    m.push(a);
  }
</script>

<ul class="w-4/5">
  {#each m as m1}
    <li> <a 
      class="rounded-lg bg-green-600 my-4 hover:scale-105 transform transition duration-200 active:translate-y-1 overflow-auto flex justify-between"
    >
      {#each m1 as [_, v],i}
        <div class="text-center p-3">
          <p class="select-none">{i} {v}</p>
        </div>
      {/each}
         </a>
    </li>
  {/each}
</ul>
