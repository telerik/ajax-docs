---
title: Fluid and Elastic Capabilities
page_title: Fluid and Elastic Capabilities | RadPivotGrid for ASP.NET AJAX Documentation
description: Fluid and Elastic Capabilities
slug: pivotgrid/mobile-support/fluid-and-elastic-capabilities
tags: fluid,and,elastic,capabilities
published: True
position: 1
---

# Fluid and Elastic Capabilities

**RadPivotGrid** control provides elastic and fluid capabilities which allow keeping the control’s component proportion on different mobile devices.

## Fluid capability

By default **RadPivotGrid** expands to take all the available space in its container (100% of the container) which makes it **Fluid**.


## Elastic capability

**Elastic behavior** - When you use the **RadPivotGrid** **RenderMode** property to **Leightweight**, changing the font-size for the RadPivotGrid wrapper will resize the control elements accordingly. This is usually achieved by using em units for font-size and padding settings.

@[template](/_templates/common/font-size-notes.md#note-and-example "control: RadPivotGrid")

**Example 2:** To change the font-size only for RadPivotGrid you can use the code snippet below:

````ASPNET
<style type="text/css">
    div.RadPivotGrid,
	div.PivotGridWindow
    {
        font-size: 1.2em;
    }
</style>
````

>note RadPivotGrid does not take care of the metrics of the controls that are place in it. This means that if you simply change its font-size that won’t affect the child controls in the template. They should be handled manually.


# See also

@[template](/_templates/common/font-size-notes.md#related-resources)

