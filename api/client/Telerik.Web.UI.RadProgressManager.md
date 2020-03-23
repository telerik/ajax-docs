---
title: Telerik.Web.UI.RadProgressManager
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadProgressManager
slug: Telerik.Web.UI.RadProgressManager
---

# Telerik.Web.UI.RadProgressManager  : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadProgressManager]({%slug Telerik.Web.UI.RadProgressManager%})*


## Methods

###  startAsyncPolling

Explicitly starts the polling to the server.

#### Parameters

#### Returns

`None` 

### stopAsyncPolling

Explicitly stops the polling to the server.

#### Parameters

#### Returns

`None`


## Events

### clientProgressStarted 

Occurs when the RadProgressManager starts monitoring progress. 

#### Event Data

##### sender `Telerik.Web.UI.RadProgressManager`

The instance of the RadProgressManager raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### clientSubmitting

Occurs after the RadProgressManager has been fully initialized on the client-side.

#### Event Data

##### sender `Telerik.Web.UI.RadCloudUpload`

The instance of the RadProgressManager raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.  
### clientProgressUpdating

Occurs when a RadProgressArea dialog is about to update one of its progress bars.

#### Event Data

##### sender `Telerik.Web.UI.RadProgressManager`

The instance of the RadProgressManager raised the event.

##### args `Sys.EventArgs`

The event arguments.  


