---
title: Control Lifecycle Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: treelist/control-lifecycle/overview
tags: overview
published: True
position: 0
---

# Control Lifecycle Overview



Here follows a description of the RadTreeList control lifecycle which elaborates on what the control does during the different phases of the page lifecycle.

## 


| Phase | What does Telerik UI for ASP.NET AJAX do |
| ------ | ------ |
| __Initialize__ |Telerik controls for ASP.NET AJAX initializes the settings needed during the lifetime ofthe incoming Web request. See[Handling Inherited Events](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconeventsinheritedfromcontrol.asp).|
| __Loadview state__ |At the end of this phase, the __ViewState__ property of Telerik controlsfor ASP.NET AJAX is automatically populated as described in[Maintaining Statein a Control](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconmantainingstateincontrol.asp).|
| __Process postback data__ |Process incoming form data and update properties accordingly. See[Processing Postback Data](http://msdn.microsoft.com/en-us/library/aa719775.aspx).|
| __Load__ |Perform actions common to all requests, such as setting up a database query if you are usingsimple data-binding described in[Simple vs Advanceddata-binding]({%slug treelist/data-binding/simple-vs-advanced%})topic. At this point, server controls presented in the controls tree are created andinitialized, the state is restored, and form controls reflect client-side data. See[Handling Inherited Events](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconeventsinheritedfromcontrol.asp).|
| __Send postback change notifications__ |Telerik UI for ASP.NET AJAX raises change events in response to state changes between thecurrent and previous postbacks. See[Processing Postback Data](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconreceivingpostbackdatachangednotifications.asp).|
| __Handle postback events__ |Telerik UI for ASP.NET AJAX handles the client-side event that caused the postbackand raise appropriate events on the server. See[Capturing Postback Events](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconreceivingpostbackeventnotifications.asp).|
| __Prerender__ |Perform any updates before the output is rendered. Any changes made to the state of Telerikcontrols for ASP.NET AJAX in the prerender phase can be saved, while changes made in the renderingphase (two steps further) are lost. See[Handling Inherited Events](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconeventsinheritedfromcontrol.asp).|
| __Save state__ |The __ViewState__ property of a control is automatically persisted to a stringobject after this stage. This string object is sent to the client and back as a hidden variable.For improving efficiency, a control can override the __SaveViewState__ method tomodify the __ViewState__ property. See[Maintaining State in aControl](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconmantainingstateincontrol.asp).

>note Any controls created after this phase will not be persisted in the __ViewState__ and this will cause them work incorrectly.
>
|
| __Render__ |Telerik UI for ASP.NET AJAX generates output to be rendered to the client.See[Rendering an ASP.NET Server Control](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconrenderingwebformscontrol.asp).|
| __Dispose__ |Perform any final cleanup before UI for ASP.NET AJAX is torn down. Referencesto expensive resources such as database connections must be released in this phase.See[Methods in ASP.NET Server Controls](http://msdn.microsoft.com/library/en-us/cpguide/html/cpconmethodsinwebformscontrols.asp).|
| __Unload__ |Perform any final clean up before the control is torn down.|
