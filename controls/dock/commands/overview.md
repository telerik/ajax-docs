---
title: Overview
page_title: Commands Overview | RadDock for ASP.NET AJAX Documentation
description: Overview
slug: dock/commands/overview
tags: overview
published: True
position: 0
---

# Commands Overview



In the top right corner of the **RadDock** title bar, the **RadDock** control displays its command icons. Each icon represents a command that the user can trigger by clicking on the icon. The command icons can include any combination of three built-in commands, or you can add your own custom commands to the **RadDock** control.

## Built-in Commands

The built-in commands perform their function without any programming on your part. If you are not adding any custom commands to the **RadDock** control, you can specify which built-in commands using the **DefaultCommands** property. **DefaultCommands** can be set to any of the following values:

* **None**: the title bar shows no command icons.

* **PinUnpin**: When the **RadDock** control is docked, the title bar shows no icons. When the **RadDock** control is floating, the title bar includes a single "Pin" or "Unpin" icon:

	* ![](images/dock-pinicon.png)
	
		When the **RadDock** control is unpinned, the title includes a single "Pin" icon. When the user clicks the icon, the **RadDock** control becomes pinned, so that it cannot be dragged.

	* ![](images/dock-unpinicon.png)
		
		When the RadDock control is pinned, the title bar includes a single "Unpin" icon. When the user clicks this icon, the **RadDock** control becomes unpinned and can be dragged to a new location.

* **ExpandCollapse**: The title bar includes a single "Collapse" or "Expand" icon:

	* ![](images/dock-collapseicon.png)
	
		When the content area is showing, the title includes a single "Collapse" icon. When the user clicks the icon, the **RadDock** control minimizes, showing only its title bar.

	* ![](images/dock-expandicon.png)
	
		In the minimized state, the title bar includes a single "Expand" icon. When the user clicks this icon, the **RadDock** control expands to show its content area.

* **Close**: the title bar includes a single "Close" icon:

	* ![](images/dock-closeicon.png)
	
		When the user clicks the icon, the **RadDock** control closes, vanishing from the page.

* **All:** The title bar shows the "Pin" or "Unpin" icon (unless docked), followed by the "Collapse" or "Expand" icon, followed by the "Close" icon.

* **Other combinations**: In the designer, you can specify any combination of two icons by listing their built-in commands, separated by a comma:

	![](images/dock-defaultcommandscombination.png)

	At runtime, you can specify a combination of built-in commands using the "or" operator:


	__C#__
	
		RadDock1.DefaultCommands = Telerik.Web.UI.Dock.DefaultCommands.Close |
	                                  Telerik.Web.UI.Dock.DefaultCommands.PinUnpin;

	__VB__
	
		RadDock1.DefaultCommands = Telerik.Web.UI.Dock.DefaultCommands.Close _
	                                Or Telerik.Web.UI.Dock.DefaultCommands.PinUnpin


>tip The appearance of the built-in icons shown above is for the "Default" skin. Each skin provides its own icons for the built-in commands.
>


## Custom Commands

If you want to add your own custom commands to the title bar (or perform additional actions beyond the default behavior when the user clicks on the built-in commands), you must use the **Commands** collection. When the **Commands** property is set, **RadDock** ignores its **DefaultCommands** property and only those commands in the **Commands** collection appear on the title bar.

Add commands to the **Commands** collection using the [DockCommand Collection Editor]({%slug dock/design-time/dockcommand-collection-editor%}). When you add a built-in command type to the **Commands** collection, it automatically performs its default action, unless you cancel it from an **OnClientCommand** event handler. When you add a custom command, you can implement the response to user clicks using either the client-side **OnClientCommand** event or the server-side **Command** event. (You can also use these events to augment the default behavior of the built-in commands.)

Each command in the **Commands** collection has the following attributes:

* **ClientTypeName**: this specifies the command class that implements the command. The following classes are built-in:

	* **Telerik.Web.UI.DockPinUnpinCommand**: the built-in pin/unpin command.
	
	* **Telerik.Web.UI.DockExpandCollapseCommand**: the built-in expand/collapse command.
	
	* **Telerik.Web.UI.DockCloseCommand**: the built-in close command.
	
	* **Telerik.Web.UI.DockCommand**: the default class for single-value custom commands. You can use this class directly, implementing the command behavior in the client-side **OnClientCommand** or server-side **Command** event handler, or you can create your own class that inherits from **DockCommand**.
	
	* **Telerik.Web.UI.DockToggleCommand**: the default class for custom commands with two states (such as the expand and collapse states of the built-in expand/collapse command).

* **AutoPostBack**: Set this to **true** if you want a postback where the server-side **Command** event fires when the user clicks on the command.

* **OnClientCommand**: this is the name of a Javascript function that responds to the client-side event when the user clicks on the command. This function can implement the response to the command and/or cancel the default processing of the command.

	>tip If you cancel the default processing of a command, the server-side **Command** event does not fire.



* **Name**: This string is the name of the command. It is useful for identifying the command in an event handler. The built-in commands use the names "PinUnpin", "ExpandCollapse" and "Close". You can specify the name for custom commands.

* **CssClass**: This is the name of a class that gives the command its appearance on the title bar. Use this to customize the look of the custom commands you add to the title bar.

* **Text:** This string is the text that appears as a tool tip when the user hovers the mouse over the command icon.

In addition, the toggle commands have the following properties:

* **AlternateCssClass**: This is the name of a class that gives the alternate state of the command its appearance on the title bar. Use this like the **CssClass**.

* **AlternateText**: This is the text that appears as a tool tip when the user hovers the mouse over the command icon when it is in the alternate state.

* **State**: This indicates the state of the command. It can be "Primary" or "Alternate".



# See Also

 * [Events Triggered on Command Execution]({%slug dock/commands/events-triggered-on-command-execution%})

 * [Styling Custom Commands]({%slug dock/commands/styling-custom-commands%})

 * [Specifying Command ToolTips]({%slug dock/commands/specifying-command-tooltips%})

 * [DockCommand Collection Editor]({%slug dock/design-time/dockcommand-collection-editor%})
