---
title: OnCommand
page_title: OnCommand | RadGrid for ASP.NET AJAX Documentation
description: OnCommand
slug: grid/client-side-programming/events/oncommand
tags: oncommand
published: True
position: 26
---

# OnCommand



Telerik.Web.UI.GridCommandEventArgs OnCommand Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised for each grid command which is about to be triggered (sorting, paging, filtering, editing, etc.) before postback/ajax request except hierarchy/grouping expand/collapse action. The event can be intercepted in order to perform a certain operation in the grid via web service or to detect what type of command is raised on the client.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **commandName** - the name of the command which is about to be processed **commandArgument** - the command argument(s) value(s) **tableView** - returns reference to the owner TableView|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnCommand="RaiseCommand" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RaiseCommand(sender, eventArgs)
{
    //retrieve the current commandName and commandArgument
    var result = String.format("CommandName: {0}, CommandArgument: {1}", eventArgs.get_commandName(), eventArgs.get_commandArgument());

    if (<some_custom_condition_not_met>)
    {
        eventArgs.set_cancel(true); //cancel the command
    }
}
````

>caption How to prevent loss of user input in batch editing mode

````JavaScript
function OnCommand(sender, args) {
	var tableView = args.get_tableView();
	var batchEditingManager = sender.get_batchEditingManager();
	var isDirty = batchEditingManager.hasChanges(tableView);
	var commandName = args.get_commandName();
	//allow the user to cancel changes always
	//if there are changes allow the user only to save changes 
	var shouldAllowOperation = commandName == "RebindGrid" || !(isDirty && commandName != "BatchEdit");
	args.set_cancel(!shouldAllowOperation);
	
}
````

