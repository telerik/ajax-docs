---
title: Mobile Rendering Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/mobile-support/mobile-rendering/overview
tags: overview
published: True
position: 0
---

# Mobile Rendering Overview



Since Q3 2014 Beta release of Telerik UI controls __RadGrid__ is optimized for touchdevices and comes with built-in __Adaptive behavior__.When you access the grid control via a mobile device, the control will change to create a user experience tailored to the device screen size. In this mode,RadGrid is mobile-friendly and its touch zones are bigger and easier to select.![grid-adaptive-behavior](images/grid-adaptive-behavior.png)

## Mobile vs Auto render modes

You can enable the mobile layout of the control by setting the __RenderMode__ property of the Grid to __"Mobile"__. To cover the rendering of both mobile and desktop devices, you could set the__RenderMode__ property to __"Auto"__. This option will automatically decide how to render the control on a smartphone, tablet or PC.

## Special Mobile rendering features

When you change the grid __RenderMode__ to __Mobile__ or __Auto__ a context menu placed at the top right corner of the grid will appear.By clicking on it you can reduce the columns number on the client or rearrange them in the desired order.

Also when you set __EnableHeaderContextMenu__ and __EnableHeaderContextFilterMenu__ properties to true a Column Settings menu placed inside each column header will be shown. Via the Column Settings popup which will open you can group the respective column, sort and filter its data.

Telerik ASP.NET Grid Adaptive behavior supports easy editing for users on both desktop and mobile. When the demo is opened on a mobile device the __PopUp__ edit form will take the entire RadGrid container and position __Save__ and__Cancel__ buttons at the top for a better user experience. You can turn on this feature by setting the RadGrid __RenderMode__ property to __Auto__ and setting __GridTableView.EditMode__ property to __PopUp__. It's as simple as that.
