---
title: Overview
page_title: Client-side Programming Overview | RadHtmlChart for ASP.NET AJAX Documentation
description: Overview
slug: htmlchart/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



This help article lists the __RadHtmlChart__'s public client-side methods that let you access and modify the control's height, width, data source, transitions, etc.; shows how to reference and use the __RadHtmlChart__ client-side object (__Examples 1-2__); and provides an example about modifying the data source of __RadHtmlChart__ on the client (__Example 3__).

__RadHtmlChart__ for ASP.NET AJAX is based on the __Kendo UI Data Visualization Chart Widgethttp://demos.telerik.com/kendo-ui/area-charts/index__. Thus, it exposes the [client-side API and methods offered by the widget](http://docs.telerik.com/kendo-ui/api/dataviz/chart) and mainly provides a wrapper and API for working with the chart on the server (programmatic creation, data binding, declaring in the markup).

## Public Methods


|  __Name__  |  __Description__  |
| ------ | ------ |
| __getSVGString__ |Returns the SVG rendering of the control, regardless of the browser. Useful for[exporting scenarios](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx).|
| __loadData__ |Invokes a light callback to the server to obtain the __RadHtmlChart__ data. This is used when the server-side __InvokeLoadData__ property is set to __FromCode__ . In this case, the data is not sent to the client at all until this method is called.|
| __repaint__ |Redraws the chart. Useful when the chart is in an invisible container that is shown on a certain condition, when a client-side databinding is performed or to replay the initial animation.|
| __get_dataSourceJSON__ |Gets a stringified JSON object with the data source of a databound __RadHtmlChart__ . __Tip:__ You can parse this to a JSON object through a jQuery parseJSON method in order to manipulate it as an array.|
| __get_height__ |Gets the height of the chart.|
| __get_width__ |Gets the width of the chart.|
| __get_transitions__ |Gets a boolean value indicating whether an animation is played when the chart is rendered.|
| __set_dataSource__ |Databinds the __RadHtmlChart__ to the new data source that is passed as a parameter. This can be a JSON string or an array of JSON objects. The fields in the JSON objects must match the chart's properties – their names are set through the __DataFieldY__ , __ColorField__ , __NameField__ and __ExplodeField__ properties. In order to refresh the chart with the new data, the __repaint()__ method must be called.|
| __set_height__ |Sets new height to the chart.|
| __set_width__ |Sets new width to the chart.|
| __set_transitions__ |Sets a boolean value indicating whether an animation is played when the chart is rendered.|
| __get_kendoWidget__ |Gets a reference to the Kendo Chart widget.|

__RadHtmlChart__ for ASP.NET AJAX, through the Kendo widget, exposes the [Kendo Chart client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/chart#methods).

## Get Client-side Object Reference

There are two ways to get a reference to the Kendo Chart widget in order to use its API:

* Use the __get_kendoWidget__ method the __RadHtmlChart__ client-side object exposes. You can get the __RadHtmlChart__ object through the __$find()__ MS AJAX method.__Example 1:__ Get the Kendo Chart object through the get_kendoWidget method.

````JavaScript
				var radHtmlChartObject = $find("<%=RadHtmlChart1.ClientID %>"); //the standard script control object
				var kendoChart = radHtmlChartObject.get_kendoWidget(); //the Kendo widget
````



* Use the standard Kendo approach for getting the widget through the data-attributes of the DOM element:__Example 2:__ Get the Kendo Chart object through the data attribute of the DOM object.

````JavaScript
				var kendoChart = $telerik.$("#<%=RadHtmlChart1.ClientID %>").data("kendoChart");//the jQuery selector must get the RadHtmlChart wrapping div element
````



>note  __RadHtmlChart__ is an IScriptControl based on MS AJAX and so it instantiates its client-side object (i.e., the Kendo Chart) during the`Sys.Application.Init`event. This means that the earliest event in which you can reference the chart widget is __Sys.Application.Load__ .
>


## Modify the RadHtmlChart's Data Source on the Client

__Example 3__ below demonstrates a way to change the data source of a __RadHtmlChart__ using its client-side API. Once you set the desired data source to the control, you have to invoke its __repaint()__ method, ensuring that the control will be redrawn with the new data.

__Example 3:__ Client-side change of __RadHtmlChart__'s data source.



````ASPNET
	    <script type="text/javascript">
	        function OnClientClicked1() {
	
	            var newDataSource = [
	            {
	                "Data": 35,
	                "Fruit": "Apple",
	                "Color": "Green",
	                "IsExploded": false
	            },
	            {
	                "Data": 20,
	                "Fruit": "Orange",
	                "Color": "Orange",
	                "IsExploded": true
	            }]
	
	               var RadHtmlChart1 = $find('<%=RadHtmlChart1.ClientID %>');
	
	               //Parsing the current datasource to an array of JavaScript objects and storing it to a variable 
	               var oldDataSource = eval(RadHtmlChart1.get_dataSourceJSON());
	
	               //Retaining the first Item of the datasource
	               newDataSource[0] = oldDataSource[0];
	
	               //Set the new datasource      
	               RadHtmlChart1.set_dataSource(newDataSource);
	
	               //Turning animation on before repainting the chart
	               RadHtmlChart1.set_transitions(true);
	
	               //Redrawing the chart
	               RadHtmlChart1.repaint();
	        }
	    </script>
	    <telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Transitions="false" Width="450"
	    Height="450">
	        <PlotArea>
	            <Series>
	                <telerik:PieSeries DataFieldY="Data" ColorField="Color" NameField="Fruit"
	                    ExplodeField="IsExploded">
	                </telerik:PieSeries>
	            </Series>
	        </PlotArea>
	    </telerik:RadHtmlChart>
	    <telerik:RadButton runat="server" Text="ChangeDataSource" AutoPostBack="false" OnClientClicked="OnClientClicked1">
	    </telerik:RadButton>
````
````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
			RadHtmlChart1.DataSource = GetData();
			RadHtmlChart1.DataBind();
	    }
	
		protected DataTable GetData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("Data"));
			tbl.Columns.Add(new DataColumn("Fruit"));
			tbl.Columns.Add(new DataColumn("Color"));
			tbl.Columns.Add(new DataColumn("IsExploded"));
	
			tbl.Rows.Add(new object[] { 50, "Peach", "Yellow", true });
			tbl.Rows.Add(new object[] { 10, "Cherry", "Red", false });
	
			return tbl;
		}
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        RadHtmlChart1.DataSource = GetData()
	        RadHtmlChart1.DataBind()
	    End Sub
	
	    Protected Function GetData() As DataTable
	        Dim tbl As New DataTable()
	        tbl.Columns.Add(New DataColumn("Data"))
	        tbl.Columns.Add(New DataColumn("Fruit"))
	        tbl.Columns.Add(New DataColumn("Color"))
	        tbl.Columns.Add(New DataColumn("IsExploded"))
	
	        tbl.Rows.Add(New Object() {50, "Peach", "Yellow", True})
	        tbl.Rows.Add(New Object() {10, "Cherry", "Red", False})
	
	        Return tbl
	    End Function
````


# See Also

 * [Basic Configuration of the RadHtmlChart]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [RadHtmlChart Client-side Events Basics]({%slug htmlchart/client-side-programming/events/overview%})

 * [Kendo Chart Widget First Look](http://demos.telerik.com/kendo-ui/area-charts/index)

 * [Kendo Chart Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/chart)

 * [Kendo Chart Client-side Events](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events)

 * [Kendo Chart Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/chart#methods)
