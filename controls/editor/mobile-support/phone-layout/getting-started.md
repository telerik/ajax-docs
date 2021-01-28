---
title: Getting Started
page_title: Phone Layout Getting Started - RadEditor
description: Check our Web Forms article about Getting Started.
slug: editor/mobile-support/phone-layout/getting-started
tags: editor,support,mobile,rendering,overview, getting, started
published: True
position: 1
---
   

# Phone Layout Getting Started

This article showcases the basic steps needed to get started with the **Phone Layout** of **RadEditor** in your project. 

<div style="display:inline-block; margin-right:10px;">
>caption Figure 1: Preview mode of RadEditor <br />with Phone Layout under a mobile device.
<br/>
<img alt="Phone Layout Editor - Preview mode" src="./images/preview-mode.png" />
</div>


<div style="display:inline-block;">
>caption Figure 2: Full screen (editable) mode <br />of RadEditor with Phone Layout.
<br/>
<img alt="Phone Layout Editor - Full screen mode" src="./images/full-screen-mode.png" />
</div>


>important **Phone Layout** is supported only under browsers where [Flex Model](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) is available.


You can utilize the **Phone Layout** by following these steps:

1. Set up **RadEditor** on an ASP.NET page by following the general [Getting Started]({%slug editor/getting-started/overview%}) article.

1. Set the RenderMode property of RadEditor either to Auto or Mobile
	(*You can find out more about the differences of these two options in the [Render Modes]({%slug editor/mobile-support/render-modes%}) help article*);

1. Adjust the viewport of your page by putting this meta tag in the `<head>` element of the page:

		<meta name="viewport" content="width=device-width, initial-scale=1" />

	(*You can read more about why this is needed in MDN's [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) article*)

1. Run the created page under your phone's browser.

Initially, the **RadEditor** will load in **Preview** mode (**Figure 1**). Clicking the **Edit Content** button (![](./images/edit-contnet-button.png)) will enable editing and the **Phone Layout** will switch to full screen mode(**Figure 2**).

You can find further details about using the **Phone Layout** as end-user in the [End User Experience]({%slug editor/mobile-support/phone-layout/end-user-experience%}) article.

You can continue reading the [Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}) article to learn how to rearrange, add or remove tools regarding **Phone Layout**.

## See Also 

* [Phone Layout Overview]({%slug editor/mobile-support/phone-layout/overview%})
* [Element Structure]({%slug editor/mobile-support/phone-layout/elements-structure%})
* [End User Experience]({%slug editor/mobile-support/phone-layout/end-user-experience%})
* [Basic Configurations]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}) 
