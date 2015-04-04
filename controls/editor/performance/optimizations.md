---
title: Optimizations
page_title: Optimizations | UI for ASP.NET AJAX Documentation
description: Optimizations
slug: editor/performance/optimizations
tags: optimizations
published: True
position: 0
---

# Optimizations



This help article treats the optimization of __RadEditor__'s performance when working with large content and/or having many editor's instances on a page.

* [General Controls Optimizations](#general-controls-optimizations)

* [Dialog Resources Optimizations](#dialog-resources-optimizations)

* [Working With Large Content - Creating, Editing, Pasting, Loading and Saving Optimizations](#working-with-large-content---creating,-editing,-pasting,-loading-and-saving-optimizations)

* [Toolbar Loading Optimizations](#toolbar-loading-optimizations)

## General Controls Optimizations

You can consider the following setup when optimizing performance of Telerik UI controls.

* Use the __RadScriptManager__ control on the page instead of the ScriptManager to combine scripts.

* Set the control's __EnableViewState__ property to __false__ to avoid the ViewState overhead.

* Use the [LightWeight render mode]({%slug editor/mobile-support/render-modes%}) of the editor to reduce the rendered HTML and JavaScript by leveraging HTML5 and CSS3 and delivering semantic HTML to the browser.

* Always upgrade your Telerik UI suite to the latest official version, becausewith each release there are many features, improvements and fixes implemented.

## Dialog Resources Optimizations

__RadEditor__ uses the __DialogOpener__ control when opening dialogs. __DialogOpener__, however,uses an ASP __ScriptManager__ control by default, which may lead to an increased number of requests.

You can easily decrease the number of scripts and styles requests of __RadEditor__ dialogs by setting the __DialogOpener__'s __EnableTelerikManagers__ property to __true__ (__Example 1__). The __EnableTelerikManagers__ property configures the __DialogOpener__ to use the __RadScriptManager__ and__RadStyleSheetManager__ controls, which do the actual resource combining by default.

__Example 1__: Improve RadEditor's dialog resources optimization by setting the __RadEditor.DialogOpener.EnableTelerikManagers__property to __True__.



````ASPNET
			<telerik:RadEditor ID="RadEditor1" runat="server">
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

* The __Undo / Redo mechanism__ and other maintenance code that ensures the smooth userexperience - it gets increasingly cumbersome and time consuming for the browser to execute it ifhuge content is in the editor. That is why it is recommended to remove the Undo and Redo buttonsfrom the toolbar when editing large content as shown in this article:[Removing Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%}).

* The built-in __RadEditor's modules__ are updatable on selection and they could also decrease the content editingabilities when editing huge content. You can see how to remove the modules in this help article:[Disable or Hide Modules]({%slug editor/functionality/modules/disable-or-hide-modules%}).

* In difference with the TextBox control, which does not process the content when submitting it to the server, RadEditorruns more than[12 content filters]({%slug editor/managing-content/content-filters%}), which validate the content and make it XHTML compliant. These filters executes regular expressionsand DOM methods to validate the content, which slow down the content submission to the server. To disable the built-infilters set the __ContentFilters__ property to __None__.

* The content formatting stripping when pasting huge content uses a lot of CPU resources and the browser could freezesfor a long period of time depending on the hardware configuration of the client's machine. The developer couldconfigure the editor to not check and strip the formatting of the pasted content by setting the__StripFormattingOptions__ property to __"NoneSupressCleanMessage"__.

* You can use a single __RadEditor__ instance to edit multiple elements on the page by following the approach fromthe [Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur](http://www.telerik.com/support/kb/aspnet-ajax/details/setting-hidden-radeditor-in-edit-mode-on-click-and-putting-it-in-non-editable-mode-onblur) KB article.

* It is important to test the performance only when debugging is disabled. Set__<compilation debug="false" />__ in the web.config. When it is true, the MS AJAXdebugging code causes a severe performance hit on the client-side. The fact that most of the editor functionalityis implemented in JavaScript, thus resulting in 10 times slower performance compared to native compiled code.

## Toolbar Loading Optimizations

When multiple RadEditor instances are present on the same page, the size and the loading time can be optimized significantly byreducing the __HTML markup__ and the __JSON__ sent from the server to the client. This canbe done through:

* __ToolProviderID__ property that lets you share common tools among multiple instances of RadEditor.__ToolbarMode__ property that lets you initialize the tools not at page load, butwhen an editor is to be used for the first time.

More detailed information on the topic is available in [Toolbar Loading Optimizations]({%slug editor/performance/toolbar-loading-optimizations%})help article.

# See Also

 * [Content filters]({%slug editor/managing-content/content-filters%})

 * [Disable or Hide Modules]({%slug editor/functionality/modules/disable-or-hide-modules%})

 * [Removing Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%})

 * [Toolbar Loading Optimizations]({%slug editor/performance/toolbar-loading-optimizations%})

 * [LightWeight Render Mode]({%slug editor/mobile-support/render-modes%})

 * [Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur](http://www.telerik.com/support/kb/aspnet-ajax/details/setting-hidden-radeditor-in-edit-mode-on-click-and-putting-it-in-non-editable-mode-onblur)
