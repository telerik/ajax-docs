---
title: Showing the Path to an Item
page_title: Showing the Path to an Item - RadMenu
description: Check our Web Forms article about Showing the Path to an Item.
slug: menu/how-to/showing-the-path-to-an-item
tags: showing,the,path,to,an,item
published: True
position: 10
---

# Showing the Path to an Item

## 

**RadMenu** can be enabled to keep highlighting the upper level of a menu as the user browses to a lower level menu. In this way the user will not feel "lost" when navigating through multiple level menus.To highlight the path through the menu to an item, call the **HighlightPath** method of the item.

Consider the following menu:

````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Skin="Outlook">
    <Items>
        <telerik:RadMenuItem Text="Corporate" NavigateUrl="Default.aspx?Item=Corporate">
            <Items>
                <telerik:RadMenuItem Text="About us" NavigateUrl="Default.aspx?Item=About%20us" />
                <telerik:RadMenuItem Text="Careers" NavigateUrl="Default.aspx?Item=Careers" />
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Services" NavigateUrl="Default.aspx?Item=Services">
            <Items>
                <telerik:RadMenuItem Text="Products" NavigateUrl="Default.aspx?Item=Products">
                    <Items>
                        <telerik:RadMenuItem Text="RadMenu" NavigateUrl="Default.aspx?Item=RadMenu">
                            <Items>
                                <telerik:RadMenuItem Text='RadMenu "Classic"' NavigateUrl="Default.aspx?Item=RadMenu%20%22Classic%22" />
                                <telerik:RadMenuItem Text='RadMenu for ASP.NET AJAX' NavigateUrl="Default.aspx?Item=RadMenu%20for%20ASP.NET%20AJAX" />
                            </Items>
                        </telerik:RadMenuItem>
                    </Items>
                </telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Solutions" NavigateUrl="Default.aspx?Item=Solutions" />
                <telerik:RadMenuItem Text="Certifications" NavigateUrl="Default.aspx?Item=Certifications" />
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Work" NavigateUrl="Default.aspx?Item=Work">
            <Items>
                <telerik:RadMenuItem Text="Clients" NavigateUrl="Default.aspx?Item=Clients" />
                <telerik:RadMenuItem Text="Testimonials" NavigateUrl="Default.aspx?Item=Testimonials" />
                <telerik:RadMenuItem Text="FAQ" NavigateUrl="Default.aspx?Item=FAQ" />
            </Items>
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

Every item in the menu hierarchy has, as the value of its **NavigateUrl** property, a reference back to the page containing the menu, with a query parameter **Item** set to the **Text** property of the menu item. When the user clicks a menu item, a postback occurs, returning to the same page, with the text of the clicked item as a query parameter. This parameter is then used to locate the clicked item in the **Page_Load** event handler, which calls **HighlightPath** to show the path to the clicked item:

````C#
protected void Page_Load(object sender, EventArgs e) 
{ 
    string item = Server.UrlDecode(Request["Item"]); 
    if (!string.IsNullOrEmpty(item)) 
    { 
        RadMenuItem currentItem = RadMenu1.FindItemByText(item); 
        if (currentItem != null) 
        { 
            currentItem.HighlightPath(); 
        } 
    } 
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim item As String = Server.UrlDecode(Request("Item"))
    If Not String.IsNullOrEmpty(item) Then
        Dim currentItem As RadMenuItem = RadMenu1.FindItemByText(item)
        If (Not (currentItem) Is Nothing) Then
            currentItem.HighlightPath()
        End If
    End If
End Sub
````


When the user clicks an item, after the postback, the path to the item appears highlighted:



For a live example, see [Show path](https://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/ShowPath/DefaultCS.aspx).

# See Also

 * [Layout of Root Items ]({%slug menu/appearance-and-styling/layout-of-root-items-%})

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Select (highlight) the current page in the Menu](https://www.telerik.com/support/kb/aspnet-ajax/menu/details/select-(highlight)-the-current-page-in-the-menu) KB article


