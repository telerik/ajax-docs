---
title: Cross-Page Postback
page_title: Cross-Page Postback | RadTabStrip for ASP.NET AJAX Documentation
description: Cross-Page Postback
slug: tabstrip/web-pages/cross-page-postback
tags: cross-page,postback
published: True
position: 1
---

# Cross-Page Postback

## 

You can have your tab strip cause postbacks to a different Web page from the one that contains it. Simply set the **PostBackUrl** property to the page that should handle the postback.

````ASPNET	 
<telerik:RadTabStrip ID="RadTabStrip1" runat="server" PostBackUrl="CrossPageCS.aspx" OnTabClick="RadTabStrip1_TabClick" DataSourceID="TabStripDS">
</telerik:RadTabStrip> 	 
````

Once in the second page, you can access the the tab strip (or any other control) on the previous page using the **Page.PreviousPage** property:


````C#	
public partial class CrossPageCS : XhtmlPage
{
  protected void Page_Load(object sender, EventArgs e)
  {
     if (Page.PreviousPage == null)
     {
         Response.Redirect("DefaultCS.aspx");
     }
     RadTabStrip tabstrip = (RadTabStrip)Page.PreviousPage.FindControl("RadTabStrip1");
  }
} 	
````
````VB.NET
Partial Class CrossPageVB
  Inherits System.Web.UI.Page
  Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Page.PreviousPage Is Nothing Then
      Response.Redirect("DefaultVB.aspx")
    End If
    Dim tabstrip As RadTabStrip
    menu = CType(Page.PreviousPage.FindControl("RadTabStrip1"), RadTabStrip)
  End Sub
End Class 	 	
````

