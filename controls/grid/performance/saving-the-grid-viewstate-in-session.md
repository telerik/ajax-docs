---
title: Saving the grid ViewState in Session
page_title: Saving the grid ViewState in Session | RadGrid for ASP.NET AJAX Documentation
description: Saving the grid ViewState in Session
slug: grid/performance/saving-the-grid-viewstate-in-session
tags: saving,the,grid,viewstate,in,session
published: True
position: 2
---

# Saving the grid ViewState in Session



## 

There are cases in which you may want to reduce the grid ViewState though you have enabled multiple server/client side features of the control (thus bypassing the EnableViewState = false choice with [its limitations]({%slug grid/performance/optimizing-viewstate-usage%})). In such situation to work properly with the **NeedDataSource** advanced data-binding or population through data source control, Telerik RadGrid's ViewState has to be turned on.

Still, a possible solution for ViewState reduction is to relocate it in a Session variable. The code below illustrates how to apply this technique under ASP.NET 2.x or 3.x:**ASP.NET 2.x/3.x:**



````C#
	    PageStatePersister _pers;
	    protected override PageStatePersister PageStatePersister
	    {
	        get
	        {
	            if (_pers == null)
	            {
	                _pers = new SessionPageStatePersister(this);
	            }
	            return _pers;
	        }
	    }
````
````VB.NET
	
	    Dim _pers As PageStatePersister
	    Protected Overrides ReadOnly Property PageStatePersister As PageStatePersister
	        Get
	            If _pers Is Nothing Then
	                _pers = New SessionPageStatePersister(Me)
	            End If
	            Return _pers
	        End Get
	    End Property
	
````


Further information on this subject can be found in the MSDN articles linked below: [http://msdn.microsoft.com/en-us/library/aa479403.aspx](http://msdn.microsoft.com/en-us/library/aa479403.aspx)

[http://msdn.microsoft.com/en-us/library/system.web.ui.pagestatepersister(VS.80).aspx](http://msdn.microsoft.com/en-us/library/system.web.ui.pagestatepersister(VS.80).aspx)
