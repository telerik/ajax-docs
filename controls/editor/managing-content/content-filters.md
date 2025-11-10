---
title: Content Filters
page_title: Content Filters - RadEditor
description: Explore how to use content filters in the Editor control for managing and transforming user input.
slug: editor/managing-content/content-filters
tags: content,filters
published: True
position: 3
---

# Content Filters

This articles provides information about the built-in content filters of **RadEditor** and shows how you can implement a custom filter.

Filters in **RadEditor** are small code snippets, which are called in a sequence to process the editor content, when the mode (**HTML**, **Design** and **Preview**) is switched or when the page is submitted. This example demonstrates the editor's built-in content filters for comprehensive content processing while maintaining security.

## Built-in Content Filters

The built-in filters are exposed by the **EditorFilters** enumeration and are categorized by their functionality and default state:

>caption Complete List of Content Filters with Categories and Default States

| Filter Name | Description | Default State | Category |
| ------ | ------ | ------ | ------ |
| None | No filters | N/A | Configuration |
| RemoveScripts | Removes script tags from the editor content to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article. | Enabled | Security |
| EncodeScripts | Encodes all script tags from the content. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article. | Enabled | Security |
| StripCssExpressions | Strips CSS expressions to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article. | Enabled | Security |
| StripDomEventAttributes | Removes DOM event attributes from the HTML elements to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article. | Enabled | Security |
| StripJavaScriptUris | Removes dangerous JavaScript-based URI schemes from HTML attributes to reduce the possibility of cross-site scripting. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) article. | Enabled | Security |
| MakeUrlsAbsolute | Makes all URLs absolute (e.g., "https://server/page.html") | Disabled | URL Processing |
| FixUlBoldItalic | Changes deprecated `<u>` tag to span with CSS style | Enabled | HTML Cleanup |
| IECleanAnchors | IE only - removes current page URL from anchor links | Enabled | Browser-Specific |
| FixEnclosingP | Removes parent `<p>` tag if all content is inside it | Disabled | Browser-Specific |
| MozEmStrong | Changes `<b>` to `<strong>` and `<i>` to `<em>` in Mozilla - Obsolete since 2013 Q3 | Enabled | Browser-Specific |
| ConvertTags | Changes `<b>`, `<i>`, `<strike>` to `<strong>`, `<em>`, `<del>` | Enabled | HTML Formatting |
| ConvertFontToSpan | Changes deprecated `<font>` tags to compliant `<span>` tags | Enabled | HTML Formatting |
| OptimizeSpans | Removes unneeded span elements | Enabled | HTML Cleanup |
| ConvertToXhtml | Converts HTML to XHTML | Enabled | HTML Formatting |
| IndentHTMLContent | Indents HTML content for readability | Enabled | HTML Formatting |
| ConvertCharactersToEntities | Converts reserved characters to HTML entity names | Enabled | HTML Formatting |
| PdfExportFilter | Fixes some PDF export issues | Disabled | Export |
| ConvertInlineStylesToAttributes | Converts XHTML inline styles to email-compliant attributes | Disabled | Email |
| RemoveExtraBreaks | Strips all extra breaks inside tags like `<p>`, `<h1>`, etc. | Enabled | HTML Cleanup |
| DefaultFilters | Preset combination of 15 recommended filters | Preset | Configuration |

>note All security-focused filters (**RemoveScripts**, **EncodeScripts**, **StripCssExpressions**, **StripDomEventAttributes**, and **StripJavaScriptUris**) are enabled by default to provide comprehensive XSS protection. The **StripDomEventAttributes** and **StripJavaScriptUris** filters were enabled by default starting with the **2025 Q4** release.

>warning Disabling security filters (RemoveScripts, EncodeScripts, StripDomEventAttributes, StripJavaScriptUris, StripCssExpressions) can expose your application to XSS attacks. Only disable these filters if you fully trust the content source.

**Filters included in DefaultFilters:**
RemoveScripts, EncodeScripts, StripCssExpressions, StripDomEventAttributes, StripJavaScriptUris, FixUlBoldItalic, IECleanAnchors, MozEmStrong, ConvertTags, ConvertFontToSpan, OptimizeSpans, ConvertToXhtml, IndentHTMLContent, ConvertCharactersToEntities, RemoveExtraBreaks

**Filters NOT included in DefaultFilters:**
MakeUrlsAbsolute, FixEnclosingP, PdfExportFilter, ConvertInlineStylesToAttributes

## How to enable or disable the ContentFilters

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
