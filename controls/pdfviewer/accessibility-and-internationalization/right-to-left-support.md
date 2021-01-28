---
title: Right-to-Left Support
page_title: Right-to-Left Support - RadPdfViewer
description: Check our Web Forms article about Right-to-Left Support.
slug: pdfviewer/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **RadPdfViewer** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support you should set **dir=rtl** to the html or body element or at least to its parent element (**Figure 1**).  You can also use the **direction:rtl** CSS property. 

>caption Figure 1: RadPdfViewer in RTL mode.

![RadPdfViewer-rtl](../images/pdfviewer-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **RadPdfViewer**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div dir="rtl" runat="server">
    <telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="450px" Width="1000px"
        Skin="Default" RenderMode="Lightweight">
        <PdfjsProcessingSettings File="Document1.pdf">
        </PdfjsProcessingSettings>
    </telerik:RadPdfViewer>
</div>
````

## See Also

 * [Keyboard Support]({%slug pdfviewer/accessibility-and-internationalization/keyboard-support%})


