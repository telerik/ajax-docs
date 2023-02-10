---
title: How to build a custom Line Spacing Dropdown
description: Learn how to create a line spacing dropdown, from which you can change line distance within the text - RadEditor for ASP.NET AJAX
type: troubleshooting
page_title: Build a custom Line Spacing Dropdown
slug: editor-custom-line-spacing-dropdown
position: 
tags: 
ticketid: 1596623
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
Here is an example demonstrating how to create a line spacing dropdown, from which you can change line distance within the text.



## Solution
The steps to create the custom tool are:

* Define the dropdown on the toolbar inside the <Tools> tag
* Attach to the OnClientCommandExecuting client-side event of the editor
* Check for the selection in the content area and depending on it to apply a style.lineHeight with the selected dropdown value
 
````ASPX
<telerik:RadEditor ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting" runat="server" Height="600px">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorDropDown Name="LineSpacing" Text="Line Spacing" PopupWidth="110" PopupHeight="90">
                <telerik:EditorDropDownItem Name="Default" Value="" />
                <telerik:EditorDropDownItem Name="Single space" Value="20px" />
                <telerik:EditorDropDownItem Name="1.5 Lines" Value="35px" />
                <telerik:EditorDropDownItem Name="Double spacing" Value="50px" />
            </telerik:EditorDropDown>
        </telerik:EditorToolGroup>
    </Tools>
    <Content>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
    </Content>
</telerik:RadEditor>
<script>
    function OnClientCommandExecuting(editor, args) {
        if (!args || !args.get_commandName) return;
        var name = args.get_name();
        var val = args.get_value();
        var cArea = editor.get_contentArea();
        var selectedElement = editor.getSelectedElement();
        debugger
        if (name == "LineSpacing") {
            if (cArea.firstChild && cArea.firstChild.tagName == "p") {
                cArea.firstChild.style.lineHeight = val;
            }
            else if (selectedElement != null && selectedElement.tagName.toLowerCase() == "p") {
                selectedElement.style.lineHeight = val;
            }
            if (cArea.firstChild && cArea.firstChild.tagName == "span") {
                cArea.firstChild.style.lineHeight = val;
            }
            else if (selectedElement != null && selectedElement.tagName.toLowerCase() == "span") {
                selectedElement.style.lineHeight = val;
            }
            else if (selectedElement == null || selectedElement.tagName.toLowerCase() == "body") {
                var allParas = cArea.getElementsByTagName("p");
                for (var i = 0; i < allParas.length; i++) {
                    allParas[i].style.lineHeight = val;
                }
            } 

            args.set_cancel(true);
        }
    }
</script>
````
   
