---
title: Resize Dialogs
page_title: Resize Dialogs | UI for ASP.NET AJAX Documentation
description: Resize Dialogs
slug: editor/functionality/dialogs/examples/resize-dialogs
tags: resize,dialogs
published: True
position: 6
---

# Resize Dialogs



Due to designer requirements, the __RadEditor__ dialogs should be resized to a non-default dimensions. The following article explains how the size of the built-in dialogscould be easily manipulated via the __DialogDefinition__ class.

## 

>caution As of the Q3 2013 release, setting a custom size for the built-in dialogs using the approach suggested in this article will not work as expected due to	improvements Telerik made to dialogs in __RadEditor__ . You can find information about this subject in the["The Autosize feature of the Built-in Dialogs is Enabled"]({%slug editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled%})article, in which an appropriate approach for resizing is also provided.
>


As shown in __Example 1__, the __DialogDefinition__ class of __RadEditor__ provides the ability to change the initial size of __RadEditor__ dialogs in the	__Page_PreRenderComplete__ event. For example, to increase the size of the __LinkManager__dialog you can get a reference to it with the __GetDialogDefinition__ method of the __DialogDefinition__ class and then use the__Width__ and __Height__ properties to set the desired dimension:

__Example 1__: Resizing the __LinkManager__ dialog via the __DialogDefinition__ class.

>tabbedCode

````C#
	
	    protected override void OnInit(EventArgs e)
	    {
	        base.OnInit(e);
	        this.Page.PreRenderComplete += new EventHandler(Page_PreRenderComplete);
	    }
	    void Page_PreRenderComplete(object sender, EventArgs e)
	    {
	        Telerik.Web.UI.DialogDefinition linkManager = RadEditor1.GetDialogDefinition("LinkManager");
	        linkManager.Height = Unit.Pixel(500);
	        linkManager.Width = Unit.Pixel(500);
	    }
````
````VB
	
	    Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
	        MyBase.OnInit(e)
	        AddHandler Me.Page.PreRenderComplete, AddressOf Page_PreRenderComplete
	    End Sub
	
	    Sub Page_PreRenderComplete(ByVal sender As Object, ByVal e As EventArgs)
	        Dim linkManager As Telerik.Web.UI.DialogDefinition = RadEditor1.GetDialogDefinition("LinkManager")
	        linkManager.Height = Unit.Pixel(500)
	        linkManager.Width = Unit.Pixel(500)
	    End Sub
	
````
>end



The __DialogDefinition__ class also provides different useful __RadWidow__ configuration settings such as __Behaviors__, __VisibleStatusbar__, __VisibleTitlebar__, etc.

# See Also

 * [The Autosize Feature of the Built-in Dialogs is Enabled]({%slug editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled%})
