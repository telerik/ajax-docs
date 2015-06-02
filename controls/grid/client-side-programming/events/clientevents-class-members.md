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

````ASP.NET
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


|  **[OnActiveRowChanging]({%slug grid/client-side-programming/events/onactiverowchanging%})**  |  **String**  |
| ------ | ------ |
| **[OnActiveRowChanged]({%slug grid/client-side-programming/events/onactiverowchanged%})** | **String** |
| **[OnCellDeselecting]({%slug grid/client-side-programming/events/oncelldeselecting%})** | **String** |
| **[OnCellDeselected]({%slug grid/client-side-programming/events/oncelldeselected%})** | **String** |
| **[OnCellSelecting]({%slug grid/client-side-programming/events/oncellselecting%})** | **String** |
| **[OnCellSelected]({%slug grid/client-side-programming/events/oncellselected%})** | **String** |
| **[OnColumnClick]({%slug grid/client-side-programming/events/oncolumnclick%})** | **String** |
| **[OnColumnContextMenu]({%slug grid/client-side-programming/events/oncolumncontextmenu%})** | **String** |
| **[OnColumnCreating]({%slug grid/client-side-programming/events/oncolumncreating%})** | **String** |
| **[OnColumnCreated]({%slug grid/client-side-programming/events/oncolumncreated%})** | **String** |
| **[OnColumnDblClick]({%slug grid/client-side-programming/events/oncolumndblclick%})** | **String** |
| **[OnColumnDestroying]({%slug grid/client-side-programming/events/oncolumndestroying%})** | **String** |
| **[OnColumnHiding]({%slug grid/client-side-programming/events/oncolumnhiding%})** | **String** |
| **[OnColumnHidden]({%slug grid/client-side-programming/events/oncolumnhidden%})** | **String** |
| **[OnColumnMouseOut]({%slug grid/client-side-programming/events/oncolumnmouseout%})** | **String** |
| **[OnColumnMouseOver]({%slug grid/client-side-programming/events/oncolumnmouseover%})** | **String** |
| **[OnColumnMovingToLeft]({%slug grid/client-side-programming/events/oncolumnmovingtoleft%})** | **String** |
| **[OnColumnMovedToLeft]({%slug grid/client-side-programming/events/oncolumnmovedtoleft%})** | **String** |
| **[OnColumnMovingToRight]({%slug grid/client-side-programming/events/oncolumnmovingtoright%})** | **String** |
| **[OnColumnMovedToRight]({%slug grid/client-side-programming/events/oncolumnmovedtoright%})** | **String** |
| **[OnColumnResizing]({%slug grid/client-side-programming/events/oncolumnresizing%})** | **String** |
| **[OnColumnResized]({%slug grid/client-side-programming/events/oncolumnresized%})** | **String** |
| **[OnColumnShowing]({%slug grid/client-side-programming/events/oncolumnshowing%})** | **String** |
| **[OnColumnShown]({%slug grid/client-side-programming/events/oncolumnshown%})** | **String** |
| **[OnColumnSwapping]({%slug grid/client-side-programming/events/oncolumnswapping%})** | **String** |
| **[OnColumnSwapped]({%slug grid/client-side-programming/events/oncolumnswapped%})** | **String** |
| **[OnCommand]({%slug grid/client-side-programming/events/oncommand%})** | **String** |
| **[OnDataBinding]({%slug grid/client-side-programming/events/ondatabinding%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataBindingFailed]({%slug grid/client-side-programming/events/ondatabindingfailed%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataBound]({%slug grid/client-side-programming/events/ondatabound%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnDataSourceResolved]({%slug grid/client-side-programming/events/ondatasourceresolved%})** | **String** , meaningful only when RadGrid is bound client-side|
| **[OnFilterMenuShowing]({%slug grid/client-side-programming/events/onfiltermenushowing%})** | **String** |
| **[OnGridCreating]({%slug grid/client-side-programming/events/ongridcreating%})** | **String** |
| **[OnGridCreated]({%slug grid/client-side-programming/events/ongridcreated%})** | **String** |
| **[OnGridDestroying]({%slug grid/client-side-programming/events/ongriddestroying%})** | **String** |
| **[OnGroupCollapsing]({%slug grid/client-side-programming/events/ongroupcollapsing%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupCollapsed]({%slug grid/client-side-programming/events/ongroupcollapsed%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupExpanding]({%slug grid/client-side-programming/events/ongroupexpanding%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnGroupExpanded]({%slug grid/client-side-programming/events/ongroupexpanded%})** | **String,** meaningful only when GroupLoadMode="Client"|
| **[OnHeaderMenuShowing]({%slug grid/client-side-programming/events/onheadermenushowing%})** | **String** |
| **[OnHierarchyCollapsing]({%slug grid/client-side-programming/events/onhierarchycollapsing%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyCollapsed]({%slug grid/client-side-programming/events/onhierarchycollapsed%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyExpanding]({%slug grid/client-side-programming/events/onhierarchyexpanding%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| **[OnHierarchyExpanded]({%slug grid/client-side-programming/events/onhierarchyexpanded%})** | **String,** meaningful only when HierarchyLoadMode="Client"|
| ** **[OnKeyPress]({%slug grid/client-side-programming/events/onkeypress%})** ** | **String** |
| **[OnMasterTableViewCreating]({%slug grid/client-side-programming/events/onmastertableviewcreating%})** | **String** |
| **[OnMasterTableViewCreated]({%slug grid/client-side-programming/events/onmastertableviewcreated%})** | **String** |
|[OnPopUpShowing]({%slug grid/client-side-programming/events/onpopupshowing%})| **String** |
| **[OnRowClick]({%slug grid/client-side-programming/events/onrowclick%})** | **String** |
| **[OnRowContextMenu]({%slug grid/client-side-programming/events/onrowcontextmenu%})** | **String** |
| **[OnRowCreating]({%slug grid/client-side-programming/events/onrowcreating%})** | **String** |
| **[OnRowCreated]({%slug grid/client-side-programming/events/onrowcreated%})** | **String** |
|[OnRowDataBound]({%slug grid/client-side-programming/events/onrowdatabound%})| **String** |
| **[OnRowDblClick]({%slug grid/client-side-programming/events/onrowdblclick%})** | **String** |
| **[OnRowDeleting]({%slug grid/client-side-programming/events/onrowdeleting%})** | **String** , meaningful only when GridClientDeleteColumn is used for deleting|
| **[OnRowDeleted]({%slug grid/client-side-programming/events/onrowdeleted%})** | **String** , meaningful only when GridClientDeleteColumn is used for deleting|
| **[OnRowDeselecting]({%slug grid/client-side-programming/events/onrowdeselecting%})** | **String** |
| **[OnRowDeselected]({%slug grid/client-side-programming/events/onrowdeselected%})** | **String** |
| **[OnRowDestroying]({%slug grid/client-side-programming/events/onrowdestroying%})** | **String** |
| **[OnRowDragStarted]({%slug grid/client-side-programming/events/onrowdragstarted%})** | **String** |
| **[OnRowDropping]({%slug grid/client-side-programming/events/onrowdropping%})** | **String** |
| **[OnRowDropped]({%slug grid/client-side-programming/events/onrowdropped%})** | **String** |
| **[OnRowHiding]({%slug grid/client-side-programming/events/onrowhiding%})** | **String** |
| **[OnRowHidden]({%slug grid/client-side-programming/events/onrowhidden%})** | **String** |
| **[OnRowMouseOut]({%slug grid/client-side-programming/events/onrowmouseout%})** | **String** |
| **[OnRowMouseOver]({%slug grid/client-side-programming/events/onrowmouseover%})** | **String** |
| **[OnRowResizing]({%slug grid/client-side-programming/events/onrowresizing%})** | **String** |
| **[OnRowResized]({%slug grid/client-side-programming/events/onrowresized%})** | **String** |
| **[OnRowSelecting]({%slug grid/client-side-programming/events/onrowselecting%})** | **String** |
| **[OnRowSelected]({%slug grid/client-side-programming/events/onrowselected%})** | **String** |
| **[OnRowShowing]({%slug grid/client-side-programming/events/onrowshowing%})** | **String** |
| **[OnRowShown]({%slug grid/client-side-programming/events/onrowshown%})** | **String** |
| **[OnTableCreating]({%slug grid/client-side-programming/events/ontablecreating%})** | **String** |
| **[OnTableCreated]({%slug grid/client-side-programming/events/ontablecreated%})** | **String** |
| **[OnTableDestroying]({%slug grid/client-side-programming/events/ontabledestroying%})** | **String** |
| **[OnScroll]({%slug grid/client-side-programming/events/onscroll%})** | **String** |

>caution When the **ClientIDMode** property of the RadGrid control is set to **Static** , all row specific client-side events would not fire.
>

