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

type Post = {
  id: number;
  title: string;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  conversions: {
    thousands: number;
    percentage: number;
  };
};

export function Default() {
  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: "Autor aleatorio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
      {
        author: {
          name: "Autor aleatorio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "React.js vs. React Native: a REAL diferença entre os dois",
        views: 985415,
      },
      {
        author: {
          name: "Autor aleatorio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
    ],
    []
  );

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: "",
        accessor: "id",
        Cell: () => <Icon path={mdiOpenInNew} size={"14px"} color={"#09f"} />,
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Artigo</div>,
        accessor: "title",
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.author.avatar}
              alt={props.row.original.author.name}
            />
            {props.value}
          </div>
        ),
      },

      {
        Header: () => <div style={{ textAlign: "right" }}>Views</div>,
        accessor: "views",
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontWeight: 700,
              fontFamily: "Roboto Mono , monospace",
            }}
          >
            {props.value.toLocaleString("pt-br")}
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Conversôes</div>,
        accessor: "conversions",
        Cell: (props) => (
          <div
            style={{
              display: "flex",
              gap: 8,
              fontWeight: 700,
              fontFamily: "Roboto Mono , monospace",
            }}
          >
            <span>{props.value.thousands}k</span>
            <span style={{ color: "#09f" }}>{props.value.percentage}%</span>
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        Header: () => <div style={{ textAlign: "right" }}>Ações</div>,
        Cell: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            todo:actions
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post>({ data, columns });
  return <Table instance={instance} />;
}

export function WithoutData() {
  const data = useMemo<Post[]>(() => [], []);

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: "",
        accessor: "id",
        Cell: () => <Icon path={mdiOpenInNew} size={"14px"} color={"#09f"} />,
      },
      {
        Header: "Artigo",
        accessor: "title",
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.author.avatar}
              alt={props.row.original.author.name}
            />
            {props.value}
          </div>
        ),
      },
      {
        Header: "Views",
        accessor: "views",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontWeight: 700,
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {props.value.toLocaleString("pt-br")}
          </div>
        ),
      },
      {
        Header: "Conversões",
        accessor: "conversions",
        Cell: (props) => (
          <div
            style={{
              display: "flex",
              gap: 8,
              fontWeight: 700,
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            <span>{props.value.thousands}k</span>
            <span style={{ color: "#09f" }}>{props.value.percentage}%</span>
          </div>
        ),
      },
      {
        Header: "Ações",
        Cell: () => <div style={{ textAlign: "right" }}>todo: actions</div>,
      },
    ],
    []
  );

  const insntace = useTable<Post>({ data, columns });

  return <Table<Post> instance={insntace} />;
}
