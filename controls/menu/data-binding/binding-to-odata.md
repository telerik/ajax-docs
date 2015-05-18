---
title: Binding to OData
page_title: Binding to OData | RadMenu for ASP.NET AJAX Documentation
description: Binding to OData
slug: menu/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 6
---

# Binding to OData


Required introduction

## Binding to OData

Forth from Q3 2011, RadMenu can be bound to an OData service. The Open Data Protocol (OData) is an open web protocol for querying and updating data. The protocol allows for a consumer to query a data source over the HTTP protocol and get the result back in formats like Atom, JSON or plain XML, including pagination, ordering or filtering of the data. For now, it is not possible to utilize filtering or paging, however, we will add support for these in the Q1 2012 release. Also, the binding is one way only, i.e. it is not possible to perform update/insert/delete on the data source. The binding can be flat or hierarchical, the RadMenu can utilize both.

## Flat Binding

This means binding to a non-hierarchical data. It is rather easy to bind to such data, here is sample markup that binds to the Category table exposed by the OData.org sample services:

````ASP.NET	     
<telerik:RadMenu runat="server" ID="RadMenu1">
	<WebServiceSettings Path="http://services.odata.org/OData/OData.svc">
		<ODataSettings ResponseType="JSONP">
			<Entities>
			<telerik:ODataEntityType Name="Category"   DataValueField="ID" DataTextField="Name" />
			</Entities>
			<EntityContainer>
			<telerik:ODataEntitySet EntityType="Category" Name="Categories" />
			</EntityContainer>
		</ODataSettings>
	</WebServiceSettings>
</telerik:RadMenu>	
````

The applied settings are described below:

1. First we need to specify a path to the live service.

1. Secondly, a response type of [JSONP](http://en.wikipedia.org/wiki/JSONP) should be set if the service is hosted in another domain. This is due to an XSS limitation, which does not allow javascript from one domain to directly access resources in another. JSONP works around that limitation and allows for cross domain calls.

1. The entities collection contains instances of [Entity Types ](http://www.odata.org/developers/protocols/overview) (for example, Customer, Employee, and so on) which are structured records consisting of named and typed properties and with a key. This way, one is telling the Menu what kind of data it is being bound against. It is recommended to set DataValueField and a DataTextField so that the data bound items have correct text/value.

1. All entities are grouped in Entity Sets. The EntityContainer collection contains records of such sets. Each set has a Name and EntityType properties.

* Name is the name of the hosted collection that should be queried. For example, if one have set the Name to “Categories”, the query url would look like: **http://services.odata.org/OData/OData.svc/Categories**

* The EntityType property maps declared EntityType to a type contained in a given collection. If we stick to the same example, the EntityType of the Categories collection would be Category

## Hierarchical Binding

The hierarchical binding is pretty much the same. Here is how the declaration of a bound menu would look like:

````ASP.NET     
<telerik:RadMenu runat="server" ID="RadMenu1" PersistLoadOnDemandItems="true">
	<WebServiceSettings  Path="http://services.odata.org/OData/OData.svc">
		<ODataSettings ResponseType="JSONP" InitialContainerName="Categories">
			<Entities>
				<telerik:ODataEntityType Name="Category" DataValueField="ID" DataTextField="Name"
									NavigationProperty="Products" />
				<telerik:ODataEntityType Name="Product" DataValueField="ID" DataTextField="Name" />
			</Entities>
			<EntityContainer>
				<telerik:ODataEntitySet EntityType="Category" Name="Categories" />
				<telerik:ODataEntitySet EntityType="Product" Name="Products" />
			</EntityContainer>
			</ODataSettings>
	</WebServiceSettings>
	<DataBindings>
	    <telerik:RadMenuItemBinding ExpandMode="WebService" />
	</DataBindings>
</telerik:RadMenu>
````

There are several differences from the Flat Binding:

1. InitialContainerName property is set on the ODatasSettings object. As its name suggest, it specifies which of the declared EntitySets is for the root level.

1. The Category EnitityType has NavigationPropertyset to Products. This means, that all categories have children of type product. This way, we are linking the entities in the Categories collection with the ones in the Products collection. The relationship is one to many i.e. a single category can contain multiple products.

In short, Each Entry of an OData feed is described in the EDM by an Entity Type and each link between entries are described by a **Navigation Property.**

As you can see, having set the InitialContainerName property and the NavigationProperty on the first EnitityType we have described a hierarchy, which has categories at the root level and products in the child ones.

# See Also

 * [Online demo](http://demos.telerik.com/aspnet-ajax/Menu/Examples/LoadOnDemand/OData/DefaultCS.aspx)
