---
title: Filling the Entire Page
page_title: Filling the Entire Page - RadSplitter
description: Check our Web Forms article about Filling the Entire Page.
slug: splitter/layout/filling-the-entire-page
tags: filling,the,entire,page
published: True
position: 3
---

# Filling the Entire Page

A common use of **RadSplitter** is to split an entire Web page. To do this, you need to set **Width** and **Height** properties to "100%". However, when doing this, you can encounter problems or unexpected behavior.

To achieve the expected behavior, you need set the following attributes on the elements of the ASPX page:

* The `<HTML>` tag should have its height set to 100% and its margin set to 0px: `<html style="height:100%" >`

* The `<BODY>` tag should have its height set to 100% and its margin set to 0px. (The default margin of the body is 5 pixels.) `<body style="height:100%;margin:0px" >`

* Any elements that contain the splitter control must also have those properties set: `<form style="height:100%;margin:0px" >`

* Optionally, if you want your page to be standards compliant, you can set the **DOCTYPE** directive to: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "https://www.w3.org/tr/xhtml11/dtd/xhtml11.dtd">`

* Optionally, you can remove the page scroll bars so that the application is as close as possible to a desktop application: `<body scroll="no" >`

## Example

The following example shows how to configure **RadSplitter** to fill the entire page and to achieve consistent behavior by setting the height of all of its parent elements.

>note The example is **cross browser compatible.** 

````ASP.NET
<%@ Page language="c#" AutoEventWireup="false" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "https://www.w3.org/tr/xhtml11/dtd/xhtml11.dtd">
<html style="height:100%">  
 <head>
   <title>FullWindow</title>
 </head>
 <body style="margin:0px;height:100%;overflow:hidden;" scroll="no">  
   <form id="Form2" method="post" runat="server"
		 style="height:100%;margin:0px" >
	 <asp:ScriptManager ID="ScriptManager1" runat="server" />
	 <telerik:RadSplitter RenderMode="Lightweight" id="MainSplitter" runat="server"   
		 Height="100%"
		 Width="100%">
	   <telerik:RadPane id="LeftPane" runat="server"
						Width="100px">
		 <!-- Place the content of the pane here -->
	   </telerik:RadPane>
	   <telerik:RadSplitBar id="RadSplitBar1" runat="server" />
	   <telerik:RadPane id="MainPane" runat="server" >
		 <!-- Place the content of the pane here -->
	   </telerik:RadPane>
	 </telerik:RadSplitter>
   </form>
 </body>
</html> 		
````

## See Also

 * [Specifying Size]({%slug splitter/layout/specifying-size%})
