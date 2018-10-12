---
title: Disable Plugins
page_title: Disable Plugins | RadAsyncUpload for ASP.NET AJAX Documentation
description: Disable Plugins
slug: asyncupload/functionality/disable-plugins
tags: disable,plugins
published: True
position: 0
---

# Disable Plugins

## 

When setting **DisablePlugins** property to **true RadAsyncUpload** does not use either Silverlight or Flash modules to upload files. With **DisablePlugins** property set to **true** the **RadAsyncUpload** uses **File API** (if the browser supports it) or the IFrame module. You can set the **DisablePlugins** property through mark up or in the code-behind.

>note The **DisablePlugins** property is available As of Q3 2011.
>

Here is how you can set the property in the markup of your page:

````ASP.NET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" DisablePlugins="true"></telerik:RadAsyncUpload>
````

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[RTL Support]({%slug asyncupload/accessibility-and-internationalization/rtl-support%})

[Localization]({%slug asyncupload/accessibility-and-internationalization/localizing-radasyncupload%})
