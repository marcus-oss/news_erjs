import styled from "styled-components";

export interface NoDataProps {
  height?: number;
  onNoData: () => any;
  onCancel: () => any;
}

export default function NoData({ height = 120 }: NoDataProps) {
  return (
    <NoDataWrraper heigth={height}>
      <Message>Sem dados para exibir</Message>
      <SadFace>:(</SadFace>
    </NoDataWrraper>
  );
}

const NoDataWrraper = styled.div<{ heigth: number }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(p) => p.heigth}px;
`;

const Message = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #174060;
`;

const SadFace = styled.span`
  font-family: "Roboto-Mono", "monospace";
  color: #0099ff;
  font-weight: 700;
`;
