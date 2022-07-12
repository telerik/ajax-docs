---
title: Extra space is rendered above a paragraph in Chrome
description: Chrome renders a big line of space above the opening paragraph by applying the margin-block-start of 1em to it. See how to override it and fix the problem in the content area of RadEditor.
type: troubleshooting
page_title: Extra space is rendered above a paragraph in Chrome
slug: editor-extra-space-on-top-of-paragraph
position: 
tags: 
ticketid: 1572145
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
Chrome renders a big line of space above the opening paragraph by applying a margin-block-start: 1em; to it:

````HTML
<div style="border: 1px solid green; width: 500px; height:500px; overflow: scroll;"  contenteditable="true">
    <p>test</p>
</div>
````

This might be annoying to your users. You can see how to reduce the gap by overriding the margin rule and import it into the content area of RadEditor in the solution section.

## Solution
The solution is to override the default para style by defining a new P CSS selector for the content area of RadEditor:

1) Create a CSS file -> EditorContentArea.css with the following content:

````CSS
p {
    margin-block-start: 0em;
}
````

and load the EditorContentArea.css file in the content area via the ContentAreaCssFile property:

````ASPX
<telerik:RadEditor ID="RadEditor1" runat="server" ContentAreaCssFile="~/EditorContentArea.css">
    <Content>
        <p>test</p>
    </Content>
</telerik:RadEditor>
````
   
  