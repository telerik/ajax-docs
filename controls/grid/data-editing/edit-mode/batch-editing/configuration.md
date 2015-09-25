---
title: Batch Editing Configuration
page_title: Batch Editing Configuration | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Configuration
slug: grid/data-editing/edit-mode/batch-editing/configuration
tags: batch,editing,configuration
published: True
position: 1
---

# Batch Editing Configuration


The properties listed below enable you to configure the settings for batch editing.

* **GridTableView.BatchEditingSettings.EditType** – determines if the editing will be performed for the whole row or individually for each cell (the default value)


````ASP.NET
<MasterTableView EditMode="Batch">
    <BatchEditingSettings EditType="Cell" />
</MasterTableView>
````


* **GridTableView.BatchEditingSettings.SaveAllHierarchyLevels** – determines if the **SaveChanges** button will save the changes for the current **GridTableView** only or for all **GridTableViews** in **RadGrid**. When set to true the **saveAllChanges** method will be called instead of **saveChanges**"


````ASP.NET
<MasterTableView EditMode="Batch">
    <BatchEditingSettings SaveAllHierarchyLevels="true" />
</MasterTableView>
````


* **GridtableView.BatchEditingSettings.OpenEditingEvent** – string value determining the event which will cause the cell/row to open for edit. The default value is “click”. Examples for event values – “dblclick”, “click”, “mousedown”, “mouseup”, “mouseover”.


````ASP.NET
<MasterTableView EditMode="Batch">
    <BatchEditingSettings OpenEditingEvent="DblClick" />
</MasterTableView>
````


* **GridtableView.BatchEditingSettings.HighlightDeletedRows** - this setting provides visual feedback of the rows that are about to be deleted. An overlay is displayed above the row. It enables the user to undo the change.


````ASP.NET
<MasterTableView EditMode="Batch">
    <BatchEditingSettings HighlightDeletedRows="true" />
</MasterTableView>
````


* **GridTableView.CommandItemSettings.ShowSaveChangesButton** – determines if a **SaveChanges** button will be created in the **GridCommandItem**


````ASP.NET
<MasterTableView EditMode="Batch">
	<CommandItemSettings ShowSaveChangesButton="true" />
</MasterTableView>
````


* **GridTableView.CommandItemSettings.ShowCancelChangesButton** – determines if a **CancelChanges** button will be created in the **GridCommandItem**


````ASP.NET
<MasterTableView EditMode="Batch">
	<CommandItemSettings ShowCancelChangesButton="true" />
</MasterTableView>
````


* **GridTableView.CommandItemSettings.SaveChangesText** – gets or sets the **SaveChanges** button's text value


````ASP.NET
<MasterTableView EditMode="Batch">
	<CommandItemSettings SaveChangesText="Custom Save Changes Text" />
</MasterTableView>
````


* **GridTableView.CommandItemSettings.CancelChangesText** – gets or sets the **CancelChanges** button's text value

````ASP.NET
<MasterTableView EditMode="Batch">
	<CommandItemSettings CancelChangesText="Custom Cancel Changes Text" />
</MasterTableView>
````




>caution When setting the **EditMode** to **Batch** multi-row editing is not supported as only one editor is initialized for a given column (for performance purposes).
>


