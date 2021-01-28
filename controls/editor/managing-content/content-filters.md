---
title: Content Filters
page_title: Content Filters - RadEditor
description: Check our Web Forms article about Content Filters.
slug: editor/managing-content/content-filters
tags: content,filters
published: True
position: 3
---

# Content Filters

This articles provides information about the built-in content filters of **RadEditor** and shows how you can implement a custom filter.

Filters in Telerik Editor for ASP.NET AJAX are small code snippets, which are called in a sequence to process the editor content when the modes(**HTML**, **Design** and **Preview**) are switched or when the page is submitted.

The built-in filters are exposed by the **EditorFilters** enumeration. They are listed in the following table, along with their description:

>caption Built-in Content Filters

| Member | Description |
| ------ | ------ |
|None|No filters|
|RemoveScripts|This filter deletes the script tags to reduce the possibility of cross-site scripting and other script-related problems. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article.|
|EncodeScripts|This filter encodes all script tags from the content. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article.|
|StripCssExpressions|This filter strips CSS expressions to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article.|
|StripDomEventAttributes|This filter removes attribute DOM events from the HTML elements to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article.|
|MakeUrlsAbsolute|This filter makes all src and href attributes in the editor content have absolute URLs.|
|FixUlBoldItalic|This filter remove deprecated U tags and replace them with CSS - XHTML.|
|FixEnclosingP|This filter removes a paragraph if the whole content is inside it.|
|IECleanAnchors|This filter removes the current page href from all anchor (#) links|
|MozEmStrong|This filter changes b,strong and i,em in Mozilla browsers|
|ConvertTags|This filter changes `<b>`, `<i>` and `<strike>` tags successively to `<strong>`, `<em>` and `<del>`.|
|ConvertFontToSpan|This filter changes deprecated font tags to compliant span tags|
|OptimizeSpans|This filter changes/removes unneeded span elements|
|ConvertToXhtml|This filter converts the HTML from the editor content area to valid XHTML|
|IndentHTMLContent|This filter indents the HTML content so it is more readable when you view the code|
|ConvertCharactersToEntities|This filter converts reserved characters to their html entity names.|
|ConvertInlineStylesToAttributes|This filter converts XHTML compliant inline style attributes to Email compliant element attributes.|
|PdfExportFilter|This filter fixes some pdf export issues.|
|RemoveExtraBreaks|This filter strips all extra brakes inside some tags like p, h1, etc.|
|DefaultFilters|This filter enables all default filters (**RemoveScripts**, **FixUlBoldItalic**, **IECleanAnchors**, **MozEmStrong**, **ConvertFontToSpan**, **ConvertToXhtml**, **IndentHTMLContent**, **EncodeScripts**, **OptimizeSpans**, **ConvertCharactersToEntities**, **ConvertTags**, **StripCssExpressions**, **RemoveExtraBreaks**).|

**ContentFilters**

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" ContentFilters="MakeUrlsAbsolute,FixEnclosingP" runat="server" />
````

````C#	
RadEditor1.ContentFilters = Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute | Telerik.Web.UI.EditorFilters.FixEnclosingP;
````
````VB
RadEditor1.ContentFilters = Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute Or Telerik.Web.UI.EditorFilters.FixEnclosingP
````

You can enable and disable filters individually using server-side code:



````C#
RadEditor1.EnableFilter(Telerik.Web.UI.EditorFilters.FixEnclosingP); RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute);
````
````VB
RadEditor1.EnableFilter(Telerik.Web.UI.EditorFilters.FixEnclosingP)
RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute)
````

For example to disable the RemoveScript server method of RadEditor, which strips the SCRIPT tags in the content area. set **RadEditor1.DisableFilter(EditorFilters.RemoveScripts);**

## Implementing a Custom Filter

There are two steps that you should take to implement a custom filter:

1. Create a JavaScript function/class that implements one or more of the following filter methods:

	* **getDesignContent(content)** - Called when the editor is moving from some other mode to DESIGN mode
	
	* **getHtmlContent(content)** - Called when the editor is moving from some other state to HTML mode
	
	* **set_description(string)** - specifies a more detailed description for the module
	
	* **set_name(string)** - specifies the name of the module
	
	* **set_enabled(boolean)** - enable or disable the module depending on the boolean parameter
	
	* **set_isDom(boolean)** - specifies whether the filter will work with DOM objects or String, e.g. the boolean parameter specifies whether the content parameter of the getHtmlContent(content) and getDesignContent(content) functions will return DOM objects or String.The filter used in the [Custom Content Filters demo](https://demos.telerik.com/aspnet-ajax/editor/examples/contentfilters/defaultcs.aspx) is of type string and converts the lowercase letters to uppercase
	
	* **MyFilter.initializeBase(this)** - the initialization function of the module
	
1. Register the filter with the editor. The best way to achieve this is to register an **OnClientLoad** function that instantiates the filter and adds it to the filters manager.

## Custom Filter Example

The filter modifies the editor content so that in **HTML** mode it is presented with capital letters while in **Design** mode, it is shown in lower-case letters. This is a fairly simplistic and unrealistic scenario that is only used to demonstrate what is necessary to create and "hook" a filter into Telerik RadEditor. In a real life scenario, the filter would likely employ a number of regular expressions of varying complexity that will make the necessary changes to the content.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
</telerik:RadEditor>
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{    
		editor.get_filtersManager().add(new MyFilter());
	}
	MyFilter = function()
	{    
		MyFilter.initializeBase(this);    
		this.set_isDom(false);    
		this.set_enabled(true);    
		this.set_name("RadEditor filter");    
		this.set_description("RadEditor filter description");
	}
	MyFilter.prototype =
	{    
		getHtmlContent : function(content)    
		{      
			var newContent = content;      
			//Make changes to the content and return it      
			newContent = newContent.toUpperCase();      
			return newContent;    
		},       
		getDesignContent : function(content)    
		{      
			var newContent = content;
			//Make changes to the content and return it      
			newContent = newContent.toUpperCase();
			return newContent;
		}
	}
	MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);
</script>
````

## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Prevent Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%})

 * [Built-In Content Filters](https://demos.telerik.com/aspnet-ajax/Editor/Examples/BuiltInContentFilters/DefaultCS.aspx)

 * [Custom Content Filters](https://demos.telerik.com/aspnet-ajax/Editor/Examples/ContentFilters/DefaultCS.aspx)
