---
title: fire
page_title: fire | UI for ASP.NET AJAX Documentation
description: fire
slug: editor/client-side-programming/methods/fire
tags: fire
published: True
position: 2
---

# fire



## 

Executes RadEditor commands.


>caption  

|  __function fire(COMMAND_NAME, args)__  |  |  |
| ------ | ------ | ------ |
| __COMMAND_NAME__ | __string__ |The command name represents the name of the tool as it is specified in the inner <telerik:EditorTool tag, in the codebehind or in ToolsFile.xml.|
| __args__ | __object__ |Returns the needed information about the event|

The example below demonstrates how to add a custom MyBold button to the editor's toolbar and when pressed to fire the editor's bold command:

````ASPNET
	    <telerik:RadEditor ID="RadEditor1" runat="server">
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



>note The custom command should be placed BELOW the editor declaration.
>


# See Also

 * [Custom Dialogs]({%slug editor/functionality/dialogs/custom-dialogs%})
