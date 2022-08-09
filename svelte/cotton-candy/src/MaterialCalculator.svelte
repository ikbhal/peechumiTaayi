<script>
    import { material } from "./store.js";
    </script>
    
    <style>
      .content {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-column-gap: 10px;
      }
    </style>
    

    <h2>Cotton Calcualtor</h2>

    <form class="content">
      <label>Sugar Quantity</label>
      <input type="text" bind:value={$material.sugarQuantity} />

      <label>Sugar Price</label>
      <input type="text" bind:value={$material.sugarPrice} />
      <br/>
      <div> Sugar total price: {$material.sugarQuantity * $material.sugarPrice}</div>
      <label>Food color</label>
      <input type="text" bind:value={$material.foodColor} />
      <label>Plastic Cover</label>
      <input type="text" bind:value={$material.plasticCover} />
    </form>
    <!-- <p>
        {JSON.stringify($material, 0, 2)}</p>
     -->
    