---
title: Simple Binding
page_title: Simple Binding | RadOrgChart for ASP.NET AJAX Documentation
description: Simple Binding
slug: orgchart/data-binding/simple-binding
tags: simple,binding
published: True
position: 1
---

# Simple Binding



In order to support a simple, straight-forward binding to a self-referenced data, without complex relations such as groups, RadOrgChart supports 2 different kinds of binding, first of which we called **Simple Data Binding**. Second one is called **Group-Enabled Binding** (see the [Group-Enabled Binding]({%slug orgchart/data-binding/group-enabled-binding%}) article)

## 

This binding is no different from what you have already used with other hiearchical controls from and outside	the RadControls suite.

For example, having a RadTreeView bound to a self referenced data with specified DataFieldID, DataFieldParentID and DataTextField, one can switch the opening and closing tag names with telerik:RadOrgChart	and the result would be an Org Chart bound to the data of RadTreeView:

````ASPNET

<telerik:RadTreeView RenderMode="Lightweight" runat="server" ID="RadTreeView1" DataSource="RadTreeViewDataSource1"
	DataFieldID="ID" DataFieldParentID="ParentID" DataTextField="Text">
</telerik:RadTreeView>

<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1" DataSource="RadTreeViewDataSource1"
	DataFieldID="ID" DataFieldParentID="ParentID" DataTextField="Text">
</telerik:RadOrgChart>
	
````



We try to keep our API consistent and to make the learning curve involved with every new control as smooth as possible.

With that said, here are demonstrations of the various supported data sources using the Simple Data Binding:

* [Declarative Datasources](http://demos.telerik.com/aspnet-ajax/orgchart/examples/populatingwithdata/declarativedatasources/defaultcs.aspx)

* [Entity Datasource](http://demos.telerik.com/aspnet-ajax/orgchart/examples/populatingwithdata/entitydatasource/defaultcs.aspx)

* [Linq Datasource](http://demos.telerik.com/aspnet-ajax/orgchart/examples/populatingwithdata/linqdatasource/defaultcs.aspx)

* [Programatic Data Binding](http://demos.telerik.com/aspnet-ajax/orgchart/examples/populatingwithdata/programaticdatabinding/defaultcs.aspx)

* [Load from XML](http://demos.telerik.com/aspnet-ajax/orgchart/examples/populatingwithdata/xmlfile/defaultcs.aspx)
