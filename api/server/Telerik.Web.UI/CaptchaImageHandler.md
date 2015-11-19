---
title: Telerik.Web.UI.CaptchaImageHandler
page_title: Telerik.Web.UI.CaptchaImageHandler
description: Telerik.Web.UI.CaptchaImageHandler
---

# Telerik.Web.UI.CaptchaImageHandler

Captcha image stream HttpModule. Retrieves RadCaptcha objects from cache (or session), 
            renders them to memory, and streams them to the browser.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.CaptchaImageHandler : IHttpHandler

## Properties

###  IsReusable `Boolean`

Gets a value indicating whether another request can use the  instance.

## Methods

###  ProcessRequest

Enables processing of HTTP Web requests by a custom HttpHandler that implements the  interface.

#### Parameters

#### context `System.Web.HttpContext`

An  object that provides references to the intrinsic server objects (for example, Request, Response, Session, and Server) used to service HTTP requests.

#### Returns

`System.Void` 

