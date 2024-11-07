import { Meta, StoryObj } from "@storybook/react";
import Heading, { HeadingProps } from "../Components/typography/Heading";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: "heading 1",
  },
};

export const Heading2: Story = {
  args: {
    level: 1,
    children: "heading 2",
  },
};

export const Heading3: Story = {
  args: {
    level: 1,
    children: "heading 3",
  },
};
