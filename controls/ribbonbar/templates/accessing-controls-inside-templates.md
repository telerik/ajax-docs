---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates - RadRibbonBar
description: Check our Web Forms article about Accessing Controls Inside Templates.
slug: ribbonbar/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 0
---

# Accessing Controls Inside Templates



In this example you will see how to find **RadComboBox** control nested in **RibbonBarTemplateItem** of RadRibbonBar control.

## Find the RadComboBox server-side

In order to find the control that is located in a **RibbonBarTemplateItem** of a RadRibbonBar, first you need to find the tab that it is located in. This is done by using the **FindTabByValue** property (note that to make this work, the tab needs to have a previously assigned value, ex: **`<telerik:RibbonBarTab Text="Tab2"Value="Tab2">`** )Then you will need to find the Group by its index (this is zero in the particular case - *Groups[0]*) that is placed in the tab with **Value="Tab2"** and get the Group's first item (again this is done by index - *Items[0]*). Finally, by using the **FindControl** property you can access the RadComboBox control.

>note Alternatively, a tab can also be found by its index as well. Furthermore, depending on one’s requirements, a Group can be referred to by using the **FindByValue** property of the tab ( with the code below such example would be **tab2.FindByValue(“Group1”);** ).
>


Here is the markup:

````ASPNET
<telerik:RibbonBarTab Text="Tab2" Value="Tab2">
	<telerik:RibbonBarGroup Text="Font">
		<items>
			<telerik:RibbonBarTemplateItem>
					<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" Width="90px">
						<Items>
							<telerik:RadComboBoxItem Text="Cambria" />
							<telerik:RadComboBoxItem Text="Calibri" Selected="true" />
							<telerik:RadComboBoxItem Text="Arial" />
							<telerik:RadComboBoxItem Text="Book Antiqua" />
						</Items>
					</telerik:RadComboBox>
			</telerik:RibbonBarTemplateItem>
		</items>
	</telerik:RibbonBarGroup>
</telerik:RibbonBarTab>
````





````C#
	
RibbonBarTab tab2 = RadRibbonBar1.FindTabByValue("Tab2");
RadComboBox combobox1 = (RadComboBox)tab2.Groups[0].Items[0].FindControl("RadComboBox1");
	
````
````VB.NET
	
Dim tab2 As RibbonBarTab = RadRibbonBar1.FindTabByValue("Tab2")
Dim combobox1 As RadComboBox = DirectCast(tab2.Groups(0).Items(0).FindControl("RadComboBox1"), RadComboBox)
	
````

