---
title: Modal
page_title: RadAjaxLoadingPanel Modality
description: Check our Web Forms article about Modal.
slug: ajaxloadingpanel/modal
tags: modal
published: True
position: 6
---

# Modal

**RadAjaxLoadingPanel** can be **Modal**—it can cover the entire browser viewport while an AJAX request is running, so that the user cannot interact with the page at all. You can enable this feature by setting the `Modal` property to `true`.

This can be useful if you update a lot of small areas on the page so the appearance is more uniform, or when you want to ensure that the end user cannot modify the page while any request is running. For example, the user may be able to scroll the page and modify other elements, or invoke other requests that will cancel the previous request.

When this feature is enabled, the loading panel

* is a direct child of the `<body>` element
* has the following CSS settings that achieve the modal behavior:

			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 90000; /*the default value, you can change it through the ZIndex property*/
		

