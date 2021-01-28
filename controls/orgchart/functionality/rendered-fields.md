---
title: Rendered Fields
page_title: Rendered Fields - RadOrgChart
description: Check our Web Forms article about Rendered Fields.
slug: orgchart/functionality/rendered-fields
tags: rendered,fields
published: True
position: 2
---

# Rendered Fields



## 

The Telerik's **RadOrgChart** control supports custom fields for **Nodes** and **Items**. Using custom fields that we call **RenderedFields** one can add an extra text information about every Node or Item in **RadOrgChart** control. Rendered fields can be added either to the Node or to the Items of the RadOrgChart or to both.

>note When you need to set custom fields on a Node it is important that you also set the *Group-Enable Binding* .
>


## Rendered Fields Properties

RenderedFields, for Nodes or Items, can be set from the mark up in section RenderedFields or in code-behind. There are several properties that you can use with in the OrgChartRenderedField tag:

* **DataField** - this is the field name from the data source that populates each custom field's text property during binding.

* **Label** - short description about custom field's text. It is optional.

* **Text** - short description of the custom field that will appear in the Node or the Item depending on where it is set.

## How to Set Rendered Fields

In general there are two ways to set custom fields. They include:

* Set Rendered fields when the RadOrgChart is Databound (in the markup or in code behind) - using the name of the column of your database you can set the **DataField** property and the **Label** property of the **OrgChartRenderedField** as follows:

````ASPNET
<telerik:RadOrgChart RenderMode="Lightweight" ID="RadOrgChart1" runat="server">
	<RenderedFields>
		<NodeFields>
			<telerik:OrgChartRenderedField DataField="TeamName" Label="TeamName: " />
		</NodeFields>
		<ItemFields>
			<telerik:OrgChartRenderedField DataField="email" Label="Contact E-mail: " />
		</ItemFields>
	</RenderedFields>
</telerik:RadOrgChart>
````



* Set Rendered fields when the RadOrgChart is NOT Databound

````ASPNET
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1">
	<Nodes>
		<telerik:OrgChartNode>
			<RenderedFields>
				<telerik:OrgChartRenderedField Text="Team: Dev" />
			</RenderedFields>
			<GroupItems>
				<telerik:OrgChartGroupItem Text="TeamLead">
					<RenderedFields>
						<telerik:OrgChartRenderedField Text="Certificates: MCTS" />
					</RenderedFields>
				</telerik:OrgChartGroupItem>
			</GroupItems>
		</telerik:OrgChartNode>
	</Nodes>
</telerik:RadOrgChart>
````



# See Also

 * [Online Demo](https://demos.telerik.com/aspnet-ajax/orgchart/examples/renderedfields/defaultcs.aspx)
