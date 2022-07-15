---
title: Control the Linebreaks in RadEditor
description: See how to control whether a long string special characters will be rendered on the same line or will be split on multiple lines in RadEditor content area.
type: troubleshooting
page_title: Control the Linebreaks in RadEditor
slug: editor-control-line-break
position: 
tags: 
ticketid: 1572471
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
When I load content with more than 80 characters, it will break and continue in another row without any issue. But when I load content with special characters like tilde (~), it breaks with half row. If I remove the tilde(~) and replace it with a dash (-) or some other special character, it works fine.

## Solution
The observed behavior is due to how the browser (Chrome, Edge Chromium and IE) renders the provided content - the same rendering can be seen in a standard editable div element:

````HTML
<div contenteditable="true" style="border: 1px solid red;width:800px;height:500px;word-wrap:break-word;">
               <span style="background-color: white; font-family: Arial, sans-serif; font-size: 13.5pt;">Filename: testtesttesttesttestesttesttesst~test_v4~2019-11-26-11-12-04UTC~testtesttesttesttestesttesttessttesttesttesttesttestesttesttessttesttesttesttesttestesttesttesst</span>
</div>
````

The solution is to apply the line-break:anywhere; CSS style:

````HTML
<div contenteditable="true" style="line-break:anywhere;border: 1px solid red;width:800px;height:500px;word-wrap:break-word;">
               <span style="background-color: white; font-family: Arial, sans-serif; font-size: 13.5pt;">Filename: testtesttesttesttestesttesttesst~test_v4~2019-11-26-11-12-04UTC~testtesttesttesttestesttesttessttesttesttesttesttestesttesttessttesttesttesttesttestesttesttesst</span>
</div>
````

To apply the line-break: anywhere; style to RadEditor, create a EditorContentArea.css file with the following body rule:

````CSS
body {
    line-break: anywhere;
}
````

and load the CSS file in RadEditor's content area:

````ASPX
<telerik:RadEditor runat="server" ContentAreaCssFile="~/EditorContentArea.css"></telerik:RadEditor>
````

   
   