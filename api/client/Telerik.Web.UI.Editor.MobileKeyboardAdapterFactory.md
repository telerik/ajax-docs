---
title: Telerik.Web.UI.Editor.MobileKeyboardAdapterFactory
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.Editor.MobileKeyboardAdapterFactory
---

# Telerik.Web.UI.Editor.MobileKeyboardAdapterFactory

## Inheritance Hierarchy

* *[Telerik.Web.UI.Editor.MobileKeyboardAdapterFactory]({%slug Telerik.Web.UI.Editor.MobileKeyboardAdapterFactory%})*

## Methods

### static createMobileKeyboardAdapter

Returns MobileKeyboardAdapter subclass instance, depending on the provided parameters

#### Parameters

##### areaMode `Telerik.Web.UI.EditorContentAreaMode`

If areaMode value is Telerik.Web.UI.EditorContentAreaMode.Iframe, the factory creates Telerik.Web.UI.Editor.IframeModeKeyboardToggler.
If areaMode value is Telerik.Web.UI.EditorContentAreaMode.Div, the factory creates Telerik.Web.UI.Editor.DivModeKeyboardToggler.

#### Returns

`Telerik.Web.UI.Editor.MobileKeyboardAdapter`

