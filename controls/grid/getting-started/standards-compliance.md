---
title: Standards Compliance
page_title: Standards Compliance | RadGrid for ASP.NET AJAX Documentation
description: Standards Compliance
slug: grid/getting-started/standards-compliance
tags: standards,compliance
published: True
position: 1
---

# Standards Compliance



## XHTML Compliance

**RadGrid**complies with the XHTML 1.1 requirement, with the following exception:

* **GridCheckBoxColumn** is not XHTML compliant. By default it is read only and the .NET Framework renders this using *disabled="disabled",* which is not XHTML compliant statement.

>note  **What is XHTML?** XHTML stands for Extensible HyperText Markup Language and it is a stricter and cleaner version of HTML recommended by W3C (World Wide Web Consortium). XHTML is the effective inheritor of HTML 4.01 and although it is almost identical to its predecessor it is aimed to replace it.
>


## Accessibility standards

In conformance with the **W3C Web Accessibility Guidelines 1.0**, RadGrid is "**Level AA**" content compliant.

## Accessibility features for grid images:

* The 'alt' attribute is available for all images that are a part of the grid content. For user agents that cannot display images, this attribute specifies alternate text.

>note The 'alt' attribute is not available for the **RadGrid** control images (sort images and expand images).
>


## Accessibility features for GridTableView:

* 'summary' attribute: Use the **GridTableView.Summary** property to set the 'summary' attribute for a table. This attribute provides a summary of the table's purpose and structure for user agents rendering to non-visual media such as speech and Braille.

>note Visual user agents allow sighted people to quickly grasp the structure of a table from the headings and caption. As a result, captions are often inadequate as a summary of the purpose and structure of the table from the perspective of people relying on non-visual user agents. -Authors should take care- to provide additional information summarizing the purpose and structure of a table using the **Summary** attribute of the element. This is especially important for tables without captions.
>


* <caption> tag: Use the **GridTableView.Caption** property to set the <caption> tag for the current <table>.

* 'frame' attribute: Use the **GridTableView.Frame** property to set tips and visibility for table borders.

## Other accessibility features:

* [Keyboard support]({%slug grid/accessibility-and-internationalization/keyboard-support%}) - **RadGrid** supports navigation, selection, and enter in edit mode using the keyboard.

* **RadGrid** renders header cells in the header row

* **RadGrid** renders 'thead', 'tfoot' and 'tbody' elements

>note  **Section 508** The USA federal mandate requiring that information technology be made accessible to people with disabilities. Much of Section 508 compliance concerns making Web sites, intranets, and web-enabled applications accessible. Section 508 compliance has since become a major prerequisite not only in government related software, but also in most enterprise and corporate software solutions.
> **W3C Web Content Accessibility Guidelines 1.0** The main goal of these guidelines is to encourage developers to create applications providing accessible content. Adhering to these guidelines also makes Web content more available to users that use different devices and interfaces: desktop browser, voice browser, mobile phone, automobile-based personal computer, and so on.
>In accoradnce with these quidelines W3C defines three levels of conformance a developer can implement in order to provide some level of content compliance to their products:
>
*  **Conformance Level "A"** 
*  **Conformance Level "Double-A"** 
*  **Conformance Level "Triple-A"** >For more details on W3C Web Content Accessibility Guidelines 1.0 see[http://www.w3.org/TR/WAI-WEBCONTENT](http://www.w3.org/TR/WAI-WEBCONTENT).
>

