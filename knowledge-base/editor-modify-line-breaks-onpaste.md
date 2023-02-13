---
title: How to paste with paragraphs for new lines from the clipboard
description: When pasting from clipboard for example from notepad, there is no paragraphs at the end of the line. See how to configure the paste operation in RadEditor to convert the br tags to paragraphs - RadEditor for ASP.NET AJAX
type: how-to
page_title: Paste with paragraphs for new lines from the clipboard in RadEditor
slug: editor-modify-line-breaks-onpaste
position: 
tags: 
ticketid: 1595442
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
When pasting from notepad, there is no paragraphs for new lines coming from the clipboard, but single line breaks <br> tags. See the solution to learn how to configure the paste operation of RadEditor to convert the `<br>` to `<p>` tags.

## Solution
RadEditor does not modify the provided content from the clipboard of the Operating System. What you can do is to modify the pasted content by attaching to the OnClientPasteHtml event property of RadEditor. You should check if the executed command (args.get_commandName()) is "Paste" and replace the `<br>` tags with paragraphs, e.g.

````ASPX
<telerik:RadEditor ID="RadEditor1" OnClientPasteHtml="OnClientPasteHtml" runat="server" Height="600px"></telerik:RadEditor>
<script>
    function OnClientPasteHtml(editor, args) {
        var toPaste = args.get_value();
        toPaste = toPaste.replace(new RegExp("<br>", "ig"), "</p><p>");
        toPaste = toPaste.replace(/(<br\/>)+/gi, "</p><p>");
        args.set_value(toPaste);
    };
</script>
````
   
    
