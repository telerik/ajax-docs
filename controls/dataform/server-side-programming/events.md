---
title: Events
page_title: Events | RadDataForm for ASP.NET AJAX Documentation
description: Events
slug: dataform/server-side-programming/events
tags: events
published: True
position: 1
---

# Events

**RadDataForm** provides the following server-side events:

## Events

|  **Events**  |  **Description**  |
| ------ | ------ |
| **ItemCommand** |Fires when any command button is clicked in **RadDataForm** control. All bubbled events of the objct fire the **ItemCommand** event.|
| **EditCommand** |Fires when an edit command has been triggered.|
| **UpdateCommand** |Fires when an update command is triggered.|
| **InsertCommand** |Fires when a insert command is triggered.|
| **DeleteCommand** |Fires when a delete command is triggered.|
| **CancelCommand** |Fires when an insert or edit action is cancelled.|
| **PageIndexChanged** |Fires when a paging action is performed.|
| **NeedDataSource** |Fires when **RadDataForm** is about to be bound and the data source must be assigned.|
| **DataBinding** |Fired right before the server control binds to a data source.|
| **DataBound** |Fired when the server control is bound to a data source.|
| **ItemDeleted** |Fired when an automatic delete operation is executed.|
| **ItemUpdated** |Fired when an automatic update operation is executed.|
| **ItemInserted** |Fired when an automatic insert operation is executed.|
| **ModeChanged** |Fired when CurrentMode has changed.|

## 

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy.Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to theoriginal control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, **RadDataForm** will fire **ItemCommand** event. A child control(such as a Button server control) raises a bubble event if you set any value in **CommandName** property.

Here is a list of the available command names in Telerik RadDataForm:


| Command Name | Description |
| ------ | ------ |
| **Page** |Fired when the PageSize property is set and changed.|
| **Edit** |Represents the Edit command name. Fires **RadDataForm.EditCommand** event.|
| **Update** |Represents the Update command name. Fires **RadDataForm.UpdateCommand** event.|
| **Cancel** |Represents the Cancel command name. Fires **RadDataForm.CancelCommand** event.|
| **Delete** |Represents the Delete command name. Fires **RadDataForm.DeleteCommand** event.|
| **InitInsert** |Opens the insert item. Fires **RadDataForm.InitInsertCommand** event.|
| **PerformInsert** |This command perform automatic insert operation and close the insert item. Fires **RadDataForm.PerformInsertCommand** event.|
| **Rebind** |Rebind **RadDataForm** control and forces **RadGrid.Rebind** event.|

# See Also

 * [DataForm Object]({%slug dataform/server-side-programming/dataform-object%})
