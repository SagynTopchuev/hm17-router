import { useNavigate } from "react-router-dom";

export const useBack = () => {
  const navigate = useNavigate();
  function Back() {
    navigate(-1);
  }
  function Forward() {
    navigate(+1);
  }
  return {
    Back,
    Forward,
  };
};
