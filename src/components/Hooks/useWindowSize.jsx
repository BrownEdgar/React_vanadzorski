import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setValue(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return value

}
