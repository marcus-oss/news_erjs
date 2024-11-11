import { Meta, StoryObj } from "@storybook/react";
import Chart, { ChartProps } from "../Components/Chart/chart";

const meta = {
  title: "Example/Chart",
  component: Chart,

  tags: ["autodocs"],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
