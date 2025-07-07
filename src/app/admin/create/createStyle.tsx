import styled, { keyframes } from "styled-components"; 
import Link from "next/link";

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

export const CreateContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, #f0f0f0 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, #e8e8e8 0%, transparent 50%);
  }
`;

export const CreateHeader = styled.header`
  background: #ffffff;
  padding: 0 2rem;
  border-bottom: 4px solid #000000;
  box-shadow: 0 8px 0px #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-shadow: 2px 2px 0px #333333;
`;

export const BackButton = styled(Link)`
  background: #333333;
  color: #ffffff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 3px solid #000000;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 800;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #666666;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #666666;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px #666666;
  }
`;

export const CreateContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 5;
`;

export const FormContainer = styled.form`
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
  border: 4px solid #000000;
  box-shadow: 
    8px 8px 0px #333333,
    inset 0 0 0 2px #ffffff;
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #000000;
  text-shadow: 1px 1px 0px #333333;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px #333333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 6px 6px 0px #333333;
    transform: translateY(-2px);
  }
  
  &.error {
    border-color: #ff0000;
    animation: ${shake} 0.5s ease;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 6px 6px 0px #333333;
    transform: translateY(-2px);
  }
  
  &.error {
    border-color: #ff0000;
    animation: ${shake} 0.5s ease;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  background: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 6px 6px 0px #333333;
    transform: translateY(-2px);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 800;
  color: #000000;
`;

export const RadioInput = styled.input`
  margin: 0;
  transform: scale(1.5);
`;

export const FileUpload = styled.div`
  border: 3px dashed #000000;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    border-color: #000000;
    background: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const UploadText = styled.div`
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
`;

export const ImagePreview = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const PreviewImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 15px;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #333333;
`;

export const TagInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  border: 3px solid #000000;
  border-radius: 15px;
  min-height: 60px;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:focus-within {
    border-color: #000000;
    box-shadow: 6px 6px 0px #333333;
    transform: translateY(-2px);
  }
`;

export const Tag = styled.span`
  background: #000000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: 2px solid #000000;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 3px 3px 0px #333333;
`;

export const RemoveTag = styled.button`
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  line-height: 1;
  transition: all 0.3s ease;
  
  &:hover {
    background: #000000;
    color: #ffffff;
    animation: ${bounce} 0.3s ease;
  }
`;

export const TagInputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 100px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 3px solid #000000;
`;

export const SaveButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const PreviewButton = styled.button`
  background: #333333;
  color: #ffffff;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #666666;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 0px #666666;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #666666;
  }
`;

export const DraftButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    background: #000000;
    color: #ffffff;
    transform: translateY(-5px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #333333;
  }
`;

export const CancelButton = styled(Link)`
  background: #666666;
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 3px solid #000000;
  border-radius: 15px;
  font-weight: 800;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #333333;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 0px #333333;
    animation: ${bounce} 0.5s ease;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0px #333333;
  }
`;