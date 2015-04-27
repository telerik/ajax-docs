---
title: Migration from RadWindow for ASP.NET (Classic) to RadWindow for ASP.NET AJAX
page_title: Migration from RadWindow for ASP.NET (Classic) to RadWindow for ASP.NET AJAX | RadWindow for ASP.NET AJAX Documentation
description: Migration from RadWindow for ASP.NET (Classic) to RadWindow for ASP.NET AJAX
slug: window/changes-and-backward-compatibility/migration-from-radwindow-for-asp.net-(classic)-to-radwindow-for-asp.net-ajax
tags: migration,from,radwindow,for,asp.net,(classic),to,radwindow,for,asp.net,ajax
published: True
position: 1
---

# Migration from RadWindow for ASP.NET (Classic) to RadWindow for ASP.NET AJAX



## 

You can find below the list of steps to migrate your web applications from the classic RadWindow to RadWindow"Prometheus":

1. To add RadWindow "Prometheus" to an existing ASP.NET web application you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (check the topic called Adding ASP.NET AJAX Configuration Elements to an Existing Web Site)

1. Add a ScriptManager control to the page (or user control) in which you are going to add any controls from the Telerik UI for ASP.NET AJAX suite. <asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control you can check [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadWindow's directive **<%@ Register Assembly="RadWindow.NET2" Namespace="Telerik.WebControls" TagPrefix="radW" %>** with the new one of RadWindow for ASP.NET AJAX **:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>**

1. Replace the classic RadWindow's declaration:**<radW:RadWindow id="RadWindow1" Runat="server">Sample Content</radW:RadWindow>** with the new RadWindow for ASP.NET AJAX one: **<telerik:RadWindow ID="RadWindow1" runat="server"></telerik:RadWindow>**





# See Also

 * [Overview]({%slug window/changes-and-backward-compatibility/overview%})
