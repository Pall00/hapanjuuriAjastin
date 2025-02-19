
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Notification = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <NotificationWrapper $type={type}>
      {message}
    </NotificationWrapper>
  );
};

export default Notification;

const NotificationWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  padding: 1rem 2rem;
  border-radius: 8px;
  animation: slideIn 0.3s ease-out;
  z-index: 1000;
  
  background-color: ${props => 
    props.$type === 'success' ? '#E8F5E9' :
    props.$type === 'error' ? '#FDECEA' :
    '#FFF8E8'};
  
  color: ${props => 
    props.$type === 'success' ? '#2E7D32' :
    props.$type === 'error' ? '#B71C1C' :
    '#8B7D5B'};
  
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    text-align: center;
  }
`;