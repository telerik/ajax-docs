---
title: Telerik.Web.UI.RadXmlHttpPanel
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadXmlHttpPanel
slug: Telerik.Web.UI.RadXmlHttpPanel
---

# Telerik.Web.UI.RadXmlHttpPanel  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadXmlHttpPanel]({%slug Telerik.Web.UI.RadXmlHttpPanel%})*


## Methods

###  set_value

passes a value to the RadXmlHttpPanel depending on which content is loaded inside the RadXmlHttpPanel and initiates a partial page request.

#### Parameters

#### Returns

`None` 

### set_html

sets a custom HTML content to the RadXmlHttpPanel.

#### Parameters

#### Returns

`None` 


## Events

### responseEnded

The responseEnded occurs immediately after the data (content) is pasted into the RadXmlHttpPanel. 
This client-side event is subsequent to the responseEnding event.

#### Event Data

##### sender `Telerik.Web.UI.RadXmlHttpPanel`

The instance of the RadXmlHttpPanel raised the event.

##### args `Sys.EventArgs`

Empty event arguments. 

### responseEnding

The responseEnding occurs before the data (content) is pasted into the RadXmlHttpPanel, 
after a partial update request has been initiated by the RadXmlHttpPanel set_value method. 
The responseEnding event replaces the existing responseEnd client-side event 

#### Event Data

##### sender `Telerik.Web.UI.RadXmlHttpPanel`

The instance of the RadXmlHttpPanel raised the event.

##### args `Telerik.Web.UI.XmlHttpPanelEventArgs`

The event arguments. 

### responseError

The responseError occurs in the cases when an error (WebService or Callback error) occurs when the RadXmlHttpPanel tries to load certain content.

#### Event Data

##### sender `Telerik.Web.UI.RadXmlHttpPanel`

The instance of the RadXmlHttpPanel raised the event.

##### args `Telerik.Web.UI.XmlHttpPanelErrorEventArgs`

The event arguments. 

