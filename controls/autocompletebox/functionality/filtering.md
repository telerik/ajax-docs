---
title: Filtering
page_title: Filtering | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Filtering
slug: autocompletebox/functionality/filtering
tags: filtering
published: True
position: 1
---

# Filtering



## Filtering

**RadAutoCompleteBox** control provides implicit server-side filtering functionality, loading the drop-down items on demand.Once the user starts typing in the input area of the control, a request for new items is made to the server. The items are fetched from the server based on the value set to the **Filter** property.

There are two **filtering** options available:

* **Contains** - Filters all items which Text value contains the searched text as a substring.

* **StartsWith** - Filters all items which Text value starts with the searched text.

>important The default value of Filter property is **Contains** .
>

>caption 



As of **Q3 2013** release, we had introduced two properties - **MinFilterLength** and **MaxResultCount**:

* **MinFilterLength** - Sets the minimum length of the typed text before the control initiates a request for its DataSource.

* **MaxResultCount** - Sets how many results will the **RadAutoCompleteBox** be populated with.When this property is set, a "Show All Results" button appears at the bottom of the dropdown. Clicking this button will load all corresponding results.![autocomplte-showallresults](images/autocomplte-showallresults.png)

When a **WebService** binding scenario is implemented and you need to use the **"Show All Results"** button and manage its visibility, the following requirements needs to be met:

* **MaxResultCount** should be set to a desirable value.

* A custom calculation in the **WebService** needs to be implemented, so you could check if the **"Show All Results"** button needs to be visible. For example, if the entries count returned from the data source match the **MaxResultCount** value - the **"Show All "Results"** should not be visible. In this case you could toggle its Visible state by simply setting **EndOfItems** property of the **AutoCompleteBoxData** object in the following manner:



````C#
	
AutoCompleteBoxData data = new AutoCompleteBoxData();
data.EndOfItems = true;
	
````
````VB.NET

Dim data As New AutoCompleteBoxData()
data.EndOfItems = True

````



>tip In cases when **MaxResultCount** property is used in RadAutoCompleteBox and the **DataSourceSelect** event is handled manually in order for **Show All Results** button to appear correctly, we recommend that the amount of items that will be selected should be at least with one item greater than **MaxResultCount** .
>


Both properties could be very useful in a heavy-data scenario. Controlling the **MinFilterLength**, could give you the ability to perform a search in your database, regarding the sequence of the typed characters. If the result is still potentially large, you could use the **MaxResultCount**, in order to return the first 100 results for example.
