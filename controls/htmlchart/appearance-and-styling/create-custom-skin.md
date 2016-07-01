---
title: Create Custom Skin
page_title: Create Custom Skin | RadHtmlChart for ASP.NET AJAX Documentation
description: Create Custom Skin
slug: htmlchart/appearance-and-styling/create-custom-skin
tags: create,custom,skin
published: True
position: 7
---

# Create Custom Skin

This help article discusses how to configure the chart legend.

* [Modify an Existing Skin](#modify-an-existing-skin)
* [Create a New Skin](#create-a-new-skin)


## Modify an Existing Skin

You can control the background color of the legend with the `Legend.Appearance.BackgroundColor` property. To control the color and the font of the text you can use the `Legend.Appearance.TextStyle` inner property (**Example 1**).

You can find all the available options for the `TextStyle` inner property in the [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) help article.

>caption **Figure 1**: Chart legend with customized background and text styles.

![legend appearance](images/legend-appearance.png)

>caption **Example 1**: Configure the appearance of the chart legend.

````ASP.NET
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="350" Height="150">
	<Legend>
		<Appearance BackgroundColor="Blue">
			<TextStyle Color="Red" FontFamily="Segoe UI" FontSize="20" Italic="true" />
		</Appearance>
	</Legend>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	int seriesNum = 2;
	for (int i = 1; i <= seriesNum; i++)
	{
		ColumnSeries cs1 = new ColumnSeries() { Name = "Series " + i };
		cs1.SeriesItems.Add(new CategorySeriesItem() { Y = 1 });
		RadHtmlChart1.PlotArea.Series.Add(cs1);
	}
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	Dim seriesNum As Integer = 2
	For i As Integer = 1 To seriesNum
		Dim cs1 As New ColumnSeries() With { _
			Key .Name = "Series " & i _
		}
		cs1.SeriesItems.Add(New CategorySeriesItem() With { _
			Key .Y = 1 _
		})
		RadHtmlChart1.PlotArea.Series.Add(cs1)
	Next
End Sub
````

The color of the markers is automatically detected from the series colors.

>tip To change the type, size and color of the legend markers you can:
* Use [visual templates]({%slug htmlchart/functionality/visual-template%}).
* Use the workaround from the following feedback item [ADD more legend markers options in RadHtmlChart](http://feedback.telerik.com/Project/108/Feedback/Details/123802).



## See Also

 * [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
 
 * [Visual Templates]({%slug htmlchart/functionality/visual-template%})
 
 * [ADD more legend markers options in RadHtmlChart](http://feedback.telerik.com/Project/108/Feedback/Details/123802)
 
 * [legend.labels.template](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-legend.labels.template) 
 
 * [Execute JavaScript with a ClientTemplate]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%})

