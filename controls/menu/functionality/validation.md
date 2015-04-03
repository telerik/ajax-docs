---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: menu/functionality/validation
tags: validation
published: True
position: 1
---

# Validation



## 

You can use the built in ASP.NET validation with __RadMenu__. The menu can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the __CausesValidation__ property to __True__.

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the menu performs a post-back, while still allowing other controls on the Web page to be validated, by using __Validation Groups__. The validator controls have a __ValidationGroup__ property. The menu also has a __ValidationGroup__ property. The menu only causes validation by those validators whose __ValidationGroup__ property matches the __ValidationGroup__ property of the menu. (The reason the default behavior is for all validators to execute on post-back is because the default value of the __ValidationGroup__ property on both __Radmenu__ and validators is an empty string.)

````ASPNET
	    <telerik:RadMenu runat="server" ID="RadMenu1" Skin="Inox" ValidationGroup="LoginValidationGroup"
	        CausesValidation="True" OnItemClick="RadMenu1_ItemClick">
	        <Items>
	            <telerik:RadMenuItem Text="Products">
	                <Items>
	                    <telerik:RadMenuItem Text="Missile Systems">
	                    </telerik:RadMenuItem>
	                    <telerik:RadMenuItem Text="Integrated Defense Systems">
	                    </telerik:RadMenuItem>
	                    <telerik:RadMenuItem Text="Space Systems">
	                    </telerik:RadMenuItem>
	                </Items>
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem Text="My Account">
	                <Items>
	                    <telerik:RadMenuItem Text="Orders">
	                    </telerik:RadMenuItem>
	                    <telerik:RadMenuItem Text="Profile">
	                    </telerik:RadMenuItem>
	                </Items>
	            </telerik:RadMenuItem>
	        </Items>
	    </telerik:RadMenu>
	    <asp:TextBox runat="server" ID="qsfexSearchBox" ValidationGroup="SearchValidationGroup"></asp:TextBox><asp:RequiredFieldValidator
	        runat="server" CssClass="qsfexErrorMessage" ID="RequiredFieldValidator1" ControlToValidate="qsfexSearchBox"
	        Display="Dynamic" ErrorMessage="Please enter a search term!" ValidationGroup="SearchValidationGroup" /><asp:LinkButton
	            runat="server" CssClass="qsfexSearch" CausesValidation="true" ValidationGroup="SearchValidationGroup"></asp:LinkButton>
	    <p id="qsfexLoginMessage">
	        Log in to access sections</p>
	    <fieldset>
	        <legend>Example Login Form</legend>
	        <div class="qsfexFieldWrapper">
	            <asp:Label runat="server" AssociatedControlID="qsfexUsername">Username</asp:Label>
	            <asp:TextBox runat="server" ID="qsfexUsername"></asp:TextBox>
	            <asp:RequiredFieldValidator runat="server" CssClass="qsfexErrorMessage" ID="qsfexRequiredFieldValidator1"
	                ControlToValidate="qsfexUsername" Display="Dynamic" ErrorMessage="Please Fill in Username and Password to see section!"
	                ValidationGroup="LoginValidationGroup" />
	            <asp:Label runat="server" AssociatedControlID="qsfexPassword">Password</asp:Label>
	            <asp:TextBox runat="server" TextMode="password" ID="qsfexPassword"></asp:TextBox>
	            <asp:RequiredFieldValidator runat="server" CssClass="qsfexErrorMessage" ID="qsfexRequiredFieldValidator2"
	                ControlToValidate="qsfexPassword" Display="Dynamic" ErrorMessage="Please Fill in Username and Password to see section!"
	                ValidationGroup="LoginValidationGroup" />
	            <asp:LinkButton CausesValidation="true" ValidationGroup="LoginValidationGroup" runat="server"
	                Text="sign in" CssClass="qsfexSignIn">    
	            </asp:LinkButton>
	        </div>
	    </fieldset>
````



For a live example, see [Validation Groups](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Functionality/ValidationGroup/DefaultCS.aspx).
