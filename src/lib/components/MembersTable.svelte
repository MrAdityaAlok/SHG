<script lang="ts">
  interface memberData {
    name: string;
    account_no: number;
    address: string;
    contact: string;
    invested_this_month: boolean;
  }
  export let memebrsData: Array<memberData>;
</script>

<table class="border-collapse border border-slate-500">
  <thead>
    <tr>
      <th>Name</th>
      <th>Account No.</th>
      <th>Address</th>
      <th>Contact</th>
      <th>This month's investment</th>
    </tr>
  </thead>

  <tbody>
    {#each memebrsData as data}
      <tr>
        <td>
          <div>
            <div class="font-bold">{data.name}</div>
          </div>
        </td>

        <td>{data.account_no}</td>
        <td>{data.address}</td>
        <td>{data.account_no}</td>
        <td>{data.invested_this_month}</td>
        <th> <button>More details</button> </th>
      </tr>
    {/each}
  </tbody>
</table>
