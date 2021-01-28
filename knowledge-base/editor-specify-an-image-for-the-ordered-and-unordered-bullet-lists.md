---
title: Specify an image for the ordered and unordered lists
description: The article explains how to configure the bullet and numbered lists to use a custom image for the marker.
type: how-to
page_title: Is it possible to have a bullet and numbered lists with image markers?
slug: editor-specify-an-image-for-the-ordered-and-unordered-bullet-lists
position: 
tags: 
ticketid: 1444808
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The article explains how to configure the bullet and numbered lists to use a custom image for the marker.

## Solution
The solution is to define a bullet list with an image via the [list-style-image CSS property](https://www.w3schools.com/cssref/pr_list-style-image.asp): 

````CSS
ul {
       list-style-image: url('sqpurple.gif');
}
````

You can see how to import this style in RadEditor in this live demo: Editor - Customize Content Area, e.g.

###For ContentAreaMode="Div" you can make it like this:

````ASP.NET
<style>
    .reContentArea ol, .reContentArea ul 
    {
        list-style-image: url(https://via.placeholder.com/16);
    }
</style>
<telerik:RadEditor runat="server" ContentAreaMode="Div"></telerik:RadEditor>
````

###For ContentAreaMode="iframe" create a CSS file with contents:

**EditorContentAreaStyles.css**
````CSS
    ol, ul {
        list-style-image: url(https://via.placeholder.com/16);
    }
````

and import it in the content area with the ContentAreaCssFile or CssFiles property:

````ASP.NET
<telerik:RadEditor 
    ContentAreaCssFile="~/EditorContentAreaStyles.css"
    id="RadEditor1" 
    runat="server">
</telerik:RadEditor>
````



