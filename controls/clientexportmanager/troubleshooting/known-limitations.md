---
title: Known Limitations
page_title: Known Limitations | RadClientExportManager for ASP.NET AJAX Documentation
description: Known Limitations
slug: clientexportmanager/troubleshooting/known-limitations
tags: known,limitations
published: True
position: 3
---

# Known Limitations

The **RadClientExportManager** control's known limitations are listed below:

* no support for RTL text

* no support for vertical text (e.g., `writing-mode: vertical-lr`). You can read more [Add support for vertically aligned text in PDF export ](https://github.com/telerik/kendo-ui-core/issues/2827) GitHub issue for the underlying Kendo Drawing API

* no rendering of shadow DOM

* no CSS box-shadow, text-shadow, radial gradients (linear gradients are supported).

* only **solid** border-style

* using browser zoom other than 100% is not supported.

* the content of the following elements is not rendered: `<iframe>`, `<svg>`. A `<canvas>` will be rendered as an image, but only if it's "non-tainted" (does not display images from another domain). 

* SVG referenced with the `<img>` tag will not render in Internet Explorer, because IE taints the canvas.

* rendering of `<select>` elements is imperfect (some minor issues can be noticed, like wrong padding or missing the dropdown arrow). 

* images hosted on different domains might not be rendered, unless permissive [Cross-Origin HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) are provided by the server. Similarly, fonts might not be possible to load cross-domain. Even with the proper CORS headers, IE9 will not be able to load images or fonts from another domain, and could raise a uncatcheable security exception. If you need to support IE9, make sure to host images and fonts on the same domain as the application.

* images will not be exported in IE if their source is an SVG document. These are considered to be tainted.

* the **border-collapse:collapse** style of tables is not supported. Avoid using adjacent borders for separate table cells to prevent double borders in the PDF output.

* maximum document size is limited to 5080x5080mm (200x200 inches) by the PDF 1.5 specification. Larger files might not open in some viewers.

* when the generated document is opened with Acrobat Reader and you try to use the **Save As** option from the file menu an error is thrown. "The document could not be saved. There was a problem reading(23)". The solution is to open Acrobat Reader options (Edit → Preferences) and in the "Documents" section uncheck “Save As optimizes for Fast Web View”, which is enabled by default. After this, **Save As** will work without errors.

* exporting images from another domain requires the server to have the following header in its response: **Access-Control-Allow-Origin: `*`**, which will enable cross-origin requests. If the server does not have this header set access to the image will be denied and it will not be exported.

* exporting font icons 

* exporting pseudo:elements borders (for example RadOrgChart connection lines) 

* for versions prior to R3 2018, exporting RadHtmlChart controls with page breaks

* exporting with page breaks cannot work with all elements and scenarios. For more details see the [Page Break Limitations](https://docs.telerik.com/kendo-ui/framework/drawing/limitations-browser-support) section of the underying Kendo Drawing API documentation. The gist is that the following cannot be split into pages:

    * elements without text content
    * elements with `position: absolute` or `position: fixed`
    * content of the following nodes:
        * `<img>`
        * `<tr>`
        * `<iframe>`
        * `<svg>`
        * `<object>`
        * `<canvas>`
        * `<input>`
        * `<textarea>`
        * `<select>`
        * `<video>`

