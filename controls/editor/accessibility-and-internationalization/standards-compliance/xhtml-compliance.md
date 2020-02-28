---
title: XHTML Compliance
page_title: XHTML Compliance | RadEditor for ASP.NET AJAX Documentation
description: XHTML Compliance
slug: editor/accessibility-and-internationalization/standards-compliance/xhtml-compliance
tags: xhtml,compliance
published: True
position: 1
---

# XHTML Compliance

Compliance Level

![W3C XHTML Compliant](images/editor-w3c_xhtml_11.png)

RadEditor for ASP.NET AJAX can provide a high degree of XHTML 1.1 compliance, which has the following two aspects:

* **XHTML rendering on the control** - The markup comprising the interface of the editor (toolbar, dialogs, etc.) is XHTML 1.1 compliant.

* **Out-of-the-box XHTML-enabled output** - RadEditor has always provided a number of tools for enforcing XHTML compliant content. Out of the box, RadEditor for ASP.NET AJAX will output XHTML compliant content (the content being edited) across all major browsers. RadEditor for ASP.NET AJAX provides enhanced client-side XHTML filters.

Although it is not possible to guarantee 100% XHTML compliant content, RadEditor for ASP.NET AJAX provides the following tools, which significantly ease the task of producing valid content:

1. [XHTML Validator](https://demos.telerik.com/aspnet-ajax/editor/examples/built-in-dialogs/defaultcs.aspx) dialog

1. Out-of-the-box **ConvertToXhtml** and **ConvertFontToSpan** enabled client-side filters (performs client-side XHTML conversion)

1. The **XHTML** server-side filter which is enabled by default. You can use the **Content** property to obtain the content as XHTML on the server.

1. Modified dialogs and [Node Inspector]({%slug editor/functionality/modules/overview%}) module to facilitate the removal of non-XHTML compliant attributes

Due to the fact that the editor relies heavily on the underlying browser rich-edit module there are a number of issues that can negatively affect XHTML compliance:

1. Use of "FONT" tags

1. Use of "U" tag (for underline)

1. Non-compliant closing of tags, etc.



We are always working on improving the produced by RadEditor Xhtml content and in the latest version the ConvertToXhtml and ConvertFontToSpan client-side filters are activated by default.


>note While the Telerik RadEditor can compensate and automatically convert many of these non-valid tags, the responsibility for producing valid XHTML compliant content is partially on the side of the user. Therefore, we strongly suggest the use of the new integrated **XHTML Validator** for the timely discovery and correction of non-compliant content. 


## Using the Integrated XHTML Validator

To assist end-users in the XHTML content validation process, Telerik RadEditor provides a new module for real-time validation. Using a callback request (Ajax-type request) the editor sends the HTML content for validation to the W3C service, and returns a compliancy report right within the editor interface. This feature eliminates the need for manual copy/pasting of the HTML and validation in a separate browser window.

You can enable the XHTML validation module by selecting it from the Modules list. If you do not see the module in the list this means that it has not been defined in the ToolsFile.xml file. For more information how to define modules in the ToolsFile see the following article " [Using ToolsFile.xml]({%slug editor/functionality/toolbars/using-toolsfile.xml%}) ".

Once the XHTML validation module is enabled you can check the HTML content you are currently working on by clicking the **[Validate XHTML]** button. Telerik RadEditor will make a callback request to the W3C site and will display the report in the module's window.



## What is XHTML

XHTML stands for E(**X**)tensible (**H**)yper(**T**)ext (**M**)arkup (**L**)anguage and it is a stricter and cleaner version of HTML recommended by W3C (World Wide Web Consortium). XHTML is the effective inheritor of HTML 4.01 and although it is almost identical to its predecessor it is aimed to replace it.

## See Also

 * [Accessibility Compliance](https://demos.telerik.com/aspnet/prometheus/Editor/Examples/AccessibilitySupport/DefaultCS.aspx)
