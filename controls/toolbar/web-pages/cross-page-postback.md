---
title: Cross-Page Postback
page_title: Cross-Page Postback | RadToolBar for ASP.NET AJAX Documentation
description: Cross-Page Postback
slug: toolbar/web-pages/cross-page-postback
tags: cross-page,postback
published: True
position: 1
---

# Cross-Page Postback

## 

You can have the buttons in your toolbar cause postbacks to a different Web page from the one that contains them. Simply set the **PostBackUrl** property to the page that should handle the postback. You can set the **PostBackUrl** for the entire toolbar, or for individual buttons. If you set the **PostBackUrl** in both places, the URL of the button overrides the setting on the toolbar:

````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Outlook" PostBackUrl="CrossPage.aspx">
    <Items>
        <telerik:RadToolBarButton runat="server" Text="Button1" PostBackUrl="PageA.aspx" />
        <telerik:RadToolBarButton runat="server" Text="Button2">
        </telerik:RadToolBarButton>
    </Items>
</telerik:RadToolBar>
````

Once in the second page, you can access the the toolbar (or any other control) on the previous page using the **Page.PreviousPage** property.


````C#
public partial class CrossPage : XhtmlPage
{   
    protected void Page_Load(object sender, EventArgs e)   
    {      
        if (Page.PreviousPage == null)      
        {          
            Response.Redirect("Default.aspx");      
        }      
        
        RadToolBar toolBar = (RadToolBar)Page.PreviousPage.FindControl("RadToolBar1");   
    }
}				
````
````VB.NET
Partial Class CrossPage  Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Page.PreviousPage Is Nothing Then
            Response.Redirect("Default.aspx")
        End If
        Dim toolbar As RadToolBar
        toolbar = CType(Page.PreviousPage.FindControl("RadToolBar1"), RadToolBar)
    End Sub
	
End Class	
````

