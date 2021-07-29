---
title: Copy and paste table with border from Excel to RadEditor not showing the borders
description: 
type: troubleshooting
page_title: editor-paste-table-from-excel-does-not-show-the-border
slug: editor-paste-table-from-excel-does-not-show-the-border
position: 
tags: 
ticketid: 1528274
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
When I copy a table with borders and paste into the editor it is not showing the borders. Only showing the dotted outer border in the content area which is not available in excel.

## Solution
The observed behavior is a browser behavior and you can reproduce it by pasting the same content from Excel into an editable iframe/div element: http://dojo.telerik.com/@nlazarov/IFIPAR. Click on the Run button to execute the code on the left and paste the excel content in the editable div/iframe elements in the right panel to repro the same behaviors as in RadEditor. 

The problem is due to that the border information is not provided by the browser clipboard in Chrome and Edge. There is also no way to determine programmatically whether the table coming from the excel file has a border or not. The dashed outer border in RadEditor is due to a CSS class applied to the RadEditor content area which highlights all table elements in it.

The only thing you can do to facilitate your end-users is to attach to the [OnClientPasteHtml event](https://demos.telerik.com/aspnet-ajax/editor/examples/onclientpastehtml/defaultcs.aspx) of RadEditor and to set a border to each table pasted in the content area. A sample is available at [Default Table Style in RadEditor
](https://www.telerik.com/forums/default-table-style-in-radeditor#Oe0LeB3RQ0adWjwPOrT-4Q).

Another workaround is to copy from Excel and paste it into Outlook / Word.  Then you can copy it from Outlook and paste it into the RadEditor and it will retain the grid lines.
