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

export const saveAndDownload = (text)=>{
  const content = JSON.stringify(text);
  const blob = new Blob([content], {type: 'text/plain'});
  console.log(blob);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'file.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
