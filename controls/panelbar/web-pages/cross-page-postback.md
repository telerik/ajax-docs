---
title: Cross-Page Postback
page_title: Cross-Page Postback | RadPanelBar for ASP.NET AJAX Documentation
description: Cross-Page Postback
slug: panelbar/web-pages/cross-page-postback
tags: cross-page,postback
published: True
position: 1
---

# Cross-Page Postback



## 

You can have your panel bar cause postbacks to a different Web page from the one that contains it. Simply set the **PostBackUrl** property to the page that should handle the postback.

````ASPNET
	    <telerik:radpanelbar 
	    id="RadPanelBar1" runat="server" 
	    onitemclick="RadPanelBar1_ItemClick"
	    postbackurl="CrossPage.aspx">
	     <Items > 
	        ... 
	     </Items >
	     </telerik:radpanelbar>
````



Once in the second page, you can access the the panel bar (or any other control) on the previous page using the **Page.PreviousPage** property.



````C#
	
	
	    public partial class CrossPageCS : XhtmlPage { protected void Page_Load(object sender, EventArgs e)
	    { 
	        if (Page.PreviousPage == null) 
	        { 
	            Response.Redirect("Default.aspx"); 
	        } 
	        RadPanelBar pb = (RadPanelBar)Page.PreviousPage.FindControl("RadPanelBar1");
	    } 
	    }
	
````
````VB.NET
	
	
	Partial Class CrossPageVB  Inherits System.Web.UI.Page
	        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	            If Page.PreviousPage Is Nothing Then
	                Response.Redirect("Default.aspx")
	
	            End If
	            Dim pb As RadPanelBar
	            pb = CType(Page.PreviousPage.FindControl("RadPanelBar1"), RadPanelBar)
	        End Sub
	    End Class
	
````


>tip Another way to perform cross-page postbacks is to set the **NavigateUrl** property of **RadPanelItem** controls in you panel bar.
>

