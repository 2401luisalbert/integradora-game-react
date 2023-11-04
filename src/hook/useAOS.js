import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });

    return () => {
      AOS.refresh(); // Desinicializa AOS cuando el componente se desmonta
    };
  }, []);

  return AOS;
}

export default useAOS;
