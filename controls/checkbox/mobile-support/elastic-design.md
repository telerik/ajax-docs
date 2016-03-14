---
title: Elastic Design
page_title: Elastic Design | RadCheckBox for ASP.NET AJAX Documentation
description: Elastic Design
slug: checkbox/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadCheckBox offers**. **Example 1** shows the basic approach to scale the control by only changing its default font size.

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: no, slug-fl: no")

@[template](/_templates/common/font-size-notes.md#note-and-example "control: RadCheckbox")

>caption Figure 1: Comparison between appearance of a RadCheckBox with regular font size and with increased font size.

![checkbox-elastic-design](images/checkbox-elastic-design.png)

>caption Example 2: Shows how to increase the font size of a RadCheckBox in Figure 1.

````CSS
<style type="text/css">
	button.RadCheckBox {
		font-size: 26px;
	}
</style>
````

````ASP.NET
<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Text="Elastic CheckBox Button" Checked="true">
</telerik:RadCheckBox>
````

## See Also

 * [Mobile Support Overview]({%slug checkbox/mobile-support/overview%})

 * [Render Modes]({%slug checkbox/mobile-support/render-modes%})

@[template](/_templates/common/font-size-notes.md#related-resources)