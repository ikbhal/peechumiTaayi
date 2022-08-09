<script>
    import { employee } from "./store.js";
    </script>
    
    <style>
      .content {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-column-gap: 10px;
      }
    </style>
    

    <h2>Employee expense calculator</h2>
    <form class="content">
      <label for="salary">Salary</label>
      <input type="text" bind:value={$employee.salary} id="salary" name="salary"/>

      <label for="totalEmployee">Total Employee</label>
      <input type="text" bind:value={$employee.totalEmployee} 
      id="totalEmployee" name="totalEmployee"/>
    

      <div>Total employee expense : {$employee.salary * $employee.totalEmployee}</div>
      <!-- <label>Rent</label>
      <input type="text" bind:value={$employee.rent} />
      <label>Food</label>
      <input type="text" bind:value={$employee.food} />
      <label>Dress</label>
      <input type="text" bind:value={$employee.dress} />
      <label>Travel</label>
      <input type="text" bind:value={$employee.travel} /> -->
    </form>
    <!-- <p>
        {JSON.stringify($employee, 0, 2)}</p> -->
    
    