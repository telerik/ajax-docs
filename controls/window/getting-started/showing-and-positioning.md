---
title: Showing and Positioning
page_title: Showing and Positioning | UI for ASP.NET AJAX Documentation
description: Showing and Positioning
slug: window/getting-started/showing-and-positioning
tags: showing,and,positioning
published: True
position: 8
---

# Showing and Positioning



## 

By default, windows are not visible on the page, and appear centered on the screen. You can change this behavior with no code at all by setting a few properties:

* Set the __VisibleOnPageLoad__ property to __True__ to make the window visible when the page loads. You can set this property on an individual __RadWindow__ object if you want only one window visible, or in the __RadWindowManager__ if you want all your windows to be visible when the page loads.

* Use the __Top__ and __Left__ properties to specify the position of the window relative to the HTML page. __Top__ and __Left__ give the offset, in pixels, of the top left corner of the window. If you set the __OffsetElementId__ property to the ID of an HTML element, the window offset is relative to that control rather than to the top left corner of the web page. By using __OffsetElementId__, you can control the position of the window relative to the rest of the page element flow, independently of the screen-size and automatically adjusting to the changes in the page layout.

* Use the __OpenerElementId__ property to specify the ID of an HTML element that, when clicked, automatically opens the window. __OpenerElementId__ lets you open the window in response to client input without writing any JavaScript.

>note The __OpenerElementId__ and __OffsetElementId__ properties are of type string, and expect the client-side ID of an HTML element. If you want to specify an ASP.NET control such as Label, Link, or Button, use its ClientID property. This can be done by setting the properties in codebehind as shown below.
>


````ASPNET
	    <asp:Button ID="ServerButton" runat="server" Text="Open RadWindow from a Server Button" />
	    <br />
	    <input type="button" id="HtmlButton" value="Open RadWindow from HTML Button" />
	    <telerik:RadWindow ID="RadWindow1" OffsetElementID="HtmlButton" OpenerElementID="HtmlButton"
	        NavigateUrl="http://www.telerik.com" runat="server">
	    </telerik:RadWindow>
	    <telerik:RadWindow ID="RadWindow2" NavigateUrl="http://www.telerik.com"
	        runat="server">
	    </telerik:RadWindow>
````



>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadWindow2.OpenerElementID = ServerButton.ClientID;
	        RadWindow2.OffsetElementID = ServerButton.ClientID;
	    }
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        RadWindow2.OpenerElementID = ServerButton.ClientID
	        RadWindow2.OffsetElementID = ServerButton.ClientID
	    End Sub
````


>end

# See Also

 * [Opening Windows]({%slug window/getting-started/opening-windows%})
