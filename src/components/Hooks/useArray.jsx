import { useState } from 'react';

function useArray({ count = 10, start = 1, end = 100, unique = false }) {
  const [arr, setarr] = useState(() => {
    if (unique) {
      const x = new Array(end - start > count ? count : end - start)
      for (let i = 0; i < x.length; i++) {
        const random = Math.round(Math.random() * (end - start) + start)
        if (x.includes(random)) {
          i--;
          continue
        }
        x[i] = random
      }
      return x

    } else {
      return Array.from({ length: count }, () => Math.round(Math.random() * (end - start) + start))
    }
  });

  const sort = (option = 'asc') => {
    (option === 'asc')
      ? setarr(arr.toSorted((a, b) => a - b))
      : setarr(arr.toSorted((a, b) => b - a))
  }


  return [arr, setarr, { sort }]

}


export default useArray;








