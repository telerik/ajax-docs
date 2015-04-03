---
title: Document Themes
page_title: Document Themes | UI for ASP.NET AJAX Documentation
description: Document Themes
slug: wordsprocessing/concepts/document-themes
tags: document,themes
published: True
position: 2
---

# Document Themes



Document themes enables you to specify colors, fonts and a variety of graphic effects in a document and affect the look and feel of the whole document. Each theme contains a color scheme and a font scheme and is represented by the __DocumentTheme__ class and can be modified by the __Theme__ property of [](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e). Document theme contains two parts – color scheme – responsible for the colors, and font scheme – responsible for the fonts.

* [Color Schemes](#color-schemes)

* [Font Schemes](#font-schemes)

* [Document Themes](#document-themes)

* [Getting Actual Values](#getting-actual-values)

## Color Schemes

A color scheme has a unique name and contains a number of predefined colors. Its representation in __RadFlowDocument__'s model is the __ThemeColorScheme__ class. A scheme defines twelve colors and each of these is assigned a sole __ThemeColorType__. The following list contains all __ThemeColorType__ values:

* background1

* text1

* background2

* text2

* accent1

* accent2

* accent3

* accent4

* accent5

* accent6

* hyperlink

* followed hyperlink

The twelve color types above are used for creating __ThemableColor__ objects. They determine the color of the scheme that appears as the actual color of the __ThemableColor__ instance. As you change the theme or the color scheme, the actual color of the __ThemeableColor__ object changes as well. For example, if you set the fill of a cell to be a __ThemableColor__, applying a new theme or another scheme also affects the solid fill.

The following sample demonstrates how to create a __ThemeColorScheme__ object. Note that the example passes a name and twelve colors to the constructor. Every color has a comment next to it, so you can see its corresponding __ThemeColorType__.

````C#
	            ThemeColorScheme colorScheme = new ThemeColorScheme(
	                "Mine",
	                Colors.Black,     // background 1
	                Colors.Blue,      // text 1
	                Colors.Brown,     // background 2
	                Colors.Cyan,      // text 2
	                Colors.DarkGray,  // accent 1
	                Colors.Gray,      // accent 2
	                Colors.Green,     // accent 3
	                Colors.LightGray, // accent 4
	                Colors.Magenta,   // accent 5
	                Colors.Orange,    // accent 6
	                Colors.Purple,    // hyperlink
	                Colors.Red);      // followedHyperlink
````



There are several ways to create a __ThemableColor__ object:

* Passing two parameters to the constructor – *ThemeColorType* and *double*.

* __ThemeColorType__ is an enum which has twelve possible values (the aforementioned color types).

* The second parameter is of type __double__ and should be between -1 and 1. It represents the tint and shade to be applied on the selected color.

* Passing *ThemeColorType* and *ColorShadeType*.

* __ThemeColorType__ is the same as in the previously mentioned constructor.

In order to create colors that depend on the current document theme, you need to use __ThemableColor__ objects. Here is how you create one:

````C#
	            ThemableColor themableColor = new ThemableColor(ThemeColorType.Accent1);
````



## Font Schemes

A font scheme is represented by the __ThemeFontScheme__ class. Every font scheme consists of a name and a number of predefined font families. Each font family corresponds to one of two font types:

* Major

* Minor

The next snippet illustrates how to create a __ThemeFontScheme__ object. A name and two font family names are passed to the font scheme constructor. The former font family name corresponds to the Major ThemeFontType and the latter - to the Minor.

````C#
	            ThemeFontScheme fontScheme = new ThemeFontScheme(
	                "Mine",
	                "Times New Roman",   // Major
	                "Arial");		   // Minor
````



In order to use the document theme's fonts you need to use __ThemableFontFamily__ objects. Again, there are several ways you can create one:

* Passing a __ThemeFontType__ object as a constructor parameter – this way you will bind the object being created to the currently selected document theme.

* Passing a __FontFamily__ object or a string representing a FontFamily name – the result would be a static FontFamily, meaning it will not be changed when the document theme is changed.

When you need to create font that depends on the current document theme, you need to use __ThemableFontFamily__ objects. You can create one this way:

````C#
	            ThemableFontFamily themableFont = new ThemableFontFamily(ThemeFontType.Major);
````



## Document Themes

Now that you have a color and a font schemes, you can create a new __DocumentTheme__. You need to specify a name and pass the already created color and font schemes.

````C#
	            DocumentTheme theme = new DocumentTheme("Mine", colorScheme, fontScheme);
````



There are a number of predefined color and font schemes. You can find them in a static class called [PredefinedThemeSchemes](http://www.telerik.com/help/wpf/allmembers_t_telerik_windows_documents_spreadsheet_theming_predefinedthemeschemes.html). The class exposes the properties __ColorSchemes__ and __FontSchemes__ that hold all predefined schemes.

````C#
	            DocumentTheme theme1 = new DocumentTheme("From Predefined schemes", PredefinedThemeSchemes.ColorSchemes[0], PredefinedThemeSchemes.FontSchemes[5]);
````



Changing the current document theme is as easy as setting a single property:

````C#
	            RadFlowDocument document = new RadFlowDocument();
	            document.Theme = theme;
````



## Getting Actual Values

In order to get the actual value from __ThemableColor__ or __ThemableFontFamily__ you need to call the __GetActualValue()__ method on the corresponding object.

````C#
	            Color actualColor = themableColor.GetActualValue(theme);
	            // the actual color is the same as Accent1 color of the colorScheme
````



````C#
	            var actualFont = themableFont.GetActualValue(theme);
	
	            // the actualFont is the same as the Major font of the fontScheme
````



# See Also[](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)

 * [Styles]({%slug wordsprocessing/concepts/styles%})
