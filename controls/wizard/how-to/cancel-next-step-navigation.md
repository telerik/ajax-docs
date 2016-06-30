---
title: Cancel Next Step Navigation
page_title: Cancel Next Step Navigation | RadWizard for ASP.NET AJAX Documentation
description: Cancel Next Step Navigation
slug: wizard/how-to/cancel-next-step-navigation
tags: cancel,next,step,navigation
published: True
position: 0
---

# Cancel Next Step Navigation



The navigation to the next WizardStep can be cancelled server-side by setting the current step as active in the **RadWizard**'s NextButtonClick event handler:

````C#
protected void RadWizard1_NextButtonClick(object sender, Telerik.Web.UI.WizardEventArgs e)
{
    if (false)
    {
        e.CurrentStep.Active = true;
    }
}
````

