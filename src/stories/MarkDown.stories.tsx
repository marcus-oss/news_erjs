import { Meta, StoryObj } from "@storybook/react";
import MarkDown, {
  MarkdownEditorProps,
} from "../Components/MarkdownEditor/MarkdownEditor";
import MarkdownEditor from "../Components/MarkdownEditor/MarkdownEditor";

const meta = {
  title: "Example/MarkDown",
  component: MarkDown,
} satisfies Meta<typeof MarkDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story<MarkdownEditorProps> = (args) => (
  <MarkdownEditor {...args} />
);

export const Default = Template.bind({});
Default.args = {};
