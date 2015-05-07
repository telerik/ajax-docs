---
title: Cross-Page Postback
page_title: Cross-Page Postback | RadMenu for ASP.NET AJAX Documentation
description: Cross-Page Postback
slug: menu/functionality/cross-page-postback
tags: cross-page,postback
published: True
position: 2
---

# Cross-Page Postback


## 

You can have your menu cause postbacks to a different Web page from the one that contains it. Simply set the **PostBackUrl** property to the page that should handle the postback.

````ASPNET
<telerik:RadMenu ID="RadMenu1" runat="server" Skin="Default" PostBackUrl="CrossPageCS.aspx"
    OnItemClick="RadMenu1_ItemClick">
</telerik:RadMenu>
````

Once in the second page, you can access the menu (or any other control) on the previous page using the **Page.PreviousPage** property.

````C#
public partial class CrossPageCS : XhtmlPage {
    protected void Page_Load(object sender, EventArgs e) 
    { 
        if (Page.PreviousPage == null) 
        { 
            Response.Redirect("DefaultCS.aspx");
        } 
        RadMenu menu = (RadMenu)Page.PreviousPage.FindControl("RadMenu1"); 
    } 
}
````
````VB.NET
Partial Class CrossPageVB  Inherits System.Web.UI.Page 
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Page.PreviousPage Is Nothing Then
            Response.Redirect("DefaultVB.aspx")
        End If
        Dim menu As RadMenu
        menu = CType(Page.PreviousPage.FindControl("RadMenu1"), RadMenu)
    End Sub
End Class
````

