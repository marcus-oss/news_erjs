import { Meta, StoryObj } from "@storybook/react";
import InputTag from "../Components/TagInput/InputTag";

const meta = {
  title: "Example/InputTag",
  component: InputTag,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof InputTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Insira as tag desse post",
    tags: [{ id: "1", text: "JavaScript" }],
  },
};

export const VariousTag: Story = {
  args: {
    placeholder: "Insira as tag desse post",
    tags: [
      { id: "1", text: "JavaScript" },
      { id: "2", text: "Java" },
      { id: "3", text: "Ruby on Rails" },
      { id: "4", text: "Python" },
      { id: "5", text: "JavaScript" },
      { id: "6", text: "JavaScript" },
      { id: "7", text: "JavaScript" },
    ],
  },
};
