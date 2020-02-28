---
title: Right-to-left Support
page_title: Right-to-left Support | RadFileExplorer for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: fileexplorer/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-left Support

The **RadFileExplorer** fully supports right-to-left (RTL) language locales. In order to turn on the RTL support you should set **dir=rtl to the html or body** element or to its parent element.

````ASP.NET
<div style="direction: rtl;">
	 <telerik:RadFileExplorer RenderMode="Lightweight" runat="server" ID="FileExplorer1" Width="520px" Height="520px">
		 <Configuration ViewPaths="~/Images" UploadPaths="~/Images"
			 DeletePaths="~/Images" />
	 </telerik:RadFileExplorer>
 </div>
````

![radfileexplorer-rtl-screenshot](images/radfileexplorer-rtl-screenshot.png)

## See Also

 * [See this live in an online demo](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/righttoleftsupport/defaultcs.aspx)
