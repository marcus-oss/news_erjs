import type { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "../Components/input/input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: "e.g :Joe Doe",
  },
};

export const WithLABELAndPlaceHolder: Story = {
  args: {
    label: "Name",
    placeholder: "e.g :Joe Doe",
  },
};

export const WithLabelAndContet: Story = {
  args: {
    label: "Name",
    placeholder: "e.g :Joe Doe",
    value: "Jon Doe",
  },
};

export const WithContet: Story = {
  args: {
    value: "Jon Doe",
  },
};
