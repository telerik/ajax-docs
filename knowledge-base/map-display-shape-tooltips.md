---
title: Display Shape Tooltips in RadMap
description: Display Shape Tooltips in RadMap. Check it now!
type: how-to
page_title: Display Shape Tooltips in RadMap
slug: map-display-shape-tooltips
position: 
tags: 
ticketid: 1542943
res_type: kb
---

## How to

In this article you will see how to assign a dynamically created tooltip to the individual shapes/bubble in RadMap.

## Solution
1. Disable the Kendo scripts shipped with the UI for ASP.NET AJAX suite like describe [here](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets).

1. Handle the Map's [OnShapeMouseEnter](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapemouseenter) in order to create the popup and assign the desired text value to it. 
 
1. Handle the [OnShapeMouseLeave](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapemouseleave) event in order to hide the dynamically created popup

````ASP.NET
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2021.3.1109/js/kendo.all.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
            <Scripts>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
            </Scripts>
        </telerik:RadScriptManager>

        <script type="text/javascript">
            var $ = $ || $telerik.$;
            var popup;

            var markerData = [
                {
                    "Item": "1",
                    "Value": 3,
                    "Location": [42.7, 23.33],
                    "Description" : "Some description to shown in the tooltip 1"
                }, {
                    "Item": "2",
                    "Value": 2,
                    "Location": [42.7, 43.33],
                    "Description": "Some description to shown in the tooltip 2"
                }, {
                    "Item": "3",
                    "Value": 1,
                    "Location": [42.7, 60],
                    "Description": "Some description to shown in the tooltip 3"
                }
            ];


            function OnInitialize(sender, args) {
                var originalOptions = args.get_options();
                originalOptions.layers[1].dataSource = { data: markerData };
                args.set_options(originalOptions);

                popup = $("<div>Foo</div>")
                    .appendTo(document.body)
                    .kendoPopup()
                    .data("kendoPopup");
            }
            function shapeMouseEnter(e) {
                var oe = e.originalEvent;
                var x = oe.pageX || oe.clientX;
                var y = oe.pageY || oe.clientY;
                
                var tooltipData = e.shape.dataItem.Description;
                popup.element.html(tooltipData);
                popup.open(x, y);
            }

            function shapeMouseLeave(e) {
                if (!$(e.originalEvent.relatedTarget).is(".k-popup, .k-animation-container")) {
                    popup.close();

                    // Necessary to stop the animations,
                    // will be fixed in future versions
                    popup.element.kendoStop(true, true);
                }
            }
        </script>

        <telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Width="500px" Height="250px">
            <ClientEvents OnInitialize="OnInitialize" OnShapeMouseEnter="shapeMouseEnter" OnShapeMouseLeave="shapeMouseLeave" />
            <CenterSettings Latitude="42.7" Longitude="43.33" />
            <LayersCollection>
                <telerik:MapLayer Type="Tile" Subdomains="a,b,c"
                    UrlTemplate="http://#= subdomain #.tile2.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png"
                    Attribution="� <a href='https://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
                </telerik:MapLayer>
                <telerik:MapLayer Type="Bubble" LocationField="Location" ValueField="Value">
                    <StyleSettings>
                        <FillSettings Color="Yellow" />
                        <StrokeSettings Color="Green" Width="1" />
                    </StyleSettings>
                </telerik:MapLayer>
            </LayersCollection>
        </telerik:RadMap>
    </form>
</body>
</html>
````

## See Also

* [RadMap Client-side Programming]({%slug map/client-side-programming %})
  
* [RadHtmlChart Integration With KendoUI Widgets]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %})

* [Kendo UI Map Display Shape Tooltips](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/map/how-to/shape-tooltips)


