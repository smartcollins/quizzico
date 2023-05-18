export const search = (data, keys, debounce) => {
  return data.filter((items) =>
    keys.some((key) =>
      items[key].toLowerCase().includes(debounce.trim().toLowerCase())
    )
  );
};
export const copyText = (text) => {
 if (text.length) {
   navigator.clipboard.writeText(text).then(() => {
    }).catch((err)=> console.log(err))
 } else {
   throw new Error('Value to be coped not provided')
 }
};
