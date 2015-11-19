---
title: Telerik.Web.UI.RadBinaryImageHandler
page_title: Telerik.Web.UI.RadBinaryImageHandler
description: Telerik.Web.UI.RadBinaryImageHandler
---

# Telerik.Web.UI.RadBinaryImageHandler

Represents an object which can server Telerik.Web.UI.RadBinaryImage 's content

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadBinaryImageHandler : IHttpHandler

## Properties

###  ImagePersister `IRadImagePersister`

Gets the  instance which is responsible for
            saving and loading image's data

#### Remarks
This should be an instance of same type as 's
             ImagePersister

## Methods

###  ProcessRequest

Enables processing of HTTP Web requests by a custom HttpHandler that implements
            the  interface.

#### Parameters

#### context `System.Web.HttpContext`

An  object that
            provides references to the intrinsic server objects (for example, Request,
            Response, Session, and Server) used to service HTTP requests.

#### Returns

`System.Void` 

