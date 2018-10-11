---
title: AutoComplete
page_title: AutoComplete | RadSearchBox for ASP.NET AJAX Documentation
description: AutoComplete
slug: searchbox/functionality/autocomplete
tags: autocomplete
published: True
position: 0
---

# AutoComplete



RadSearchBox has an **"EnableAutoComplete"** property that controls the AutoComplete feature.

When **AutoComplete** is disabled the control resembles a simple textbox. It can still have a collection of [image buttons]({%slug searchbox/functionality/buttons-collection%}). The Default [Search button]({%slug searchbox/functionality/search-button%}) can also be visible. Pressing enter while typing in the control or clicking on the default search button will trigger the control’s default event, containing the value from the input field.

![searchbox autocomplete false](images/searchbox_autocomplete_false.png)

When **AutoComplete** is enabled the control will filter an underlying database based on the text typed in the input and display the results in a dropdown, positioned under the SearchBox. In order for this to work the control must be bound to a datasource, ODataDataSource, WebService. It’s important to note that the results shown in the dropdown will not be instances of a public "Item" class. They will be directly rendered on the client with a property containing the dataItem attached to the rendered containing element. This dataItem will contain the additional values of the fields defined in the DataKeyNames Collection.

When **AutoComplete** is **enabled** the following properties can be used:

* **MinFilterLength** - determines the minimum number of characters that should be typed in the searchbox input before the dropdown with autocomplete suggestions is shown. It's default value is 1 and in this case the drop-down will be shown immediately after the first character is typed.

* **MaxResultCount** - sets the maximum number of results that will appear in the dropdown. Its default value is "-1", meaning that all the results found will be displayed in the dropdown. When this value is set, a "Show all results" button appears at the bottom of the dropdown Clicking this button will load all corresponding results.

![searchbox show all results](images/searchbox_show_all_results.png)

When a **WebService** binding scenario is implemented and you need to use the **"Show All Results"** button and manage its visibility, the following requirements needs to be met:

* **MaxResultCount** should be set to a desirable value. Use the `get_maxResultCount()` client-side method to [pass its value to the web service]({%slug searchbox/functionality/passing-additional-information-to-the-server%})

* A custom calculation in the **WebService** needs to be implemented, so you could check if the **"Show All Results"** button needs to be visible. For example, if the entries count returned from the data source match the **MaxResultCount** value - the **"Show All "Results"** should not be visible. In this case you could toggle its Visible state by simply setting **EndOfItems** property of the **SearchBoxData** object in the following manner:



````C#

SearchBoxData data = new SearchBoxData();
data.EndOfItems = true;
	
````
````VB.NET
	
Dim data As New SearchBoxData()
data.EndOfItems = True
	
````


>tip In cases when **MaxResultCount** property is used in RadSearchBox and the **DataSourceSelect** event is handled manually in order for **Show All Results** button to appear correctly, we recommend that the amount of items that will be selected should be at least with one item greater than **MaxResultCount** .
>


The control can also have a [Client]({%slug searchbox/templates/client-templates%}) or [Server]({%slug searchbox/templates/overview%}) ItemTemplate, as well as a DropDown [Header or Footer]({%slug searchbox/templates/header-and-footer-templates%}) Template.
