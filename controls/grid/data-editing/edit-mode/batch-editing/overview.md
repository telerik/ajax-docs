---
title: Overview
page_title: Batch Editing Overview | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Overview
slug: grid/data-editing/edit-mode/batch-editing/overview
previous_url: controls/grid/data-editing/edit-mode/batch-editing
tags: batch,editing,overview
published: True
position: 0
---

# Batch Editing Overview



**Batch Editing** functionality of **RadGrid** enables inline client-side editing and performing multiple changes before the user decides to either apply the changes or cancel them. The feature is well integrated with existing **RadGrid** functionalities like automatic data source operations, hierarchy, selection, validation, template columns and event handling. 

The feature could be easily enabled by setting the **GridTableView.EditMode** property to **Batch**. Additional properties for configuring the behavior of the functionality can be found in the **GridTableView.BatchEditingSettings** collection. You can find more details and examples in the [Configuration]({%slug grid/data-editing/edit-mode/batch-editing/configuration%}) article.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1">

	<MasterTableView CommandItemDisplay="Top" DataKeyNames="ID" EditMode="Batch">
	   <BatchEditingSettings />
       
       <Columns>
	       . . .
        </Columns>
	</MasterTableView>
</telerik:RadGrid>
````

If you want to implement your own CRUD operations instead of using declarative data sources, see the [Batch Editing Server-side API]({%slug grid/data-editing/edit-mode/batch-editing/server-side-api%}) article. It also shows how to access and modify the column editor properties on the server.

>note Once a postback to the server has been initiated, the user input cannot be restored in the browser. This can result in loss of data. To minimize this, use [client-side validation]({%slug grid/data-editing/edit-mode/batch-editing/validation%}) and cancel the [OnUserAction]({%slug grid/client-side-programming/events/onuseraction%}) or [OnCommand]({%slug grid/client-side-programming/events/oncommand%}) event in case [the batch editing manager `hasChanges()` on the client]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%}).

Custom logic with the batch edit mode is usually written in JavaScript, however, and to this end you can use:

* The [Batch Edit Manager API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%}) that lets you get/set cell values and open/close cells.

* The [OnBatchEditOpened]({%slug grid/client-side-programming/events/onbatcheditopened%}) event that lets you modify cell values and controls insides based on other conditions and cell values.

* The [OnBatchEditOpening]({%slug grid/client-side-programming/events/onbatcheditopening%}) event that lets you prevent cells from being opened based on conditions, must like in the OnBatchEditOpened event.

* [OnBatchEditCellValueChanging]({%slug grid/client-side-programming/events/onbatcheditcellvaluechanging%}) and [OnBatchEditCellValueChanged]({%slug grid/client-side-programming/events/onbatcheditcellvaluechanged%}) to get notified of and/or cancel changes to cell values.

* [OnBatchEditClosing]({%slug grid/client-side-programming/events/onbatcheditclosing%}) and [OnBatchEditClosed]({%slug grid/client-side-programming/events/onbatcheditclosed%}) to get notified and prevent cells from closing.

* Other events showcased in the [Working with templates]({%slug grid/data-editing/edit-mode/batch-editing/working-with-templates%}) article that you can use for complex templates, objects and logic.

	>important  Keep in mind that such custom logic must be entirely client-side and that the built-in batch editing cannot guarantee it will not cause errors. A few example of scenarios that are not supported are load-on-demand, complex control hierarchy (e.g., having several controls in the template), or any server operations.

## See Also

 * [Configuration]({%slug grid/data-editing/edit-mode/batch-editing/configuration%})


