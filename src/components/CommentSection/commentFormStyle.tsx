import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-bottom: 32px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 86, 120, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #ff3d6a;
  }
  
  &:disabled {
    background-color: #ffb3c4;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-bottom: 16px;
`; 