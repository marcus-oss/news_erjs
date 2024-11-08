import { Meta, StoryObj } from "@storybook/react";
import NoData, { NoDataProps } from "../Components/NoData/NoData";

const meta = {
  title: "Example/NoData",
  component: NoData,
  argTypes: {
    onNoData: { action: "confirm" },
    onCancel: { action: "cancel" },
  },
} satisfies Meta<typeof NoData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 240,
  },
};

export const FixedHeigt: Story = {
  args: {
    height: 240,
  },
};
