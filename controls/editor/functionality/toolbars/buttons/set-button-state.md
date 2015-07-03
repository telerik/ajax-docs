---
title: Set Button State
page_title: Set Button State | RadEditor for ASP.NET AJAX Documentation
description: Set Button State
slug: editor/functionality/toolbars/buttons/set-button-state
tags: set,button,state
published: True
position: 3
---

# Set Button State

RadEditor toolbar buttons have four states:

* **Enabled** / **Active** (![Normal State](images/editor-button-state-normal.png))
*  **Hovered** / **Highlighted** (![Hovered State](images/editor-button-state-hovered.png))
* **Selected** / **Pressed** (![Selected State](images/editor-button-state-selected.png))
* **Disabled** / **Inactive** (![Disabled State](images/editor-button-state-disabled.png))

You can control the appearance of the button in each state via CSS (see **Examples 2-8** below). This is often needed for [custom buttons]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%}).

You can also set a button's state via JavaScript (see **Example 1**). The Hovered state requires a user action and cannot be set through code).

To do this, use the `setState` method the buttons expose. It takes a member of the `Telerik.Web.UI.Editor.CommandStates` enum:

* `Telerik.Web.UI.Editor.CommandStates.Disabled` which is equivalent to `-1` and results in a **Disabled** button
* `Telerik.Web.UI.Editor.CommandStates.Off` which is equivalent to `0` and results in a normal button state (**Enabled**)
* `Telerik.Web.UI.Editor.CommandStates.On` which is equivalent to `1` and results in a **Selected** state

**Example 1** demonstrates how to implement a custom button that will be enabled when an image in the content area is selected and disabled in all other cases.

>caption **Example 1**: Enable/disable a toolbar button in the editor based on an image selection.

````JavaScript
<script type="text/javascript">
	function OnClientSelectionChange(editor, args) {
		var selElem = editor.getSelection().getParentElement(); //return the currently selected object in the content area
		var oTool = editor.getToolByName("Custom1"); //get a reference to the custom tool
		if (selElem.tagName == "IMG") //if the selected element is of image type, make the tool's icon active
		{
			oTool.setState(0); //Enable Tool Icon
		}
		else {
			oTool.setState(-1); //Disable Tool Icon
		}
	}
</script>
````
````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientSelectionChange="OnClientSelectionChange">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="Custom1" />
		</telerik:EditorToolGroup>
	</Tools>
	<Content>
		<img src="http://docs.telerik.com/devtools/aspnet-ajax/images/introduction-Telerik_UI_for_aspnet-ajax_logo_documentation.png"></img>
	</Content>
</telerik:RadEditor>
````

To put the custom button in pressed state use oTool.setState(**1**);

## Set Icons for Toolbar Button States

To set an icon for different states of the custom button use CSS selectors for the corresponding [render mode]({%slug editor/mobile-support/render-modes%}).

### Classic RenderMode

>caption **Example 2**: Generic CSS to prepare the states of a custom button when RenderMode="Classic".

````CSS
/*Active state*/
.reToolbar.<skinName> .<commandName>
{
	background-image: url(MyActiveStateImage.gif);
}

/*Hovered state*/
.reToolbar.<skinName> .<commandName>:hover
{
	background-image: url(MyHoveredStateImage.gif);
}

/*Selected state*/
.reToolbar.<skinName> .reTool_selected .<commandName>
{
	background-image: url(MySelectedStateImage.gif);
}
````

where `skinName` corresponds to the Skin you are using and `commandName` is the Name of the custom button you have.

>caption **Example 3**: CSS rules for a button with name Custom1 that uses the images from Figures 1-3


````CSS
/*Active state*/
.reToolbar.Default .Custom1
{
	background-image: url('http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/Custom.gif');
}

/*Hovered state*/
.reToolbar.Default .Custom1:hover
{
	background-image: url('http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/CustomDialog.gif');
}

/*Selected state*/
.reToolbar.Default .reTool_selected .Custom1
{
	background-image: url('http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/Print.gif');
}  
````


>caption Figures 1-3: Three images that you can use for custom button states:


### Lightweight RenderMode

>caption **Example 4**: Generic CSS to prepare the states of a custom button when RenderMode="Lightweight".

````CSS
/*Active state*/
.reToolBar.RadEditor_<skinName> .re<commandName>:before
{
	content: "\e681";
}

/*Hovered state*/
.reToolBar.RadEditor_<skinName> .re<commandName>:hover:before
{
	content: "\e64d";
}

/*Selected state*/
.reToolBar.RadEditor_<skinName> .re<commandName>.reToolSelected:before
{
	content: "\e600";
}
````


>caption **Example 5**: CSS rules for a button with name Custom1 that uses font icons from the Telerik font


````CSS
/*Active state*/
.reToolBar.RadEditor_Default .reCustom1:before
{
	content: "\e681";
}

/*Hovered state*/
.reToolBar.RadEditor_Default .reCustom1:hover:before
{
	content: "\e64d";
}

/*Selected state*/
.reToolBar.RadEditor_Default .reCustom1.reToolSelected:before
{
	content: "\e600";
}
````


>tip: You can also set the font-family and use your own font-icons.


### Mobile RenderMode

>caption **Example 4**: Generic CSS to prepare the states of a custom button when RenderMode="Mobile".

````CSS
/*Active state*/
.RadEditor_<skinName> .reToolList .reIcon<commandName>:before
{
	content: "\e681";
}

/*Hovered state*/
.RadEditor_<skinName> .reToolList .reIcon<commandName>:hover:before
{
	content: "\e64d";
}

/*Selected state*/
.RadEditor_<skinName> .reToolList .reButtonSelected .reIcon<commandName>:before
{
	content: "\e600";
}
````

````CSS
/*Active state*/
.RadEditor_Default .reToolList .reIconCustom1:before
{
	content: "\e681";
}

/*Hovered state*/
.RadEditor_Default .reToolList .reIconCustom1:hover:before
{
	content: "\e64d";
}

/*Selected state*/
.RadEditor_Default .reToolList .reButtonSelected .reIconCustom1:before
{
	content: "\e600";
}
````

>tip: You can also set the font-family and use your own font-icons.


## See Also

 * [RadEditor Render Modes]({%slug editor/mobile-support/render-modes%})


<style>
img{
	vertical-align: middle;
}
</style>

