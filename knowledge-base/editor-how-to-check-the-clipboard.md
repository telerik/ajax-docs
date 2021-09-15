---
title: Where is the table border when pasting from Excel or how to check the Clipboard
description: A great troubleshooting and debugging skill is to examine the clipboard content before pasting it in RadEditor for ASP.NET AJAX.
type: troubleshooting
page_title: Where is the table border when pasting from Excel or how to check the Clipboard
slug: editor-how-to-check-the-clipboard
position: 
tags: 
ticketid: 1528274
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
When I copy a table with borders and paste in the editor it is not showing the borders. Only showing the dotted outer border as follows which is not available in the excel.

## Solution

As explained at [RadEditor and the Browser Clipboard]({%slug editor/managing-content/pasting-content/overview}), the RadEditor’s paste functionality uses the browser’s DOM clipboard events. Therefore, any content pasted, is first processed by the browser. Images, HTML, MS Word and Excel, plain text and so on, are data types that are first translated to HTML by the browser and then fetched via the clipboard event’s data to the editor.

The observed behavior with the missing table border from Excel is a browser behavior and you can reproduce it by:

1. First Troubleshooting approach: pasting the excel content into an editable iframe/div element such as: 

	````ASPX
	<div style="height: 200px; width: 600px;border: 1px solid green; float: left; overflow: scroll;" contenteditable="true">
			Paste here the excel content and see whether the shades and the bold border style is provided by the clipboard
	</div>
	````

2. Second Troubleshooting approach: A sample dojo project with editable div and iframe elements for testing purposes is also available at http://dojo.telerik.com/@nlazarov/IFIPAR. Just click on the Run button to execute the code on the left and paste the excel content in the editable div/iframe elements in the right panel to see what is coming from Excel and the clipboard and gets pasted in the editable elements. 

3. Third Troubshooting approach: Attach to the [OnClientPasteHtml event](https://demos.telerik.com/aspnet-ajax/editor/examples/onclientpastehtml/defaultcs.aspx) of RadEditor, check for the Paste command execution and see the clipboard HTML from the args.get_value() method.

	````ASPX
		<script type="text/javascript">
		function OnClientPasteHtml(sender, args) {
			var commandName = args.get_commandName();
			var value = args.get_value();

			if (commandName == "Paste") {
				alert("the clipboard content is: " + value);
			}
		}
	</script>
	<telerik:RadEditor runat="server"
		OnClientPasteHtml="OnClientPasteHtml"
		ID="RadEditor1">
	</telerik:RadEditor>
	````

Once you'll examine the clipboard content, you will see that the problem is that the border information is simply not provided by the clipboard in Chrome and Edge and available at Internet Explorer. Since we do not have the border styles, there is no way to find programmatically whether the table coming from the excel file has a border or not. The dotted outer border in RadEditor is due to a CSS class applied to the RadEditor content area which highlights all table elements in it.

The only thing you can do to facilitate your end-users is to attach to the OnClientPasteHtml event of RadEditor and to set a default border to each table pasted in the content area. A sample is available here.

Another workaround is to copy from Excel and paste it into Outlook/Word.  Then you can copy it from Outlook/Word and paste it into the RadEditor and it will retain the grid lines.


   