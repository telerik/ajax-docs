---
title: Browser Crashing
page_title: Browser Crashing | UI for ASP.NET AJAX Documentation
description: Browser Crashing
slug: clientexportmanager/troubleshooting/browser-crashing
tags: browser,crashing
published: True
position: 1
---

# Browser Crashing



This article explains how to deal with browser crashes, which may occur when exporting very large PDF files.

## Using compression to improve performance and stability

If you are experiencing browser crashes when exporting large PDF files, consider using compression. **RadClientExportManager** supports compression via the [ JavaScript pako library ](https://github.com/nodeca/pako). Besides drastically reducing the output size, **Pako** enables the browser to use less memory while rendering the PDF. Chrome is known to crash on generating very large PDF-s and simply including this library will mitigate the problem.

Just load **Pako** with a `<script>` tag (window.pako should be available) and compression will be enabled automatically.

# See Also
