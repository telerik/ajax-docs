---
title: Remove the entire anchor tag with the text by overriding the Unlink command of RadEditor
description: See how to override the default Unlink command of RadEditor to remove the whole link and the text too
type: troubleshooting
page_title: Remove the entire anchor tag with the text by overriding the Unlink command of RadEditor
slug: editor-unlink-and-erase-the-whole-anchor
position: 
tags: 
ticketid: 1570845
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to override the default Unlink command of RadEditor in order to remove the whole link/anchor and its text. The default behavior of the Unlink command is to remove only the `<a>` tag and to keep the text inside it.

## Solution
You can delete the whole anchor along with the text inside it using the following Unlink command override:

````ASP.NET
<script>
    function OnClientCommandExecuting(editor, args) {
        var commandName = args.get_commandName();
                    
        if (commandName == "Unlink") {
            editor.selectElement(editor.getSelectedElement())
            editor.get_document().execCommand('delete');
        }

        args.set_cancel(true);
    }
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
    <Content>  
        <style>
            a {
                background-image: url(images/Icon2.png) !important;
                background-repeat: no-repeat !important;
            }
        </style>
        Some text and an <a id="id1" name="id2" alt="test">Anchor</a> in the content area.
    </Content>
    <ContextMenus>
        <telerik:EditorContextMenu TagName="A">
            <telerik:EditorTool Name="SetLinkProperties" ShowText="true" />
            <telerik:EditorTool Name="Unlink" ShowText="true" />
        </telerik:EditorContextMenu>
    </ContextMenus>
</telerik:RadEditor>
````
 
     