---
title: Backward Compatibility
page_title: Backward Compatibility | RadZipLibrary for ASP.NET AJAX Documentation
description: Backward Compatibility
slug: ziplibrary/changes-and-backwards-compatibility-/backward-compatibility
tags: backward,compatibility
published: True
position: 1
---

# Backward Compatibility



This article lists the breaking changes and how they can be fixed when upgrading from a specific version of the controls to the next one.

## What's Different in 2015 Q1

### Changed

The **Telerik.Windows.Zip.ZipPackage** class is obsolete.

### What to do now

Use the **Telerik.Windows.Zip.ZipArchive** class instead.

### Changed

The **Telerik.Windows.Zip.ZipPackageEntry** class is obsolete.

### What to do now

Use the **Telerik.Windows.Zip.ZipArchiveEntry** class instead.

### Changed

The **Telerik.Windows.Zip.ZipOutputStream** and **Telerik.Windows.Zip.ZipInputStream** classes are obsolete.

### What to do now

Use the **Telerik.Windows.Zip.CompressedStream** class instead.

## What's Different in 2014 Q2 - 2014.2.618

### Changed

The **Telerik.Windows.Zip.LZMA.LzmaEncoder** class is removed as it is intended for internal use only.

### Changed

The **Telerik.Windows.Zip.ZipInputStream(System.IO.Stream, System.Boolean)** constructor is removed.

### What to do now

Use the **Telerik.Windows.Zip.ZipInputStream(System.IO.Stream)** constructor instead.

### Changed

The **System.Void Telerik.Windows.Zip.ZipPackage::Add(System.String[])** method is removed.

### What to do now

You can use the **System.Void Telerik.Windows.Zip.ZipPackage::Add(System.Collections.Generic.IEnumerable<string>)**method instead.

### Changed

The **System.Void Telerik.Windows.Zip.ZipPackage::Add(System.String[])** method is removed.

### What to do now

You can use the **System.Void Telerik.Windows.Zip.ZipPackage::Add(System.Collections.Generic.IEnumerable<string>)**method instead.

### Changed

The **System.Void Telerik.Windows.Zip.ZipPackage::AddStream(System.String, System.IO.Stream)** method is removed.

### What to do now

You can use the **System.Void Telerik.Windows.Zip.ZipPackage::AddStream(System.IO.Stream, System.String)** method instead.

### Changed

The **System.Void Telerik.Windows.Zip.ZipPackage::AddStream(Telerik.Windows.Zip.ZipCompression, System.String, System.IO.Stream,System.DateTime)** method is removed.

### What to do now

You can use the **System.Void Telerik.Windows.Zip.ZipPackage::AddStream(System.IO.Stream, System.String,Telerik.Windows.Zip.ZipCompression, System.DateTime)** method instead.

### Changed

The **Telerik.Windows.Zip.ZipPackage Telerik.Windows.Zip.ZipPackage::Open(System.IO.Stream, System.IO.FileAccess)** methodis removed.

### What to do now

You can use the **Telerik.Windows.Zip.ZipPackage Telerik.Windows.Zip.ZipPackage::Open(System.IO.Stream)** method instead.
