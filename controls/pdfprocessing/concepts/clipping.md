---
title: Clipping
page_title: Clipping | UI for ASP.NET AJAX Documentation
description: Clipping
slug: pdfprocessing/concepts/clipping
tags: clipping
published: True
position: 1
---

# Clipping



__Clipping__ is a content element that can be used to define the outline of other content elements like [](18fc2485-e8a1-4b19-a7ba-fdd755815212) and [](27ec198e-2554-45dc-81cb-957a87f84004).

## Creating a Clipping

The __Clipping__ element exposes a single property.

* __Clip__: Property of type __GeometryBase__ representing the [Geometry]({%slug pdfprocessing/concepts/geometry%}) that is used to clip the content element.

__Example 1__ demonstrates how you can create a Clipping element and assign a __RectangeGeometry__ to its Clip property.

````c#
	            Clipping clipping = new Clipping();
	            clipping.Clip = new RectangleGeometry(new Rect(5, 5, 50, 50));
````



## Using Clipping

All inheritors of the __ContentElementBase__ class expose a __Clipping__ property. Setting it clips the respective content element with the specified clipping.

__Example 2__ demonstrates how to clip an image using the Clipping created in __Example 1__.

````C#
	            Image image = container.Content.AddImage(imageSource);
	            image.Clipping = clipping;
````



# See Also

 * [Geometry]({%slug pdfprocessing/concepts/geometry%})
