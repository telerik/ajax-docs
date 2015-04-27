---
title: Migrating from RadSpell ASP.NET to ASP.NET AJAX
page_title: Migrating from RadSpell ASP.NET to ASP.NET AJAX | RadSpell for ASP.NET AJAX Documentation
description: Migrating from RadSpell ASP.NET to ASP.NET AJAX
slug: spell/changes-and-backward-compatibility/migrating-from-radspell-asp.net-to-asp.net-ajax
tags: migrating,from,radspell,asp.net,to,asp.net,ajax
published: True
position: 1
---

# Migrating from RadSpell ASP.NET to ASP.NET AJAX



## Migration from RadSpell Classic to RadSpell

1. To add RadSpell to an existing ASP.NET web application:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (check the topic called Adding ASP.NET AJAX Configuration Elements to an Existing Web Site)

1. Add a ScriptManager control to the page (or user control) in which you are going to add any Telerik UI for ASP.NET AJAX.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control you can check [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadSpell's directive<%@ Register Assembly="RadSpell.Net2" Namespace="Telerik.WebControls" TagPrefix="rads" %>with the new one of RadSpell:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

1. Replace the classic RadSpell's declaration:<rads:radspell id="RadSpell1" runat="server"/>with the new RadSpell for ASP.NET AJAX declaration:<telerik:RadSpell ID="RadSpell1" runat="server"></telerik:RadSpell>

1. Add Handlers to the "httpHandlers" section of the web.config. The handlers can also be added through the Smart Tag of the control in the design environment. The handlers are used for the spell check dialog and for spell checking.

>note Be aware that most of the Web.Config has changed between standard ASP.NET applications and AJAX-enabled applications. If you are porting ASP.NET standard applications be sure to look at the material provided in the links for step 1.
>


````XML
	<httpHandlers>
	 <add path="Telerik.Web.UI.DialogHandler.aspx" verb="*" type="Telerik.Web.UI.DialogHandler, Telerik.Web.UI, Version=2007.3.1425.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" validate="false" />
	 <add path="Telerik.Web.UI.SpellCheckHandler.axd" verb="*" type="Telerik.Web.UI.SpellCheckHandler, Telerik.Web.UI, Version=2007.3.1425.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" validate="false" />
	</httpHandlers> 
````


