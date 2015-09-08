---
title: Set Editor Background and Color
page_title: Set Editor Background and Color | RadEditor for ASP.NET AJAX Documentation
description: Set Editor Background and Color
slug: editor/managing-content/content-area-appearance/set-editor-background-and-color
tags: set,editor,background,and,color
published: True
position: 4
---

# Set Editor Background and Color

Set the RadEditor background and font color by using one of the following methods:

## Via CSS

The rich text content area of RadEditor is an editable IFRAME element. This IFRAME is a separate document that has its own CSS styles that originate from the RadEditor skin. The default appearance in the content area can be overridden by setting the editor's **CssFiles** property to point to your own CSS file, for example:

````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1">
 <CssFiles>
	 <telerik:EditorCssFile Value="~/EditorContentArea.css" />
 </CssFiles>
</telerik:radeditor> 
````

The CSS file should contain the following class:

````CSS
body
{
  background-color: red;
  background-image: url(image_path);
  color: black;
}
````

![](images/editor-handlingcontent005.png)

To style other HTML elements in the content area you need to define global css classes for them, e.g. **table**, **td**, **td**, **div**, **span**, etc

## Using Client-Side Code

Use the client-side **get_contentArea()** method to get a reference to the content area style client object. You can use the style client object to set style properties.

````ASP.NET
<telerik:RadEditor
   ID="RadEditor1"
   OnClientLoad="OnClientLoad"
   runat="server">
</telerik:RadEditor>
...
<script type="text/javascript">
	function OnClientLoad(editor, args) {
		var style = editor.get_contentArea().style;
		style.backgroundImage = "none";
		style.backgroundColor = "black";
		style.color = "red";
		style.fontFamily = "Arial";
		style.fontSize = 15 + "px";
	}
</script> 
````



## See Also

* [Setting Default Stylization]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [CSS Styles]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})

* [External CSS Files]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [Content Area Appearance Problems]({%slug editor/troubleshooting/content-area-appearance-problems%})
