---
title: Getting Started
page_title: Phone Layout Getting Started | RadEditor for ASP.NET AJAX Documentation
description: Getting Started
slug: editor/mobile-support/mobile-rendering/getting-started
tags: editor,support,mobile,rendering,overview, getting, started
published: True
position: 1
---
   

# Getting Started

This article showcases the basic steps needed to get started with the **Phone Layout** of **RadEditor** in your project. 

<div style="display:inline-block; margin-right:10px;">
>caption Figure 1: Initial state of Phone Layout under a mobile device.

<img alt="Phone Layout Editor - Initial state" src="./images/radeditor-not-editable.png" />
</div>


<div style="display:inline-block;">
>caption Figure 2: Full screen (editable) mode of Phone Layout.

<img alt="Phone Layout Editor - Initial state" src="./images/fullscreen-phone-layout.png" />
</div>


You can utilize the **Phone Layout** by following these steps:

1. Set up **RadEditor** on an ASP.NET page by following the general [Getting Started]({%slug editor/getting-started/overview%}) article.

1. Set the RenderMode property of RadEditor either to Auto or Mobile
	(*You can find out more about the differences of these two options in the [Render Modes]({%slug editor/mobile-support/render-modes%}) help article*);

1. Adjust the viewport of your page by putting this meta tag in the `<head>` element of the page:

		<meta name="viewport" content="width=device-width, initial-scale=1" />

	(*You can read more about why this is needed in MDN's [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) article*)

1. Run the created page under your phone's browser.

Initially, the **RadEditor** will load in non-editable mode (**Figure 1**). Clicking the **Edit Content** button (![](./images/edit-contnet-button.png)) will enable editing and the **Phone Layout** will switch to full screen (**Figure 2**).

You can find further details about using the Phone Layout as end-user in the [End User Experience]({%slug editor/mobile-support/mobile-rendering/end-user-experience%}) article.

You can continue reading the [Basic Configurations]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%}) article to learn how to rearrange, add or remove tools regarding **Phone Layout**.

## See Also 

* [Phone Layout Overview]({%slug editor/mobile-support/mobile-rendering/overview%})
* [Element Structure]({%slug editor/mobile-support/mobile-rendering/elements-structure%})
* [End User Experience]({%slug editor/mobile-support/mobile-rendering/end-user-experience%})
* [Basic Configurations]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%}) 