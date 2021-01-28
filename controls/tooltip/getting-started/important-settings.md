---
title: Important Settings
page_title: Important Settings - RadTooltip
description: Check our Web Forms article about Important Settings.
slug: tooltip/getting-started/important-settings
tags: important,settings
published: True
position: 3
---

# Important Settings




**RadToolTip** and **RadToolTipManager** include several properties to control tooltip behavior:

* Use properties [Position, RelativeTo, OffsetX, OffsetY]({%slug tooltip/getting-started/positioning%}) to precisely position the tooltip.

* Use the **ContentScrolling** property to customize the availability of scrollbars. Possible values are Auto, None X, Y and Both.

* **HideEvent = "ManualClose"** displays a close button graphic in the tooltip. The tooltip stays open until the user clicks the button.

* The **Modal** property when **True** grays everything in the background of the tooltip.

* The **MouseTrailing** property when **True** causes the tooltip to follow the mouse. When **False** the tooltip stays in the initial position dictated by the [RelativeTo]({%slug tooltip/getting-started/positioning%}) property.

* The **ShowCallout** property when True (the default) displays the [callout]({%slug tooltip/getting-started/radtooltip-structure%}) graphic on the tooltip.

* Use [ShowDelay and AutoCloseDelay]({%slug tooltip/getting-started/showdelay-and-autoclosedelay%}) to control the timing of tooltip opening and closing.

* Use the [ShowEvent]({%slug tooltip/getting-started/showevent%}) property to control how a tooltip is triggered.

* Use [Sticky]({%slug tooltip/getting-started/sticky-tooltips%}) tooltips to prevent tooltips from hiding when the mouse moves away.

* The [Text]({%slug tooltip/getting-started/radtooltip-structure%}) property can be used to [populate the content]({%slug tooltip/radtooltip/managing-content%}) of the tooltip.

* The [Title]({%slug tooltip/radtooltip/managing-content%}) property can contain text displayed at the top of the tooltip.

In addition, **RadToolTip** uses the [TargetControlID]({%slug tooltip/radtooltip/using-the-targetcontrolid-property%}) property to identify the target element for the tooltip. **RadToolTipManager** uses the [TargetControls]({%slug tooltip/radtooltipmanager/using-the-targetcontrols-collection%}) collection to identify multiple target elements to "tooltipify".

You can find online demos which set server properties in the **Server-side properties** section of RadToolTip's demos.

# See Also

 * [Sticky Tooltips]({%slug tooltip/getting-started/sticky-tooltips%})

 * [Positioning]({%slug tooltip/getting-started/positioning%})

 * [ShowDelay and AutoCloseDelay]({%slug tooltip/getting-started/showdelay-and-autoclosedelay%})

 * [ShowEvent]({%slug tooltip/getting-started/showevent%})

 * [RadToolTip Structure]({%slug tooltip/getting-started/radtooltip-structure%})
