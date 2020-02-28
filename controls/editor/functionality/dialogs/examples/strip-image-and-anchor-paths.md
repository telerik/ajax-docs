---
title: Strip Image and Anchor Paths
page_title: Strip Image and Anchor Paths | RadEditor for ASP.NET AJAX Documentation
description: Strip Image and Anchor Paths
slug: editor/functionality/dialogs/examples/strip-image-and-anchor-paths
tags: strip,image,and,anchor,paths
published: True
position: 2
---

# Strip Image and Anchor Paths

TASK

You may require that URLs (both href and src) are expressed as full paths, instead of the default relative paths.

SOLUTION

RadEditor includes a new content filter **MakeUrlsAbsolute** that makes all URLs (href and src) in the editor content absolute (e.g. http://server/page.html instead of "page.html"). **MakeUrlsAbsolute** is disabled by default. To enable this filter, assign the filter to the RadEditor **ContentFilters** property:

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadEditor1.ContentFilters = Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute;
	}
} 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not IsPostBack Then
		RadEditor1.ContentFilters = Telerik.Web.UI.EditorFilters.MakeUrlsAbsolute
	End If
End Sub
````

>note **StripAbsoluteAnchorPaths** and **StripAbsoluteImagesPaths** properties are no longer available in favor of the new **MakeUrlsAbsolute** filter.

## Example

By default, an image path might look like the following example when viewed in HTML edit mode:

`<img alt="" src="/images/mydownloads/WebPages001.png" />`

With **MakeUrlsAbsolute** assigned to **ContentFilters** the path now shows the full path:

`<IMG alt="" src="http://localhost:49573/images/mydownloads/WebPages001.png">`

## See Also

 * [ASP.NET Web Site Paths](https://msdn2.microsoft.com/en-us/library/ms178116.aspx)
