import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectBasedOnFlag = (flag, path) => {
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    if (flag) {
      navigate(path);
    }
  }, [flag, navigate, path]);
};

export default useRedirectBasedOnFlag;
