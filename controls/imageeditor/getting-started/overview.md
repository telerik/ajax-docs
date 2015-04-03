---
title: Getting Started Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: imageeditor/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview



## 

Here are the basic steps to insert a __RadImageEditor__ control on your page:

1. Create a new ASP.NET AJAX - enabled web site.

1. Add a __RadScriptManager__ or the standard ASP ScriptManager to the page - this step is mandatory if you are using ASP.NET AJAX controls.

1. Drag a RadImageEditor from your VS Toolbox and drop it on the page.

1. Right-click on the inserted RadImageEditor control and select properties.

1. Set __ImageUrl__ property from the Properties tab to point to an image to be loaded, please note that the image must be located in a folder accessible from the application.

1. If you are not creating a Telerik UI WebSite you should add the __RadImageEditor__ HttpHanlder from its [smart tag]({%slug imageeditor/design-time%})

1. You can additionally configure where the control should store its cache and the position of the status bar using corresponding properties – __ImageCacheStorageLocation__, __StatusBarMode__.

1. Save the page and run it in the browser.
