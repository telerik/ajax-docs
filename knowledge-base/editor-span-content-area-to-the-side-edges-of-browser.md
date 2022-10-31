---
title: Make RadEditor Content Area to fill the width of the page
description: I need the editor content area to be full width in the page.
type: troubleshooting
page_title: 
slug: editor-span-content-area-to-the-side-edges-of-browser
position: 
tags: editor, CSS, content area, width, border
ticketid: 1584755
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
The solution answers the questions below and allows you to customize the appearance of RadEditor:
- I need the editor content area to be full-width of the page.
- I'd like the content area to span to the very edges of the page.

## Solution
Here is how with simple CSS to reduce the left and right padding and the border of the content area of RadEditor when its Width is 100%:

````ASPX
<style> 
.RadEditor.reWrapper {
    border: none;
    padding: 0;
    position: absolute;
    left : 0;
}
</style>
<telerik:RadEditor runat="server" ID="RadEditor1" Width="100%"></telerik:RadEditor>
````
  
   