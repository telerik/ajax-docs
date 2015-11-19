---
title: Telerik.Web.Apoc.ApocDriver
page_title: Telerik.Web.Apoc.ApocDriver
description: Telerik.Web.Apoc.ApocDriver
---

# Telerik.Web.Apoc.ApocDriver

ApocDriver provides the client with a single interface to invoking Apoc XSL-FO.

#### Remarks
The examples belows demonstrate several ways of invoking Apoc XSL-FO.  The 
                methodology is the same regardless of how Apoc is embedded in your 
                system (ASP.NET, WinForm, Web Service, etc).

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Apoc.ApocDriver : IDriver

## Properties

###  CloseOnExit `Boolean`

Determines if the output stream should be automatically closed 
                upon completion of the render process.

###  ActiveDriver `ApocDriver`

Gets or sets the active .

###  Renderer `RendererEngine`

Determines which rendering engine to use.

#### Remarks
The default value is 
                .

###  BaseDirectory `DirectoryInfo`

Gets or sets the base directory used to locate external 
                resourcs such as images.

###  ImageHandler `ApocImageHandler`

Gets or sets the handler that is responsible for loading the image
                data for external graphics.

#### Remarks
If null is returned from the image handler, then Apoc will perform 
                normal processing.

###  Timeout `Int32`

Gets or sets the time in milliseconds until an HTTP image request 
                times out.

#### Remarks
The default value is 100000 milliseconds.

###  Credentials `CredentialCache`

Gets a reference to a  object 
                that manages credentials for multiple Internet resources.

#### Remarks
The purpose of this property is to associate a set of credentials against 
                an Internet resource.  These credentials are then used by Apoc when 
                fetching images from one of the listed resources.

###  ProductKey `String`

Write only property that can be used to bypass licenses.licx
                and set a product key directly.

###  InternalProductKey `String`

Returns the product key.

###  Options `IRendererOptions`

Options that are passed to the rendering engine.

#### Remarks
An instance of 
                is typically passed to this property.

###  IsEvaluation `Boolean`

True if the current license is an evaluation license.

## Methods

###  Make

Constructs a new ApocDriver and registers the newly created 
                driver as the active driver.

#### Returns

`Telerik.Web.Apoc.ApocDriver` An instance of ApocDriver

###  Render

Executes the conversion reading the source tree from the supplied 
                XmlDocument, converting it to a format dictated by the renderer 
                and writing it to the supplied output stream.

#### Remarks
Any exceptions that occur during the render process are arranged 
                into three categories: information, warning and error.  You may 
                intercept any or all of theses exceptional states by registering 
                an event listener.  See  for an 
                example of registering an event listener.  If there are no 
                registered listeners, the exceptions are dumped to standard out - 
                except for the error event which is wrapped in a 
                .

#### Parameters

#### doc `System.Xml.XmlDocument`

An in-memory representation of an XML document (DOM).

#### outputStream `System.IO.Stream`

Any subclass of the Stream class.

#### Returns

`System.Void` 

###  Render

Executes the conversion reading the source tree from the input 
                reader, converting it to a format dictated by the renderer and 
                writing it to the supplied output stream.

#### Parameters

#### inputReader `System.IO.TextReader`

A character orientated stream

#### outputStream `System.IO.Stream`

Any subclass of the Stream class

#### Returns

`System.Void` 

###  Render

Executes the conversion reading the source tree from the file 
                inputFile, converting it to a format dictated by the 
                renderer and writing it to the file identified by outputFile.

#### Remarks
If the file outputFile does not exist, it will created 
                otherwise it will be overwritten.  Creating a file may 
                generate a variety of exceptions.  See 
                for a complete list.

#### Parameters

#### inputFile `System.String`

Path to an XSL-FO file

#### outputFile `System.String`

Path to a file

#### Returns

`System.Void` 

###  Render

Executes the conversion reading the source tree from the file 
                inputFile, converting it to a format dictated by the 
                renderer and writing it to the supplied output stream.

#### Parameters

#### inputFile `System.String`

Path to an XSL-FO file

#### outputStream `System.IO.Stream`

Any subclass of the Stream class, e.g. FileStream

#### Returns

`System.Void` 

###  Render

Executes the conversion reading the source tree from the input 
                stream, converting it to a format dictated by the render and 
                writing it to the supplied output stream.

#### Parameters

#### inputStream `System.IO.Stream`

Any subclass of the Stream class, e.g. FileStream

#### outputStream `System.IO.Stream`

Any subclass of the Stream class, e.g. FileStream

#### Returns

`System.Void` 

###  Render

Executes the conversion reading the source tree from the input 
                reader, converting it to a format dictated by the render and 
                writing it to the supplied output stream.

#### Remarks
The evaluation copy of this class will output an evaluation
                banner to standard out

#### Parameters

#### inputReader `System.Xml.XmlReader`

Reader that provides fast, non-cached, forward-only access 
                to XML data

#### outputStream `System.IO.Stream`

Any subclass of the Stream class, e.g. FileStream

#### Returns

`System.Void` 

###  GetString

Retrieves the string resource with the specific key using the 
                default culture

#### Parameters

#### key `System.String`

A resource key

#### Returns

`System.String` The resource string identified by key from the 
                current culture's setting

###  FireApocError

Sends an 'error' event to all registered listeners.

#### Remarks
If there are no listeners, a  is 
                thrown immediately halting execution

#### Parameters

#### message `System.String`

Any error message, which may be null

#### Returns

`System.Void` 

###  FireApocWarning

Sends a 'warning' event to all registered listeners

#### Remarks
If there are no listeners, message is written out 
                to the console instead

#### Parameters

#### message `System.String`

Any warning message, which may be null

#### Returns

`System.Void` 

###  FireApocInfo

Sends an 'info' event to all registered lisetners

#### Remarks
If there are no listeners, message is written out 
                to the console instead

#### Parameters

#### message `System.String`

An info message, which may be null

#### Returns

`System.Void` 

###  CreateXmlTextReader

Utility method that creates an 
                for the supplied file

#### Remarks
The returned  interprets all whitespace

#### Returns

`System.Xml.XmlReader` 

###  CreateXmlTextReader

Utility method that creates an 
                for the supplied file

#### Remarks
The returned  interprets all whitespace

#### Returns

`System.Xml.XmlReader` 

###  CreateXmlTextReader

Utility method that creates an 
                for the supplied file

#### Remarks
The returned  interprets all whitespace

#### Returns

`System.Xml.XmlReader` 

