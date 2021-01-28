---
title: Overview
page_title: Getting Started Overview - RadXmlHttpPanel
description: Check our Web Forms article about Overview.
slug: xmlhttppanel/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview



## How RadXmlHttpPanel Works

Imagine you have a `<div/>` element, and you want to paste some HTML content within, using JavaScript. One would use either **div.innerHTML** or **div.appendChild** for this purpose. Well that's the underlying principle of the XmlHttpPanel. It pastes the HTML content received from the web service or the callback, within the panel's HTML element (`<span/>` or `<div/>`). The HTML content can be created by adding controls to the panel during the callback, or returning an HTML string by the web method (of the web service). More information on how to configure the control, to use both update mechanisms, can be found in [Callback Configuration]({%slug xmlhttppanel/getting-started/callback-configuration%}) and [WebService Configuration]({%slug xmlhttppanel/getting-started/webservice-configuration%}) articles.





## Supported Scenarios

Since the page does not go through its standard lifecycle during ASP.NET callbacks and web services, any changes that are made to the content within the XmlHttpPanel will be lost if a postback (or AJAX call that affects the content) occurs. This poses a limitation on the controls residing in the panel, to not perform any postbacks and to not execute server-side events.

*This being said, RadXmlHttpPanel is primarily intended to be used for loading presentation data. If any modifications or updates are to be performed on the content they should be done on the client-side or by the panel itself.*



## How to Initiate a Partial Page Update

Partial updates are initiated from the client-side, using RadXmlHttpPanel's **set_value("string_value")** client-side method. Values can be passed to the server by providing a single parameter when calling the method.
