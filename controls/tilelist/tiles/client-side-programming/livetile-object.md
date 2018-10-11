---
title: LiveTile Object
page_title: LiveTile Object | RadTile for ASP.NET AJAX Documentation
description: LiveTile Object
slug: tilelist/tiles/client-side-programming/livetile-object
tags: livetile,object
published: True
position: 6
---

# LiveTile Object





This article explains the client-side properties and methods **[RadLiveTile]({%slug tilelist/tiles/live-tile/overview%})** exposes.

>tip  **RadLiveTile** inherits the **[RadBaseTile]({%slug tilelist/tiles/client-side-programming/basetile-object%})** type and has the API it provides in addition to the LiveTile specific methods.




>caption RadLiveTile Client-Side Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_clientTemplate()||String|Gets the HTML template that will be instantiated in the tile after live data request.|
|get_updateInterval()||Int|Gets the interval (in milliseconds) after which the tile will automatically update the content.|
|get_value()||string|Gets the Value property that is sent as a parameter to the webservice.|
|set_clientTemplate(value)|String||Sets the HTML template that will be instantiated in the tile after live data request.|
|set_value()|string||Sets the Value property that is sent as a parameter to the webservice.|


>caption RadLiveTile Client-side Methods for Working With Events

| Name | Parameters | Description |
| ------ | ------ | ------ |
|add_dataLoaded()|Function|Adds a handler for the dataLoaded client event. The dataLoaded event occurs after the data request returns the data successfully.|
|add_dataLoading()|Function|Adds a handler for the dataLoading client event. The dataLoading client-side event occurs before the data request is executed.|
|add_dataLoadingError()|Function|Adds a handler for the dataLoadingError client event. The dataLoadingError event occurs after the data request returns error.|
|add_templateDataBound()|Function|Adds a handler for the templateDataBound client event. The templateDataBound client-side event occurs after the client template is data bound.|
|remove_dataLoaded()|Function|Removes a handler for the dataLoaded client event.|
|remove_dataLoading()|Function|Removes a handler for the dataLoading client event.|
|remove_dataLoadingError()|Function|Removes a handler for the dataLoadingError client event.|
|remove_templateDataBound()|Function|Removes a handler for the templateDataBound client event.|

# See Also

 * [Overview]({%slug tilelist/tiles/live-tile/overview%})

 * [BaseTile Object]({%slug tilelist/tiles/client-side-programming/basetile-object%})
