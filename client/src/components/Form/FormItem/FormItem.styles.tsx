import styled from '@emotion/styled';
import { flexCenter } from '@src/styles/shared';

export const Handle = styled.div`
  height: 1.5rem;
  width: 100%;
  background: rgb(228, 143, 143);
  margin-bottom: 0.5rem;
`;

export const FlexColumn = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export const FlexRow = styled.div`
  width: 100%;
  ${flexCenter};
`;

export const QuestionInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  width: 400px;
  border-bottom: 2px solid black;
  transition: 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.02);
  &:focus {
    background-color: rgba(0, 0, 0, 0.06);
  }
  margin-right: 1rem;
`;

export const Container = styled.div<{
  isDragging: boolean;
}>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  min-height: 100px;
  text-align: center;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;
