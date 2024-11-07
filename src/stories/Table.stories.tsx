import { Meta } from "@storybook/react";
import Table from "../Components/Table/Table";
import { useMemo } from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { Column, useTable } from "react-table";

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // argTypes: {
  //  backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Table>;

export default meta;

type Data = {
  col1: string;
  col2: string;
  actions: string;
  preview: React.ReactNode;
};



export function Default() {
  const data = useMemo<Data[]>(
    () => [
      {
        col1: "Hello",
        col2: "World",
        actions: "ações",
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
      },
      {
        col1: "react-table",
        col2: "rocks",
        actions: "ações",
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
      },
      {
        col1: "whatever",
        col2: "you want",
        actions: "ações",
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
      },
    ],
    []
  );

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "",
        accessor: "preview",
      },
      {
        Header: "Column 2",
        accessor: "col2",
        width: 320,
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
      },

      {
        Header: "Ações",
        accessor: "actions",
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
    ],
    []
  );

  const instance = useTable<Data>({ data, columns });
  return <Table instance={instance} />;
}



export function noData() {
    const data = useMemo<Data[]>(
      () => [],
      []
    );
  
    const columns = useMemo<Column<Data>[]>(
      () => [
        {
          Header: "",
          accessor: "preview",
        },
        {
          Header: "Column 2",
          accessor: "col2",
          width: 320,
          Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
        },
  
        {
          Header: "Ações",
          accessor: "actions",
          Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
        },
      ],
      []
    );
  
    const instance = useTable<Data>({ data, columns });
    return <Table instance={instance} />;
  }
  