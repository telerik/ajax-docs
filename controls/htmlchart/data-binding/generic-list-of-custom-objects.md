---
title: Generic List of Custom Objects
page_title: Generic List of Custom Objects | RadHtmlChart for ASP.NET AJAX Documentation
description: Generic List of Custom Objects
slug: htmlchart/data-binding/generic-list-of-custom-objects
tags: generic,list,of,custom,objects
published: True
position: 5
---

# Generic List of Custom Objects

This help article describes which properties to use to bind a **RadHtmlChart** to a simple list of doubles or to a list of custom objects and presents code examples.

## Binding to a Generic List of Simple Types

You can bind a **RadHtmlChart** to a simple list of doubles much in the same way that you bind to a regular array. Series that do not have explicit data defined will take the values from the list. You must manually configure the axes by adding items in the markup. **Example 1** demonstrates this approach.

>caption Example 1: A Line chart setup that is bound to a simple array of doubles in **Example 2**.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="400px">
	<PlotArea>
		<Series>
			<telerik:LineSeries>
				<TooltipsAppearance Visible="false" />
			</telerik:LineSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January" />
				<telerik:AxisItem LabelText="Februrary" />
				<telerik:AxisItem LabelText="March" />
				<telerik:AxisItem LabelText="April" />
				<telerik:AxisItem LabelText="May" />
				<telerik:AxisItem LabelText="June" />
				<telerik:AxisItem LabelText="July" />
				<telerik:AxisItem LabelText="August" />
				<telerik:AxisItem LabelText="September" />
				<telerik:AxisItem LabelText="October" />
				<telerik:AxisItem LabelText="November" />
				<telerik:AxisItem LabelText="December" />
			</Items>
			<LabelsAppearance RotationAngle="90" />
		</XAxis>
	</PlotArea>
	<Legend>
		<Appearance Visible="false" />
	</Legend>
	<ChartTitle Text="Chrome market share in 2011">
	</ChartTitle>
</telerik:RadHtmlChart>
````

>caption Example 2: Data binding the Line chart in **Example 1** to an array of doubles.


````C#
protected void Page_Load(object sender, System.EventArgs e)
{
	double[] ValuesArray = { 26.6, 26.5, 25.8, 24.3, 24.9, 23.2, 22.0, 22.4, 22.9, 21.7, 21.2, 20.2 };
	RadHtmlChart1.DataSource = ValuesArray;
	RadHtmlChart1.DataBind();
}
````
````VB
Protected Sub Page_Load(sender As Object, e As System.EventArgs)
	Dim chromeData As List(Of Double) = New List(Of Double)
	chromeData.Add(23.8)
	chromeData.Add(24.1)
	chromeData.Add(25.0)
	chromeData.Add(25.6)
	chromeData.Add(25.9)
	chromeData.Add(27.9)
	chromeData.Add(29.4)
	chromeData.Add(30.3)
	chromeData.Add(30.5)
	chromeData.Add(32.3)
	chromeData.Add(33.4)
	chromeData.Add(34.6)
	RadHtmlChart2.DataSource = chromeData
	RadHtmlChart2.DataBind()
End Sub
````

## Binding to a Generic List of Objects

You can bind a **RadHtmlChart** to a list of custom objects that mimics a declarative data source. The **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie and Donut; **DataFieldX** for Bubble, Scatter and ScatterLine; etc.)of the series and the **DataLabelsField** property of the axis can be used to obtain data from the objects. **Example 3** shows how to create a Pie chart with a list as the data source.

>caption Example 3: A Pie chart setup that is bound to a list of custom objects (i.e., the class **Browser**, declared in **Example 5**) in **Example 4**.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Height="400px" Width="400px">
	<PlotArea>
		<Series>
			<telerik:PieSeries DataFieldY="MarketShare" NameField="Name" ExplodeField="IsExploded">
				<LabelsAppearance DataFormatString="{0}%">
				</LabelsAppearance>
				<TooltipsAppearance DataFormatString="{0}%"></TooltipsAppearance>
			</telerik:PieSeries>
		</Series>
		<YAxis>
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Average browser shares in 2011">
	</ChartTitle>
</telerik:RadHtmlChart>
````



>caption Example 4: Data binding the Pie chart in **Example 3** to a list of custom objects (i.e., the class **Browser**, declared in **Example 5**).



````C#
protected void Page_Load(object sender, System.EventArgs e)
{
	List<Browser> browsers = new List<Browser>();
	browsers.Add(new Browser("IE", 23.48, true));
	browsers.Add(new Browser("Chrome", 28.57, false));
	browsers.Add(new Browser("Firefox", 40.98, false));
	browsers.Add(new Browser("Opera", 2.43, false));
	browsers.Add(new Browser("Safari", 3.99, false));
	RadHtmlChart1.DataSource = browsers;
	RadHtmlChart1.DataBind();
}
````
````VB
Protected Sub Page_Load(sender As Object, e As System.EventArgs)
	Dim browsers As List(Of Browser) = New List(Of Browser)
	browsers.Add(New Browser("IE", 23.48, True))
	browsers.Add(New Browser("Chrome", 28.57, False))
	browsers.Add(New Browser("Firefox", 40.98, False))
	browsers.Add(New Browser("Opera", 2.43, False))
	browsers.Add(New Browser("Safari", 3.99, False))
	RadHtmlChart1.DataSource = browsers
	RadHtmlChart1.DataBind()
End Sub
````

**Example 5** shows how you can find the declaration of the custom class **Browser** that is used for populating the list:

>caption Example 5: The declaration of the custom class **Browser** used for populating the list in **Example 4** that is passed as a data source to the Pie chart from **Example 3**.



````C#
public class Browser
{
	public Browser(string name, double marketShare, bool isExploded)
	{
		_name = name;
		_marketShare = marketShare;
		_isExploded = isExploded;
	}
	private string _name;
	public string Name
	{
		get { return _name; }
		set { _name = value; }
	}
	private double _marketShare;
	public double MarketShare
	{
		get { return _marketShare; }
		set { _marketShare = value; }
	}
	private bool _isExploded;
	public bool IsExploded
	{
		get { return _isExploded; }
		set { _isExploded = value; }
	}
}
````
````VB
Public Class Browser
	Public Sub New(name As String, marketShare As Double, isExploded As Boolean)
		_name = name
		_marketShare = marketShare
		_isExploded = isExploded
	End Sub
	Private _name As String
	Public Property Name() As String
		Get
			Return _name
		End Get
		Set(value As String)
			_name = value
		End Set
	End Property
	Private _marketShare As Double
	Public Property MarketShare() As Double
		Get
			Return _marketShare
		End Get
		Set(value As Double)
			_marketShare = value
		End Set
	End Property
	Private _isExploded As Boolean
	Public Property IsExploded() As Boolean
		Get
			Return _isExploded
		End Get
		Set(value As Boolean)
			_isExploded = value
		End Set
	End Property
End Class
````

## See Also

 * [RadHtmlChart Line Chart]({%slug htmlchart/chart-types/line-chart%})

 * [RadHtmlChart List Of Custom Objects Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtolist/defaultcs.aspx)

 * [RadHtmlChart Pie Chart]({%slug htmlchart/chart-types/pie-chart%})
