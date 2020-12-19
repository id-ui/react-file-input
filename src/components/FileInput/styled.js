import styled from 'styled-components';

export const UploadArea = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #b4b4b4;
  color: #343434;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;

export const Input = styled.input.attrs({
  type: 'file',
})`
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  cursor: pointer;
`;
