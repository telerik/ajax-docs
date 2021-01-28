---
title: Telerik.Web.UI.RadFormDecorator
description: Telerik.Web.UI.RadFormDecorator
slug: Telerik.Web.UI.RadFormDecorator
---

# Telerik.Web.UI.RadFormDecorator : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadFormDecorator]({%slug Telerik.Web.UI.RadFormDecorator%})*


## Methods

###  decorate

Explicitly decorates the elements

#### Parameters

##### rootElement `Element`

##### addCssClassesToElement `String`

#### Returns

`None` 

### decorateButton

Decorates a single button element, passed as parameter

#### Parameters

##### realButton `Object`

#### Returns

`None` 

### decorateButtons

Decorates the buttons inside the passed rootElement. If the passed parameter is null then decorates all buttons on the page

#### Parameters

##### rootElement `Object`

#### Returns

`None` 

### decorateInput

Decorates a single input element, passed as parameter

#### Parameters

##### input `Object`

#### Returns

`None` 

### decorateSelect

Decorates a single select element, passed as parameter

#### Parameters

##### select `Object`

#### Returns

`None` 

### decorateSelects

Decorates the selects inside the passed rootElement. If the passed parameter is null then decorates all selects on the page

#### Parameters

##### rootElement `Object`

#### Returns

`None` 

### decorateTextboxes

Decorates the textboxes inside the passed rootElement. If the passed parameter is null then decorates all TextBoxes on the page

#### Parameters

##### rootElement `Object`

#### Returns

`None` 

### get_decoratedControls

Returns the currently decorated controls (Telerik.Web.UI.FormDecoratorDecoratedControls)

#### Parameters

#### Returns

`Telerik.Web.UI.FormDecoratorDecoratedControls` 

### get_decorationZoneID

Returns ID of the element that is set as decoration zone. Returns null if the DecorationZoneID is not set

#### Parameters

#### Returns

`String` 

### removeSelectDecoration

Removes the decoration on the HTML select element

#### Parameters

##### select `Object`

The already decorated select

#### Returns

`None` 

### set_decoratedControls

Sets what controls to be decorated

#### Parameters

##### value `Telerik.Web.UI.FormDecoratorDecoratedControls`

#### Returns

`None` 

### updateSelect

Updates the decoration on the HTML select element

#### Parameters

##### select `Object`

The already decorated select that should be updated

#### Returns

`None` 



