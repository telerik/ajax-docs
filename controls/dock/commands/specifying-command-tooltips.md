---
title: Specifying Command ToolTips
page_title: Specifying Command ToolTips | UI for ASP.NET AJAX Documentation
description: Specifying Command ToolTips
slug: dock/commands/specifying-command-tooltips
tags: specifying,command,tooltips
published: True
position: 3
---

# Specifying Command ToolTips



The commands that appear in the title bar of a RadDock control display a tooltip when the user hovers the mouse over them:
>caption 

![](images/dock-tooltip.png)

By default, commands have the following built-in tooltips:


>caption  

| Command | Tooltip text |
| ------ | ------ |
| __PinUnpin__ (when unpinned)|"Pin"|
| __PinUnpin__ (when pinned)|"Unpin"|
| __ExpandCollapse__ (when expanded)|"Collapse"|
| __ExpandCollapse__ (when collapsed)|"Expand"|
| __Close__ |"Close"|
|Custom Commands|"Custom"|

You can easily override these tooltips, to localize the Web page, or simply to substitute your own strings. (For example, you probably want to change the default tooltip text for custom commands.)

To customize the tooltips for the built-in commands, use the following properties:

* The __PinText__ property specifies the tooltip for the __PinUnpin__ command when the __RadDock__ control is unpinned.

* The __UnpinText__ property specifies the tooltip for the __PinUnpin__ command when the __RadDock__ control is pinned.

* The __CollapseText__ property specifies the tooltip for the __ExpandCollapse__ command when the __RadDock__ control is expanded.

* The __ExpandText__ property specifies the tooltip for the __ExpandCollapse__ command when the RadDock control is collapsed.

* The__CloseText__ property specifies the tooltip for the __Close__ command.

>tip These properties are marked with the __LocalizableAttribute__ and can be automatically localized by the .NET Framework if the application contains the proper resource strings. For more information about the integrated in the .NET Framework localization capabilities, see the following MSDN article:
>[http://msdn2.microsoft.com/en-us/library/ms228208(VS.80).aspx](http://msdn2.microsoft.com/en-us/library/ms228208(VS.80).aspx)
>


To customize the tooltips for custom commands, use the __Text__ and __AlternateText__ properties of the command object.

## Example

The following example shows a __RadDock__control with customized tooltips:

````ASPNET
	<telerik:RadDock
	   ID="RadDock1"
	   runat="server"
	   OnClientCommand="HandleCommands"
	   CollapseText="Minimize"
	   ExpandText="Restore">
	 <Commands>
	    <telerik:DockCommand
	        CssClass="DoSomethingClass"
	        Name="DoSomething"
	        Text="Do Something" />
	    <telerik:DockExpandCollapseCommand />
	    <telerik:DockCloseCommand />
	 </Commands>
	</telerik:RadDock> 
````



# See Also

 * [Overview]({%slug dock/commands/overview%})

 * [DockCommand Collection Editor]({%slug dock/design-time/dockcommand-collection-editor%})
