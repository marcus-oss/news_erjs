import { Meta, StoryObj } from "@storybook/react";
import Info, { InfoProps } from "../Components/Info/Info";

const meta = {
  title: "Info/Info",
  component: Info,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Post não encontrado",
    description:
      "Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.",
  },
};
