import { Meta, StoryObj } from "@storybook/react";
import CircleChart, {
  CircleChartProps,
} from "../Components/CircleChart/CircleChart";

const meta = {
  title: "Example/CircleChart",
  component: CircleChart,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
      },
    },
  },
} satisfies Meta<typeof CircleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 80,
    size: 150,
  },
};
