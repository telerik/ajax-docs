---
title: Telerik.Web.UI.HtmlChart.PlotArea.NotesAppearance
page_title: Telerik.Web.UI.HtmlChart.PlotArea.NotesAppearance
description: Telerik.Web.UI.HtmlChart.PlotArea.NotesAppearance
---

# Telerik.Web.UI.HtmlChart.PlotArea.NotesAppearance

Defines the visual appearance settings for the series' notes

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.HtmlChart.PlotArea.NotesAppearance : IDefaultCheck

## Properties

###  Icon `NoteIconAppearance`

Defines the appearance settings of the notes icon

###  Label `NoteLabelAppearance`

Defines the appearance settings of the note labels

###  Line `NoteLineAppearance`

Defines the appearance settings of the markers

###  Position `NotePosition`

Defines the line style.

###  Visual `String`

A function that can be used to create a custom visual for the notes. The available argument fields are:
            rect - the kendo.geometry.Rect that defines where the visual should be rendered;
            options - the label options;
            createVisual - a function that can be used to get the default visual;
            category - the category of the marker point;
            dataItem - the dataItem of the marker point;
            value - the value of the marker point;
            series - the series of the marker point;

