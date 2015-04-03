---
title: Changes
page_title: Changes | UI for ASP.NET AJAX Documentation
description: Changes
slug: ziplibrary/changes-and-backwards-compatibility-/changes
tags: changes
published: True
position: 0
---

# Changes



This topic summarizes the new functionality introduced in the library with helpful links to places in the documentation that describe in greater detail the new functionality and how it can be used.

## What's New in 2015 Q1

ZipPackage has been deprecated since Q1 2015 release of Telerik UI for ASP.NET AJAX, but you can use __ZipArchive__ instead. The ZIP archive is represented by __ZipArchive__ class and it can be used in 3 modes (Read, Create and Update). For more information about them you can refer to the [Getting Started]({%slug ziplibrary/getting-started%}) article.

You can check the new version equivalents of the obsolated ZIP classes in the [Backward Compatibility]({%slug ziplibrary/changes-and-backwards-compatibility-/backward-compatibility%}) topic.

## What's New in 2014 Q2 - 2014.2.618

* ZIP library has been redesigned from scratch for better cross-platform compatibility (.NET, Silverlight, Windows Store Apps, Windows Phone), better support of the standards and better functionality.

* ZIP library now supports both ZIP and ZIP64 specifications, i.e. large ZIP files with more than 4GB length are supported now.

* New API supports password protection. For the moment only traditional PKWARE encryption is implemented.

* The existing ZIP library API (ZipPackage, ZipPackagerEntry, ZipInputStream, ZipOutputStream) has been changed to be a proxy to the new API.
