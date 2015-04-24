---
title: Resize Dialogs
page_title: Resize Dialogs | RadEditor for ASP.NET AJAX Documentation
description: Resize Dialogs
slug: editor/functionality/dialogs/examples/resize-dialogs
tags: resize,dialogs
published: True
position: 6
---

# Resize Dialogs



Due to designer requirements, the **RadEditor** dialogs should be resized to a non-default dimensions. The following article explains how the size of the built-in dialogscould be easily manipulated via the **DialogDefinition** class.

## 

>caution As of the Q3 2013 release, setting a custom size for the built-in dialogs using the approach suggested in this article will not work as expected due to	improvements Telerik made to dialogs in **RadEditor** . You can find information about this subject in the["The Autosize feature of the Built-in Dialogs is Enabled"]({%slug editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled%})article, in which an appropriate approach for resizing is also provided.
>


As shown in **Example 1**, the **DialogDefinition** class of **RadEditor** provides the ability to change the initial size of **RadEditor** dialogs in the	**Page_PreRenderComplete** event. For example, to increase the size of the **LinkManager**dialog you can get a reference to it with the **GetDialogDefinition** method of the **DialogDefinition** class and then use the**Width** and **Height** properties to set the desired dimension:

**Example 1**: Resizing the **LinkManager** dialog via the **DialogDefinition** class.



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




The **DialogDefinition** class also provides different useful **RadWidow** configuration settings such as **Behaviors**, **VisibleStatusbar**, **VisibleTitlebar**, etc.

# See Also

 * [The Autosize Feature of the Built-in Dialogs is Enabled]({%slug editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled%})
