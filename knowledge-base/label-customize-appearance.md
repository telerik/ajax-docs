---
title: Customize RadLabel appearance
description: See how to change the appearance of the RadLabel control.
type: how-to
page_title: Set a border, padding and a new color to the label
slug: label-customize-appearance
position: 
tags: 
ticketid: 1445843
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Theme Builder for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to change the appearance of the Label control.

## Solution
You can easily style the label component using the technique shown in this blog post:

* [Inspect the Generated HTML of a Control](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#inspect-the-generated-html-of-a-control)
* [See the Applied Styles](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#see-the-applied-styles)

For example by overriding the following class you will be able to apply your own font color, border and padding to the rendered label control:

````ASP.NET
<style>
    label.RadLabel {
        padding-right: 150px;
        padding-top: 15 px;
        border: 1px solid red;
        color: blue;
        font-size: 20px;
        height:31px;
    }
</style>
<telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadTextBox1" Text="Name"></telerik:RadLabel>
<telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="RadTextBox1"></telerik:RadTextBox><br />
````

