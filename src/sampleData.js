import { v4 as uuid } from 'uuid';
export const DataTreeJSON =
{
    type: "dataTree",
    properties: {
        expanded: "Y/N" //Y - if the tree should render with all nodes expanded. N(default)- to render with all nodes collapsed.
    },
    elements: [//Data of the tree nodes. This sample shows three nodes. Add as many as required.
        {
            label: "Table Data",
            id: uuid(),
            type: "table",
            image: "none",// Should be from a predefined set of images.
            jsondata:
              {
                  type: "table",
                  properties: {
                      header: "My New Table",
                      keyName: "id",
                      pageSizeOptions: [ // Pagination options to be applied for the table. All will be shown by default. Pagination will be hidden if this key is missing or empty.
                          20,
                          40,
                          60
                      ],
                      defaultPageSize: "20" //Will be ignored if pageSizeOptions is not provided. Pagesize will default to All if this key is missing or empty.
                  },
                  elements:{
                    columns:[
                    { field: 'id', headerName: 'ID', width: 90 },
                    {
                      field: 'firstName',
                      headerName: 'First name',
                      width: 150,
                      editable: true,
                    },
                    {
                      field: 'lastName',
                      headerName: 'Last name',
                      width: 150,
                      editable: true,
                    },
                    {
                      field: 'age',
                      headerName: 'Age',
                      type: 'number',
                      width: 110,
                      editable: true,
                    },
                    {
                      field: 'fullName',
                      headerName: 'Full name',
                      description: 'This column has a value getter and is not sortable.',
                      sortable: false,
                      width: 160,
                    },
                  ], rows: [
                    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
                    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
                    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
                    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
                    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
                    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
                    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
                    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
                    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
                  ]
                }
              },
            children: [ {
              label: "Form",
              id: uuid(),
              type: "form",
              image: "none",// Should be from a predefined set of images.
              jsondata:{// First element to render within the Accordion.
                type: "form",
                properties: {
                    columns: 3 // Maximum No. of columns to layout the form feilds into.
                },
                elements: [
                    {
                        label: "Label of the feild",
                        value: "Value of the feild",
                        type: "OutputText", // This will be OutputText for all the forms. Unless we come across a different form feild.
                        required: "Y/N" //Y - if required indicator is to be shown. Omit this key or pass N if not a required feild.
                    },
                    {
                        label: "Label of the feild",
                        value: "Value of the feild",
                        type: "OutputText", // This will be OutputText for all the forms. Unless we come across a different form feild.
                        required: "Y/N" //Y - if required indicator is to be shown. Omit this key or pass N if not a required feild.
                    },
                    {
                        label: "Label of the feild",
                        value: "Value of the feild",
                        type: "OutputText", // This will be OutputText for all the forms. Unless we come across a different form feild.
                        required: "Y/N" //Y - if required indicator is to be shown. Omit this key or pass N if not a required feild.
                    }
                ]
            }
              },
              
              {label: "Table Data 1",
              id: uuid(),
              type: "table",
              image: "none",// Should be from a predefined set of images.
              jsondata:{
                type: "table",
                properties: {
                    header: "My New Table",
                    keyName: "id",
                    pageSizeOptions: [ // Pagination options to be applied for the table. All will be shown by default. Pagination will be hidden if this key is missing or empty.
                        20,
                        40,
                        60
                    ],
                    defaultPageSize: "20" //Will be ignored if pageSizeOptions is not provided. Pagesize will default to All if this key is missing or empty.
                },
                elements:{
                  columns:[
                  { field: 'id', headerName: 'ID', width: 90 },
                  {
                    field: 'firstName',
                    headerName: 'First name',
                    width: 150,
                    editable: true,
                  },
                  {
                    field: 'lastName',
                    headerName: 'Last name',
                    width: 150,
                    editable: true,
                  },
                  {
                    field: 'age',
                    headerName: 'Age',
                    type: 'number',
                    width: 110,
                    editable: true,
                  },
                  {
                    field: 'fullName',
                    headerName: 'Full name',
                    description: 'This column has a value getter and is not sortable.',
                    sortable: false,
                    width: 160,
                  },
                ], rows: [
                  { id: 1, lastName: 'Dsouza', firstName: 'Steven', age: 35 },
                  { id: 2, lastName: 'Dasari', firstName: 'Sudhakar', age: 42 },
                  { id: 3, lastName: 'Krishna', firstName: 'Rama', age: 45 },
                  { id: 4, lastName: 'Stark', firstName: 'Santhosha', age: 16 },
                ]
              }
            }
          }
          ]
        },
        {
            label: "Check 1",
            id: "Identifier for this node.",
            type: "form",
            image: "Image name to show for this node",// Should be from a predefined set of images.
            parentId: "Id of the parent for this node. Omit this key for root nodes."
        },
        {
            label: "Check 2",
            id: "Identifier for this node.",
            type: "type of the page",
            image: "Image name to show for this node",// Should be from a predefined set of images.
            parentId: "Id of the parent for this node. Omit this key for root nodes."
        }
    ]
};

export const seasons = [
  {
    id: uuid(),
    name: "Seasons",
    children: [
      {
        id: uuid(),
        name: "Summer",
        children: [
          {
            id: uuid(),
            name: "June",
            type: "table",
            rows: [{ id: 1, lastName: 'Snow' },
            { id: 2, lastName: 'Lannister' }]
          },
          {
            id: uuid(),
            name: "July"
          },
          {
            id: uuid(),
            name: "August"
          }
        ]
      },
      {
        id: uuid(),
        name: "Fall",
        children: [
          {
            id: uuid(),
            name: "September"
          },
          {
            id: uuid(),
            name: "October"
          },
          {
            id: uuid(),
            name: "November"
          }
        ]
      },
      {
        id: uuid(),
        name: "Winter",
        children: [
          {
            id: uuid(),
            name: "December"
          },
          {
            id: uuid(),
            name: "January"
          },
          {
            id: uuid(),
            name: "February"
          }
        ]
      },
      {
        id: uuid(),
        name: "Spring",
        children: [
          {
            id: uuid(),
            name: "March"
          },
          {
            id: uuid(),
            name: "April"
          },
          {
            id: uuid(),
            name: "May"
          }
        ]
      }
    ]
  }
];



