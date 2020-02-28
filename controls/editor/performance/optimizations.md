---
title: Optimizations
page_title: Optimizations | RadEditor for ASP.NET AJAX Documentation
description: Optimizations
slug: editor/performance/optimizations
tags: optimizations
published: True
position: 0
---

# Optimizations

This help article treats the optimization of **RadEditor**'s performance when working with large content and/or having many editor's instances on a page.

* [General Controls Optimizations](#general-controls-optimizations)
* [Dialog Resources Optimizations](#dialog-resources-optimizations)
* [Working With Large Content - Creating, Editing, Pasting, Loading and Saving Optimizations](#working-with-large-content---creating-editing-pasting-loading-and-saving-optimizations)
* [Toolbar Loading Optimizations](#toolbar-loading-optimizations)

## General Controls Optimizations

You can consider the following setup when optimizing performance of Telerik UI controls.

* Use the **RadScriptManager** control on the page instead of the ScriptManager to combine scripts.

* Set the control's **EnableViewState** property to **false** to avoid the ViewState overhead.

* Use the [LightWeight render mode]({%slug editor/mobile-support/render-modes%}) of the editor to reduce the rendered HTML and JavaScript by leveraging HTML5 and CSS3 and delivering semantic HTML to the browser.

* Always upgrade your Telerik UI suite to the latest official version, because with each release there are many features, improvements and fixes implemented.

## Dialog Resources Optimizations

**RadEditor** uses the **DialogOpener** control when opening dialogs. **DialogOpener**, however,uses an ASP **ScriptManager** control by default, which may lead to an increased number of requests.

You can easily decrease the number of scripts and styles requests of **RadEditor** dialogs by setting the **DialogOpener**'s **EnableTelerikManagers** property to **true** (**Example 1**). The **EnableTelerikManagers** property configures the **DialogOpener** to use the **RadScriptManager** and **RadStyleSheetManager** controls, which do the actual resource combining by default.

>caption Example 1: Improve RadEditor's dialog resources optimization by setting the **RadEditor.DialogOpener.EnableTelerikManagers** property to **True**.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
</telerik:RadEditor>
````
````C#	
protected void Page_Load(object sender, EventArgs e)
{
	RadEditor1.DialogOpener.EnableTelerikManagers = true;
}	
````
````VB	
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadEditor1.DialogOpener.EnableTelerikManagers = True
End Sub	
````

## Working With Large Content - Creating, Editing, Pasting, Loading and Saving Optimizations

There are a couple of main factors responsible for the slow RadEditor's performance when pasting,loading, editing or saving large XHTML / HTML / TXT files, which content size exceeds 100KB:

* The **Undo / Redo mechanism** and other maintenance code that ensures the smooth user experience - it gets increasingly cumbersome and time consuming for the browser to execute it if huge content is in the editor. That is why it is recommended to remove the Undo and Redo buttons from the toolbar when editing large content as shown in this article:[Removing Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%}).

* The built-in **RadEditor's modules** are updatable on selection and they could also decrease the content editing abilities when editing huge content. You can see how to remove the modules in this help article:[Disable or Hide Modules]({%slug editor/functionality/modules/disable-or-hide-modules%}).

* In difference with the TextBox control, which does not process the content when submitting it to the server, RadEditorruns more than [12 content filters]({%slug editor/managing-content/content-filters%}), which validate the content and make it XHTML compliant. These filters executes regular expressions and DOM methods to validate the content, which slow down the content submission to the server. To disable the built-infilters set the **ContentFilters** property to **None**.

* The content formatting stripping when pasting huge content uses a lot of CPU resources and the browser could freezes for a long period of time depending on the hardware configuration of the client's machine. The developer could configure the editor to not check and strip the formatting of the pasted content by setting the **StripFormattingOptions** property to **"NoneSupressCleanMessage"**.

* You can use a single **RadEditor** instance to edit multiple elements on the page by following the approach from the [Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur](https://www.telerik.com/support/kb/aspnet-ajax/details/setting-hidden-radeditor-in-edit-mode-on-click-and-putting-it-in-non-editable-mode-onblur) KB article.

* It is important to test the performance only when debugging is disabled. Set `<compilation debug="false" />` in the web.config. When it is true, the MS AJAXdebugging code causes a severe performance hit on the client-side. The fact that most of the editor functionalities implemented in JavaScript, thus resulting in 10 times slower performance compared to native compiled code.

## Toolbar Loading Optimizations

When multiple RadEditor instances are present on the same page, the size and the loading time can be optimized significantly by reducing the **HTML markup** and the **JSON** sent from the server to the client. This can be done through:

* **ToolProviderID** property that lets you share common tools among multiple instances of RadEditor.**ToolbarMode** property that lets you initialize the tools not at page load, but when an editor is to be used for the first time.

More detailed information on the topic is available in [Toolbar Loading Optimizations]({%slug editor/performance/toolbar-loading-optimizations%}) help article.

## See Also

 * [Content filters]({%slug editor/managing-content/content-filters%})

 * [Disable or Hide Modules]({%slug editor/functionality/modules/disable-or-hide-modules%})

 * [Removing Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%})

 * [Toolbar Loading Optimizations]({%slug editor/performance/toolbar-loading-optimizations%})

 * [LightWeight Render Mode]({%slug editor/mobile-support/render-modes%})

 * [Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur](https://www.telerik.com/support/kb/aspnet-ajax/details/setting-hidden-radeditor-in-edit-mode-on-click-and-putting-it-in-non-editable-mode-onblur)
