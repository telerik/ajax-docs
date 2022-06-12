---
title: Disable RadEditor and browser context menus for a specific HTML element
description: Learn how to hide RadEditor context menu and not to show the default browser context menu for a specific FORM element tag - SELECT
type: how-to
page_title: Disable RadEditor and browser context menus for a specific HTML element
slug: editor-hide-context-menu-for-select-element
position: 
tags: 
ticketid: 1568601
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
Learn how to hide the RadEditor context menu and not to show the default browser's context menu for a specific FORM element tag - SELECT

## Solution
The solution is the following:
 
````ASP.NET
    <script type="text/javascript">
        function CallContextMenu(editor) {
            editor.attachEventHandler("oncontextmenu", function (e) {
                var oSelection = editor.getSelection().getParentElement(); //get the selected element
                if (oSelection.tagName.toLowerCase() == "select") {
                    $telerik.cancelRawEvent(e); //disable the browser's context menu 
                    return false;
                }
            });
        }
    </script>
    <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="CallContextMenu">
        <Content>
            <select disabled="true"> <option selected="true">Content A</option> </select>
        </Content>
    </telerik:RadEditor>
````
````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        RadEditor1.ContextMenus.FindByTagName("SELECT").Enabled = false; //disable the RadEditor's context menu for select elements
    }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        RadEditor1.ContextMenus.FindByTagName("SELECT").Enabled = False
    End Sub
````

## See Also
* [Disable Context Menu]({%slug editor/functionality/context-menus/disable-context-menu-%})
* [attachEventHandler client method]({%slug editor/client-side-programming/methods/attacheventhandler%})
    


 