---
title: Major and Minor Releases Installation
page_title: Major and Minor Releases Installation | UI for ASP.NET AJAX Documentation
description: Major and Minor Releases Installation
slug: introduction/installation/upgrading-instructions/major-and-minor-releases-installation
tags: major,and,minor,releases,installation
published: True
position: 1
---

# Major and Minor Releases Installation



Telerik® UI for ASP.NET AJAX has two types of official releases – major and minor releases. Examples of major releases are Q1 2011, Q3 2011 and examples of minor releases are Q3 2011 SP1, Q3 2011 SP2 and Q1 2012 SP1. Both major and minor releases are distributed as msi installation package which follows certain upgrade logic explained below.

First, major releases can be installed in parallel on the same machine. This means that when you install new major release it doesn’t uninstall your existing major releases. An example is that you can have Q2 2011, Q3 2011 and Q1 2012 installed at the same time.

Minor releases, on the other hand, can’t be installed in parallel when they are from the same major release. This means that when you install a newer minor release it will automatically uninstall the previous version minor release which is from the same major release. An example is that if there are two minor releases for the same major release e.g. Q1 2012 SP1 and Q1 2012 SP2 for the Q1 2012 release then you can have only one of the specified versions.

Here are some sample scenarios:

* Parallel major releases

	1. Install Q2 2011

	1. Install Q3 2011

	1. Install Q1 2012

	Result: all three versions (Q2 2011, Q3 2011 and Q1 2012) are installed in parallel on the machine.

* Minor releases from the same major release

	1. Install Q1 2012

	1. Install Q1 2012 SP1

	1. Install Q1 2012 SP2

	Result: only the latest version (Q1 2012 SP2) is installed on the machine.

* Minor releases from different major releases

	1. Install Q3 2011

	1. Install Q3 2011 SP1

	1. Install Q1 2012 SP1

	Result: Q3 2011 SP1 and Q1 2012 SP1 are installed on the machine.

>tip Part of the Telerik® UI for ASP.NET AJAX are the Visual Studio Extensions. Since the Visual Studio Extensions integrate into the Visual Studio IDE they don’t support parallel versions. When newer version is installed regardless of its type (major/minor) the Visual Studio Extensions get updated to the newer version.


