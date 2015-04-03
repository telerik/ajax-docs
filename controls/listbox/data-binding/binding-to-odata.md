---
title: Binding to OData
page_title: Binding to OData | UI for ASP.NET AJAX Documentation
description: Binding to OData
slug: listbox/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 5
---

# Binding to OData



## Binding to OData

Forth from Q3 2011, RadListBox can be bound to an OData service. The Open Data Protocol (OData) is an open web protocol for querying and updating data. The protocol allows for a consumer to query a data source over the HTTP protocol and get the result back in formats like Atom, JSON or plain XML, including pagination, ordering or filtering of the data. For now, it is not possible to utilize filtering or paging, however, we will add support for these in the Q1 2012 release. Also, the binding is one way only, i.e. it is not possible to perform update/insert/delete on the data source. The binding can be flat or hierarchical, the RadListBox can utilize only the flat binding.

## Flat Binding

This means binding to a non-hierarchical data. It is rather easy to bind to such data, here is sample markup that binds to the Category table exposed by the OData.org sample services:

````ASPNET
	     
		<telerik:RadListBox runat="server" ID="RadListBox2">
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
		</telerik:RadListBox>
	 			
````



The applied settings are described below:

1. First we need to specify a path to the live service.

1. Secondly, a response type of [JSONP](http://en.wikipedia.org/wiki/JSONP) should be set if the service is hosted in another domain. This is due to an XSS limitation, which does not allow javascript from one domain to directly access resources in another. JSONP works around that limitation and allows for cross domain calls.

1. The entities collection contains instances of [Entity Types ](http://www.odata.org/developers/protocols/overview) (for example, Customer, Employee, and so on) which are structured records consisting of named and typed properties and with a key. This way, one is telling the ListBox (or any of the other controls) what kind of data it is being bound against. It is recommended to set DataValueField and a DataTextField so that the data bound items have correct text/value.

1. All entities are grouped in Entity Sets. The EntityContainer collection contains records of such sets. Each set has a Name and EntityType properties.

* Name is the name of the hosted collection that should be queried. For example, if one have set the Name to “Categories”, the query url would look like: __http://services.odata.org/OData/OData.svc/Categories__

* The EntityType property maps declared EntityType to a type contained in a given collection. If we stick to the same example, the EntityType of the Categories collection would be Category

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ListBox/Examples/LoadOnDemand/OData/DefaultCS.aspx)
