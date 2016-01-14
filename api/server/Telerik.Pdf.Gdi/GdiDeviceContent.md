---
title: Telerik.Pdf.Gdi.GdiDeviceContent
page_title: Telerik.Pdf.Gdi.GdiDeviceContent
description: Telerik.Pdf.Gdi.GdiDeviceContent
---

# Telerik.Pdf.Gdi.GdiDeviceContent

A very lightweight wrapper around a Win32 device context

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.GdiDeviceContent : IDisposable

## Properties

###  Handle `IntPtr`

Returns a handle to the underlying device context

## Methods

###  Dispose

Delete the device context freeing the associated memory.

#### Returns

`System.Void` 

###  Finalize

Invokes .

#### Returns

`System.Void` 

###  GetCurrentObject

Gets a handle to an object of the specified type that has been 
                selected into this device context.

#### Returns

`System.IntPtr` 

###  SelectFont

Selects a font into a device context (DC). The new object 
                replaces the previous object of the same type.

#### Parameters

#### font `Telerik.Pdf.Gdi.GdiFont`

Handle to object.

#### Returns

`System.IntPtr` A handle to the object being replaced.

