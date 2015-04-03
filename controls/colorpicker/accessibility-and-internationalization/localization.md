---
title: Localization
page_title: Localization | UI for ASP.NET AJAX Documentation
description: Localization
slug: colorpicker/accessibility-and-internationalization/localization
tags: localization
published: True
position: 3
---

# Localization



## 

The __RadColorPicker__ provides a mechanism for quick and easy localization based on the native ASP.NET localization. All tab and button labels are obtained from the resource files located in the WebSite's App_GlobalResources directory, so that the language of the __RadColorPicker__ is automatically switched to the culture and UI culture of the Web page.

Each of the localization strings can be modified at runtime using the __Localization__ server property. This saves the need to create a new localization file to change a single string.

````ASPNET
	    <telerik:RadColorPicker runat="server" ID="RadColorPicker1" PaletteModes="All">
	        <Localization ApplyButtonText="<%$ Resources:RadColorPicker, ApplyButtonText %>"
	                      CurrentColorText="<%$ Resources:RadColorPicker, CurrentColorText %>"
	                      HSBTabText="<%$ Resources:RadColorPicker, HSBTabText %>"
	                      HSVTabText="<%$ Resources:RadColorPicker, HSVTabText %>"
	                      NoColorText="<%$ Resources:RadColorPicker, NoColorText %>"
	                      PickColorText="<%$ Resources:RadColorPicker, PickColorText %>"
	                      RGBSlidersTabText="<%$ Resources:RadColorPicker, RGBSlidersTabText %>"
	                      WebPaletteTabText="<%$ Resources:RadColorPicker, WebPaletteTabText %>"
	                      BlankColorText="<%$ Resources:RadColorPicker, BlankColorText %>"
	                      HSBSliderDragText="<%$ Resources:RadColorPicker, HSBSliderDragText %>"
	                      HSVSliderDragText="<%$ Resources:RadColorPicker, HSVSliderDragText %>"
	                      RGBSlidersDecreaseText="<%$ Resources:RadColorPicker, RGBSlidersDecreaseText %>"
	                      RGBSlidersDragText="<%$ Resources:RadColorPicker, RGBSlidersDragText %>"
	                      RGBSlidersIncreaseText="<%$ Resources:RadColorPicker, RGBSlidersIncreaseText %>" />
	    </telerik:RadColorPicker>
````



Or via the code-behind:

>tabbedCode

````C#
	    RadColorPicker1.Localization.WebPaletteTabText = "Palette";
````



````VB.NET
	    RadColorPicker1.Localization.WebPaletteTabText = "Palette"
	    #End Region
	End Class


>end
