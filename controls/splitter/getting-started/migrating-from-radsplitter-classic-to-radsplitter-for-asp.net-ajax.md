---
title: Migrating from RadSplitter Classic to RadSplitter for ASP.NET AJAX
page_title: Migrating from RadSplitter Classic to RadSplitter for ASP.NET AJAX | RadSplitter for ASP.NET AJAX Documentation
description: Migrating from RadSplitter Classic to RadSplitter for ASP.NET AJAX
slug: splitter/getting-started/migrating-from-radsplitter-classic-to-radsplitter-for-asp.net-ajax
tags: migrating,from,radsplitter,classic,to,radsplitter,for,asp.net,ajax
published: True
position: 1
---

# Migrating from RadSplitter Classic to RadSplitter for ASP.NET AJAX



## 

To migrate a Web application from **RadSplitter** "Classic" to **RadSplitter** for ASP.NET AJAX you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any Telerik UI for ASP.NET AJAX.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic **RadSplitter** directive

````ASPNET
	<%@ Register Assembly="RadSplitter.Net2" Namespace="Telerik.WebControls" TagPrefix="RadSpl" %>
````

with the new one of **RadSplitter** for ASP.NET AJAX:

````ASPNET
	<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
````



1. Replace the classic **RadSplitter** controls declarations:

````ASPNET
	     
	<RadSpl:RadSplitter id="RadSplitter1" runat="server"/>
	<RadSpl:RadPane id="RadPane1" runat="server"/>
	<RadSpl:RadSplitBar id="RadSplitBar1" runat="server"/>
	<RadSpl:RadSlidingZone id="RadSliding1" runat="server"/>
	<RadSpl:RadSlidingPane id="RadSlidingPane1" runat="server"/>
				
````

with the new **RadSplitter** declarations:

````ASPNET
	     
	<telerik:RadSplitter id="RadSplitter1" runat="server"/>
	<telerik:RadPane id="RadPane1" runat="server"/>
	<telerik:RadSplitBar id="RadSplitBar1" runat="server"/>
	<telerik:RadSlidingZone id="RadSlidingZone1" runat="server"/>
	<telerik:RadSlidingPane id="RadSlidingPane1" runat="server"/>
				
````



# See Also

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSplitBar Object]({%slug splitter/client-side-programming/radsplitbar-object%})

 * [RadSlidingZone Object]({%slug splitter/client-side-programming/radslidingzone-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})
