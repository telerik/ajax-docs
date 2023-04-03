---
title: Add a custom font to RadEditor
description: Learn how to register a custom font in the FontNames collection and content area of the Telerik WYSIWYG HTML editor - RadControls for ASP.NET AJAX.
type: how-to
page_title: Add a custom font to RadEditor fontName dropdown and content area
slug: editor-custom-font
position: 
tags: 
ticketid: 1603884
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
Learn how to register a custom font in the FontNames collection and content area of the Telerik WYSIWYG HTML editor.

## Solution
Here are the steps to add a new font to the FontNames dropdown:
1. First, you need to make sure that the custom font is installed on the client machine so that the browser can render and present it. For example, put the following span with a reference to the custom font in a simple HTML page and see if it will be displayed properly: 

````HTML
<span style="font-family: CustomFontName">Test</span>
````

2. If this step is successfully achieved, it is time to configure RadEditor.
You can then add the following code to the ToolsFile.xml file under the <fontNames> section:

```XML
<root>    
    <tools name="MainToolbar" enabled="true">    
        <tool name="FontName" />  
    </tools>    
    <fontNames>    
        <item name="CustomFontName" />    
        <item name="Arial" />    
        <item name="Tahoma" />  
    </fontNames>
</root>
````

This code will add the custom font named "CustomFontName" to the font list of the RadEditor, along with the Arial and Tahoma ones, which you can replace with others or remove.

3. To use the custom font in the RadEditor content area, select some text or work, and apply CustomFontName from the FontName dropdown. It will wrap it in a span with CustomFontName font-family, e.g.

````HTML
<span style="font-family: CustomFontName;">test</span>
````
 and render it in the same way as in the suggested test in point 1.

If you'd like to apply the custom font to the content area, set the CssFiles property of RadEditor to point to a CSS file, containing the following CSS setting:

````CSS
body {
    font-family: CustomFontName;
}
````

 

