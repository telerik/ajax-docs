---
title: OnUserAction
page_title: OnUserAction | RadGrid for ASP.NET AJAX Documentation
description: OnUserAction
slug: grid/client-side-programming/events/onuseraction
tags: onuseraction
published: True
position: 76
---

# OnUserAction



##        

Sys.CancelEventArgs OnUserAction Property



Generally, **RadGrid** provides [OnCommand]({%slug grid/client-side-programming/events/oncommand%}) event handler, which can be used to cancel every grid command on client-side. Although this would prevent the initiated command to post back to the server, some commands like PageSize, Sorting, etc. also contain client-side logic, e.g. hiding the pager item or changing the status of the sort icon in the header cell of a column. Therefore, we introduced **OnUserAction** event with the primary goal of providing a convenient way to cancel these actions, which have client-side logic applied in addition to the server-side event raising.

The event will be raised for these actions: **Page**, **Sort**, **PageSize**, **Filter**. It is commonly used in editing scenarios, to remind the users that they will lose any changes if they  continue without saving. You can examine the following live sample for a practical implementation:
[Grid - Binding to Telerik ClientDataSource](http://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/client-data-source-binding/defaultcs.aspx)

The event provides arguments to extract details about the user action. Some of the method names depend on the current action due to the specificity of the related argument.

|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | *Common* <br> **get_actionName()** - returns the name of the initiated action <br/> **get_tableView()** - returns the owner Telerik.Web.UI.GridTableView object <br/> **set** or **get_cancel()** - gets or sets the cancelled status of the event <br/><br/> *Page* <br/> **set** or **get_newPageIndex()**<br/><br/> *PageSize* <br/>**set** or **get_newPageSize()**<br/><br/> *Sort* <br/>**set** or **get_sortExpression()**<br/><br/> *Filter* <br/>**set** or **get_columnUniqueName()** - the name of the column, which the grid will be filtered by<br/>**set** or **get_filterFunction()** - the name of the active function: EqualTo, StartsWith, LessThan, etc.<br/>**set** or **get_filterValue()** - the value to be filtered on|
| **Can be canceled** |Yes|

Example:

````ASP.NET
<ClientSettings>
    <ClientEvents OnUserAction="userAction" />
</ClientSettings>
````

````JavaScript
function userAction(sender, args) {
    var isDirtyFlag = true; // some condition
    var message = "Changes will be lost. Continue anyway?";

    if (isDirtyFlag && !confirm(message)) {
        args.set_cancel(true);
    }
}
````






