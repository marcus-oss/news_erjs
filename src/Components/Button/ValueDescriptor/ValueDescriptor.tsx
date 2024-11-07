import * as VD from "./ValueDescriptor.styles";

export interface ValueDescriptorProps {
  isCurrency?: boolean;
  description: string;
  color: "primary" | "default";
  value: number;
}

export default function ValueDescriptor(props: ValueDescriptorProps) {
  const COLORS = {
    primary: "#0099ff",
    default: "#274060",
  };

  return (
    <VD.Wrraper color={COLORS[props.color || "defaultF"]}>
      <span className="Description">{props.description}</span>
      <div>
        {props.isCurrency && <span className="Currency">{"R$"}</span>}
        <span className="Value">{props.value.toLocaleString("pt-br")}</span>
      </div>
    </VD.Wrraper>
  );
}
