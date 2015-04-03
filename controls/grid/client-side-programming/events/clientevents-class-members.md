---
title: ClientEvents Class Members
page_title: ClientEvents Class Members | UI for ASP.NET AJAX Documentation
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



>note Please note that the grid and its structure should be created when the event handlers are attached. That is why you cannot attach handlers for the __OnXXXCreating__ and __OnXXXCreated__ events dynamically.
>


Inside each RadGrid client-side event handler the first argument passed (*sender*) will point to the grid client object. The second argument (*eventArgs*) will hold reference properties/objects dependable on the respective client event. They are listed in the separate help topics linked in the next paragraph.


|  __[OnActiveRowChanging]({%slug grid/client-side-programming/events/events/onactiverowchanging%})__  |  __String__  |
| ------ | ------ |
| __[OnActiveRowChanged]({%slug grid/client-side-programming/events/events/onactiverowchanged%})__ | __String__ |
| __[OnCellDeselecting]({%slug grid/client-side-programming/events/events/oncelldeselecting%})__ | __String__ |
| __[OnCellDeselected]({%slug grid/client-side-programming/events/events/oncelldeselected%})__ | __String__ |
| __[OnCellSelecting]({%slug grid/client-side-programming/events/events/oncellselecting%})__ | __String__ |
| __[OnCellSelected]({%slug grid/client-side-programming/events/events/oncellselected%})__ | __String__ |
| __[OnColumnClick]({%slug grid/client-side-programming/events/events/oncolumnclick%})__ | __String__ |
| __[OnColumnContextMenu]({%slug grid/client-side-programming/events/events/oncolumncontextmenu%})__ | __String__ |
| __[OnColumnCreating]({%slug grid/client-side-programming/events/events/oncolumncreating%})__ | __String__ |
| __[OnColumnCreated]({%slug grid/client-side-programming/events/events/oncolumncreated%})__ | __String__ |
| __[OnColumnDblClick]({%slug grid/client-side-programming/events/events/oncolumndblclick%})__ | __String__ |
| __[OnColumnDestroying]({%slug grid/client-side-programming/events/events/oncolumndestroying%})__ | __String__ |
| __[OnColumnHiding]({%slug grid/client-side-programming/events/events/oncolumnhiding%})__ | __String__ |
| __[OnColumnHidden]({%slug grid/client-side-programming/events/events/oncolumnhidden%})__ | __String__ |
| __[OnColumnMouseOut]({%slug grid/client-side-programming/events/events/oncolumnmouseout%})__ | __String__ |
| __[OnColumnMouseOver]({%slug grid/client-side-programming/events/events/oncolumnmouseover%})__ | __String__ |
| __[OnColumnMovingToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovingtoleft%})__ | __String__ |
| __[OnColumnMovedToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovedtoleft%})__ | __String__ |
| __[OnColumnMovingToRight]({%slug grid/client-side-programming/events/events/oncolumnmovingtoright%})__ | __String__ |
| __[OnColumnMovedToRight]({%slug grid/client-side-programming/events/events/oncolumnmovedtoright%})__ | __String__ |
| __[OnColumnResizing]({%slug grid/client-side-programming/events/events/oncolumnresizing%})__ | __String__ |
| __[OnColumnResized]({%slug grid/client-side-programming/events/events/oncolumnresized%})__ | __String__ |
| __[OnColumnShowing]({%slug grid/client-side-programming/events/events/oncolumnshowing%})__ | __String__ |
| __[OnColumnShown]({%slug grid/client-side-programming/events/events/oncolumnshown%})__ | __String__ |
| __[OnColumnSwapping]({%slug grid/client-side-programming/events/events/oncolumnswapping%})__ | __String__ |
| __[OnColumnSwapped]({%slug grid/client-side-programming/events/events/oncolumnswapped%})__ | __String__ |
| __[OnCommand]({%slug grid/client-side-programming/events/events/oncommand%})__ | __String__ |
| __[OnDataBinding]({%slug grid/client-side-programming/events/events/ondatabinding%})__ | __String__ , meaningful only when RadGrid is bound client-side|
| __[OnDataBindingFailed]({%slug grid/client-side-programming/events/events/ondatabindingfailed%})__ | __String__ , meaningful only when RadGrid is bound client-side|
| __[OnDataBound]({%slug grid/client-side-programming/events/events/ondatabound%})__ | __String__ , meaningful only when RadGrid is bound client-side|
| __[OnDataSourceResolved]({%slug grid/client-side-programming/events/events/ondatasourceresolved%})__ | __String__ , meaningful only when RadGrid is bound client-side|
| __[OnFilterMenuShowing]({%slug grid/client-side-programming/events/events/onfiltermenushowing%})__ | __String__ |
| __[OnGridCreating]({%slug grid/client-side-programming/events/events/ongridcreating%})__ | __String__ |
| __[OnGridCreated]({%slug grid/client-side-programming/events/events/ongridcreated%})__ | __String__ |
| __[OnGridDestroying]({%slug grid/client-side-programming/events/events/ongriddestroying%})__ | __String__ |
| __[OnGroupCollapsing]({%slug grid/client-side-programming/events/events/ongroupcollapsing%})__ | __String,__ meaningful only when GroupLoadMode="Client"|
| __[OnGroupCollapsed]({%slug grid/client-side-programming/events/events/ongroupcollapsed%})__ | __String,__ meaningful only when GroupLoadMode="Client"|
| __[OnGroupExpanding]({%slug grid/client-side-programming/events/events/ongroupexpanding%})__ | __String,__ meaningful only when GroupLoadMode="Client"|
| __[OnGroupExpanded]({%slug grid/client-side-programming/events/events/ongroupexpanded%})__ | __String,__ meaningful only when GroupLoadMode="Client"|
| __[OnHeaderMenuShowing]({%slug grid/client-side-programming/events/events/onheadermenushowing%})__ | __String__ |
| __[OnHierarchyCollapsing]({%slug grid/client-side-programming/events/events/onhierarchycollapsing%})__ | __String,__ meaningful only when HierarchyLoadMode="Client"|
| __[OnHierarchyCollapsed]({%slug grid/client-side-programming/events/events/onhierarchycollapsed%})__ | __String,__ meaningful only when HierarchyLoadMode="Client"|
| __[OnHierarchyExpanding]({%slug grid/client-side-programming/events/events/onhierarchyexpanding%})__ | __String,__ meaningful only when HierarchyLoadMode="Client"|
| __[OnHierarchyExpanded]({%slug grid/client-side-programming/events/events/onhierarchyexpanded%})__ | __String,__ meaningful only when HierarchyLoadMode="Client"|
| __ __[OnKeyPress]({%slug grid/client-side-programming/events/events/onkeypress%})__ __ | __String__ |
| __[OnMasterTableViewCreating]({%slug grid/client-side-programming/events/events/onmastertableviewcreating%})__ | __String__ |
| __[OnMasterTableViewCreated]({%slug grid/client-side-programming/events/events/onmastertableviewcreated%})__ | __String__ |
|[OnPopUpShowing]({%slug grid/client-side-programming/events/events/onpopupshowing%})| __String__ |
| __[OnRowClick]({%slug grid/client-side-programming/events/events/onrowclick%})__ | __String__ |
| __[OnRowContextMenu]({%slug grid/client-side-programming/events/events/onrowcontextmenu%})__ | __String__ |
| __[OnRowCreating]({%slug grid/client-side-programming/events/events/onrowcreating%})__ | __String__ |
| __[OnRowCreated]({%slug grid/client-side-programming/events/events/onrowcreated%})__ | __String__ |
|[OnRowDataBound]({%slug grid/client-side-programming/events/events/onrowdatabound%})| __String__ |
| __[OnRowDblClick]({%slug grid/client-side-programming/events/events/onrowdblclick%})__ | __String__ |
| __[OnRowDeleting]({%slug grid/client-side-programming/events/events/onrowdeleting%})__ | __String__ , meaningful only when GridClientDeleteColumn is used for deleting|
| __[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})__ | __String__ , meaningful only when GridClientDeleteColumn is used for deleting|
| __[OnRowDeselecting]({%slug grid/client-side-programming/events/events/onrowdeselecting%})__ | __String__ |
| __[OnRowDeselected]({%slug grid/client-side-programming/events/events/onrowdeselected%})__ | __String__ |
| __[OnRowDestroying]({%slug grid/client-side-programming/events/events/onrowdestroying%})__ | __String__ |
| __[OnRowDragStarted]({%slug grid/client-side-programming/events/events/onrowdragstarted%})__ | __String__ |
| __[OnRowDropping]({%slug grid/client-side-programming/events/events/onrowdropping%})__ | __String__ |
| __[OnRowDropped]({%slug grid/client-side-programming/events/events/onrowdropped%})__ | __String__ |
| __[OnRowHiding]({%slug grid/client-side-programming/events/events/onrowhiding%})__ | __String__ |
| __[OnRowHidden]({%slug grid/client-side-programming/events/events/onrowhidden%})__ | __String__ |
| __[OnRowMouseOut]({%slug grid/client-side-programming/events/events/onrowmouseout%})__ | __String__ |
| __[OnRowMouseOver]({%slug grid/client-side-programming/events/events/onrowmouseover%})__ | __String__ |
| __[OnRowResizing]({%slug grid/client-side-programming/events/events/onrowresizing%})__ | __String__ |
| __[OnRowResized]({%slug grid/client-side-programming/events/events/onrowresized%})__ | __String__ |
| __[OnRowSelecting]({%slug grid/client-side-programming/events/events/onrowselecting%})__ | __String__ |
| __[OnRowSelected]({%slug grid/client-side-programming/events/events/onrowselected%})__ | __String__ |
| __[OnRowShowing]({%slug grid/client-side-programming/events/events/onrowshowing%})__ | __String__ |
| __[OnRowShown]({%slug grid/client-side-programming/events/events/onrowshown%})__ | __String__ |
| __[OnTableCreating]({%slug grid/client-side-programming/events/events/ontablecreating%})__ | __String__ |
| __[OnTableCreated]({%slug grid/client-side-programming/events/events/ontablecreated%})__ | __String__ |
| __[OnTableDestroying]({%slug grid/client-side-programming/events/events/ontabledestroying%})__ | __String__ |
| __[OnScroll]({%slug grid/client-side-programming/events/events/onscroll%})__ | __String__ |

>caution Note that when the __ClientIDMode__ property of the RadGrid control is set to __Static__ , all row specific client-side events would not fire.
>

