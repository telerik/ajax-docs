---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | UI for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: toolbar/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 4
---

# Accessing Controls Inside Templates



## 

If your __RadToolBar__ has items with templates that have embedded controls, you may want to access the properties of those embedded controls. To get a reference to the embedded control, locate the __RadToolBarItem__ that has the template, and use its __FindControl__ method.

For example, consider the following, very simple, toolbar:

````ASPNET
	    <telerik:RadToolBar ID="RadToolBar1" runat="server">
	        <Items>
	            <telerik:RadToolBarButton runat="server" Text="Button 1" Value="TextBox1">
	                <ItemTemplate>
	                    <asp:TextBox ID="TextBox1" runat="server" Text='<%# DataBinder.Eval(Container, "Value") %>' />
	                </ItemTemplate>
	            </telerik:RadToolBarButton>
	            <telerik:RadToolBarButton runat="server" Text="Button 2" />
	        </Items>
	    </telerik:RadToolBar>
````



To access the TextBox in the item template, use the following code:

>tabbedCode

````C#
	     
	    RadToolBarItem textItem = RadToolBar1.FindItemByText("Button 1");
	    TextBox textBox = (TextBox) textItem.FindControl("TextBox1");
				
````
````VB.NET
	
	    Dim textItem As RadToolBarItem = RadToolBar1.FindItemByText("Button 1")
	    Dim textBox As TextBox = CType(textItem.FindControl("TextBox1"), TextBox)
	
````
>end

You can also acces different controls place in an Item of the RadToolBar control from the __client-side__ For example having the following code you can get to the RadButton by finding the RadToolbarButton first:

````JavaScript
	    <script type="text/javascript">
	    	function OnClientLoad() {
					var toolBar = $find("<%= RadToolbar1.ClientID %>");
					var toolbarbutton = toolBar.findItemByValue("Paste")
					var radbutton = toolbarbutton.findControl("Button1"); //for RadControls
					alert(radbutton);
					var button1 = $telerik.findElement(toolbarbutton.get_element(), ("Print")); //to find a generic HTML element 
					alert(button1);
				}
	    </script>
````



````ASPNET
	      <telerik:RadToolBar ID="RadToolbar1" runat="server" OnClientLoad="OnClientLoad">
				<Items>
					<telerik:RadToolBarButton Text="Copy" Value="Copy">
					</telerik:RadToolBarButton>
					<telerik:RadToolBarButton Value="Paste">
						<ItemTemplate>
							<telerik:RadButton ID="Button1" runat="server" Text="Button1" />
							<asp:Button ID="Print" Text="Print" runat="server" />
						</ItemTemplate>
					</telerik:RadToolBarButton>
				</Items>
			</telerik:RadToolBar>
````



# See Also

 * [Overview]({%slug toolbar/templates/overview%})
