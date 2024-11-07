import { Meta, StoryObj } from "@storybook/react";
import FieldDescriptor, {
  FieldDescriptorProps,
} from "../Components/FieldDescriptor/FieldDescriptor";

const meta = {
  title: "Descriptor/FieldDescriptor",
  component: FieldDescriptor,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof FieldDescriptor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    field: "Data de nascimento",
    value: "26 de Dezembro de 1997 (22 anos)",
  },
};
