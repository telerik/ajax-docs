---
title: Data Binding Overview
page_title: Overview | RadSearchBox for ASP.NET AJAX Documentation
description: Overview
slug: searchbox/search-context/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



## Server-side

SearchContext can be bound both declaratively and programmatically server-side by setting the DataSource and DataSorceID property and assigning the DataTextField and DataKeyField properties to the desired fields of the DataSource so that the DataKeyField is the same as the one set to DataContextKeyField of Searchbox control.

In server side binding ImageUrl property can be assigned to the SearchContextItem in the ItemDataBound of SearchContext as it is achieved in the code in [this article]({%slug searchbox/search-context/data-binding/server-side-binding%}).

## Client-side

The items in the SearchContext drop-down can be also loaded from Web Service by setting the WebServiceSettings for SearchContext and the appropriate path and name. In this case one can assign the ImageUrl of an item directly in the service method as as shown in the following help article [here]({%slug searchbox/search-context/data-binding/client-side-binding%}).

When SearchContext is bound to **RadODataDataSource** control, its **DataModelID** property should be set to a Model ID from the data source. In such scenario in a similar manner as when the control is bound programatically, the **DataContextKeyField** field set to the SearchBox will be used as a context field. In order to set ImageUrl for the context items the **OnClientItemDataBound** event of the Search Context could be used as shown in this [this article]({%slug searchbox/search-context/data-binding/client-side-binding%}).
