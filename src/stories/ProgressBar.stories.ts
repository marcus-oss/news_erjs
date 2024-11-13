import { Meta, StoryObj } from "@storybook/react";
import ProgressBar, {
  ProgressBarProps,
} from "../Components/ProgressBar/ProgressBar";

const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Você tem certeza?",
    progress: 50,
    theme: "primary",
    width: 375,
  },
};

export const Complete: Story = {
  args: {
    title: "Você tem certeza?",
    progress: 100,
    theme: "primary",
    width: 375,
  },
};

export const ZeroProgress: Story = {
  args: {
    title: "Você tem certeza?",
    progress: 0,
    theme: "secondary",
    width: 375,
  },
};

export const PrograssInHallOffText: Story = {
  args: {
    title: "Você tem certeza?",
    progress: 0,
    theme: "secondary",
    width: 375,
  },
};
