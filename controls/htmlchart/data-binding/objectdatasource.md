---
title: ObjectDataSource
page_title: ObjectDataSource | RadHtmlChart for ASP.NET AJAX Documentation
description: ObjectDataSource
slug: htmlchart/data-binding/objectdatasource
tags: objectdatasource
published: True
position: 3
---

# ObjectDataSource

This help article describes which properties to use to bind a **RadHtmlChart** to an **ObjectDataSource** and presents a code example. You can bind a **RadHtmlChart** to an **ObjectDataSource** using the following properties:

* **DataSourceID** in the main tag sets the declarative data source for the entire chart. You can use the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie; **DataFieldX** for Scatter and ScatterLine, etc.) for the series to point it to the desired field from the data source.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

>caption Example 1: Bind an **ObjectDataSource** to a **RadHtmlChart**.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart3" Height="400px" Width="800px" DataSourceID="ObjectDataSource1">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries DataFieldY="AverageRating">
			</telerik:ColumnSeries>
		</Series>
		<XAxis DataLabelsField="VehicleName">
			<TitleAppearance Text="Name">
				<TextStyle Margin="20" />
			</TitleAppearance>
			<MajorGridLines Visible="false" />
			<MinorGridLines Visible="false" />
		</XAxis>
		<YAxis>
			<TitleAppearance Text="Average Rating">
				<TextStyle Margin="20" />
			</TitleAppearance>
			<MinorGridLines Visible="false" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Vehicles Average Rating">
	</ChartTitle>
</telerik:RadHtmlChart>
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" TypeName="Vehicle"
	SelectMethod="GetVehicleRatings"></asp:ObjectDataSource>
````

The class **Vehicle** is declared in the directory **App_Code** of the website and exposes a method, **GetVehicleRatings**, which returns the data for the chart, as shown in **Example 2**.

>caption Example 2: Create a class with a static method that returns a DataTable filled with data from a database.



````C#
public class Vehicle
{
	private static string connectionString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ToString();

	public static DataTable GetVehicleRatings()
	{
		SqlConnection connection = new SqlConnection(connectionString);
		SqlCommand command = new SqlCommand("SELECT TOP 10 [VehicleName], [AverageRating] FROM [Vehicles]", connection);
		SqlDataAdapter adapter = new SqlDataAdapter(command);
		DataSet ds = new DataSet("Vehicles");
		adapter.Fill(ds, "Vehicles");
		return ds.Tables["Vehicles"];
	}

}
````
````VB
Public Class Vehicle
	Private Shared connectionString As String = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ToString()

	Public Shared Function GetVehicleRatings() As DataTable
		Dim connection As New SqlConnection(connectionString)
		Dim command As New SqlCommand("SELECT TOP 10 [VehicleName], [AverageRating] FROM [Vehicles]", connection)
		Dim adapter As New SqlDataAdapter(command)
		Dim ds As New DataSet("Vehicles")
		adapter.Fill(ds, "Vehicles")
		Return ds.Tables("Vehicles")
	End Function
End Class
````

## See Also

 * [RadHtmlChart Column Chart]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart ObjectDataSource Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/objectdatasource/defaultcs.aspx)
