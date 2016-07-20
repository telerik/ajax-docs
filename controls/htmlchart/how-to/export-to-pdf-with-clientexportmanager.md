---
title: Export to PDF or Image with RadClientExportManager
page_title: Export to PDF or Image with RadClientExportManager | RadHtmlChart for ASP.NET AJAX Documentation
description: Export to PDF or Image with RadClientExportManager
slug: htmlchart/how-to/export-to-pdf-with-clientexportmanager
tags: Export,PDF, image,RadClientExportManager,ClientExportManager, client-side
published: True
position: 7
---

# Export to PDF or Image with RadClientExportManager

With the use of [RadClientExportManager]({%slug clientexportmanager/overview%}) you can easily export the **RadHtmlChart** to **PDF** or **image**. 

The following steps will enable you to easily implement the export functionality (**Example 1** showcases a fully runnable example):

1. Add the **RadClientExportManager** in the page's markup:

	**ASP.NET**

		<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	    </telerik:RadClientExportManager>

1. Add a button with a client-side click handler that will initiate the export:

	**ASP.NET**

		<telerik:RadButton RenderMode="Lightweight" runat="server" OnClientClicked="exportChart" Text="Export" AutoPostBack="false" />
		
		<script>
			function exportChart() {
			    // ToDo: Export the chart.
			}
		</script>

1. Use the [client-side API of RadClientExportManager]({%slug clientexportmanager/client-side-programming/overview%}) to export the **RadHtmlChart** wrapper to either PDF: 

	**JavaScript**	

		function exportChart() {
			var $ = $telerik.$;
			$find('<%=RadClientExportManager1.ClientID%>').exportPDF($(".RadHtmlChart"));
		}
	
	or image:

	**JavaScript**

		function exportChart() {
			var $ = $telerik.$;
			$find('<%=RadClientExportManager1.ClientID%>').exportImage($(".RadHtmlChart"));
		}


>caption Example 1: Export RadHtmlChart to PDF or image.

````ASP.NET
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
</telerik:RadClientExportManager>

<telerik:RadButton RenderMode="Lightweight" runat="server" OnClientClicked="exportChartToPDF" 
    Text="Export RadHtmlChart to PDF" AutoPostBack="false" />

<telerik:RadButton RenderMode="Lightweight" runat="server" OnClientClicked="exportChartToImage" 
    Text="Export RadHtmlChart to Image" AutoPostBack="false" />


<telerik:RadHtmlChart runat="server" ID="PieChart1" Transitions="true">
    <PlotArea>
        <Series>
            <telerik:PieSeries StartAngle="90">
                <LabelsAppearance Position="OutsideEnd" DataFormatString="{0} %" />
                <TooltipsAppearance DataFormatString="{0} %" />
                <SeriesItems>
                    <telerik:PieSeriesItem BackgroundColor="Purple" Exploded="true" Name="Internet Explorer" Y="18.3" />
                    <telerik:PieSeriesItem BackgroundColor="Orange" Exploded="false" Name="Firefox" Y="35.8" />
                    <telerik:PieSeriesItem BackgroundColor="Green" Exploded="false" Name="Chrome" Y="38.3" />
                    <telerik:PieSeriesItem BackgroundColor="Blue" Exploded="false" Name="Safari" Y="4.5" />
                    <telerik:PieSeriesItem BackgroundColor="Red" Exploded="false" Name="Opera" Y="2.3" />
                </SeriesItems>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
    <ChartTitle Text="Browser Usage for April 2012">
    </ChartTitle>
</telerik:RadHtmlChart>

<script>
    function exportChartToPDF() {
        var $ = $telerik.$;
        $find('<%=RadClientExportManager1.ClientID%>').exportPDF($(".RadHtmlChart"));
    }

    function exportChartToImage() {
        var $ = $telerik.$;
        $find('<%=RadClientExportManager1.ClientID%>').exportImage($(".RadHtmlChart"));
    }
</script>
````

## See Also

* [Demo: Export to PDF](http://demos.telerik.com/aspnet-ajax/client-export-manager/applicationscenarios/export-radhtmlchart/defaultcs.aspx?product=htmlchart)

* [RadClientExportManager - Overview]({%slug clientexportmanager/overview%})

* [RadClientExportManager - Client-side API]({%slug clientexportmanager/client-side-programming/overview%})
