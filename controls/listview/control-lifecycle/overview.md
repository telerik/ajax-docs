---
title: Overview
page_title: Control Lifecycle Overview | RadListView for ASP.NET AJAX Documentation
description: Overview
slug: listview/control-lifecycle/overview
tags: overview
published: True
position: 0
---

# Control Lifecycle Overview



## 


| Phase | What does Telerik UI for ASP.NET AJAX do |
| ------ | ------ |
| **Initialize** |Telerik UI for ASP.NET AJAX initializes the settings needed during the lifetime of the incoming Web request. See [Handling Inherited Events](http://msdn.microsoft.com/en-us/library/aa720048).|
| **Loadview state** |At the end of this phase, the **ViewState** property of Telerik controls for ASP.NET AJAX is automatically populated as described in [Maintaining State in a Control](http://msdn.microsoft.com/en-us/library/aa720269).|
| **Process postback data** |Process incoming form data and update properties accordingly. See [Processing Postback Data](http://msdn.microsoft.com/en-us/library/aa719775.aspx).|
| **Load** |Perform actions common to all requests, such as setting up a database query if you are using simple databinding described in [Simple Data-binding]({%slug listview/data-binding/server-side/simple-vs-advanced%})topic. At this point, server controls presented in the controls tree are created and initialized, the state is restored, and form controls reflect client-side data. See [Handling Inherited Events](http://msdn.microsoft.com/en-us/library/aa720048).|
| **Send postback change notifications** |Telerik controls for ASP.NET AJAX raises change events in response to state changes between the current and previous postbacks. See [Processing Postback Data](http://msdn.microsoft.com/en-us/library/aa720471).|
| **Handle postback events** |Telerik controls for ASP.NET AJAX handles the client-side event that caused the postback and raise appropriate events on the server. See [Capturing Postback Events](http://msdn.microsoft.com/en-us/library/aa720472).|
| **Prerender** |Perform any updates before the output is rendered. Any changes made to the state of UI controls for ASP.NET AJAX in the prerender phase can be saved, while changes made in the rendering phase (two steps further) are lost. See [Handling Inherited Events](http://msdn.microsoft.com/en-us/library/aa720048).|
| **Save state** |The **ViewState** property of a control is automatically persisted to a string object after this stage. This string object is sent to the client and back as a hidden variable. For improving efficiency, a control can override the **SaveViewState** method to modify the **ViewState** property. See [Maintaining State in a Control](http://msdn.microsoft.com/en-us/library/aa720269).<br/>Note: Any controls created after this phase will not be persisted in the **ViewState** and this will cause them work incorrectly.|
| **Render** |UI controls for ASP.NET AJAX generates output to be rendered to the client. See [Rendering an ASP.NET Server Control](http://msdn.microsoft.com/en-us/library/aa338806).|
| **Dispose** |Perform any final cleanup before UI for ASP.NET AJAX is torn down. References to expensive resources such as database connections must be released in this phase. See [Methods in ASP.NET AJAX Server Controls](http://msdn.microsoft.com/en-us/library/aa720294).|
| **Unload** |Perform any final cleanup before the control is torn down.|
