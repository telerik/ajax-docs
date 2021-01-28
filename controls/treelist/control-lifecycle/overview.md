---
title: Overview
page_title: Control Lifecycle Overview - RadTreeList
description: Check our Web Forms article about Overview.
slug: treelist/control-lifecycle/overview
tags: overview
published: True
position: 0
---

# Control Lifecycle Overview



Here follows a description of the RadTreeList control lifecycle which elaborates on what the control does during the different phases of the page lifecycle.

## 


| Phase | What does Telerik® UI for ASP.NET AJAX do |
| ------ | ------ |
| **Initialize** |Telerik controls for ASP.NET AJAX initializes the settings needed during the lifetime ofthe incoming Web request. See [Handling Inherited Events](https://msdn.microsoft.com/en-us/library/aa720048%28v=vs.71%29.aspx).|
| **Loadview state** |At the end of this phase, the **ViewState** property of Telerik controlsfor ASP.NET AJAX is automatically populated as described in [Maintaining Statein a Control](https://msdn.microsoft.com/en-us/library/aa720269%28v=vs.71%29.aspx).|
| **Process postback data** |Process incoming form data and update properties accordingly. See [Processing Postback Data](https://msdn.microsoft.com/en-us/library/aa719775.aspx).|
| **Load** |Perform actions common to all requests, such as setting up a database query if you are usingsimple data-binding described in [Simple vs Advanceddata-binding]({%slug treelist/data-binding/simple-vs-advanced%}) topic. At this point, server controls presented in the controls tree are created andinitialized, the state is restored, and form controls reflect client-side data. See [Handling Inherited Events](https://msdn.microsoft.com/en-us/library/aa720048%28v=vs.71%29.aspx).|
| **Send postback change notifications** |Telerik® UI for ASP.NET AJAX raises change events in response to state changes between thecurrent and previous postbacks. See [Processing Postback Data](https://msdn.microsoft.com/en-us/library/aa720471%28v=vs.71%29.aspx).|
| **Handle postback events** |Telerik® UI for ASP.NET AJAX handles the client-side event that caused the postbackand raise appropriate events on the server. See [Capturing Postback Events](https://msdn.microsoft.com/en-us/library/aa720472%28v=vs.71%29.aspx).|
| **Prerender** |Perform any updates before the output is rendered. Any changes made to the state of Telerikcontrols for ASP.NET AJAX in the prerender phase can be saved, while changes made in the renderingphase (two steps further) are lost. See [Handling Inherited Events](https://msdn.microsoft.com/en-us/library/aa720048%28v=vs.71%29.aspx).|
| **Save state** |The **ViewState** property of a control is automatically persisted to a stringobject after this stage. This string object is sent to the client and back as a hidden variable.For improving efficiency, a control can override the **SaveViewState** method tomodify the **ViewState** property. See [Maintaining State in aControl](https://msdn.microsoft.com/en-us/library/aa720269%28v=vs.71%29.aspx).|
| **Render** |Telerik® UI for ASP.NET AJAX generates output to be rendered to the client.See [Rendering an ASP.NET Server Control](https://msdn.microsoft.com/en-us/library/aa338806%28v=vs.71%29.aspx).|
| **Dispose** |Perform any final cleanup before UI for ASP.NET AJAX is torn down. Referencesto expensive resources such as database connections must be released in this phase.See [Methods in ASP.NET Server Controls](https://msdn.microsoft.com/en-us/library/aa720294%28v=vs.71%29.aspx).|
| **Unload** |Perform any final clean up before the control is torn down.|


>note Any controls created after this phase will not be persisted in the **ViewState** and this will cause them work incorrectly.
>
