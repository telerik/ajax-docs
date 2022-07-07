---
title: How to visualize a br line break tag in RadEditor
description: Learn how to visualize a line break tag in RadEditor for ASP.NET AJAX
type: how-to
page_title: How to visualize a br line break tag in RadEditor
slug: editor-visualize-br-line-break-tag
position: 
tags: 
ticketid: 1571705
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
Learn how to visualize a line break tag in RadEditor for ASP.NET AJAX

## Solution
To visualize a line break in the content area of an editable iframe/div element which is the content area of RadEditor, you have to apply a CSS class containing content attribute as shown below:

````ASP.NET
<style>
    br {
        content: "&nbsp;" !important;
        background-image: url(images/Icon2.png) !important;
        border: 1px solid red;
        background-repeat: no-repeat !important;
        width: 8px !important;
        height: 8px !important;
        display: block;
        position: relative;
        padding: 5px 0px 0px 0px;
    }

    p {
        background-image: url(images/Icon2.png) !important;
        background-repeat: no-repeat !important;
        background-position: bottom;
        border: 1px solid blue;
    }
</style>
<telerik:RadEditor ID="RadEditor1" runat="server">
<Content>
    <p>paragraph 1</p>
    <br />
    <p>paragraph 2</p>
</Content>
</telerik:RadEditor>
<div contenteditable="true" style="width: 500px;height: 500px; border: 1px solid green;">
    <p>paragraph 1</p>
    <br />
    <p>paragraph 2</p>
</div>
````

You can find more detail and ideas at [Can you target <br /> with css?](https://stackoverflow.com/questions/899252/can-you-target-br-with-css)

 