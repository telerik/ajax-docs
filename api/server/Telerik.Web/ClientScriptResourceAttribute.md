---
title: Telerik.Web.ClientScriptResourceAttribute
page_title: Telerik.Web.ClientScriptResourceAttribute
description: Telerik.Web.ClientScriptResourceAttribute
---

# Telerik.Web.ClientScriptResourceAttribute

Associates a client script resource with an extender class.
            This allows the extender to find it's associated script and what
            names and prefixes with which to reference it.

## Inheritance Hierarchy

* System.Object
* System.Attribute
* Telerik.Web.ClientScriptResourceAttribute

## Properties

###  ComponentType `String`

The component type name to use when referencing the component class in XML. If
            the XML reference is "<myns:Foo/>", the component type is "Foo".

###  ResourcePath `String`

This is the path to the resource in the assembly.  This is usually defined as
            [default namespace].[Folder name].FileName.  In a project called "ControlLibrary1", a
            JScript file called Foo.js in the "Script" subdirectory would be named "ControlLibrary1.Script.Foo.js" by default.

