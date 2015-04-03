---
title: Problem with Using Formatting Specifiers in Labels and Tooltips
page_title: Problem with Using Formatting Specifiers in Labels and Tooltips | UI for ASP.NET AJAX Documentation
description: Problem with Using Formatting Specifiers in Labels and Tooltips
slug: htmlchart/troubleshooting/known-issues/problem-with-using-formatting-specifiers-in-labels-and-tooltips
tags: problem,with,using,formatting,specifiers,in,labels,and,tooltips
published: True
position: 0
---

# Problem with Using Formatting Specifiers in Labels and Tooltips



## 

Specifying [date format strings](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx)(e.g.__{0:D}, {0:F}__) are not supported out-of-the-box and will not take effect if used In the __DataFormatString__ property of the __RadHtmlChart__ control. Only the[numeric format strings](http://msdn.microsoft.com/en-us/library/dwhawy9k.aspx)(e.g. __{0:e}, {0:p}__) are supported for the text elements (such as axis labels, series labels and tooltips).

>note As of __Q3 2012__ , the[ClientTemplate]({%slug htmlchart/functionality/clienttemplate/overview%})property can expose additional columns for the series	labels and tooltips. With this you are able to specify a date set as a simple string.
>


Nevertheless, there is a possible approach that will allow you to format the labels in a non-numerical x-axis. For example,let’s take the items in an x-axis whose labels should display a month given an object of type __DateTime__.Follow these steps to format the labels accordingly:

1. On the server side, iterate through the data source that is used for populating the x-axis items.

1. Get the __DateTime__ value of the current data source record.

1. Convert the __DateTime__ value to a string using the appropriate formatting specifier.

1. Create a new __AxisItem__ object by passing the formatted string as a parameter and add it in the __Items__ collection of the x-axis.

__Example 1__ demonstrates the approach described above.

>warning This approach cannot be used for creating such specially formatted text in SeriesItems' labels and tooltips. Each Series-Item does not	have its own tooltip and text properties that can be set declaratively, they are taken from its value automatically. An option is using their[ClientTemplates]({%slug htmlchart/functionality/clienttemplate/overview%})to load a column from the datasource.
>You cannot use the __DataFormatString__ property of the x-axis labels either because the x-axis items are created programmatically	and are not databound.
>


__Example 1:__ Using date format string in __RadHtmlChart__.

````ASPNET
		<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Height="500px" Width="500px">
			<PlotArea>
				<Series>
					<telerik:LineSeries Name="Market share in 2011" DataField="MarketShare2011">
						<TooltipsAppearance Visible="false" />
					</telerik:LineSeries>
				</Series>
				<XAxis>
					<LabelsAppearance RotationAngle="90" />
				</XAxis>
				<YAxis MaxValue="50">
				</YAxis>
			</PlotArea>
			<Legend>
				<Appearance Visible="false" />
			</Legend>
			<ChartTitle Text="Chrome market share in 2011">
			</ChartTitle>
		</telerik:RadHtmlChart>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadHtmlChart1.DataSource = GetChartData();
			RadHtmlChart1.DataBind();
	
			foreach (MarketShareData item in GetChartData())
			{
				string formattedLabelText = string.Format("{0:MMMM}", item.Date);
				AxisItem newAxisItem = new AxisItem(formattedLabelText);
				RadHtmlChart1.PlotArea.XAxis.Items.Add(newAxisItem);
			}
		}
	
		private List<MarketShareData> GetChartData()
		{
			List<MarketShareData> chromeData = new List<MarketShareData>();
	
			chromeData.Add(new MarketShareData(23.8, new DateTime(2011, 1, 1)));
			chromeData.Add(new MarketShareData(24.1, new DateTime(2011, 2, 1)));
			chromeData.Add(new MarketShareData(25.0, new DateTime(2011, 3, 1)));
			chromeData.Add(new MarketShareData(25.6, new DateTime(2011, 4, 1)));
			chromeData.Add(new MarketShareData(25.9, new DateTime(2011, 5, 1)));
			chromeData.Add(new MarketShareData(27.9, new DateTime(2011, 6, 1)));
			chromeData.Add(new MarketShareData(29.4, new DateTime(2011, 7, 1)));
			chromeData.Add(new MarketShareData(30.3, new DateTime(2011, 8, 1)));
			chromeData.Add(new MarketShareData(30.5, new DateTime(2011, 9, 1)));
			chromeData.Add(new MarketShareData(32.3, new DateTime(2011, 10, 1)));
			chromeData.Add(new MarketShareData(33.4, new DateTime(2011, 11, 1)));
			chromeData.Add(new MarketShareData(34.6, new DateTime(2011, 12, 1)));
	
			return chromeData;
		}
	
		public class MarketShareData
		{
			public MarketShareData(double marketShare2011, DateTime date)
			{
				_date = date;
				_marketShare2011 = marketShare2011;
			}
			private DateTime _date;
			public DateTime Date
			{
				get { return _date; }
				set { _date = value; }
			}
			private double _marketShare2011;
			public double MarketShare2011
			{
				get { return _marketShare2011; }
				set { _marketShare2011 = value; }
			}
		}
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
			RadHtmlChart1.DataSource = GetChartData()
			RadHtmlChart1.DataBind()
	
			For Each item As MarketShareData In GetChartData()
				Dim formattedLabelText As String = String.Format("{0:MMMM}", item.[Date])
				Dim newAxisItem As New AxisItem(formattedLabelText)
				RadHtmlChart1.PlotArea.XAxis.Items.Add(newAxisItem)
			Next
		End Sub
	
		Private Function GetChartData() As List(Of MarketShareData)
			Dim chromeData As New List(Of MarketShareData)()
	
			chromeData.Add(New MarketShareData(23.8, New DateTime(2011, 1, 1)))
			chromeData.Add(New MarketShareData(24.1, New DateTime(2011, 2, 1)))
			chromeData.Add(New MarketShareData(25.0, New DateTime(2011, 3, 1)))
			chromeData.Add(New MarketShareData(25.6, New DateTime(2011, 4, 1)))
			chromeData.Add(New MarketShareData(25.9, New DateTime(2011, 5, 1)))
			chromeData.Add(New MarketShareData(27.9, New DateTime(2011, 6, 1)))
			chromeData.Add(New MarketShareData(29.4, New DateTime(2011, 7, 1)))
			chromeData.Add(New MarketShareData(30.3, New DateTime(2011, 8, 1)))
			chromeData.Add(New MarketShareData(30.5, New DateTime(2011, 9, 1)))
			chromeData.Add(New MarketShareData(32.3, New DateTime(2011, 10, 1)))
			chromeData.Add(New MarketShareData(33.4, New DateTime(2011, 11, 1)))
			chromeData.Add(New MarketShareData(34.6, New DateTime(2011, 12, 1)))
	
			Return chromeData
		End Function
	
	
		Public Class MarketShareData
			Public Sub New(marketShare2011 As Double, [date] As DateTime)
				_date = [date]
				_marketShare2011 = marketShare2011
			End Sub
			Private _date As DateTime
			Public Property [Date]() As DateTime
				Get
					Return _date
				End Get
				Set(value As DateTime)
					_date = value
				End Set
			End Property
			Private _marketShare2011 As Double
			Public Property MarketShare2011() As Double
				Get
					Return _marketShare2011
				End Get
				Set(value As Double)
					_marketShare2011 = value
				End Set
			End Property
	    End Class
	
````


>end

# See Also

 * [ClientTemplate for Series Labels and Tooltips]({%slug htmlchart/functionality/clienttemplate/overview%})

 * [Handling Special Symbols in RadHtmlChart]({%slug htmlchart/troubleshooting/handle-special-symbols%})
