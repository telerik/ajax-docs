---
title: Elastic Design
page_title: Elastic Design | RadRadioButtonList for ASP.NET AJAX Documentation
description: Elastic Design
slug: radiobuttonlist/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadRadioButtonList offers**. **Example 1** shows the basic approach to scale the control by only changing its default font size.

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: no, slug-fl: no")

@[template](/_templates/common/font-size-notes.md#note-and-example "control: RadRadioButtonList")

>caption Figure 1: Comparison between appearance of a RadRadioButtonList with regular font size and with increased font size.

![checkbox-elastic-design](images/checkbox-elastic-design.png)

>caption Example 2: Shows how to increase the font size of a RadRadioButtonList in Figure 1.

````CSS
<style type="text/css">
	button.RadRadioButtonList {
		font-size: 26px;
	}
</style>
````

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" Text="Elastic CheckBox Button" Checked="true">
</telerik:RadRadioButtonList>
````

## See Also

 * [Mobile Support Overview]({%slug radiobuttonlist/mobile-support/overview%})

 * [Render Modes]({%slug radiobuttonlist/mobile-support/render-modes%})

@[template](/_templates/common/font-size-notes.md#related-resources)