---
title: Styling Custom Commands
page_title: Styling Custom Commands | UI for ASP.NET AJAX Documentation
description: Styling Custom Commands
slug: dock/commands/styling-custom-commands
tags: styling,custom,commands
published: True
position: 2
---

# Styling Custom Commands



## 

Every [skin]({%slug dock/appearance-and-styling/skins%}) provides a default icon that appears in the __RadDock__ title bar for custom commands. Typically, however, you will want to change this icon to a more meaningful image.

To modify the image that appears as a custom command's icon, you need to follow these steps:

1. Define a CSS class that identifies a background image to represent the custom command. You can use a separate CSS file and link to it, or you can define the CSS class in the <head> tag of the Web page. The CSS class you define is applied to the <a> element for the command on the rendered Web page.

````ASPNET
	    <head runat="server">
	        <title>Untitled Page</title>
	        <style type="text/css">
	            .MyCustomStyle
	            {
	                width: 15px !important;
	                background: url(../MyImages/CustomCommand.gif) !important;
	            }
	        </style>
	    </head>
````



1. Set the __CssClass__ property of the command to your new CSS class:

````ASPNET
	    <telerik:raddock runat="server" id="RadDock1" text="Custom Command">  
	        <Commands>    
	            <telerik:DockCommand 
	                CssClass="MyCustomStyle"        
	                Name="doSomething"        
	                OnClientCommand="HandleDoSomething" />    
	            <telerik:DockExpandCollapseCommand />  
	        </Commands>
	    </telerik:raddock>
````



>tip If the custom command has two states (when using Telerik.Web.UI.DockToggleCommand), set the __AlternateCssClass__ property of the command to supply an image for the alternate state.
>


# See Also

 * [Overview]({%slug dock/commands/overview%})

 * [DockCommand Collection Editor]({%slug dock/design-time/dockcommand-collection-editor%})

 * [Tutorial: Creating a Custom Skin]({%slug dock/appearance-and-styling/tutorial:-creating-a-custom-skin%})
