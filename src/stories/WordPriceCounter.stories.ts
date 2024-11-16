import { Meta, StoryObj } from "@storybook/react";
import WordPriceCounter from "../Components/WordPriceCounter/WordPriceCounter";

const meta = {
  title: "Example/WordPriceCounter ",
  component: WordPriceCounter,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof WordPriceCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pricePerWord: 0.25,
    wordsCount: 20,
  },
};
