<script>
    import { assets } from "./store.js";
    </script>
    
    <style>
      .content {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-column-gap: 10px;
      }
    </style>
    

    <h2>Asset calculator</h2>
    <form class="content">
      <label for="bambooPrice">Bamboo stick price</label>
      <input type="text" bind:value={$assets.bambooPrice} name="bambooPrice" id="bambooPrice"/>

      <label for="totalBambooSticks">Total bamboo sticks</label>
      <input type="text" bind:value={$assets.totalBambooSticks} name="totalBambooSticks" id="totalBambooSticks"/>


      <label for="machineCost">Machine cost</label>
      <input type="text" bind:value={$assets.machineCost} id="machineCost" name="machineCost"/> 
    
      <div>Total Assets : {$assets.machineCost + 
        $assets.bambooPrice * $assets.totalBambooSticks
        }</div>
    </form>
    <!-- <p>
        {JSON.stringify($assets, 0, 2)}</p> -->
    
    