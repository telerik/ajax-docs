---
title: Telerik.Web.Apoc.XslTransformer
page_title: Telerik.Web.Apoc.XslTransformer
description: Telerik.Web.Apoc.XslTransformer
---

# Telerik.Web.Apoc.XslTransformer

Provides a static method that applies an 
                XSL stylesheet to an XML document

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Apoc.XslTransformer

## Methods

###  Transform

Applies the style sheet xslFile to the XML document 
                identified by xmlFile.

#### Remarks
This method will create a temporary filename in the system's 
                temporary directory, which is automatically deleted when the 
                returned stream is closed.

#### Parameters

#### xmlFile `System.String`

Path to an XML document

#### xslFile `System.String`

Path to an XSL stylesheet

#### Returns

`System.IO.Stream` A Stream representing a sequence of XSL:FO elements

