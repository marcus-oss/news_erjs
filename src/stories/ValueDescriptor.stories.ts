import { Meta, StoryObj } from "@storybook/react";
import ValueDescriptor, {
  ValueDescriptorProps,
} from "../Components/ValueDescriptor/ValueDescriptor";

const meta = {
  title: "Example/ValueDescriptor",
  component: ValueDescriptor,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof ValueDescriptor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
  },
};

export const Primary: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
  },
};

export const PrimaryCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
  },
};

export const DefaultCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
  },
};
