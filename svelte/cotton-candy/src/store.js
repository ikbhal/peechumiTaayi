// store.js
import { writable } from 'svelte/store';

export const material = writable({
  sugarQuantity: 1.5,
//   Market Price of 50 Kg Sugar is Rs 32,500/ Metric Ton.
// normal price 54 or discounted price 45 
  sugarPrice:  45,
  foodColor: "",
  plasticCover: "",
  notes: "1.5 kg 40 packets each selling at 10rs, 100 gram food color is 500rs"
})

export const employee = writable({
    totalEmployee: 6,
    salary: 9000,//"9k per month",
    rent: "5k , 6 people living ",
    food: "provide raw material, cook yourself ",
    dress: "200rs every month",
    travel: "to and from tickets free"
  })
  
  export const assets = writable({
    machine: 1,
    machineCost: 20000,
    notes: "one machine for  6 people, machjine take electricity",
    bambooSticPrice: 200,
    totalBambooSticks: 6
  })
  