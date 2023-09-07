<!-- Open the modal using ID.showModal() method -->
<script lang="ts">
  export let id: string;
  let inputfields = ["Name of the member", "Address", "Contact"];
</script>

<dialog id="prog" class="modal modal-bottom sm:modal-middle w-auto">
  <div class="modal-box content-center">
    <span class="loading loading-spinner text-primary" />
    <span class="text-primary"> Adding... </span>
  </div>
</dialog>

<dialog {id} class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Add member</h3>
    <div class="form-control w-full max-w-xs">
      {#each inputfields as item}
        <label class="label">
          <span class="label-text">{item}</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      {/each}
    </div>
    <button
      class="btn"
      id="formsb1"
      type="submit"
      on:click={() => window.prog.showModal()}>Add</button
    >
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
    </div>
  </form>
</dialog>
