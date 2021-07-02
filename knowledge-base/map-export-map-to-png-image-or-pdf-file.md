---
title: Export map to png image or pdf file
description: Export map to png image or pdf file. Check it now!
type: how-to
page_title: Export map to png image or pdf file
slug: export-map-to-png-image-or-pdf-file
res_type: kb
---


## HOW TO

Export RadMap to a PDF file or a PNG image.

## SOLUTION

You can [use RadClientExportManager to export the map DOM element](http://demos.telerik.com/aspnet-ajax/client-export-manager/functionality/export-html-elements/defaultcs.aspx). Here is an example:


````ASP.NET
<asp:Button Text="export map to image" OnClientClick="exportToImage(); return false;" runat="server" />
<asp:Button Text="export map to PDF" OnClientClick="exportToPdf(); return false;" runat="server" />
 
<script>
    function exportToImage() {
        $find("<%=RadClientExportManager1.ClientID%>").exportImage($telerik.$(".MyMap"));
    }
 
    function exportToPdf() {
        $find("<%=RadClientExportManager1.ClientID%>").exportPDF($telerik.$(".MyMap"));
    }
</script>
 
<style>
    /*hide the navigator buttons because they are not usable in a static file*/
    .k-pdf-export.k-map-controls {
        display: none;
    }
 
    .k-pdf-export .k-navigator {
        background: none;
        border: 0;
    }
 
        .k-pdf-export .k-navigator span::before {
            content: "";
        }
</style>
 
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
    <ImageSettings FileName="map.png" />
    <PdfSettings FileName="map.pdf" PaperSize="auto" />
</telerik:RadClientExportManager>
 
 
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="2" CssClass="MyMap" Width="720px" Height="500px">
    <CenterSettings Latitude="23" Longitude="10" />
    <LayersCollection>
        <telerik:MapLayer Type="Tile" Subdomains="a,b,c"
            UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
            Attribution="© <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
        </telerik:MapLayer>
    </LayersCollection>
    <MarkersCollection>
        <telerik:MapMarker Shape="PinTarget" Title="Palo Alto">
            <TooltipSettings Content="US - Palo Alto, CA"></TooltipSettings>
            <LocationSettings Latitude="37.444610" Longitude="-122.163283" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Boston">
            <TooltipSettings Content="US - Boston, MA"></TooltipSettings>
            <LocationSettings Latitude="42.375067" Longitude="-71.272233" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Copenhagen">
            <TooltipSettings Content="Denmark - Copenhagen"></TooltipSettings>
            <LocationSettings Latitude="55.670312" Longitude="12.538266" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Sydney">
            <TooltipSettings Content="Australia - Sydney"></TooltipSettings>
            <LocationSettings Latitude="-33.838707" Longitude="151.207959" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Austin">
            <TooltipSettings Content="US - Austin, TX"></TooltipSettings>
            <LocationSettings Latitude="30.268162" Longitude="-97.744873" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Sofia">
            <TooltipSettings Content="Bulgaria - Sofia"></TooltipSettings>
            <LocationSettings Latitude="42.650613" Longitude="23.379025" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Gurgaon">
            <TooltipSettings Content="India - Gurgaon"></TooltipSettings>
            <LocationSettings Latitude="28.410139" Longitude="77.042439" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="London">
            <TooltipSettings Content="UK - London"></TooltipSettings>
            <LocationSettings Latitude="51.515986" Longitude="-0.085798" />
        </telerik:MapMarker>
 
        <telerik:MapMarker Shape="PinTarget" Title="Munich">
            <TooltipSettings Content="Germany - Munich"></TooltipSettings>
            <LocationSettings Latitude="48.117227" Longitude="11.601990" />
        </telerik:MapMarker>
    </MarkersCollection>
</telerik:RadMap>
````




