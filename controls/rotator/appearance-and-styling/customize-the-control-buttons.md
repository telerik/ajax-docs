---
title: Customize the Control Buttons
page_title: Customize the Control Buttons | UI for ASP.NET AJAX Documentation
description: Customize the Control Buttons
slug: rotator/appearance-and-styling/customize-the-control-buttons
tags: customize,the,control,buttons
published: True
position: 2
---

# Customize the Control Buttons



## 



__RadRotator__ provides the ability to specify custom buttons as rotator's buttons - Up and Down for vertical rotator or Left and Right for horizontal rotator.All you need to do is to set UpButtonID and DownButtonID or LeftButtonID and RightButtonID properties of the ControlButtons of the rotator to the IDs of the corresponding custom buttons. The custom buttons can be placed anywhere on the page.

````ASPNET
	    <asp:Image ImageUrl="images/right.gif" ID="img_right" AlternateText="right" runat="server"
	        Style="cursor: hand; float: right;" />
	    <asp:Image ImageUrl="images/left.gif" ID="img_left" AlternateText="left" runat="server"
	        Style="cursor: hand; float: left;" />
	    <telerik:RadRotator DataSourceID="xmlDataSource1" runat="server" ID="RadRotator1"
	        Width="314" Height="55" ItemWidth="100" ItemHeight="50" ScrollDirection="Left"
	        RotatorType="Buttons">
	        <ItemTemplate>
	            <img src="Images/<%# XPath("Image") %>" alt="" style="margin: 0px 11px;" />
	        </ItemTemplate>
	        <ControlButtons LeftButtonID="img_left" RightButtonID="img_right" />
	    </telerik:RadRotator>
	    <asp:XmlDataSource ID="xmlDataSource1" runat="Server" DataFile="data.xml"></asp:XmlDataSource>
````


