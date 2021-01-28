---
title: Overview
page_title: MVC Overview
description: Check our Web Forms article about Overview.
slug: mvc/overview
tags: overview
published: True
position: 0
---

# MVC Overview



This article explains which Telerik products can be used in an ASP.NET MVC environment.

## ASP.NET MVC Basics

**ASP.NET MVC** enables you to build Model View Controller (MVC) applications by using the ASP.NET framework. ASP.NET MVC is an alternative, not a replacement, for ASP.NET Web Forms that offers the following benefits:

* Clear separation of concerns

* Testability - support for Test-Driven Development

* Fine-grained control over HTML and JavaScript

* Intuitive URLs

## Telerik and ASP.NET MVC

We recommend using the [UI for ASP.NET MVC, the Telerik product built from the ground up to support the principles of MVC development](https://www.telerik.com/aspnet-mvc) in your MVC projects. The MVC suite is pretty mature and offers a similar amount of ASP.NET MVC components (90+). You can play with its demos at [https://demos.telerik.com/aspnet-mvc/](https://demos.telerik.com/aspnet-mvc/).

The Telerik® UI for ASP.NET AJAX suite is not tested under MVC environments and the controls from the AJAX suite are not supported in an MVC setup. They are based on the web form paradigm and heavily rely on the web form server lifecycle that is not available in an MVC environment. You can only add the AJAX controls to a standard web form in a MVC project. The Razor engine is not supported by the Telerik® UI for ASP.NET AJAX controls.

>note If you decide to use on your own the Telerik ASP.NET AJAX controls in an ASP.NET MVC project, you will need to also include the <asp:ScriptManager> in the view since it is required to import and register the MS AJAX and the Telerik AJAX scripts.



## See Also

 * [UI for ASP.NET MVC Overview](https://www.telerik.com/aspnet-mvc)
 * [UI for ASP.NET MVC Demos](https://demos.telerik.com/aspnet-mvc/)
