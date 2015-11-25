---
title: Telerik.Web.UI.WebResourceSession
page_title: Telerik.Web.UI.WebResourceSession
description: Telerik.Web.UI.WebResourceSession
---

# Telerik.Web.UI.WebResourceSession

This class should be used in the HTTP Handler declaration for Telerik.Web.UI.WebResource if you need access to the Session object

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.TemplateControl
* System.Web.UI.Page
* Telerik.Web.UI.WebResource
* Telerik.Web.UI.WebResourceSession : IRequiresSessionState

## Methods

###  IsIIS7Request

Determines whether [is II s7 request] [the specified context].

#### Parameters

#### context `System.Web.HttpContext`

The context.

#### Returns

`System.Boolean` 

###  ProcessRequest

Sets the intrinsics of the , such
            as the , ,
            , and 
            properties.

#### Parameters

#### context `System.Web.HttpContext`

An  object that provides
            references to the intrinsic server objects (for example, ,
            , and )
            used to service HTTP requests.

#### Returns

`System.Void` 

