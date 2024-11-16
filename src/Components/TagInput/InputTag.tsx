import * as TI from "./InputTag.styles";
import { WithContext as ReactTagInput, Tag } from "react-tag-input";

export interface TagInputProps {
  onAdd: (Tag: Tag) => any;
  onDelete: (i: number) => any;
  placeholder: string;
  tags: Tag[];
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9,
};

function TagInput(props: TagInputProps) {
  return (
    <TI.Wrraper>
      <ReactTagInput
        placeholder={props.placeholder}
        handleAddition={props.onAdd}
        handleDelete={props.onDelete}
        allowDragDrop={false}
        autofocus={false}
        tags={props.tags}
        delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
      />
    </TI.Wrraper>
  );
}

export default TagInput;
