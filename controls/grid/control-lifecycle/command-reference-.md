---
title: Command Reference 
page_title: Command Reference  | UI for ASP.NET AJAX Documentation
description: Command Reference 
slug: grid/control-lifecycle/command-reference-
tags: command,reference,
published: True
position: 2
---

# Command Reference 



## 

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, RadGrid will fire __ItemCommand__ event. A child control (such as a __Button__ server control) raises a bubble event if you set any value in __CommandName__ property.

For example the command name is "DoInsert" , then RadGrid will fire __ItemCommandEvent__ and the event argument of the handler function (generally the "__e__" variable ) will have the same command name , i.e. "__DoInsert__" as a value for the __e.CommandName__ property. Moreover, the __e.Item__ argument will be a reference to the __Item__ which is the parent of the control raised the bubble event (i.e. the __Item__ where the button resides).Some command names are predefined in __RadGrid__ and the control will respond to them automatically (like the value of __RadGrid.InitInsertCommandName__ constant or __RadGrid.RefreshGridCommandName__). The integrated paging in __RadGrid__ is also based on commands, with __CommandName__ "__Page__" (or __RadGrid.PageCommandName__) and command various arguments for different paging operations like the string "Next","Prev" or "First".

Here is a list of the available command names in Telerik RadGrid:


>caption  

| Fired By controls within __DataItems__ - showing and editing data |  |
| ------ | ------ |
| __CancelCommandName__ |Represents the Cancel command name. Fires __RadGrid.CancelCommand__ event and sets __Item.Edit__ to __false__ for the parent Item.|
| __DeleteCommandName__ |Represents the Delete command name. Fires __RadGrid.DeleteCommand__ event. Under .Net 2.0 this command can perform automatic delete operation.|
| __UpdateCommandName__ |Represents the Update command name. Fires __RadGrid.UpdateCommand__ event. Under .Net 2.0 this command can perform automatic update operation and then set __Item.Edit__ to __false__ .|
| __EditCommandName__ |Represents the Edit command name. Sets __Item.Edit__ to __true__ .|
| __SelectCommandName__ |Represents the Select command name. Sets __Item.Selected__ to __true__ .|
| __DeselectCommandName__ |Represents the Deselect command name. __Sets Item.Selected__ to false.|
|Fired by controls within Items that have child items (in hierarchy structures or group structures)||
| __ExpandCollapseCommandName__ |Toggles the expanded state of the child items.|
|Can be fired by controls within any Item||
| __InitInsertCommandName__ |By default grid renders [Add new record] image button in the __CommandItem__ . Opens the insert item.|
| __PerformInsertCommandName__ |Fires __RadGrid.InsertCommand__ event. Under .Net 2.0 Perfoms this command can perform automatic insert operation and close the insert item.|
| __RebindGridCommandName__ |By default grid renders [Refresh] image button in the __CommandItem__ . Forces __RadGrid.Rebind__ |
| __SortCommandName__ |Represents the Sort command name.By default it is fired by image buttons in the header item when Sorting is enabled. The argument for the __SortCommand__ must be the __DataField__ name for the __DataField__ to be sorted.|
| __ExportToExcelCommandName__ |Exports grid data in Microsoft Excel ® format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the __RadGrid.ExportSettings__ section.|
| __ExportToWordCommandName__ |Exports grid data in Microsoft Word ® format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the __RadGrid.ExportSettings__ section.|
| __ExportToPdfCommandName__ |Exports grid data in PDF format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the __RadGrid.ExportSettings__ section.|
| __ExportToCsvCommandName__ |Exports grid data in CSV format (comma-separated values). You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the __RadGrid.ExportSettings__ section.|
|Fired by controls within __PagerItem__ ||
| __PageCommandName__ |Represents the Page command name.See also:[Paging]({%slug grid/functionality/paging/overview%})|
|Fired when the PageSize property is set and changed.||
| __ChangePageSizeCommandName__ |Fires __RadGrid.PageSizeChanged__ event.|
|Fired when choosing an option from the filter menu within __column header__ ||
| __FilterCommandName__ |Represents the Filter command name.See also:[Operating with filter expression]({%slug grid/functionality/filtering/how-to/operate-with-the-filterexpression-manually%})|
|Batch commands||
| __EditSelectedCommandName__ |Switches the selected grid items in edit mode automatically|
| __DeleteSelectedCommandName__ |Fires __RadGrid.DeleteCommand__ event for the selected rows. Under .Net 2.0 can perform automatic delete operation for the selected rows.|
| __UpdateEditedCommandName__ |Fires __Fires RadGrid.UpdateCommand__ event for the edited rows. Under .Net 2.0 can perform automatic update operation for the edited rows and then sets __Item.Edit__ to __false__ |
| __EditAllCommandName__ |Command that triggers editing for all grid records ( __AllowMultiRowEdit__ should be set to __true__ ).|
| __CancelAllCommandName__ |Cancels the previously undertaken actions.|
| __RowClick__ |Command triggered when you click a row and have ClientSettings -> EnablePostBackOnRowClick set to true (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/programming/selectedvalue/defaultcs.aspx))|
| __DownloadAttachmentCommandName__ |Command triggered when a Download button in a GridAttachmentColumn is clicked for a GridDataItem (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx))|

This examples can help you with this approach (look at the ASCX code):

[http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx)

The user control buttons __Update__ and __Cancel__ have __CommandName__ property associated. Both commands are handled by RadGrid.

````ASPNET
	  <td align="right" colspan="2">
	    <asp:Button ID="btnUpdate" Text="Update" CssClass="button" Style="color: green;"
	      runat="server" CommandName="Update"></asp:Button><asp:Button ID="btnCancel" Text="Cancel"
	        CssClass="button" runat="server" CausesValidation="False" CommandName="Cancel">
	    </asp:Button>
	  </td>
	  </tr>
````



When "Update" command bubbles, __RadGrid__ will fire first __ItemCommand__ event, and if the event is not canceled (__e.Canceled__ set to false) then RadGrid will fire __UpdateCommand__ event and then it will refresh automatically.

The "Cancel" command will close the edited item and will automatically refresh the grid.Furthermore, here are the internally recognized command arguments you can check:


>caption  

| Paging command arguments |  |
| ------ | ------ |
| __FirstPageCommandArgument__ |Indicates that the end user chose to navigate to the first page in the grid|
| __NextPageCommandArgument__ |Indicates that the end user chose to navigate to the next page in the grid|
| __PrevPageCommandArgument__ |Indicates that the end user chose to navigate to the previous page in the grid|
| __LastPageCommandArgument__ |Indicates that the end user chose to navigate to the last page in the grid|



Note that you can also set the __CommandArgument__ property of a built-in GridButtonColumn or a LinkButton/Button/ImageButton residing in GridTemplateColumn to a custom value and then intercept the ItemCommand event to determine the command argument for the clicked button (if needed).
