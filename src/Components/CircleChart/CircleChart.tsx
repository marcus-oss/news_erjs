import { useEffect, useState } from "react";
import * as CC from "./CircleChart.styles";

export interface CircleChartsProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokedWidth?: number;
}

function CircleChart(props: CircleChartsProps) {
  // função que recupera as cores do chart em base do tema
  const getThemeColor = () => (props.theme === "primary" ? "#09f" : "#274060");
  //setup configuração de cor
  const THEME = getThemeColor();
  const STROKE_WIDTH = props.strokedWidth || 8;
  const STROKE_COLOR = props.strokedWidth || 8;

  //parte matematica
  const CENTER = props.size / 2;
  const RADIUS = props.size / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  //estado offset
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  //obsevardor para o offset
  useEffect(() => {
    const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE;
    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, props.progress, offset]);

  return (
    <CC.Wrapper>
      <CC.SvgWrapper style={{ width: props.size, height: props.size }}>
        <CC.Svg width={props.size} height={props.size}>
          <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIUS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage>{props.progress}%</CC.Percentage>
      </CC.SvgWrapper>
      {props.caption && <CC.Caption>{props.caption}</CC.Caption>}
    </CC.Wrapper>
  );
}

export default CircleChart;
