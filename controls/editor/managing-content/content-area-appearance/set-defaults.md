---
title: Setting Default Styles
page_title: Setting Default Styles | RadEditor for ASP.NET AJAX Documentation
description: Setting Default Styles
slug: editor/managing-content/content-area-appearance/set-defaults
tags: set,defaults
published: True
position: 0
---

# Setting Default Styles

In this help article you can learn how to define your own default styles for the editable content area of **RadEditor**.

>important This approach is available only when [ContentAreaMode]({%slug editor/functionality/editor-views-and-modes/contentareamode-property%}) is iframe. Using a content area rendered as a DIV element does not offer native capabilities to add external CSS files.

**RadEditor** offers the ability to easily apply various styles to its content area by using the [CssFiles collection]({%slug editor/functionality/toolbars/dropdowns/external-css-files%}) to add external CSS file/s and manually specify the CSS rules that you want to be loaded in the content area. 

For example, to set the editor to use white text on a black background as well as to change the default bullet / ordered lists shapes add an **EditorCssFile** item to the **CssFiles** collection that points to an external CSS file (e.g., **EditorContentArea.css**):

>caption Example 1: Adding an external CSS file to the editor's content area.

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
	<CssFiles>
		<telerik:EditorCssFile Value="~/EditorContentArea.css" />
	</CssFiles>
</telerik:RadEditor>
````

>caption Example 2: The EditorContentArea.css file's contents.

````CSS
body{
	color: white;
	background-color: black;
	padding:3px;
	background-image: none;
	margin: 0px;
	text-align: left;
}

ol{
	list-style-type: upper-roman;
}

ol ol{
	list-style-type: decimal;
}

ul{
	list-style-type: square;
}

ul ul{
	list-style-type: disc;
} 
````

More information about the **list-style-type** property is available in MSDN: [list-style-type Attribute | listStyleType Property](http://msdn.microsoft.com/en-us/library/ms530797.aspx).

You can also style other elements in the editor's content area by using the respective global CSS selectors.

## See Also

* [CSS Styles]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})

* [External CSS Files]({%slug editor/managing-content/content-area-appearance/set-defaults%})
