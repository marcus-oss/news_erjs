import { Meta, StoryObj } from "@storybook/react";
import ErrorDisplay, { ErrorDisplayProps } from "../Components/ErrorDisplay";

const meta = {
  title: "Example/ErrorDisplay",
  component: ErrorDisplay,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ErrorDisplay>;

const Template: StoryObj<ErrorDisplayProps> = (args) => (
  <div>
    <ErrorDisplay {...args} />
  </div>
);

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Houve um erro'
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor'
}

export const Small = Template.bind({})
Small.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor',
  small: true
}
