import { useNavigate } from 'react-router-dom';

export const useRefresh = () => {
  const navigate = useNavigate();

  const refresh = () => {
    navigate('/');
  };

  return { refresh };
}; 