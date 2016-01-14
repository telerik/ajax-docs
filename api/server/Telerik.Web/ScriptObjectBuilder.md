---
title: Telerik.Web.ScriptObjectBuilder
page_title: Telerik.Web.ScriptObjectBuilder
description: Telerik.Web.ScriptObjectBuilder
---

# Telerik.Web.ScriptObjectBuilder

Gets the script references for a type

## Inheritance Hierarchy

* System.Object
* Telerik.Web.ScriptObjectBuilder

## Methods

###  DescribeComponent

Describes an object to a IScriptDescriptor based on its reflected properties and methods

#### Parameters

#### instance `System.Object`

The object to be described

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The script descriptor to fill

#### urlResolver `System.Web.UI.IUrlResolutionService`

The object used to resolve urls

#### controlResolver `Telerik.Web.IControlResolver`

The object used to resolve control references

#### Returns

`System.Void` 

###  ExecuteCallbackMethod

Executes a callback capable method on a control

#### Parameters

#### control `System.Web.UI.Control`

#### callbackArgument `System.String`

#### Returns

`System.String` 

###  GetCssReferences

Gets the embedded css file references for a type

#### Parameters

#### control `System.Web.UI.Control`

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetCssReferences

Gets the css references for a type and walks the type's dependencies with circular-reference checking

#### Parameters

#### control `System.Web.UI.Control`

#### type `System.Type`

#### typeReferenceStack `System.Collections.Generic.Stack{System.Type}`

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferences

Gets the script references for a type

#### Parameters

#### type `System.Type`

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferences

Gets the script references for a type

#### Parameters

#### type `System.Type`

#### ignoreStartingTypeReferences `System.Boolean`

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferencesInternal

Gets the script references for a type and walks the type's dependencies with circular-reference checking

#### Parameters

#### type `System.Type`

#### typeReferenceStack `System.Collections.Generic.Stack{System.Type}`

#### Returns

`System.Collections.Generic.List`1` 

###  RegisterCssReferences

Register's the Css references for this control

#### Parameters

#### control `System.Web.UI.Control`

#### Returns

`System.Void` 

###  ScriptReferencesFromResourceEntries

ScriptReference objects aren't immutable.  The AJAX core adds context to them, so we cant' reuse them.
            Therefore, we track only ReferenceEntries internally and then convert them to NEW ScriptReference objects on-demand.

#### Parameters

#### entries `System.Collections.Generic.IList{Telerik.Web.ScriptObjectBuilder.ResourceEntry}`

#### Returns

`System.Collections.Generic.IEnumerable`1` 

