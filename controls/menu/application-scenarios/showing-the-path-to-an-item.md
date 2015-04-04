---
title: Showing the Path to an Item
page_title: Showing the Path to an Item | UI for ASP.NET AJAX Documentation
description: Showing the Path to an Item
slug: menu/application-scenarios/showing-the-path-to-an-item
tags: showing,the,path,to,an,item
published: True
position: 10
---

# Showing the Path to an Item



## 

__RadMenu__ can be enabled to keep highlighting the upper level of a menu as the user browses to a lower level menu. In this way the user will not feel "lost" when navigating through multiple level menus.To highlight the path through the menu to an item, call the __HighlightPath__ method of the item.

Consider the following menu:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" Skin="Outlook">
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



Every item in the menu hierarchy has, as the value of its __NavigateUrl__ property, a reference back to the page containing the menu, with a query parameter __Item__ set to the __Text__ property of the menu item. When the user clicks a menu item, a postback occurs, returning to the same page, with the text of the clicked item as a query parameter. This parameter is then used to locate the clicked item in the __Page_Load__ event handler, which calls __HighlightPath__ to show the path to the clicked item:



>tabbedCode

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
>end

When the user clicks an item, after the postback, the path to the item appears highlighted:



For a live example, see [Show path](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/ShowPath/DefaultCS.aspx).

# See Also

 * [Layout of Root Items ]({%slug menu/appearance-and-styling/layout-of-root-items-%})

 * [Overview]({%slug menu/radmenu-items/overview%})
