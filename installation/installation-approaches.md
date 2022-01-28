---
title: Details on Installation Approaches
page_title: Details on Installation Approaches
description:
slug: details-installation-approaches
tags: installation, approaches, nuget, details
published: True
position:
---

# Details on Installation Approaches

Telerik UI for ASP.NET AJAX enables you to install the suite components by using the [MSI file](), the [ZIP library](), or the [Telerik NuGet feed]().

## Details on NuGet Installation

In addition to the steps for getting up and running with Telerik UI for ASP.NET AJAX by using the Telerik NuGet feed, the NuGet installation approach enables you to locally [download a specific NuGet package](#downloading-a-nuget-package) and build a private NuGet feed for your company and also [implement continuous integration automated builds](#implementing-automated-builds).    

### Downloading a NuGet Package

You can locally download `.nupkg` files and [build a private feed](https://www.telerik.com/blogs/power-your-projects-with-telerik---now-with-the-convenience-of-nuget) for your company.

>important Such a feed must be private (i.e., not available to the general Internet) and the standard developer-seat [licensing model]({%slug introduction/licensing/license-agreement%}) applies (i.e., the developers working with the controls must have active licenses). If you have questions on the licensing scheme, send them to telerik-sales@progress.com.

To download `.nupkg` files locally:

1. Navigate to [Your Account](https://www.telerik.com/account/).

1. Go to the [Downloads page of UI for ASP.NET AJAX](https://www.telerik.com/account/product-download?product=RCAJAX).

1. Click on the `.nupkg` files you require (for example, `Telerik.UI.for.AspNet.Ajax.Net45.2016.3.1027.nupkg`) to download them. The file name is built in the following format: `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>.<Telerik controls version>.nupkg`.

1. Configure your server and projects to use the feed.

### Implementing Automated Builds

Often enough, you would want to set up Continuous Integration and/or Continuous Delivery (CI/CD) pipelines or builds for your project that uses the Telerik components. This is a valid scenario and the "one license per developer" license does not prevent you from doing so. The Telerik components are commercial software and as such can only be distributed through channels that are private and/or behind authentication.

There are a couple of common ways people implement CI/CD automated builds:

* You can put your own credentials (or the credentials of the license holder, depending on how your licenses are set up) in the nuget.config of the build machine/pipeline. In many cases, when doing so, they will even be encrypted when you add the Telerik feed source through the CLI. Alternatively, you can copy an encrypted version from your own local config if you have one and if plain text is an issue. You can read more about adding credentials via the NuGet.config in the following page: [https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials](https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials).

* Creating a local folder (for example, on a shared network drive or other suitable location accessible by your builds and team) that holds the `.nupkg` files we provide (you can download them from your telerik.com account).

You must protect your credentials and ensure they are used only by you and not by other developers, according to the [license-per-developer policy](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). For example, take your encrypted password from your local NuGet.config file and use it on the build PC. They can by such colleagues (like other developers, QAs, designers, front-end devs, DBAs and so on) for building and running a solution, provided they do not use the Telerik components to create functionality. Of course, you must ensure that such credentials or package sources are not available to the general public (for example, in public repositories).
