---
title: PageViewCreated 
page_title: PageViewCreated  | UI for ASP.NET AJAX Documentation
description: PageViewCreated 
slug: tabstrip/server-side-programming/pageviewcreated-
tags: pageviewcreated,
published: True
position: 5
---

# PageViewCreated 



## 

__RadMultiPage__ exposes a single server-side event - the __PageViewCreated__ event.

__PageViewCreated__ occurs every time a new page view is added to __RadPageViewCollection__ of the __RadMultiPage__ instance.

The __PageViewCreated__ event handler receives two arguments:

1. The __RadMultiPage__ to which the page view has just been added. This argument is of type object, but can be cast to the __RadMultiPage__ type.

1. A __RadMultiPageEventArgs__ object. This object has a __PageView__ property that you can use to access the page view that has just been added.

Use a __PageViewCreated__ event handler to add controls to the Controls collections of the page views as they are added to the multi-page.

>caution The __ID__ s of the controls that will be added to the __Controls__ collection of the page views should be set upon each postback to the same value. Otherwise, different ID will be set to these controls on each postback and this might lead to ViewState problems
>


>tabbedCode

````C#
	     
	
	protected void RadMultiPage1_PageViewCreated(object sender, RadMultiPageEventArgs e)
	{
	   string userControlName = e.PageView.ID + "CS.ascx";
	  
	   Control userControl = Page.LoadControl(userControlName);
	   userControl.ID = e.PageView.ID + "_userControl";
	  
	   e.PageView.Controls.Add(userControl);
	} 
	
				
````
````VB.NET
	
	Protected Sub RadMultiPage1_PageViewCreated(ByVal sender As Object, ByVal e As RadMultiPageEventArgs)
	    Dim userControlName As String = e.PageView.ID + "VB.ascx"
	    Dim userControl As Control = Page.LoadControl(userControlName)
	    userControl.ID = e.PageView.ID + "_userControl"
	    e.PageView.Controls.Add(userControl)
	End Sub 
				
````
>end
