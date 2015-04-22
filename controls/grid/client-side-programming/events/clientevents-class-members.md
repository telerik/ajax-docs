---
title: ClientEvents Class Members
page_title: ClientEvents Class Members | RadGrid for ASP.NET AJAX Documentation
description: ClientEvents Class Members
slug: grid/client-side-programming/events/clientevents-class-members
tags: clientevents,class,members
published: True
position: 0
---

# ClientEvents Class Members



## 

There are two ways to attach handler to a client-side event of RadGrid:

* attach command string to event

````ASPNET
	    <ClientEvents OnGridCreating="alert('Creating RadGrid')">
````



* attach function to event:

````JavaScript
		<ClientEvents OnGridCreating = "GridCreating">
	    <script type="text/javascript">
	        function GridCreating(sender, eventArgs){
	            alert("Creating grid with ClientID: " + sender.get_id());
	        }
	    </script>		
````



You can also attach handlers dynamically with the following code:

````JavaScript
	grid.add_eventName(eventHandler);          
	 
	function eventHandler(sender, args) {
	   //...
	}	
````



Here *eventName* is formed from the names in the table below by removing *On* and starting with a small letter. For example, attaching an event handler for *OnRowContextMenu* will look in the following way:

````JavaScript
	grid.add_rowContextMenu(eventHandler);          
````



>note Please note that the grid and its structure should be created when the event handlers are attached. That is why you cannot attach handlers for the **OnXXXCreating** and **OnXXXCreated** events dynamically.
>


Inside each RadGrid client-side event handler the first argument passed (*sender*) will point to the grid client object. The second argument (*eventArgs*) will hold reference properties/objects dependable on the respective client event. They are listed in the separate help topics linked in the next paragraph.


|  **[OnActiveRowChanging]({%slug grid/client-side-programming/events/events/onactiverowchanging%})**  |  **String**  |
| ------ | ------ |
| **[OnActiveRowChanged]({%slug grid/client-side-programming/events/events/onactiverowchanged%})** | **String** |
| **[OnCellDeselecting]({%slug grid/client-side-programming/events/events/oncelldeselecting%})** | **String** |
| **[OnCellDeselected]({%slug grid/client-side-programming/events/events/oncelldeselected%})** | **String** |
| **[OnCellSelecting]({%slug grid/client-side-programming/events/events/oncellselecting%})** | **String** |
| **[OnCellSelected]({%slug grid/client-side-programming/events/events/oncellselected%})** | **String** |
| **[OnColumnClick]({%slug grid/client-side-programming/events/events/oncolumnclick%})** | **String** |
| **[OnColumnContextMenu]({%slug grid/client-side-programming/events/events/oncolumncontextmenu%})** | **String** |
| **[OnColumnCreating]({%slug grid/client-side-programming/events/events/oncolumncreating%})** | **String** |
| **[OnColumnCreated]({%slug grid/client-side-programming/events/events/oncolumncreated%})** | **String** |
| **[OnColumnDblClick]({%slug grid/client-side-programming/events/events/oncolumndblclick%})** | **String** |
| **[OnColumnDestroying]({%slug grid/client-side-programming/events/events/oncolumndestroying%})** | **String** |
| **[OnColumnHiding]({%slug grid/client-side-programming/events/events/oncolumnhiding%})** | **String** |
| **[OnColumnHidden]({%slug grid/client-side-programming/events/events/oncolumnhidden%})** | **String** |
| **[OnColumnMouseOut]({%slug grid/client-side-programming/events/events/oncolumnmouseout%})** | **String** |
| **[OnColumnMouseOver]({%slug grid/client-side-programming/events/events/oncolumnmouseover%})** | **String** |
| **[OnColumnMovingToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovingtoleft%})** | **String** |
| **[OnColumnMovedToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovedtoleft%})** | **String** |
| **[OnColumnMovingToRight]({%slug grid/client-side-programming/events/events/oncolumnmovingtoright%})** | **String** |
| **[OnColumnMovedToRight]({%slug grid/client-side-programming/events/events/oncolumnmovedtoright%})** | **String** |
| **[OnColumnResizing]({%slug grid/client-side-programming/events/events/oncolumnresizing%})** | **String** |
| **[OnColumnResized]({%slug grid/client-side-programming/events/events/oncolumnresized%})** | **String** |
| **[OnColumnShowing]({%slug grid/client-side-programming/events/events/oncolumnshowing%})** | **String** |
| **[OnColumnShown]({%slug grid/client-side-programming/events/events/oncolumnshown%})** | **String** |
| **[OnColumnSwapping]({%slug grid/client-side-programming/events/events/oncolumnswapping%})** | **String** |
| **[OnColumnSwapped]({%slug grid/client-side-programming/events/events/oncolumnswapped%})** | **String** |
| **[OnCommand]({%slug grid/client-side-programming/events/events/oncommand%})** | **String** |
| **[OnDataBinding]({%slug grid/client-side-programming/events/events/ondatabinding%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataBindingFailed]({%slug grid/client-side-programming/events/events/ondatabindingfailed%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataBound]({%slug grid/client-side-programming/events/events/ondatabound%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataSourceResolved]({%slug grid/client-side-programming/events/events/ondatasourceresolved%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnFilterMenuShowing]({%slug grid/client-side-programming/events/events/onfiltermenushowing%})** | **String** |
| **[OnGridCreating]({%slug grid/client-side-programming/events/events/ongridcreating%})** | **String** |
| **[OnGridCreated]({%slug grid/client-side-programming/events/events/ongridcreated%})** | **String** |
| **[OnGridDestroying]({%slug grid/client-side-programming/events/events/ongriddestroying%})** | **String** |
| **[OnGroupCollapsing]({%slug grid/client-side-programming/events/events/ongroupcollapsing%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupCollapsed]({%slug grid/client-side-programming/events/events/ongroupcollapsed%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupExpanding]({%slug grid/client-side-programming/events/events/ongroupexpanding%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupExpanded]({%slug grid/client-side-programming/events/events/ongroupexpanded%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnHeaderMenuShowing]({%slug grid/client-side-programming/events/events/onheadermenushowing%})** | **String** |
| **[OnHierarchyCollapsing]({%slug grid/client-side-programming/events/events/onhierarchycollapsing%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyCollapsed]({%slug grid/client-side-programming/events/events/onhierarchycollapsed%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyExpanding]({%slug grid/client-side-programming/events/events/onhierarchyexpanding%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyExpanded]({%slug grid/client-side-programming/events/events/onhierarchyexpanded%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| ** **[OnKeyPress]({%slug grid/client-side-programming/events/events/onkeypress%})** ** | **String** |
| **[OnMasterTableViewCreating]({%slug grid/client-side-programming/events/events/onmastertableviewcreating%})** | **String** |
| **[OnMasterTableViewCreated]({%slug grid/client-side-programming/events/events/onmastertableviewcreated%})** | **String** |
|[OnPopUpShowing]({%slug grid/client-side-programming/events/events/onpopupshowing%})| **String** |
| **[OnRowClick]({%slug grid/client-side-programming/events/events/onrowclick%})** | **String** |
| **[OnRowContextMenu]({%slug grid/client-side-programming/events/events/onrowcontextmenu%})** | **String** |
| **[OnRowCreating]({%slug grid/client-side-programming/events/events/onrowcreating%})** | **String** |
| **[OnRowCreated]({%slug grid/client-side-programming/events/events/onrowcreated%})** | **String** |
|[OnRowDataBound]({%slug grid/client-side-programming/events/events/onrowdatabound%})| **String** |
| **[OnRowDblClick]({%slug grid/client-side-programming/events/events/onrowdblclick%})** | **String** |
| **[OnRowDeleting]({%slug grid/client-side-programming/events/events/onrowdeleting%})** | **String** , meaningful only when GridClientDeleteColumn is used for deleting|
| **[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})** | **String** , meaningful only when GridClientDeleteColumn is used for deleting|
| **[OnRowDeselecting]({%slug grid/client-side-programming/events/events/onrowdeselecting%})** | **String** |
| **[OnRowDeselected]({%slug grid/client-side-programming/events/events/onrowdeselected%})** | **String** |
| **[OnRowDestroying]({%slug grid/client-side-programming/events/events/onrowdestroying%})** | **String** |
| **[OnRowDragStarted]({%slug grid/client-side-programming/events/events/onrowdragstarted%})** | **String** |
| **[OnRowDropping]({%slug grid/client-side-programming/events/events/onrowdropping%})** | **String** |
| **[OnRowDropped]({%slug grid/client-side-programming/events/events/onrowdropped%})** | **String** |
| **[OnRowHiding]({%slug grid/client-side-programming/events/events/onrowhiding%})** | **String** |
| **[OnRowHidden]({%slug grid/client-side-programming/events/events/onrowhidden%})** | **String** |
| **[OnRowMouseOut]({%slug grid/client-side-programming/events/events/onrowmouseout%})** | **String** |
| **[OnRowMouseOver]({%slug grid/client-side-programming/events/events/onrowmouseover%})** | **String** |
| **[OnRowResizing]({%slug grid/client-side-programming/events/events/onrowresizing%})** | **String** |
| **[OnRowResized]({%slug grid/client-side-programming/events/events/onrowresized%})** | **String** |
| **[OnRowSelecting]({%slug grid/client-side-programming/events/events/onrowselecting%})** | **String** |
| **[OnRowSelected]({%slug grid/client-side-programming/events/events/onrowselected%})** | **String** |
| **[OnRowShowing]({%slug grid/client-side-programming/events/events/onrowshowing%})** | **String** |
| **[OnRowShown]({%slug grid/client-side-programming/events/events/onrowshown%})** | **String** |
| **[OnTableCreating]({%slug grid/client-side-programming/events/events/ontablecreating%})** | **String** |
| **[OnTableCreated]({%slug grid/client-side-programming/events/events/ontablecreated%})** | **String** |
| **[OnTableDestroying]({%slug grid/client-side-programming/events/events/ontabledestroying%})** | **String** |
| **[OnScroll]({%slug grid/client-side-programming/events/events/onscroll%})** | **String** |

>caution Note that when the **ClientIDMode** property of the RadGrid control is set to **Static** , all row specific client-side events would not fire.
>

