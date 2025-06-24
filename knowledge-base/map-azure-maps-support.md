---
title: Implementing Azure Maps Support in RadMap for ASP.NET AJAX
description: Learn how to use Azure Maps with the RadMap for ASP.NET AJAX by utilizing Azure's PNG tile API and configuring the UrlTemplate property of TileLayers.
type: how-to
page_title: Using Azure Maps with RadMap for ASP.NET AJAX
meta_title: Using Azure Maps with RadMap for ASP.NET AJAX
slug: map-azure-maps-support
tags: radmap, asp.net ajax, azure maps, tilelayers, urltemplate
res_type: kb
ticketid: 1688913
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> RadMap for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

I want to use Azure Maps with RadMap for ASP.NET AJAX instead of Bing Maps. I need to know if RadMap supports Azure Maps and how to configure it.

This knowledge base article also answers the following questions:
- How to use Azure Maps with RadMap for ASP.NET AJAX?
- Can RadMap work with Azure's PNG tile API?
- How to configure TileLayers in RadMap for Azure Maps?

## Solution

To use Azure Maps with RadMap for ASP.NET AJAX, utilize Azure's PNG tile API and configure the `UrlTemplate` property of the [TileLayers](https://docs.telerik.com/devtools/aspnet-ajax/controls/map/functionality/tile-layers). Follow these steps:

1. Ensure you have an Azure Maps account and an authentication key. Refer to [Azure Maps Authentication](https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication) for details.
2. Specify the API version in the URL for the `UrlTemplate` property.
3. Use the following code snippet to set up Azure Maps in RadMap:

````ASP.NET
<telerik:RadMap runat="server" ID="RadMap1">
    <LayersCollection>
        <telerik:MapLayer Type="Tile" UrlTemplate="https://atlas.microsoft.com/map/tile?subscription-key=[KEY]&api-version=2.0&tilesetId=microsoft.base.road&x=#=x#&y=#=y#&zoom=#=zoom#&tileSize=256" />
    </LayersCollection>
</telerik:RadMap>
````

- Replace `[KEY]` with your Azure Maps subscription key.

By implementing this configuration, Azure Maps will function as a map layer in RadMap.

## See Also

- [Tile Layers Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/map/functionality/tile-layers)
- [Azure Maps Authentication](https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication)
- [RadMap Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/map/overview)
