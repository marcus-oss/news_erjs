import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "../Components/Button/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const danger: Story = {
  args: {
    variant: "danger",
    label: "Button",
  },
};

export const text: Story = {
  args: {
    variant: "text",
    label: "Button",
  },
};
