
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { DataTreeJSON } from "./sampleData";
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


class App extends React.Component { 
	
	constructor(props) {
		super(props);
		debugger;
		this.products = DataTreeJSON.elements[0].jsondata.elements;
		this.state = {
		  currentItem: { ...this.products},
		};
		this.loadDataGrid = this.loadDataGrid.bind(this);
	  }

	loadDataGrid = (treeItemData) => {	
		debugger;
		this.setState ({
			currentItem: { ...treeItemData },
		  });
	};

    getTreeItemsFromData = treeItems => {
	return treeItems.map(treeItemData => {
	  let children = undefined;
	  if (treeItemData.children && treeItemData.children.length > 0) {
		children = this.getTreeItemsFromData(treeItemData.children);
	  }
	  
	  return (
		<TreeItem
		  key={treeItemData.id}
		  nodeId={treeItemData.id}
		  children={children}
		  label={
			<div onClick={event => event.stopPropagation()}>
			 <div onClick={() => { this.loadDataGrid(treeItemData.jsondata.elements);}}
        >{treeItemData.label}</div>
			</div>
		  }
		/>
	  );
	});
  };
  
   
    DataTreeView = ({ treeItems }) => {
	return (
	  <TreeView
		defaultCollapseIcon={<ExpandMoreIcon />}
		defaultExpandIcon={<ChevronRightIcon />}
	  >
		{this.getTreeItemsFromData(treeItems)}
	  </TreeView>
	);
  };



	render (){
		const { currentItem } = this.state;
	return (
		<Box sx={{ height: 400, mt: 1 }}>

		<Grid container spacing={2}>
			<Grid item xs={8} md={4}>
			<this.DataTreeView treeItems={DataTreeJSON.elements	} />
			</Grid>
			<Grid item xs={8} md={8}>
			
          <div className="name">{currentItem.id}</div>
          <div className="price">{currentItem.name}</div>
		  <DataGrid
        rows={currentItem.rows}
        columns={currentItem.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
       
        
			</Grid>
		</Grid>
		</Box>	
	);
	} ;
}
  

export default App;  