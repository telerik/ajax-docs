---
title: fire
page_title: fire | RadEditor for ASP.NET AJAX Documentation
description: fire
slug: editor/client-side-programming/methods/fire
tags: fire
published: True
position: 2
---

# fire

Executes RadEditor commands.

`function fire(COMMAND_NAME, args)`

|  argument  | type | description |
| ------ | ------ | ------ |
| **COMMAND_NAME** | **string** |The command name represents the name of the tool as it is specified in the inner `<telerik:EditorTool` tag, in the code behind or in ToolsFile.xml.|
| **args** | **object** |Returns the needed information about the event|

The example below demonstrates how to add a custom MyBold button to the editor's toolbar and when pressed to fire the editor's bold command:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="MyBold" ShowText="true" ShowIcon="false" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
<script type="text/javascript">
	Telerik.Web.UI.Editor.CommandList["MyBold"] = function (commandName, editor, args)
	{
		editor.fire("Bold");
	};
</script>
````



>tip The custom command should be placed BELOW the editor declaration.


## See Also

 * [Custom Dialogs]({%slug editor/functionality/dialogs/custom-dialogs%})
