---
title: RTL Support
page_title: RTL Support | UI for ASP.NET AJAX Documentation
description: RTL Support
slug: asyncupload/accessibility-and-internationalization/rtl-support
tags: rtl,support
published: True
position: 2
---

# RTL Support

## 

**RadAsyncUpload** include support for right-to-left locales using the direction attribute. If you set **dir="rtl"** on the **RadAsyncUpload** or for any parent HTML element, the control reverses order of the elements and aligns itself to the right side of its container:

````ASPNET
<telerik:RadAsyncUpload id="RadAsyncUpload1" runat="server" dir="rtl" Skin="Office2007">
</telerik:RadAsyncUpload>
````

This produces the following result:

![Right To Left](images/asyncupload_rau_rtl.png)

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Localization]({%slug asyncupload/accessibility-and-internationalization/localizing-radasyncupload%})

 * [Disable Chunk Upload]({%slug asyncupload/functionality/chunk-upload%})
