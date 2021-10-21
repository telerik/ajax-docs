---
title: Clone or create Telerik controls on the client with JavaScript
description: Clone or create Telerik controls on the client with JavaScript. Check it now!
type: how-to
page_title: Clone or create Telerik controls on the client with JavaScript
slug: common-clone-or-create-telerik-controls-on-the-client-with-javascript
res_type: kb
---


## How to Clone/Create Telerik Controls on the Client

Short answer: it is not recommended and it will not work most of the cases. Continue reading to understand why and possible alternatives.

## Description

All Telerik UI for ASP.NET AJAX controls must be created on the server. Ultimately, they are WebForms server controls that are based on the MS AJAX framework and as such implement the IScriptControl interface.   
  
 Also, the client-side properties needed for the client-side object depend on the server-side properties and are serialized by the .NET Framework on the server. Usually, the server-side properties reside in the ViewState.

As the control tree loads the controls on the server-side, that would mean even if the control is "successfully" created on the client-side, the server would not be aware of that. The result would be issues when loading the ViewState, controls state and the control tree of the page.  
  
## Solutions

1. Use the [Kendo UI widgets](https://demos.telerik.com/kendo-ui/) which are pure client-side objects, and are designed to be created and work on the client.

1. Create the server controls on the server, but set their Visible property to false. Then, when needed, create a partial or full postback to set it to true.  
  
1. Have a placeholder control and via a partial or full postback create the controls dynamically on the server-side. The needed information from the client can be sent as arguments to the server side.

