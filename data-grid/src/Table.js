import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const initialRows = [
  {
    id: 1,
    name: "Damien",
    age: 25,
    isAdmin: true,
    country: "Spain",
    discount: "",
  },
  {
    id: 2,
    name: "Nicolas",
    age: 36,
    isAdmin: false,
    country: "France",
    discount: "",
  },
  {
    id: 3,
    name: "Kate",
    age: 19,
    isAdmin: false,
    country: "Brazil",
    discount: "junior",
  },
];

const Table = (props) => {
  const [rows, setRows] = React.useState(initialRows);

  const deleteUser = React.useCallback(
    (id) => () => {
      console.log(id);
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const toggleAdmin = React.useCallback(
    (id) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row
        )
      );
    },
    []
  );

  const duplicateUser = React.useCallback(
    (id) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id);
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    []
  );

  const columns = React.useMemo(
    () => [
      { field: "name", type: "string" },
      { field: "age", type: "number" },
      { field: "isAdmin", type: "boolean", width: 120 },
      {
        field: "country",
        editable: true,
        type: "singleSelect",
        width: 120,
        valueOptions: [
          "Bulgaria",
          "Netherlands",
          "France",
          "United Kingdom",
          "Spain",
          "Brazil",
        ],
      },
      {
        field: "discount",
        type: "singleSelect",
        width: 120,
        editable: true,
        valueOptions: ({ row }) => {
          console.log(row);
          if (row === undefined) {
            return ["EU-resident", "junior"];
          }
          const options = [];
          if (!["United Kingdom", "Brazil"].includes(row.country)) {
            options.push("EU-resident");
          }
          if (row.age < 27) {
            options.push("junior");
          }
          return options;
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser]
  );

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} components={{
          Toolbar: GridToolbar,
        }} disableColumnSelector={true}
            // disableColumnFilter={true}
            disableDensitySelector={true}
            disableColumnMenu={true}
            />
    </div>
  );
};

export default Table;
