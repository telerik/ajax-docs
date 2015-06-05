---
title: Telerik RadGrid lifecycle
page_title: Telerik RadGrid lifecycle | RadGrid for ASP.NET AJAX Documentation
description: Telerik RadGrid lifecycle
slug: grid/control-lifecycle/telerik-radgrid-lifecycle
tags: telerik,radgrid,lifecycle
published: True
position: 0
---

# Telerik RadGrid lifecycle



## 


>caption  

|  **Phase**  |  **What does Telerik RadGrid do**  |
| ------ | ------ |
| **Initialize** |Telerik RadGrid initializes the settings needed during the lifetime of the incoming Web request. See [Handling Inherited Events](http://msdn.microsoft.com/en-us/library/aa720048(v=vs.71).aspx).|
| **Loadview state** |At the end of this phase, the **ViewState** property of Telerik RadGrid is automatically populated as described in [Maintaining State in a Control](http://msdn.microsoft.com/en-us/library/aa720269(v=vs.71).aspx).|
| **Process postbackdata** |Process incoming form data and update properties accordingly. See [Processing Postback Data](http://msdn.microsoft.com/en-us/library/aa719775.aspx).|
| **Load** |Perform actions common to all requests, such as setting up a database query if you are using simple databinding described in[ Simple Data-binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding%})topic. At this point, server controls presented in the controls tree are created and initialized, the state is restored, and form controls reflect client-side data. See [Handling Inherited Events](http://msdn.microsoft.com/en-us/library/aa720048(v=vs.71).aspx).|
| **Send postback changenotifications** |Telerik RadGrid raises change events in response to state changes between the current and previous postbacks. See [Processing Postback Data](http://msdn.microsoft.com/en-us/library/aa719775.aspx).|
| **Handle postbackevents** |Telerik RadGrid handles the client-side event that caused the postback and raise appropriate events on the server. See [Capturing Postback Events](http://msdn.microsoft.com/en-us/library/aa720472(v=vs.71).aspx).|
| **Prerender** |Perform any updates before the output is rendered. Any changes made to the state of Telerik RadGrid in the prerender phase can be saved, while changes made in the rendering phase (two steps further) are lost. See [Handling Inherited Events](hhttp://msdn.microsoft.com/en-us/library/aa720048(v=vs.71).aspx).|
| **Save state** |The **ViewState** property of a control is automatically persisted to a string object after this stage. This string object is sent to the client and back as a hidden variable. For improving efficiency, a control can override the **SaveViewState** method to modify the **ViewState** property. See [Maintaining State in a Control](http://msdn.microsoft.com/en-us/library/aa720269(v=vs.71).aspx).|
| **Render** |Telerik RadGrid generates output to be rendered to the client. See [Rendering an ASP.NET Server Control](http://msdn.microsoft.com/en-us/library/aa338806(v=vs.71).aspx).|
| **Dispose** |Perform any final cleanup before Telerik RadGrid is torn down. References to expensive resources such as database connections must be released in this phase. See [Methods in ASP.NET Server Controls](http://msdn.microsoft.com/en-us/library/aa720294(v=vs.71).aspx).|
| **Unload** |Perform any final cleanup before the control is torn down.|
