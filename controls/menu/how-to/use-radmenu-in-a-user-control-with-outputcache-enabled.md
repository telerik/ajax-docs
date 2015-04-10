---
title: Use RadMenu in a User Control with OutputCache Enabled
page_title: Use RadMenu in a User Control with OutputCache Enabled | UI for ASP.NET AJAX Documentation
description: Use RadMenu in a User Control with OutputCache Enabled
slug: menu/how-to/use-radmenu-in-a-user-control-with-outputcache-enabled
tags: use,radmenu,in,a,user,control,with,outputcache,enabled
published: True
position: 6
---

# Use RadMenu in a User Control with OutputCache Enabled





## 

Suppose you need to cache a user control which has a RadMenu control in it.

````ASPNET
	    <%@ control language="C#" autoeventwireup="true" codefile="Menu.ascx.cs" inherits="Menu" %>
	    <%@ outputcache duration="10" varybyparam="None" %>
	    <%@ register assembly="Telerik.Web.UI" namespace="Telerik.Web.UI" tagprefix="telerik" %>
	    <telerik:RadMenu ID="RadMenu1" runat="server">
````



After a postback the menu will lose reference to its scripts and css styles. Here is a screenshot of a typical case when this happens after postback:![RadMenu without Styles](images/menu_nostyles.png)

Also you might receive javascript error: "Telerik is undefined"

The reason for this is that when the aspx page postbacks, it receives the cached output which doesn't contain registration for the css styles and script files of the control. __SOLUTION__ The solution is to manually register the skin and the java script files. __Part I - Registering the css styles__

1. Find the __Skins__ folder in your local installation of Telerik.Web.UI. With default installation the path to the skins folder would be: *Program Files\telerik\RadControls for ASPNET AJAX Q1 2008\Skins*

1. Copy the Skins folder (or just the skin which you need and the common css for the control you use) in the root of your application.

1. Register the common css file for the control and the skin specific css file in the head of the __aspx__ page. For __RadMenu__ with __Default__ skin you need to register the following files:

````ASPNET
	    <head runat="server">
	        <link href="~/Skins/Menu.css" rel="stylesheet" type="text/css" />
	        <link href="~/Skins/Default/Menu.Default.css" rel="stylesheet" type="text/css" />
	    </head>
````



4. Set the __EnableEmbeddedBaseStylesheet__ and __EnableEmbeddedSkins__ to False.



__Part II - Registering the scripts__

1. Find the __Scripts__folder in your local installation of Telerik.Web.UI. With default installation the path to the scripts folder would be: *Program Files\telerik\RadControls for ASPNET AJAX Q1 2008\Sripts*The Scripts folder contains the __Common__ folder which is used by all controls and __javascript__ resources for __individual__ controls allocated in folders after the controls name.

1. Copy the __Common__ folder and the __Menu__ in the root of your application:

![RadMenu Scripts Folder](images/menu_scriptsfolder.png)

3. Register th scripts with a script manager like this:

````ASPNET
	    <asp:ScriptManager ID="ScriptManager1" runat="server">
	        <Scripts>
	            <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	            <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	            <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	            <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	            <asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	        </Scripts>
	    </asp:ScriptManager>
````



4. Set the __EnableEmbeddedScripts__ to False.

5. Set the __RegisterWithScriptManager__ property of the control to False (ex: __<telerik:RadMenu ID="RadMenu1" runat="server" RegisterWithScriptManager="false">__) .


