---
title: Migrating to RadColorPicker for ASP.NET AJAX
page_title: Migrating to RadColorPicker for ASP.NET AJAX | RadColorPicker for ASP.NET AJAX Documentation
description: Migrating to RadColorPicker for ASP.NET AJAX
slug: colorpicker/changes-and-backwards-compatibility/migrating-to-radcolorpicker-for-asp.net-ajax
tags: migrating,to,radcolorpicker,for,asp.net,ajax
published: True
position: 1
---

# Migrating to RadColorPicker for ASP.NET AJAX



## Migrating an Existing Standard ASP.NET Application

To add **RadColorPicker** to an existing ASP.NET web application, follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any Telerik® UI for ASP.NET Ajax.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop **RadColorPicker** controls to your web page.
