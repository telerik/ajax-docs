---
title: Telerik.Web.UI.ListViewTemplateDataBoundEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.ListViewTemplateDataBoundEventArgs
---

# Telerik.Web.UI.ListViewTemplateDataBoundEventArgs : Sys.EventArgs

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.ListViewTemplateDataBoundEventArgs]({%slug Telerik.Web.UI.ListViewTemplateDataBoundEventArgs%})*

## Methods

### get_name

Returns the name of the template.

#### Parameters

#### Returns

`String`

###  get_context

Returns the context object holding the data that will be used for populating the template.

#### Parameters

#### Returns

`Object`

### get_template

Returns the template function that’s used to bind the dataItem to the template text.

#### Parameters

#### Returns

`Function`

### get_html

Returns the template HTML as string.

#### Parameters

#### Returns

`String`

### set_html

Sets the HTML of the template.

#### Parameters

##### value `String`

The HTML value that the template will render.

#### Returns

`None`
