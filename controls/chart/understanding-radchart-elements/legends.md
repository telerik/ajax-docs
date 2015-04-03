---
title: Legends
page_title: Legends | UI for ASP.NET AJAX Documentation
description: Legends
slug: chart/understanding-radchart-elements/legends
tags: legends
published: True
position: 5
---

# Legends



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


Legends are symbols and text used to provide additional information about the chart.In a multiple series chart the legend typically describes each series to improve readability.By default RadChart includes the color and name of each chart series in the legend. You can also define your own legend and control the style for the legend or each item in the legend using the RadChart Legend property. Legend____holds properties for:

* __Visible____:__ If a legend is not relevant to your chart you can set this false to hide the legend.

* __Appearance____:__ This property controls the visual style of the legend as a whole including __Dimensions__, __Position__, __FillStyle__, __ItemAppearance__, __ItemMarkerAppearance__, __ItemTextAppearance__, __RotationAngle__ and __Shadow__.

* __Items__: A collection containing the individual legend text and symbols for each series.Add to this collection to create your own custom legends.

* __Marker__: A visual marker for the legend as a whole. Use the marker __Appearance__ property to control properties like __FillStyle__, __Dimensions__ and __Position____.__ To assign an image to the marker use the marker __Appearance.FillStyle__ property to set __FillType__ to __Image__ and __FillSettings.BackgroundImage__ to the path of the image.

* __TextBlock____:__ Use TextBlock to control the default text and appearance.

## Formatting Legends

Use the legend Appearance ItemTextAppearance property to tailor the look of all legend item text at one time and the ItemMarkerAppearance to format all of the legend markers.Particularly note the CompositionType property that handles the display order of text vs. images where valid values are __ColumnImageText__, __ColumnTextImage__, __RowImageText__ (the default) and __RowTextImage__. "Column" values show the text and image one above the other."Row" shows text and image side-by-side.

Use the ItemMarkerAppearance Figure property to select from a set of predefined marker shapes.
>caption 

![Marker Figures](images/radchart-understandingelements010.png)

Use the __Legend.Appearance.Position__ property to control where the legend should appear on the chart surface. The AlignedPosition sub property automatically places the legend in a predefined position. Or set the Auto property false and manually set the X properties to place the legend in any exact position.
>caption 

![AlignedPosition](images/radchart-understandingelements011.png)

Use the __Legend.Appearance.Dimensions__ property to control the legend height and width.By default the AutoSize sub property is true and dimensioning is handled for you.Set AutoSize off to manually handle Width, Height, Margins and Paddings.

## Adding Custom Legends

In the collection editor for the Legend __Items__ property add one or more items. Use the __Marker__ property to add images or colored shapes next to the text.Use the __TextBlock__ property to add the text description for the legend item. You can also define image maps using the __ActiveRegion__ property of the legend or legend items.

To add images to the legend you can set the Marker.Appearance.FillStyle.FillType to __Image__ and the Marker.Appearance.FillStyle.FillSettings.BackgroundImage to the path of an image to display.In the example below two legend items are added to the collection where the BackgroundImage contains image paths for two flags and where the __TextBlock.Text__ properties contain corresponding descriptions. In addition the Legend.Appearance.Shadow property has Blur = 5 and Distance = 2.
>caption 

![](images/radchart-understandingelements009.png)
