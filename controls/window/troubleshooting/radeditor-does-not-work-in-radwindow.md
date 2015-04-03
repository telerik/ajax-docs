---
title: RadEditor Does Not Work in RadWindow
page_title: RadEditor Does Not Work in RadWindow | UI for ASP.NET AJAX Documentation
description: RadEditor Does Not Work in RadWindow
slug: window/troubleshooting/radeditor-does-not-work-in-radwindow
tags: radeditor,does,not,work,in,radwindow
published: True
position: 3
---

# RadEditor Does Not Work in RadWindow



## 

The __RadWindow__ moves its contents in the DOM when it is opened - i.e. controls declared in its__ContentTemplate__ are no longer in the same place in the markup where they were declared. This needs to be done in orderto allow the popup element of the __RadWindow__ to be shown above all other elements, so that it does not inherit any visibilityrestrictions from its parent elements (such as the CSS display property being set to none). This, however, is not a scenario, which the__RadEditor__ supports - it is a very complex control and needs to stay in the same place.Therefore when you place a __RadEditor in the ContentTemplate of a RadWindow__ the buttons no longer function when you showthe popup. This holds true for any scenario in which you move the __RadEditor__ in the DOM.

There is an easy fix that causes the __RadEditor__ to reattach its handlers and start functioning again - this is doneby calling its __onParentNodeChanged()__ method when you move it, which, in this case, is the__OnClientShow__ event of the __RadWindow__:

````ASPNET
	    <telerik:RadWindow runat="server" ID="RadWindowWithEditor" AutoSize="true" OnClientShow="fixEditor"
	        OpenerElementID="Button5">
	        <ContentTemplate>
	            <telerik:RadEditor runat="server" ID="RadEditor1" Width="700px" Height="300px">
	                <Content>
	                    Lorem ipsum dolor sit amet
	                </Content>
	            </telerik:RadEditor>
	        </ContentTemplate>
	    </telerik:RadWindow>
	    <asp:Button ID="Button5" Text="open the RadWindow" runat="server" />
	    <script type="text/javascript">
	        function fixEditor()
	        {
	            $find("<%=RadEditor1.ClientID %>").onParentNodeChanged();
	        }
	    </script>
````



The following function uses jQuery to get all RadEditor objects in the ContentTemplate of the RadWindow in order to	call their onParentNodeChanged() method. It is useful for scenarios when the RadEditor is inside a user control so you	cannot get a direct reference to it via $find().

````JavaScript
				function fixEditor(sender, args) {
					$telerik.$(".RadEditor", sender.get_contentElement()).each(function (index, elem) {
						if (elem.control && elem.control.onParentNodeChanged) elem.control.onParentNodeChanged();
					});
				}
````


