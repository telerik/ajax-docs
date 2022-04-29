---
title: Overview
page_title: Server-side Programming Overview - RadStepper
description: Check our Web Forms article about Overview.
slug: stepper/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of RadStepper and create its Steps in the code-behind via the Server-Side API of the control.

## RadStepper Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadStepper class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadStepper). You can also find it in the IntelliSense in Visual Studio.

## Create a RadStepper in the Code-behind:

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var stepper = new RadStepper();
    stepper.ID = "RadStepper1";
    stepper.Skin = "Silk";
    stepper.Linear = false;
    stepper.Orientation = StepperOrientation.Vertical;
    stepper.DataBinding += new EventHandler(RadStepper1_DataBinding);
    stepper.Load += new EventHandler(RadStepper1_Load);

    PlaceHolder1.Controls.Add(stepper);
}

protected void RadStepper1_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        (sender as RadStepper).DataBind();
    }
}

protected void RadStepper1_DataBinding(object sender, EventArgs e)
{
    var stepper = (sender as RadStepper);
    stepper.Steps.AddRange(GetStepperSteps(null));
}

private IEnumerable<StepperStep> GetStepperSteps(object dataSource)
{
    var result = new List<StepperStep>();

    result.Add(new StepperStep() { Label = "Home", Icon = "home", Error = true });
    result.Add(new StepperStep() { Label = "Settings", Icon = "gear", Enabled = false });
    result.Add(new StepperStep() { Label = "Attachments", Icon = "attachment", Selected = true });
    result.Add(new StepperStep() { Label = "Save", Icon = "save" });

    return result;
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim stepper = New RadStepper()
    stepper.ID = "RadStepper1"
    stepper.Skin = "Silk"
    stepper.Linear = False
    stepper.Orientation = StepperOrientation.Vertical
    AddHandler stepper.Load, AddressOf RadStepper1_Load
    AddHandler stepper.DataBinding, AddressOf RadStepper1_DataBinding
    PlaceHolder1.Controls.Add(stepper)
End Sub

Protected Sub RadStepper1_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        TryCast(sender, RadStepper).DataBind()
    End If
End Sub

Protected Sub RadStepper1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
    Dim stepper = TryCast(sender, RadStepper)
    stepper.Steps.AddRange(GetStepperSteps(Nothing))
End Sub

Private Function GetStepperSteps(ByVal dataSource As Object) As IEnumerable(Of StepperStep)
    Dim result = New List(Of StepperStep)()
    result.Add(New StepperStep() With {
        .Label = "Home",
        .Icon = "home",
        .[Error] = True
    })
    result.Add(New StepperStep() With {
        .Label = "Settings",
        .Icon = "gear",
        .Enabled = False
    })
    result.Add(New StepperStep() With {
        .Label = "Attachments",
        .Icon = "attachment",
        .Selected = True
    })
    result.Add(New StepperStep() With {
        .Label = "Save",
        .Icon = "save"
    })
    Return result
End Function
````

# See Also

 * [Server-Side API of the RadStepper class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadStepper)
 

