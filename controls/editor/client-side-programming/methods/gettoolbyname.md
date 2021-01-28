---
title: getToolByName
page_title: getToolByName - RadEditor
description: Check our Web Forms article about getToolByName.
slug: editor/client-side-programming/methods/gettoolbyname
tags: gettoolbyname
published: True
position: 11
---

# getToolByName

Returns tool so for the purposes of client-side manipulation.

`function getToolByName(name)`

The solution below demonstrates how to implement an adaptive custom button that will be highlighted when an image in the content area is selected. When the image is not selected the button will be disabled:

>caption Example 1

````ASP.NET
<script type="text/javascript">
	function OnClientSelectionChange(editor, args)
	{
		var selElem = editor.getSelection().getParentElement(); //return the currently selected object in the content area
		var oTool = editor.getToolByName("MyCustomImageDialog"); //get a reference to the custom tool
		if (selElem.tagName == "IMG") //if the selected element is of image type, make the tool's icon active
		{
			oTool.setState(0); //Enable Tool Icon
		}
		else
		{
			oTool.setState(-1); //Disable Tool Icon
		}
	}
</script>
<telerik:RadEditor RenderMode="Lightweight" OnClientSelectionChange="OnClientSelectionChange" runat="server"
	ID="RadEditor2">
	<Content>
	Sample content: <img src="https://www.telerik.com/demos/aspnet/for ASP.NET AJAX-futures/Editor/Img/productLogo.gif"></img>
	</Content>
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="MyCustomImageDialog" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
````



The `<telerik:EditorTool Name="MyCustomImageDialog" />` inner tag will be rendered as a button on the toolbar. To improve its appearance, you should provide .gif file for it. The next step is to define a CSS cass having the same name as the custom button (.MyCustomImageDialog) in which you should set the url path of the background-image property to point to this gif, e.g.

````CSS
.MyCustomImageDialog
{
	background-image: url(https://www.telerik.com/RadControls/Editor/Skins/Custom/buttons/Underline.gif) !important;
}
````

By default the EditorSplitButton tools memorize the value of the lastly selected command and executes it when the header icon is clicked by the user. To expand the EditorSplitButtondropdown the tiny arrow icon should be clicked. To change the default behavior and be able to expand every time the dropdown by clicking on the header icon use the code solution below:

>caption Example 2

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor)
	{
		//get a reference to the split button tool that you want to modify
		var tool = editor.getToolByName("PasteStrip");
		//Disable header update functionality  
		tool.set_updateHeader(false);
	}
</script>
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
</telerik:RadEditor>
````




