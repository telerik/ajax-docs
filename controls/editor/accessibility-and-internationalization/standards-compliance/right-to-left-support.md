---
title: Right-to-left Support
page_title: Right-to-left Support | RadEditor for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: editor/accessibility-and-internationalization/standards-compliance/right-to-left-support
tags: right-to-left,support
published: True
position: 2
---

# Right-to-left Support

The **RadEditor** supports right-to-left (RTL) language locales. In order to configure the **RadEditor** in RTL mode you should go through the following steps:

1. RTL Support for the **RadEditor** Register the **Editor_RTL.css** file in the `<head>` section of your webpage, i.e: `<link rel="stylesheet" type="text/css" href="./RTL/Editor_RTL.css" />`

1. RTL for **RadEditor** dialogs:Use the **DialogsCssFile** property to include the **RadEditor_Dialogs_RTL.css** file in the dialogs of **RadEditor**: `<telerik:RadEditor RenderMode="Lightweight" DialogsCssFile="./RTL/RadEditor_Dialogs_RTL.css"></telerik:RadEditor>`

1. RTL for the content area of the **RadEditor**:Use the **ContentAreaCssFile** property of **RadEditor** to include the **EditorContentArea_RTL.css** file: `<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" SkinID="DefaultSetOfTools" Height="350px" DialogsCssFile="./RTL/RadEditor_Dialogs_RTL.css" ContentAreaCssFile="./RTL/EditorContentArea_RTL.css"></telerik:RadEditor>`. The most important part of the **EditorContentArea_RTL.css** file is the **direction: rtl;** for the `<body>` element.

>note The CSS files are long and for readability they are not placed in this article. You can find them in the **Live Demos\Editor\Examples\RightToLeft\RTL** folder under your controls for ASP.NET AJAX installation folder, which usually is	C:\Program Files [(x86) if on a 64bit machine]\Telerik\Telerik® UI for ASP.NET Ajax QX YYYY\

>note You can see this live in the [Editor / Right-to-left Support Online Demo](http://demos.telerik.com/aspnet-ajax/editor/examples/righttoleft/defaultcs.aspx). You can also examine the code when you run the sample site in Visual Studio from the Live Demos folder.

>note The needed CSS files are available for download with these links:
* [Editor_RTL.css](http://demos.telerik.com/aspnet-ajax/editor/examples/righttoleft/RTL/Editor_RTL.css)
* [RadEditor_Dialogs_RTL.css](http://demos.telerik.com/aspnet-ajax/editor/examples/righttoleft/RTL/RadEditor_Dialogs_RTL.css)
* [EditorContentArea_RTL.css](http://demos.telerik.com/aspnet-ajax/editor/examples/righttoleft/RTL/EditorContentArea_RTL.css)
>
