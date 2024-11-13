import * as CC from "./CircleChart.styles";

export interface CircleChartsProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  stokedWidth?: number;
}

function CircleChart(props: CircleChartsProps) {
  return <CC.Wrapper>todo:circle</CC.Wrapper>;
}

export default CircleChart;
