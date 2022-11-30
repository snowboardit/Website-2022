import { useState, useEffect } from 'react';

function usePageLocation() {

    const [atPageTop, setAtPageTop] = useState(true);

    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 40) {
              setAtPageTop(false);
          } else {
              setAtPageTop(true);
          }
      });
    }, []);

    return { atPageTop };
}

export default usePageLocation;