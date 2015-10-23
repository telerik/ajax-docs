---
title: Skins
page_title: Skins | RadTimePicker for ASP.NET AJAX Documentation
description: Skins
slug: timepicker/appearance-and-styling/skins
tags: skins
published: True
position: 2
---

# Skins



The **RadTimePicker** control uses **skins** to control the overall look-and-feel of the control. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (date cells, buttons, etc.) and defines their look and feel. To apply a skin to a **RadTimePicker** control, set its **Skin** property, either using the properties pane or the control's [Smart Tag]({%slug timepicker/design-time/smart-tag%}).

On  **RadTimePicker** the **Skin** property value is always propagated to the child controls (the embedded **RadDateInput** and popup **RadTimeView** controls).


## Not using skins

If you do not set the **Skin** property, the **RadTimePicker** will automatically use the "Default" skin. If you do not want to use a skin with your control, set its **Skin** property to an empty string. If you also want to prevent the control's base stylesheet from registering, please set **EnableEmbeddedBaseStylesheet** to **false**. The base stylesheet contains CSS styles, which are applied to the **RadTimePicker** control instances, regardless of their skin name, because these styles are the same for all skins. These base styles include alignment, positioning, border widths, paddings, etc.

## Customizing Skins

For more information on how you can customize the skins, please refer to the **RadCalendar** [Skins]({%slug Calendar/appearance-and-styling/skins%}) article.


