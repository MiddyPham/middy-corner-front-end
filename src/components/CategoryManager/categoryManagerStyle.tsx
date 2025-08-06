import styled, { keyframes, css } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const CategoryManagerContainer = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 0px #333333;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const CategoryCard = styled.div`
  background: #ffffff;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 
    6px 6px 0px #333333,
    inset 0 0 0 2px #ffffff;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      10px 10px 0px #333333,
      inset 0 0 0 2px #ffffff;
    ${css`animation: ${bounce} 0.5s ease;`}
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    border: 2px solid #000000;
    border-radius: 10px;
    pointer-events: none;
  }
`;

export const CategoryName = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px #333333;
`;

export const CategoryCount = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #666666;
  margin-bottom: 1rem;
`;

export const CategoryActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ActionButton = styled.button<{ variant?: "delete" }>`
  background: ${props => props.variant === "delete" ? "#ff4444" : "#000000"};
  color: #ffffff;
  border: 3px solid #000000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px #333333;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0px #333333;
    ${css`animation: ${bounce} 0.3s ease;`}
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 1px 1px 0px #333333;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #666666;
  }
`;

export const AddCategoryButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 4px solid #000000;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${bounce} 0.5s ease;`}
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${css`animation: ${fadeIn} 0.3s ease;`}
`;

export const ModalContent = styled.div`
  background: #ffffff;
  border: 4px solid #000000;
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
  ${css`animation: ${slideIn} 0.3s ease;`}
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid #000000;
    border-radius: 15px;
    pointer-events: none;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 0px #333333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 800;
  color: #000000;
  text-shadow: 1px 1px 0px #333333;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px #333333;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 5px 5px 0px #333333;
    transform: translateY(-2px);
  }
  
  &.error {
    border-color: #ff0000;
    ${css`animation: ${shake} 0.5s ease;`}
  }
  
  &::placeholder {
    color: #999999;
    font-weight: 500;
  }
`;

export const Select = styled.select`
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px #333333;
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 5px 5px 0px #333333;
    transform: translateY(-2px);
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 4px 4px 0px #333333;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const SaveButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${bounce} 0.3s ease;`}
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    background: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    ${css`animation: ${bounce} 0.3s ease;`}
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 0.9rem;
  font-weight: 600;
  text-shadow: 1px 1px 0px #ffffff;
  ${css`animation: ${bounce} 0.5s ease;`}
`;