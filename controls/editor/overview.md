---
title: Overview
page_title: Overview
description: Check our Web Forms article about Overview.
slug: editor/overview
tags: overview
published: True
position: 0
---

# Editor Overview

Thank you for choosing **Telerik RadEditor for ASP.NET AJAX! RadEditor for ASP.NET AJAX** is the successor for the well-known industry standard Editor for ASP.NET. The tight integration with ASP.NET AJAX and powerful new capabilities of the suite features the new WYSIWYG Editor as a flexible and lightweight component, turning it into the fastest loading Web Editor. 

#### Hottest Key features

* Unmatched loading speed

* Minimal script size

* New semantic rendering

* [Out-of-the-box XHTML-enabled output]({%slug editor/accessibility-and-internationalization/standards-compliance/xhtml-compliance%})

* [Anti XSS functionality](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss))

* Industry-best cross-browser support

* [Single-file, drag-and-drop deployment]({%slug editor/getting-started/overview%}) (all editor resources, including the dialogs reside in the same DLL)

* Multilevel undo/redo with action trails

* [7 ways to paste from Word]({%slug editor/managing-content/pasting-content/clean-ms-word-formatting-%})

* [AJAX-based file browser dialogs]({%slug editor/functionality/dialogs/overview%})

* [Full keyboard accessibility]({%slug editor/accessibility-and-internationalization/keyboard-support/overview%})

* [Flexible skinning mechanism]({%slug editor/appearance-and-styling/skins%})

* [Simplified and intuitive toolbar configuration]({%slug editor/functionality/toolbars/overview%})

* Ability to have editors with different skins on the same page

* [Mobile Support and UI]({%slug editor/mobile-support/overview%})


#### Get started with the RadEditor

To test it by your own and see its benefits in practice you can start a free trial using the button below

<div class="justify-content-center text-center try-button">
    <a class="button" href="https://www.telerik.com/download-trial-file/v2-b/ui-for-asp.net-ajax" target="_blank">Start a free trial</a>
</div>

<style>
.try-button {
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.try-button .button {
    display: inline-block;
    font-size: 18px;
    color: #ffffff;
    background-color: #378306;
    border-radius: 2px;
    transition: color .2s ease,background-color .2s ease;
    text-decoration: none;
    padding: 10px 30px 10px 30px;
    line-height: 1.5em;
    height: auto;
}

.try-button .button:hover {
    color: #ffffff;
    background-color: #47a336;
}
</style>


>caption To create a basic `RadEditor`:

1. ensure you have a script manager on the page (use \<asp:ScriptManager> tag to declare one)
1. use the \<telerik:RadEditor> tag to declare the editor and to set some of its properties

>caption Get started with the editor declaration and enabling some of its features

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server" ContentAreaMode="div" Width="500" Height="500" Skin="Black">
   <Content>
	 <b>Setting inline properties</b>
   </Content>
</telerik:RadEditor> 
````

![](images/radeditorpreview.png)


## See Also

 * [Overview]({%slug editor/getting-started/overview%})

 * [RadEditor Structure]({%slug editor/getting-started/radeditor-structure%})

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug editor/accessibility-and-internationalization/standards-compliance/wcag-2.0-and-section-508-accessibility-compliance%})

 * [XHTML Compliance]({%slug editor/accessibility-and-internationalization/standards-compliance/xhtml-compliance%})


 
 
 
