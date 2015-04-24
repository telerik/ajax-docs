---
title: Using Multiple Custom Colors to Create Charts
page_title: Using Multiple Custom Colors to Create Charts | RadHtmlChart for ASP.NET AJAX Documentation
description: Using Multiple Custom Colors to Create Charts
slug: htmlchart/how-to/using-multiple-custom-colors-to-create-charts
tags: using,multiple,custom,colors,to,create,charts
published: True
position: 4
---

# Using Multiple Custom Colors to Create Charts



## 

This help article addresses the challenge that **RadHtmlChart** offers a limited number of ten predefined colors for its skins and suggests a solution for increasing them.

If you create more series (or more items for a **PieSeries**) these colors will startrepeating themselves. Developers at Telerik decided that they cannot increase the internal number of colors indefinitelybecause the number may always be insufficient for a certain scenario.

There is a rather easy way around this, however. You can create a static class to hold a declaration of colors thatwill fit the current needs in terms of number, the exact colors that are chosen or any other logic that may apply.This static collection can be iterated over to return the desired color according to their indexes - the index ofthe series can point to the index of its color.

All series types expose the **ColorField** property since **Q1 2013**. It can be used to specify a column in the data source from which the color for each item in the series will be taken. **PieSeries** expose this property a little bit earlier in **Q3 2012**.

**Example 1** shows a simple example of creating a static class to increase the number of colors for a chart while **Example 2** shows how a Bar chart could use the static class.

**Example 1**: Creating a StaticColors class with ten hard-coded colors.



````C#
		using System.Drawing;
	
		/// <summary>
		/// A Class that provides functionality for using a custom list of predefined list of colors
		/// </summary>
		public static class StaticColors
		{
			/// <summary>
			/// Gets the color corrsponding to the passed index.
			/// </summary>
			/// <param name="index">The index in the array of predefined colors</param>
			/// <returns>The color corresponding to the passed index. Useful for programmatic creation of charts, for example.</returns>
			public static Color GetColor(int index)
			{
				return colors[index % colors.Length];
			}
	
			/// <summary>
			/// The list of hardcoded colors.
			/// </summary>
			/// <remarks>
			/// Can be extended manually by the developer or the class can be modified so that the property can be modified during runtime.
			/// </remarks>
			private static readonly Color[] colors = 
			{
				Color.Red,
				Color.Blue,
				Color.Green,
				Color.Yellow,
				Color.Purple,
				Color.Orange,
				Color.Violet,
				Color.NavajoWhite,
				Color.MediumSeaGreen,
				Color.HotPink
			};
		}
````
````VB.NET
		Imports System.Drawing
	
	''' <summary>
	''' A Class that provides functionality for using a custom list of predefined list of colors
	''' </summary>
	Public Class StaticColors
		''' <summary>
		''' Gets the color corrsponding to the passed index.
		''' </summary>
		''' <param name="index">The index in the array of predefined colors</param>
		''' <returns>The color corresponding to the passed index. Useful for programmatic creation of charts, for example.</returns>
		Public Shared Function GetColor(index As Integer) As Color
			Return colors(index Mod colors.Length)
		End Function
	
		''' <summary>
		''' The list of hardcoded colors.
		''' </summary>
		''' <remarks>
		''' Can be extended manually by the developer or the class can be modified so that the property can be modified during runtime.
		''' </remarks>
		Private Shared ReadOnly colors As Color() = {Color.Red, Color.Blue, Color.Green, Color.Yellow, Color.Purple, Color.Orange, _
		 Color.Violet, Color.NavajoWhite, Color.MediumSeaGreen, Color.HotPink}
	End Class
````


You can use a static class like this in different ways. For example **Example 2** shows a loop(which is hardcoded for demonstration purposes, but can actuallyuse the number of columns and rows in the data source) with a Bar chart using the static color class.

**Example 2**: A Bar chart using the StaticColors class created in **Example 1**.



````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!IsPostBack)
			{
				for (int i = 0; i < 10; i++)
				{
					BarSeries bs = new BarSeries();
					bs.Appearance.FillStyle.BackgroundColor = StaticColors.GetColor(i);
					RadHtmlChart1.PlotArea.Series.Add(bs);
					for (int j = 1; j < 4; j++)
					{
						CategorySeriesItem si = new CategorySeriesItem();
						si.Y = j;
						bs.SeriesItems.Add(si);
					}
				}
			}
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs)
			If Not IsPostBack Then
				Dim i As Integer = 0
				While i < 10
					Dim bs As New BarSeries()
					bs.Appearance.FillStyle.BackgroundColor = StaticColors.GetColor(i)
					RadHtmlChart1.PlotArea.Series.Add(bs)
					Dim j As Integer = 1
					While j < 4
						Dim si As New CategorySeriesItem()
						si.Y = j
						bs.SeriesItems.Add(si)
						j += 1
					End While
					i += 1
				End While
			End If
		End Sub
````


# See Also

 * [RadHtmlChart Conditional Item Colorization]({%slug htmlchart/appearance-and-styling/conditional-item-colorization%})

 * [RadHtmlChart Configuring Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [RadHtmlChart Configuring Series Items]({%slug htmlchart/server-side-programming/series-items-configuration%})
