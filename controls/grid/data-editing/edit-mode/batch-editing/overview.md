---
title: Overview
page_title: Batch Editing Overview | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Overview
slug: grid/data-editing/edit-mode/batch-editing/overview
previous_url: /controls/grid/data-editing/edit-mode/batch-editing
tags: batch,editing,overview
published: True
position: 0
---

# Batch Editing Overview



**Batch Editing** functionality of **RadGrid** enables inline client-side editing and performing multiple changes before the user decides to either apply the changes or cancel them. The feature is well integrated with existing **RadGrid** functionalities like automatic data source operations, hierarchy, selection, validation, template columns and event handling. 

The feature could be easily enabled by setting the **GridTableView.EditMode** property to **Batch**. Additional properties for configuring the behavior of the functionality can be found in the **GridTableView.BatchEditingSettings** collection.

````ASP.NET
<telerik:RadGrid runat="server" ID="RadGrid1">

	<MasterTableView CommandItemDisplay="Top" DataKeyNames="ID" EditMode="Batch">
	   <BatchEditingSettings />
       
       <Columns>
	       . . .
        </Columns>
	</MasterTableView>
</telerik:RadGrid>
````



# See Also

 * [Configuration]({%slug grid/data-editing/edit-mode/batch-editing/configuration%})


