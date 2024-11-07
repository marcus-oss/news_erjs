import { Meta, StoryObj } from "@storybook/react";
import Comfirm, { ComfirmProps } from "../Components/Comfirm/Comfirm";

const meta = {
  title: "Example/Comfirm",
  component: Comfirm,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    onConfirm: { action: "confirm" },
    onCancel: { action: "cancel" },
  },
} satisfies Meta<typeof Comfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Você tem certeza?",
  },
};
