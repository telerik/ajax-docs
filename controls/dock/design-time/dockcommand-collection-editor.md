---
title: DockCommand Collection Editor
page_title: DockCommand Collection Editor | UI for ASP.NET AJAX Documentation
description: DockCommand Collection Editor
slug: dock/design-time/dockcommand-collection-editor
tags: dockcommand,collection,editor
published: True
position: 2
---

# DockCommand Collection Editor



The __DockCommand Collection Editor__lets you add [commands]({%slug dock/commands/overview%}) to a __RadDock__ control. The commands you add here appear on the title bar of the control. To display the __DockCommand Collection Editor__, click on the ellipsis button for the __Commands__ property of the __RadDock__ control.

* Click the __Add__ button to append a new command to the collection.

* Use the up and down arrow buttons to rearrange the commands in the collection. This order determines the order in which command icons appear in the title bar of the __RadDock__ control.

* Select a command and click the __Remove__button to delete it from the list.

* Select individual commands to change properties for the specific command.![](images/dockcommandcollectioneditor.png)

Each command in the __Commands__ collection has the following properties

* __ClientTypeName:__Use this to indicate the type of command you want to add. The following classes are built-in:

* __Telerik.Web.UI.DockPinUnpinCommand:__ the built-in pin/unpin command.

* __Telerik.Web.UI.DockExpandCollapseCommand:__ the built-in expand/collapse command.

* __Telerik.Web.UI.DockCloseCommand:__ the built-in close command.

* __Telerik.Web.UI.DockCommand:__ the default class for custom commands. You can use this class directly, implementing the command behavior in the client-side __OnClientCommand__ or server-side __Command__ event handler, or you can create your own class that inherits from __DockCommand__.

* __Telerik.Web.UI.DockToggleCommand:__ the default class for custom commands with two states (such as the expand and collapse states of the built-in expand/collapse command).

* __AutoPostBack:__ Set this to __true__ if you want a postback where the server-side __Command__ event fires when the user clicks on the command.

* __OnClientCommand:__ this is the name of a Javascript function that responds to the client-side event when the user clicks on the command. This function can implement the response to the command and/or cancel the default processing of the command.

In addition to the three properties listed above, with custom commands you can set six additional properties:

* __Name:__ This string is the name of the command. It is useful for identifying the command in an event handler.

* __CssClass:__ This is the name of a class that gives the command its appearance on the title bar. Use this to customize the look of the custom commands you add to the title bar.

* __Text:__ This string is the text that appears as a tool tip when the user hovers the mouse over the command icon.

* __AlternateCssClass:__ (toggle commands only) This is the name of a class that gives the alternate state of the command its appearance on the title bar. Use this like the CssClass.

* __AlternateText:__ (toggle commands only) This is the text that appears as a tool tip when the user hovers the mouse over the command icon when it is in the alternate state.

* __State:__ (toggle commands only) This indicates the state of the command. It can be "Primary" or "Alternate".

# See Also

 * [Events Triggered on Command Execution]({%slug dock/commands/events-triggered-on-command-execution%})

 * [Styling Custom Commands]({%slug dock/commands/styling-custom-commands%})

 * [Specifying Command ToolTips]({%slug dock/commands/specifying-command-tooltips%})

 * [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%})

 * [Command]({%slug dock/server-side-programming/events/command%})
