import { Meta, StoryObj } from "@storybook/react";
import ImageUpload, {
  ImageUploadProps,
} from "../Components/ImageUpload/ImageUpload";

const meta = {
  title: "Example/ImageUpload",
  component: ImageUpload,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Thumbnaill do post",
  },
};
