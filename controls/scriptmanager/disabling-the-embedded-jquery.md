---
title: Disabling the Embedded jQuery
page_title: Disabling the Embedded jQuery | UI for ASP.NET AJAX Documentation
description: Disabling the Embedded jQuery
slug: scriptmanager/disabling-the-embedded-jquery
tags: disabling,the,embedded,jquery
published: True
position: 5
---

# Disabling the Embedded jQuery



## 

With __Q2 2012__developers wanting to use another version of jQuery different from the embedded one that ships with Telerik.Web.UI can do so by setting the __EnableEmbeddedjQuery__ property of RadScriptManager to __false__. To disable jQuery globally for all pages in your web site/project you can set the following __<appSetting/>__ in your web.config: <add key=”Telerik.ScriptManager.EnableEmbeddedjQuery” value=”false” /> If you then want to override this setting on a subset of your page you can set __RadScriptManager.EnableEmbeddedjQuery=true__.

>note  __Important!__ 
>The embedded jQuery version resides in __$telerik.$__ and is used heavily by the RadControls for ASP.NET AJAX. Because of that if you disable it you must provide another version of jQuery as otherwise most of the controls will not work. Another important fact you need to consider is that the controls depend on the specific version of jQuery they are tested against. (Normally this is the latest official jQuery version released before the latest RadControls for ASP.NET AJAX official release.) So it is possible that using an older version of jQuery will break the controls as well.
>

