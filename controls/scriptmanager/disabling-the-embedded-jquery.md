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



## 

With **Q2 2012** developers wanting to use another version of jQuery different from the embedded one that ships with Telerik.Web.UI can do so by loading the external jQuery in a `<script>` tag, setting the **EnableEmbeddedjQuery** property of RadScriptManager to **false** and adding references to Core.js, jQueryExternal.js and jQueryPlugins.js.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
      <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
    </Scripts>
</telerik:RadScriptManager>
````

To disable jQuery globally for all pages in your web site/project you can set the following **<appSetting/>** in your web.config: <add key=”Telerik.ScriptManager.EnableEmbeddedjQuery” value=”false” /> If you then want to override this setting on a subset of your page you can set **RadScriptManager.EnableEmbeddedjQuery = true**.

>note  **Important!** 
>The embedded jQuery version resides in **$telerik.$** and is used heavily by the RadControls for ASP.NET AJAX. Because of that if you disable it you must provide another version of jQuery as otherwise most of the controls will not work. Another important fact you need to consider is that the controls depend on the specific version of jQuery they are tested against. (Normally this is the latest official jQuery version released before the latest RadControls for ASP.NET AJAX official release.) So it is possible that using an older version of jQuery will break the controls as well.
>

