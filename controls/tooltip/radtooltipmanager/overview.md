---
title: Overview
page_title: RadToolTipManager Overview | RadTooltip for ASP.NET AJAX Documentation
description: Overview
slug: tooltip/radtooltipmanager/overview
tags: overview
published: True
position: 0
---

# RadToolTipManager Overview




Both **RadTooltip** and **RadTooltipManager** can display rich content (including user controls and other ASP.NET controls), as well as AJAX-generated content. **RadToolTip** is meant to "tooltipify" a single element while **RadToolTipManger** should be used in scenarios where many elements would require a tooltip. For more information on **RadTooltip**, see the [Overview]({%slug tooltip/overview%}) topic.

Three common scenarios where the **RadToolTipManager** is useful:

* When the developer wishes to 'tooltipify' all HTML elements on a page. This is the scenario where the developer already has a page with existing tooltips that need to be easily converted to a more refined, consistent look (using a particular skin or animation effect). RadToolTipManager overrides the standard tool tip behavior automatically just by including RadToolTipManager on the page.

* When a list of elements should be tooltipified. In this case the [RadToolTipManager TargetControls]({%slug tooltip/radtooltipmanager/using-the-targetcontrols-collection%}) collection should be used. This scenario allows for finer tuning. You can use more than one **RadToolTipManager**, each configured for a specific set of controls.

* When one or more elements should display rich dynamic content that is fetched from the server. This approach is useful in cases where content should be fetched from a data source, depending on the element being targeted, and helps keep pages smaller. Use the [OnAjaxUpdate event]({%slug tooltip/radtooltipmanager/load-content-on-demand%}) to populate tooltips from the server on-the-fly.



For a live demo of RadToolTipManager see the [RadToolTip versus RadToolTipManager](https://demos.telerik.com/aspnet-ajax/tooltip/examples/tooltipversustooltipmanager/defaultcs.aspx) demo.



# See Also

 * [Using the TargetControls Collection]({%slug tooltip/radtooltipmanager/using-the-targetcontrols-collection%})

 * [Load Content On Demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%})

 * [Using RadToolTipManager in MS AJAX UpdatePanels]({%slug tooltip/troubleshooting/using-radtooltipmanager-in-ms-ajax-updatepanels%})
