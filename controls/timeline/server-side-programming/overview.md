---
title: Overview
page_title: Overview | RadTimeline for ASP.NET AJAX Documentation
description: Overview
slug: timeline/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of **RadTimeline** and create its elements in the code-behind via the Server-Side API of the control.

## RadTimeline Server-side Events
Below you can see a list of the server-side events available in the **RadTimeline**: 

* OnDataBinding
* OnDataBound
* OnInit
* [OnItemDataBound]({%slug timeline/server-side-programming/events/itemdatabound%})
* OnLoad
* OnPreRender

## RadTimeline Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadTimeline class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadTimeline). You can also find it in the intellisense in Visual Studio.

## Create RadTimeline Dynamically

In this sample you will see how to create a collection of `TimelineItem` objects in **RadTimeline**. The `TimelineItem` exposes `Title`, `Subtitle`, `Date` and `Description` properties and gives ability to define separate `TimelineItemImage` and `TimelineItemAction` objects specific for each item.

>caption Example 1: Create RadTimeline items dynamically on the server-side

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadTimeline timeline = new RadTimeline();
        
    for (int i = 0; i < 4; i++)
    {
        var timelineEvent = new TimelineItem()
        {
            Title = "Title #" + (i + 1),
            Subtitle = "my subtitle",
            Date = DateTime.Now.AddDays(i),
            Description = "event description here",
        };
        timelineEvent.Images.Add(new TimelineItemImage() { Src = "https://via.placeholder.com/64" });

        timelineEvent.Actions.Add(new TimelineItemAction() { Text = "text", Url = "https://via.placeholder.com/64" });
        timeline.Items.Add(timelineEvent);
        Page.Form.Controls.Add(timeline);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim timeline As RadTimeline = New RadTimeline()

    For i As Integer = 0 To 4 - 1
        Dim timelineEvent = New TimelineItem() With {
            .Title = "Title #" & (i + 1),
            .Subtitle = "my subtitle",
            .Date = DateTime.Now.AddDays(i),
            .Description = "event description here"
        }
        timelineEvent.Images.Add(New TimelineItemImage() With {
            .Src = "https://via.placeholder.com/64"
        })
        timelineEvent.Actions.Add(New TimelineItemAction() With {
            .Text = "text",
            .Url = "https://via.placeholder.com/64"
        })
        timeline.Items.Add(timelineEvent)
        Page.Form.Controls.Add(timeline)
    Next
End Sub
````






