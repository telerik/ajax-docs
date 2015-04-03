---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: dataform/server-side-programming/events
tags: events
published: True
position: 1
---

# Events



__RadDataForm__ provides the following server-side events:

## Events


|  __Events__  |  __Description__  |
| ------ | ------ |
| __ItemCommand__ |Fires when any command button is clicked in __RadDataForm__ control. All bubbled events of the objct fire the __ItemCommand__ event.|
| __EditCommand__ |Fires when an edit command has been triggered.|
| __UpdateCommand__ |Fires when an update command is triggered.|
| __InsertCommand__ |Fires when a insert command is triggered.|
| __DeleteCommand__ |Fires when a delete command is triggered.|
| __CancelCommand__ |Fires when an insert or edit action is cancelled.|
| __PageIndexChanged__ |Fires when a paging action is performed.|
| __NeedDataSource__ |Fires when __RadDataForm__ is about to be bound and the data source must be assigned.|
| __DataBinding__ |Fired right before the server control binds to a data source.|
| __DataBound__ |Fired when the server control is bound to a data source.|
| __ItemDeleted__ |Fired when an automatic delete operation is executed.|
| __ItemUpdated__ |Fired when an automatic update operation is executed.|
| __ItemInserted__ |Fired when an automatic insert operation is executed.|
| __ModeChanged__ |Fired when CurrentMode has changed.|

## 

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy.Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to theoriginal control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, __RadDataForm__ will fire __ItemCommand__ event. A child control(such as a Button server control) raises a bubble event if you set any value in __CommandName__ property.

Here is a list of the available command names in Telerik RadDataForm:


| Command Name | Description |
| ------ | ------ |
| __Page__ |Fired when the PageSize property is set and changed.|
| __Edit__ |Represents the Edit command name. Fires __RadDataForm.EditCommand__ event.|
| __Update__ |Represents the Update command name. Fires __RadDataForm.UpdateCommand__ event.|
| __Cancel__ |Represents the Cancel command name. Fires __RadDataForm.CancelCommand__ event.|
| __Delete__ |Represents the Delete command name. Fires __RadDataForm.DeleteCommand__ event.|
| __InitInsert__ |Opens the insert item. Fires __RadDataForm.InitInsertCommand__ event.|
| __PerformInsert__ |This command perform automatic insert operation and close the insert item. Fires __RadDataForm.PerformInsertCommand__ event.|
| __Rebind__ |Rebind __RadDataForm__ control and forces __RadGrid.Rebind__ event.|

# See Also

 * [DataForm Object]({%slug dataform/server-side-programming/dataform-object%})
