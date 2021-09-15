---
title: How to apply a predefined CSS class to a block element in the content area?
description: The code solution shows how to customize the ApplyClass tool of RadEditor for ASP.NET AJAX and apply the selected CSS class to the selected block element in its content area.
type: how-to
page_title: Apply a predefined CSS class to a block element in the content
slug: editor-apply-a-predefined-css-class-to-a-block-element
position: 
tags: 
ticketid: 1534913
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>all</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The code solution shows how to customize the ApplyClass tool of RadEditor for ASP.NET AJAX and apply the chosen CSS class from the dropdown to the selected block element in the content area without wrapping the selection in a <span> tag.

## Solution
Here is the code:

````ASPX
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
    <Content>
        <p>para 1 with some text</p>
        <p>para 2 with some text</p>
        <span>span 3 with some text</span>
        <div>div 2 with some text</div>
    </Content>
</telerik:RadEditor>
<script>
    function OnClientCommandExecuting(editor, args) {
        var commandName = args.get_commandName();
        if (commandName == "ApplyClass") {
            var element = editor.getSelectedElement();
            var selectedClassName = args.get_value()

            if (element && !Telerik.Web.UI.Editor.Utils.isEditorContentArea(element)) {
                var tagName = element.tagName;
                switch (tagName) {
                    case "P":
                    case "DIV":
                    case "FONT":
                    case "SPAN":
                        editor.selectElement(element);
                        element.className = selectedClassName;
                        break;
                }
            }
        }
    }
</script>
````



