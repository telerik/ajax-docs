---
title: Templates Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: navigation/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



__RadNavigation__ nodes are extremely configurable. In addition to the preset [skins]({%slug navigation/appearance-and-styling/skins%}),you can customize their appearance by adding custom images, using CSS classes, or creating custom skins. However, if you want to embed other HTMLcontrols in a navigation node, you must use templates. You can embed any content inside a __NodeTemplate__, including:

* HTML markup

* ASP.NET server controls

* Other third-party controls (including other Telerik controls)

## 

At design time, add node template to your RadNavigation control:

````ASPNET
	        <telerik:RadNavigation runat="server" ID="RadNavigation1" Skin="Default">
	            <NodeTemplate>
	                <asp:CheckBox ID="CheckBox1" runat="server"></asp:CheckBox>
	                <asp:Label ID="Label1" runat="server" Text='<%# DataBinder.Eval(Container, "Text").ToString() %>'></asp:Label>
	            </NodeTemplate>
	            <Nodes>
	                <telerik:NavigationNode Text="Home">
	                </telerik:NavigationNode>
	                <telerik:NavigationNode Text="Products">
	                    <Nodes>
	                        <telerik:NavigationNode Text="Product 1"></telerik:NavigationNode>
	                        <telerik:NavigationNode Text="Product 2"></telerik:NavigationNode>
	                        <telerik:NavigationNode Text="Product 3"></telerik:NavigationNode>
	                    </Nodes>
	                </telerik:NavigationNode>
	                <telerik:NavigationNode Text="About">
	                </telerik:NavigationNode>
	            </Nodes>
	        </telerik:RadNavigation>
````



# See Also

 * [Add Server Template at Runtime]({%slug navigation/templates/server-templates%})
