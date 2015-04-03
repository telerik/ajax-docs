---
title: Decorating RadWindow When DecorationZoneID Is Set
page_title: Decorating RadWindow When DecorationZoneID Is Set | UI for ASP.NET AJAX Documentation
description: Decorating RadWindow When DecorationZoneID Is Set
slug: formdecorator/application-scenarios/decorating-radwindow-when-decorationzoneid-is-set
tags: decorating,radwindow,when,decorationzoneid,is,set
published: True
position: 1
---

# Decorating RadWindow When DecorationZoneID Is Set



## 

__RadFormDecorator__ lets you style controls that are inside of the __ContentTemplate__ of __RadWindow__. However, when the __RadFormDecorator's__ property __DecorationZoneID__ is set, the content of RadWindow will not be decorated. This behaviour manifests because RadWindow moves its contents in the __DOM__ when it is opened - i.e. controls declared in its __ContentTemplate__ are no longer in the same place in the markup where they were declared. This needs to be done in order to allow the popup element of the __RadWindow__ to be shown above all other elements, so that it does not inherit any visibility restrictions from its parent elements (such as the CSS display property being set to none).

Therefore this scenario is not supported by FormDecorator as the ContentTemplate and its controls are getting out of the scope of __DecorationZoneID__. A simple solution to this scenario could be to decorate the content of the __RadWindow__ with custom JavaScript through FormDecorator's[client-side method - decorate()]({%slug formdecorator/client-side-programming/overview%}). For example:

````JavaScript
	    <script type="text/javascript">
	        function openRadWindowDecorated() {
	            var oWnd = $find('<%= RadWindow1.ClientID %>');
	            oWnd.show();
	            $find('<%=FormDecorator1.ClientID %>').decorate(oWnd.get_contentElement());
	        }
	    </script>
````



````ASPNET
	    <telerik:RadFormDecorator ID="FormDecorator1" runat="server" DecoratedControls="All"
	        DecorationZoneID="div1" Skin="Metro"></telerik:RadFormDecorator>
	    <asp:Button ID="Button1" Text="Open RadWindow" runat="server" OnClientClick="openRadWindowDecorated();return false;" />
	    <br />
	    <br />
	    <div id="div1" style="width: 300px">
	        <fieldset>
	            <legend>Decoration Zone</legend>
	            <asp:Button ID="Button2" runat="server" Text="ASP Button" />
	            <input type="text" value="Input text" />
	        </fieldset>
	        <telerik:RadWindow runat="server" ID="RadWindow1" Title="This is RadWindow" Height="200px"
	            Width="300px">
	            <ContentTemplate>
	                <asp:RadioButtonList ID="RadioButtonList1" runat="server">
	                    <asp:ListItem Text="ListItem1" Value="1" Selected="True"></asp:ListItem>
	                    <asp:ListItem Text="ListItem2" Value="2"></asp:ListItem>
	                </asp:RadioButtonList>
	                <br />
	                <asp:Button ID="Button3" runat="server" Text="ASP Button" />
	                <input type="text" value="Input text" />
	                <input type="button" value="Input button" />
	                <telerik:RadButton ID="RadButton1" runat="server" Text="RadButton">
	                </telerik:RadButton>
	            </ContentTemplate>
	        </telerik:RadWindow>
	    </div>
````


