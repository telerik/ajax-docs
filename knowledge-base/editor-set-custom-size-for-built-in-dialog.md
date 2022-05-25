---
title: Set a Custom Size for a Built-in Dialog of RadEditor
description: Learn how to Set a Custom Size for a Built-in Dialog of RadEditor - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Set a Custom Size for a Built-in Dialog of RadEditor
slug: editor-set-custom-size-for-built-in-dialog
position: 
tags: 
ticketid: 1566239
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2013.3</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The solution below shows how to set a custom Size for a Built-in Dialog of RadEditor.

## Solution
The var commandName = args.get_commandName(); line will return the command name of the opened dialog being ImageManager, LinkManager or another one, you can use it to add a check for the desired dialog you'd like to modify:

````ASP.NET
<script>
    function OnClientCommandExecuted(editor, args) {
        if (editor.get_dialogOpener()) {
            var commandName = args.get_commandName();

            if (editor.get_dialogOpener()._getDialogContainer) {
                dialogReference = editor.get_dialogOpener()._getDialogContainer(commandName);
                setTimeout(function () {
                    dialogReference.set_height("600px");
                    dialogReference.set_width("950px");

                }, 1000);

            }
        }
    }
</script>
<telerik:RadEditor ID="RadEditor1" runat="server"  OnClientCommandExecuted="OnClientCommandExecuted">
    <ImageManager ViewPaths="~/" />
</telerik:RadEditor>
````


## See Also
* [The Autosize Feature of the Built-in Dialogs is Enabled]({%slug editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled%})
 * [ExternalDialogsPath Property]({%slug editor/functionality/dialogs/externaldialogspath-property%})

 * [Resize Dialogs]({%slug editor/functionality/dialogs/examples/resize-dialogs%})

 * [DialogsCssFile Property]({%slug editor/appearance-and-styling/dialogscssfile-property%})

 * [Demo: Editor - Customize Built-in Dialogs](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)

 * [Demo: Window - Automatic Size Adjustment](https://demos.telerik.com/aspnet-ajax/window/examples/autosize/defaultcs.aspx)
   
   
 