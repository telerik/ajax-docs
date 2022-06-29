---
title: Change the text of the custom RadMenu based context menu item
description: Learn how to set the text of the custom content menu item when RadMenu is used for a context menu in RadEditor
type: how-to
page_title: Change the text of the custom RadMenu based context menu item
slug: editor-set-text-context-menu-item
position: 
tags: 
ticketid: 1570826
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
See how to set the text of the custom content menu item when RadMenu is used for a context menu in RadEditor

## Solution

Solution 1: The solution is to modify the text of the context menu item on the client when RadEditor loads as shown below:

````ASP.NET
            <script>
                function OnClientLoad(editor, args) {
                    var contextMenu = editor.get_radContextMenu(); //get a reference to the context menu
                    contextMenu.findItemByText("StaticTable").set_text("Static Table"); //find the item by text and set its new text
                    contextMenu.findItemByText("StandardTable").set_text("Standard Table");
                }
            </script>
            <telerik:RadEditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
                <Content>  
                        <table>
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                </Content>
                <Tools>
                    <telerik:EditorToolGroup>
                        <telerik:EditorTool Name="StaticTable" Text="Static Table" />
                        <telerik:EditorTool Name="StandardTable" Text="Static Table" />
                    </telerik:EditorToolGroup>
                </Tools>
                <ContextMenus>
                    <telerik:EditorContextMenu TagName="TABLE">
                        <telerik:EditorTool Name="StaticTable" Text="Static Table" />
                        <telerik:EditorTool Name="StandardTable" Text="Static Table" />
                    </telerik:EditorContextMenu>
                    <telerik:EditorContextMenu TagName="TD">
                        <telerik:EditorTool Name="StaticTable" Text="Static Table" />
                        <telerik:EditorTool Name="StandardTable" Text="Static Table" />
                    </telerik:EditorContextMenu>
                </ContextMenus>
            </telerik:RadEditor>
````
   
Solution 2:
Set the UseRadContextMenu="false" and the editor will start to use the Text property of the EditorContextMenu > EditorTool tag.


    