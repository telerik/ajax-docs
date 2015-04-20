---
title: Disable Plugins
page_title: Disable Plugins | UI for ASP.NET AJAX Documentation
description: Disable Plugins
slug: asyncupload/functionality/disable-plugins
tags: disable,plugins
published: True
position: 0
---

# Disable Plugins

## 

When setting __DisablePlugins__ property to __true RadAsyncUpload__ does not use either Silverlight or Flash modules to upload files. With __DisablePlugins__ property set to __true__ the __RadAsyncUpload__ uses __File API__ (if the browser supports it) or the IFrame module. You can set the __DisablePlugins__ property through mark up or in the code-behind.

>note The __DisablePlugins__ property is available As of Q3 2011.
>

Here is how you can set the property in the markup of your page:

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" DisablePlugins="true"></telerik:RadAsyncUpload>
````

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[RTL Support]({%slug asyncupload/accessibility-and-internationalization/rtl-support%})

[Localization]({%slug asyncupload/accessibility-and-internationalization/localizing-radasyncupload%})
