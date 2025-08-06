import styled from "styled-components";

export const AdminLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const AdminMainContent = styled.main`
  flex: 1;
  min-height: 100vh;
  padding-right: 0;
  transition: padding-right 0.3s ease;
  
  /* Responsive: trên desktop có space cho sidebar */
  @media (min-width: 768px) {
    padding-right: 60px; /* Space cho toggle button */
  }
`;