---
title: Displaying RadHtmlChart Legend in Two Columns
description: Learn how to arrange the RadHtmlChart legend into two columns and enable text wrapping for long labels.
type: how-to
page_title: How to Arrange RadHtmlChart Legend in Two Columns and Wrap Text
meta_title: How to Arrange RadHtmlChart Legend in Two Columns and Wrap Text
slug: radhtmlchart-legend-two-columns-and-text-wrapping
tags: radhtmlchart, ui-for-asp.net-ajax, legend, column, text-wrapping
res_type: kb
ticketid: 1720024
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> HtmlChart for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.3.812 </td>
</tr>
</tbody>
</table>

## Description

I want to display the RadHtmlChart legend in two columns and limit the text width with wrapping, so long labels move to the next line if they exceed the column width.

This knowledge base article also answers the following questions:
- How to customize RadHtmlChart legend into two columns?
- How to wrap text in RadHtmlChart legend?
- How to hide RadHtmlChart's built-in legend and replace it with a custom one?

## Solution

RadHtmlChart's built-in legend does not allow multiple columns or text wrapping. Use the following workaround to hide the built-in legend and render a custom HTML legend.

### Steps

1. **Hide the built-in legend.** Update the `<Legend>` definition as follows:
   ```html
   <Legend>
       <Appearance Visible="false" />
   </Legend>
   ```

2. **Add a custom legend container and CSS styling.** Place the legend container after the chart and add CSS for two-column layout and text wrapping.
   ```html
   <telerik:RadHtmlChart ID="Chart1" runat="server" Height="900" Transitions="false" RenderAs="Auto">
       <!-- Chart configuration -->
   </telerik:RadHtmlChart>
   <div id="legend" class="legend-two-col"></div>
   <style>
   .legend-two-col {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 6px 24px;
       font-size: 13px;
   }
   .legend-item {
       display: flex;
       align-items: flex-start;
       gap: 6px;
       min-width: 0;
       overflow-wrap: anywhere;
       cursor: default;
   }
   .legend-marker {
       flex: 0 0 12px;
       height: 12px;
       margin-top: 3px;
       border-radius: 2px;
   }
   </style>
   ```

3. **Generate legend items in JavaScript.** Replace the existing `Sys.Application.add_load` script with the following code:
   ```javascript
   Sys.Application.add_load(function () {
       var kendoChart = $find("<%= Chart1.ClientID %>").get_kendoWidget();

       // Keep label distance setting
       kendoChart.options.series[0].labels.distance = 50;
       kendoChart.redraw();

       buildLegend(kendoChart, "legend");
   });

   function getMarkerColors(kendoChart) {
       var charts = kendoChart._plotArea && kendoChart._plotArea.charts;
       var items = charts && charts[0] && charts[0].legendItems;
       return items ? items.map(function (x) { return x.markerColor; }) : [];
   }

   function buildLegend(kendoChart, containerId) {
       var container = document.getElementById(containerId);
       var series = kendoChart.options.series[0];
       var colors = getMarkerColors(kendoChart);
       container.innerHTML = "";

       series.data.forEach(function (d, i) {
           var text = d.N_Salon + "; Horas Ocupado: " + d.H_Ocupadas.toLocaleString() +
               "; Horas Libre: " + d.H_Libres.toLocaleString();

           var item = document.createElement("div");
           item.className = "legend-item";

           var marker = document.createElement("span");
           marker.className = "legend-marker";
           marker.style.backgroundColor = colors[i] || "#999";

           var label = document.createElement("span");
           label.textContent = text;

           item.appendChild(marker);
           item.appendChild(label);

           // Highlight the matching pie slice on hover
           item.addEventListener("mouseenter", function () {
               kendoChart.toggleHighlight(true, function (p) { return p.category === d.N_Salon; });
           });
           item.addEventListener("mouseleave", function () {
               kendoChart.toggleHighlight(false);
           });

           container.appendChild(item);
       });
   }
   ```

### Notes
- Use `grid-template-columns: repeat(2, 300px)` or set a `max-width` on `.legend-two-col` to control column width.
- For scrollable legends, add `max-height` and `overflow-y: auto` to `.legend-two-col`.

## See Also

- [RadHtmlChart Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [Legend Configuration](https://www.telerik.com/products/aspnet-ajax/documentation/controls/htmlchart/appearance-and-styling/legend-settings)
- [RadHtmlChart API](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI.RadHtmlChart) 

