import { Meta, StoryObj } from "@storybook/react";
import Profile, { ProfileProps } from "../Components/Profile/Profile";

const meta = {
  title: "Example/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Usuario Aleatorio",
    description: "programador web junior há 3 anos ",
  },
};
