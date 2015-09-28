---
title: External CSS Files
page_title: External CSS Files | RadEditor for ASP.NET AJAX Documentation
description: External CSS Files
slug: editor/functionality/toolbars/dropdowns/external-css-files
tags: external,css,files
published: True
position: 7
---

# External CSS Files

In this help article you will learn how to import external CSS files into the content area of **RadEditor** using the **CssFiles** collection.

>note This approach is available only when [ContentAreaMode]({%slug editor/functionality/editor-views-and-modes/contentareamode-property%}) is iframe. Using a content area rendered as a DIV element does not offer native capabilities to add external CSS files. You can find out how to decorate the DIV content area here—[Decorating Div Content Area]({%slug editor/managing-content/content-area-appearance/decorating-div-contentareamode%}). 

By default, **RadEditor** uses the CSS styles available in the current page. Using the **CssFiles** collection, it can be configured to load external CSS files instead.

>note If a CSS file is added via the **CssFiles** collection, any CSS rules or files that derive from the main page will no longer affect the stylization of the content area.

Using external CSS files is useful in scenarios where the editable content area is required to have design, formatting or stylization that is different from the main page.

Thanks to the **CssFiles** collection, you can add multiple CSS files to the **RadEditor** content area, as shown in the examples below. 


>caption Example 1: Adding external CSS files via markup.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
	<CssFiles>
		<telerik:EditorCssFile Value="~/ExternalCssFiles/Styles1.css" />
		<telerik:EditorCssFile Value="~/ExternalCssFiles/Styles2.css" />
	</CssFiles>
</telerik:RadEditor>
````

>caption Example 2: Adding external CSS files from the code behind.
>

````C#
RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles1.css");
RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles2.css");
````
````VB
RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles1.css")
RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles2.css")
````

>note If you want to set external CSS files in dynamically loaded editors, make sure to load the Toolsfile before you add any external css files, e.g.
>
>	`RadEditor1.ToolsFile = "~/RadEditorTools-Simple.xml";`
>	`RadEditor1.CssFiles.Add(new EditorCssFile("~/Css/RadEditor.css"));`

>caption Example 3: Adding external CSS files via ToolsFile.xml file.

````XML
<root>
	....
	<cssFiles>    
		<item name="~/ExternalCssFiles/Styles1.css" />    
		<item name="~/ExternalCssFiles/Styles2.css" /> 
	</cssFiles>
	...
</root>
````

>caption Example 4: Example of an external CSS file.

````CSS
a.link
{
	color: #0000ff;
	font-weight: normal;
	font-style: italic;
}
.img
{
	border: none;
}
.text
{
	background-color: Red;
	font-size: 10px;
}
````

The CSS classes available in the external CSS files will populate the **Apply Css Class** dropdown. If you need to rearrange the items populated in the tool you need to use the [CssClasses collection]({%slug editor/functionality/toolbars/dropdowns/css-styles%}) to add the ones that should be visible for the end-user.


## See Also

* [Set Properties]({%slug editor/getting-started/set-properties%})

* [CSS Styles]({%slug editor/functionality/toolbars/dropdowns/css-styles%})

* [Setting Default Stylization]({%slug editor/managing-content/content-area-appearance/set-defaults%})
