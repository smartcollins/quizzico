
 export const search = (data, keys, debounce)=>{
    return data.filter((items)=>
    keys.some((key)=> items[key].toLowerCase().includes(debounce.trim().toLowerCase()))
    )
   }