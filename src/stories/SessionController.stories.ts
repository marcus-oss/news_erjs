import { Meta, StoryObj } from "@storybook/react";
import SessionController, {
  SessionControllerProps,
} from "../Components/SessionController/SessionController";

const meta = {
  title: "Example/SessionController",
  component: SessionController,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    onLogout: { action: "logout" },
  },
} satisfies Meta<typeof SessionController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Usuario Aleatorio",
    description: "Programador web junior há 3 anos",
  },
};
