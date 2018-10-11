---
title: Disabling the Embedded jQuery
page_title: Disabling the Embedded jQuery | RadScriptManager for ASP.NET AJAX Documentation
description: Disabling the Embedded jQuery
slug: scriptmanager/disabling-the-embedded-jquery
tags: disabling,the,embedded,jquery
published: True
position: 5
---

# Disabling the Embedded jQuery

This article explains how to disable and/or replace the built-in jQuery that comes with the Telerik controls with your own.

As of **Q2 2012**, developers wanting to use another version of jQuery, different from the embedded one that ships with Telerik.Web.UI, can do so by:

1. loading the external jQuery in a `<script>` tag
1. setting the `EnableEmbeddedjQuery` property of `RadScriptManager` to `false`
1. adding references to `Core.js`, `jQueryExternal.js` and `jQueryPlugins.js`


>caption Disable the built-in jQuery on a concrete page.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
      <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
    </Scripts>
</telerik:RadScriptManager>
````

>caption Disable the built-in jQuery globally for all pages in your web site/project. 

````web.config
<appSettings>
	<add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false" />
</appSettings>
````


If you want to override this setting on a subset of your pages you can set  the particular `RadScriptManagerInstance.EnableEmbeddedjQuery = true`.

>important
>The embedded jQuery version resides in `$telerik.$` and is used heavily by the UI for ASP.NET AJAX controls. If you disable it, you must provide another version of jQuery. Otherwise most of the controls will not work. 

>caption Add your own jQuery to the page

````ASP.NET
<head>
	<script src="my-desired-jQuery-version.js"></script>
</head>
<body>
	<form>
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
		      <Scripts>
		        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
		        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
		        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
		    </Scripts>
		</telerik:RadScriptManager>
	</form>
</body>
````

>tip The UI for ASP.NET AJAX controls depend on the [specific version of jQuery they are tested against]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery %}#jquery-version-history-in-telerik-ui-controls), so it is possible that using a significantly different version of jQuery will break the controls.

