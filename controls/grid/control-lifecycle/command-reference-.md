---
title: Command Reference 
page_title: Command Reference  | RadGrid for ASP.NET AJAX Documentation
description: Command Reference 
slug: grid/control-lifecycle/command-reference-
tags: command,reference,
published: True
position: 2
---

# Command Reference 



## 

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, RadGrid will fire **ItemCommand** event. A child control (such as a **Button** server control) raises a bubble event if you set any value in **CommandName** property.

For example the command name is "DoInsert" , then RadGrid will fire **ItemCommandEvent** and the event argument of the handler function (generally the "**e**" variable ) will have the same command name , i.e. "**DoInsert**" as a value for the **e.CommandName** property. Moreover, the **e.Item** argument will be a reference to the **Item** which is the parent of the control raised the bubble event (i.e. the **Item** where the button resides).Some command names are predefined in **RadGrid** and the control will respond to them automatically (like the value of **RadGrid.InitInsertCommandName** constant or **RadGrid.RefreshGridCommandName**). The integrated paging in **RadGrid** is also based on commands, with **CommandName** "**Page**" (or **RadGrid.PageCommandName**) and command various arguments for different paging operations like the string "Next","Prev" or "First".

Here is a list of the available command names in Telerik RadGrid:


>caption  

| Fired By controls within **DataItems** - showing and editing data |  |
| ------ | ------ |
| **CancelCommandName** |Represents the Cancel command name. Fires **RadGrid.CancelCommand** event and sets **Item.Edit** to **false** for the parent Item.|
| **DeleteCommandName** |Represents the Delete command name. Fires **RadGrid.DeleteCommand** event. Under .Net 2.0 this command can perform automatic delete operation.|
| **UpdateCommandName** |Represents the Update command name. Fires **RadGrid.UpdateCommand** event. Under .Net 2.0 this command can perform automatic update operation and then set **Item.Edit** to **false** .|
| **EditCommandName** |Represents the Edit command name. Sets **Item.Edit** to **true** .|
| **SelectCommandName** |Represents the Select command name. Sets **Item.Selected** to **true** .|
| **DeselectCommandName** |Represents the Deselect command name. **Sets Item.Selected** to false.|
|Fired by controls within Items that have child items (in hierarchy structures or group structures)||
| **ExpandCollapseCommandName** |Toggles the expanded state of the child items.|
|Can be fired by controls within any Item||
| **InitInsertCommandName** |By default grid renders [Add new record] image button in the **CommandItem** . Opens the insert item.|
| **PerformInsertCommandName** |Fires **RadGrid.InsertCommand** event. Under .Net 2.0 Perfoms this command can perform automatic insert operation and close the insert item.|
| **RebindGridCommandName** |By default grid renders [Refresh] image button in the **CommandItem** . Forces **RadGrid.Rebind** |
| **SortCommandName** |Represents the Sort command name.By default it is fired by image buttons in the header item when Sorting is enabled. The argument for the **SortCommand** must be the **DataField** name for the **DataField** to be sorted.|
| **ExportToExcelCommandName** |Exports grid data in Microsoft Excel ® format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the **RadGrid.ExportSettings** section.|
| **ExportToWordCommandName** |Exports grid data in Microsoft Word ® format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the **RadGrid.ExportSettings** section.|
| **ExportToPdfCommandName** |Exports grid data in PDF format. You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the **RadGrid.ExportSettings** section.|
| **ExportToCsvCommandName** |Exports grid data in CSV format (comma-separated values). You will needto[configure exporting settings]({%slug grid/functionality/exporting/overview%})for the grid through the **RadGrid.ExportSettings** section.|
|Fired by controls within **PagerItem** ||
| **PageCommandName** |Represents the Page command name.See also:[Paging]({%slug grid/functionality/paging/overview%})|
|Fired when the PageSize property is set and changed.||
| **ChangePageSizeCommandName** |Fires **RadGrid.PageSizeChanged** event.|
|Fired when choosing an option from the filter menu within **column header** ||
| **FilterCommandName** |Represents the Filter command name.See also:[Operating with filter expression]({%slug grid/functionality/filtering/how-to/operate-with-the-filterexpression-manually%})|
|Batch commands||
| **EditSelectedCommandName** |Switches the selected grid items in edit mode automatically|
| **DeleteSelectedCommandName** |Fires **RadGrid.DeleteCommand** event for the selected rows. Under .Net 2.0 can perform automatic delete operation for the selected rows.|
| **UpdateEditedCommandName** |Fires **Fires RadGrid.UpdateCommand** event for the edited rows. Under .Net 2.0 can perform automatic update operation for the edited rows and then sets **Item.Edit** to **false** |
| **EditAllCommandName** |Command that triggers editing for all grid records ( **AllowMultiRowEdit** should be set to **true** ).|
| **CancelAllCommandName** |Cancels the previously undertaken actions.|
| **RowClick** |Command triggered when you click a row and have ClientSettings -> EnablePostBackOnRowClick set to true (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/programming/selectedvalue/defaultcs.aspx))|
| **DownloadAttachmentCommandName** |Command triggered when a Download button in a GridAttachmentColumn is clicked for a GridDataItem (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx))|

This examples can help you with this approach (look at the ASCX code):

[http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx)

The user control buttons **Update** and **Cancel** have **CommandName** property associated. Both commands are handled by RadGrid.

````ASP.NET
<td align="right" colspan="2">
  <asp:Button ID="btnUpdate" Text="Update" CssClass="button" Style="color: green;"
    runat="server" CommandName="Update"></asp:Button><asp:Button ID="btnCancel" Text="Cancel"
      CssClass="button" runat="server" CausesValidation="False" CommandName="Cancel">
  </asp:Button>
</td>
</tr>
````



When "Update" command bubbles, **RadGrid** will fire first **ItemCommand** event, and if the event is not canceled (**e.Canceled** set to false) then RadGrid will fire **UpdateCommand** event and then it will refresh automatically.

The "Cancel" command will close the edited item and will automatically refresh the grid.Furthermore, here are the internally recognized command arguments you can check:


>caption  

| Paging command arguments |  |
| ------ | ------ |
| **FirstPageCommandArgument** |Indicates that the end user chose to navigate to the first page in the grid|
| **NextPageCommandArgument** |Indicates that the end user chose to navigate to the next page in the grid|
| **PrevPageCommandArgument** |Indicates that the end user chose to navigate to the previous page in the grid|
| **LastPageCommandArgument** |Indicates that the end user chose to navigate to the last page in the grid|



Note that you can also set the **CommandArgument** property of a built-in GridButtonColumn or a LinkButton/Button/ImageButton residing in GridTemplateColumn to a custom value and then intercept the ItemCommand event to determine the command argument for the clicked button (if needed).
