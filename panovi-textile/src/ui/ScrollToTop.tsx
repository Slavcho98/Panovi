import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = { behavior?: ScrollBehavior };
export default function ScrollToTop({ behavior = "smooth" }: Props) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [location.pathname, location.search]);

  return null;
}
