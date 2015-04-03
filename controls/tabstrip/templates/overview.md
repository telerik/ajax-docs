---
title: Templates Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tabstrip/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



## 

__RadTabStrip__ tabs are extremely configurable. In addition to the preset [skins]({%slug tabstrip/appearance-and-styling/skins%}), you can customize the appearance of tabs by [adding custom images]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%}), using [CSS classes]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%}), or [creating custom skins]({%slug tabstrip/appearance-and-styling/tutorial-creating-a-custom-skin%}). However, if you want to embed other HTML controls in a tab, you must use templates. You can embed any content inside a __RadTabStrip__ template, including:

* HTML markup

* ASP.NET server controls

* Other third-party controls (including other Telerik controls)

At design time, add item templates to your __RadTabStrip__ control using the [Template Design Surface]({%slug tabstrip/design-time/template-design-surface%}). __RadTabStrip__ supports two types of item templates:

1. The global __RadTab__ template affects the appearance of all tabs in the tab strip.

1. Individual __Item__ templates affect the appearance of a single tab, overriding the global __RadTab__ template if it is set.

The following example uses both a global __RadTab__ Template and individual __Item__ templates to override the global template for the root level tabs:

````ASPNET
	
	<telerik:RadTabStrip ID="RadTabStrip1" runat="server" SelectedIndex="0">
	 <Tabs>
	   <telerik:RadTab runat="server" Text="Products" Selected="True" SelectedIndex="0">
	     <Tabs>
	       <telerik:RadTab runat="server" Text="Food" Selected="True" />
	       <telerik:RadTab runat="server" Text="Electronics" />
	     </Tabs>
	     <TabTemplate>
	        Products
	     </TabTemplate>
	   </telerik:RadTab>
	   <telerik:RadTab runat="server" Text="Tours">
	     <Tabs>
	       <telerik:RadTab runat="server" Text="Europe" />
	       <telerik:RadTab runat="server" Text="South Pacific" />
	     </Tabs>
	     <TabTemplate>
	        Tours
	     </TabTemplate>
	   </telerik:RadTab>
	 </Tabs>
	 <TabTemplate>
	    <asp:CheckBox
	       ID="CheckBox1"
	       Text='<%# DataBinder.Eval(Container, "Text") %>'
	       Checked='<%# DataBinder.Eval(Container, "Selected") %>'
	       runat="server" />
	 </TabTemplate>
	</telerik:RadTabStrip> 
	
````



>caution When binding template controls, as in this example, you must also explicitly call the __DataBind__ method for the tabs. See[Data Binding Templates]({%slug tabstrip/templates/binding-templates%})for details.
>


![RadTabStrip templates](images/tabstrip_radtabstriptemplates.png)

>caution If you add templates at runtime, assigning an object that implements the __ITemplate__ interface to the __ItemTemplate__ property, the template only works with items added at runtime in the codebehind.
>

