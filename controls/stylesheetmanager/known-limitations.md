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


* StylesSheets Not Loaded

	This problem can be caused by a .NET Framework bug, which is the following:
		
	The Head section of your page contains a comment, where a **</ head >** tag is part of it - the .NET Framework searches for the first instance of a **</ head >** tag,
	in order to insert the controls collection of the Head section. In this case, the RadStyleSheetManger is inserted in the comment (where the **</ head >** is present) and hence
	the Styles and Skin never get rendered and applied.
	
	You can test the controls in the **head** are rendered in the comment with the following simple example:

````ASPNET
	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
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
````VB.NET
			
	Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
		Head1.Controls.Add(New Literal() With {.Text = "<link id='test'/>"})
	End Sub
		
````

In order to overcome any problematic behavior, related to this bug, we suggest to avoid using the **</ head >** in the comments of your Head section.
	