---
title: Known Limitations
page_title: Known Limitations | RadStylesheetManager for ASP.NET AJAX Documentation
description: Known Limitations
slug: stylesheet/known-limitations
tags: known,limitations
published: True
position: 7
---


# Known StyleSheetManager Limitations


## StylesSheets Not Loaded

This problem can be caused by a .NET Framework bug, which is the following:
	
The Head section of your page contains a comment, where a `</ head >` tag is part of it - the .NET Framework searches for the first instance of a `</ head >` tag,
in order to insert the controls collection of the Head section. In this case, the RadStyleSheetManger is inserted in the comment (where the `</ head >` is present) and hence
the Styles and Skin never get rendered and applied.

You can test the controls in the **head** are rendered in the comment with the following simple example:

````ASP.NET
	<!DOCTYPE html>
	<html xmlns="https://www.w3.org/1999/xhtml">
	<head id="Head1" runat="server">
		<title></title>
		<!--This is a comment, containing a </head> tag.-->
	</head>
	<body>
		<form id="form1" runat="server">
		</form>
	</body>
	</html>
````
		
````C#
		
	protected void Page_Load(object sender, EventArgs e)
	{
		Head1.Controls.Add(new Literal() { Text = "<link id='test'/>" });
	}
		
````
````VB
			
	Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
		Head1.Controls.Add(New Literal() With {.Text = "<link id='test'/>"})
	End Sub
		
````


### Solution

In order to overcome any problematic behavior, related to this bug, we suggest to avoid using the **</ head >** in the comments of your Head section.
	
	
## Stylesheets Are Reloaded after Partial Postback

The UI for ASP.NET AJAX controls render with `<link>` elements for their skins so they can be known on the client. The RadStyleSheetManager code then loops through the Telerik stylesheet references and copies them to the `<head>` so the browser can download them if it hasn't already. This provides the browser the chance to download and apply them, so the controls added during a partial postback will look as expected.

If the stylesheets weren't in the `<head>` initially, this feature will cause the browser to request them again from their origin.

The stylesheets will not be in the `<head>` if it is missing its `runat="server"` attribute.

Note that even if they are, the browser may still choose to download them anew, and this is not behavior we can influence, it depends on the caching implementation of the browser.

This behavior would most often manifest as a flicker after the first partial rendering response where the page looses styiling and then renders again with the styles.

### Solution

Ensure that the `<head>` tag can be used in the server code (it has the `runat="server"` and `ID` attributes). For example:

````ASP.NET
<head id="theHead" runat="server">
</head>
````

