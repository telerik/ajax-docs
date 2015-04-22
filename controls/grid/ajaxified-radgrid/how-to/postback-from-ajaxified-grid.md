---
title: Postback from Ajaxified Grid
page_title: Postback from Ajaxified Grid | RadGrid for ASP.NET AJAX Documentation
description: Postback from Ajaxified Grid
slug: grid/ajaxified-radgrid/how-to/postback-from-ajaxified-grid
tags: postback,from,ajaxified,grid
published: True
position: 1
---

# Postback from Ajaxified Grid



## 

If you want to perform postback instead of callback when the grid is AJAX-enabled using **RadAjaxManager** or **RadAjaxPanel**, you can:

1. Provide a JavaScript event handler on the appropriate client event of the control that should initiate postback requests.

1. In the JavaScript event handler, invoke the **doPostBack(eventSrc, eventArgs)** function of the ASP.NET framework, passing identifying information about the event as the second argument. The **doPostBack** function takes the following two arguments:

1. **eventSrc** is the control that raises the postback event. If this control is directly on the **HtmlForm**, you can use the control's **UniqueID** or **ClientID**. Otherwise if your control is in an **INamingContainer**, you must use the control's **UniqueID**.

1. **eventArgs** is an optional argument for the event that lets you pass data to the server.The following example shows how to call the **doPostBack** function, passing information about the currently clicked row of a grid:

````JavaScript
	    doPostBack("<%= RadGrid1.UniqueID   %>", "RowClicked:" + this.Rows[index].ItemIndex);
````



1. Process the postback in the code-behind of the page (managing the **RaisePostBackEventHandler** in a similar fashion to that presented in [ this knowledge base article ](http://www.telerik.com/support/kb/aspnet-ajax/grid/performing-postback-from-grid-client-events.aspx)). You can check whether the source control that triggers the request is **RadGrid** - then execute some custom logic:



````C#
	
	    protected override void RaisePostBackEvent(IPostBackEventHandler source, string eventArgument)
	    {
	        base.RaisePostBackEvent(source, eventArgument);
	
	        if (source == RadGrid1 && eventArgument.IndexOf("RowClicked") != -1)
	        {
	            GridDataItem item = RadGrid1.Items[int.Parse(eventArgument.Split(':')[1])];
	            Response.Write(String.Format("CustomerID:{0}", item.GetDataKeyValue("CustomerID")));
	        }
	    }
	
````
````VB.NET
	    Protected Overrides Sub RaisePostBackEvent(ByVal source As IPostBackEventHandler, ByVal eventArgument As String)
	        MyBase.RaisePostBackEvent([source], eventArgument)
	        If ([source] Is RadGrid1) And (eventArgument.IndexOf("RowClicked") <> -1) Then
	            Dim item As GridDataItem = RadGrid1.Items(Integer.Parse(eventArgument.Split(":"c)(1)))
	            Response.Write([String].Format("CustomerID:{0}",
	            item.GetDataKeyValue("CustomerID")))
	        End If
	    End Sub
````

