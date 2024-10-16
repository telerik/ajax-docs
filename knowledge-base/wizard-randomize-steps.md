---
title: Randomizing the Order of Steps in RadWizard for ASP.NET AJAX
description: Learn how to dynamically change the order of steps in the RadWizard control for ASP.NET AJAX, allowing for a randomized step sequence on page load.
type: how-to
page_title: Randomize Step Order in RadWizard for ASP.NET AJAX
slug: wizard-randomize-steps
tags: radwizard, asp.net ajax, order, steps, randomize
res_type: kb
ticketid: 1667463
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadWizard for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I have a RadWizard control with multiple steps defined in the markup. I want to randomize the order of these steps every time the page is loaded. How can I achieve this dynamic reordering of steps in the RadWizard?

This KB article also answers the following questions:

- How do I shuffle RadWizard steps dynamically?
- Can the sequence of RadWizard steps be randomized on each page load?
- What method is used to change the order of steps in RadWizard?

## Solution

To randomize the order of steps in a [RadWizard](https://docs.telerik.com/devtools/aspnet-ajax/controls/wizard/overview) control from the code-behind, follow these steps:

1. Retrieve the collection of `RadWizardStep` objects from the RadWizard.
2. Shuffle these steps.
3. Clear the existing steps from the RadWizard.
4. Add the shuffled steps back to the RadWizard.

Below is a code example that demonstrates the entire process, including the markup for defining the RadWizard steps and the server-side code for randomizing their order:

````ASP.NET
<telerik:RadWizard runat="server" ID="RadWizard1">
    <WizardSteps>
        <!-- Steps are defined here -->
    </WizardSteps>
</telerik:RadWizard>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RandomizeWizardSteps();
    }
}

private void RandomizeWizardSteps()
{
    List<RadWizardStep> steps = RadWizard1.WizardSteps.Cast<RadWizardStep>().ToList();
    List<RadWizardStep> shuffledSteps = steps.OrderBy(step => Guid.NewGuid()).ToList();

    RadWizard1.WizardSteps.Clear();
    foreach (RadWizardStep step in shuffledSteps)
    {
        RadWizard1.WizardSteps.Add(step);
    }
}
````

In this solution:

- `RadWizard1` is the ID of your RadWizard control.
- The `RandomizeWizardSteps` method retrieves the steps, shuffles them using LINQ's `OrderBy` with a new `GUID` for randomness, clears the existing steps, and adds the shuffled steps back to the RadWizard.

Implementing this method ensures that each time the page is loaded, the steps in the RadWizard are displayed in a random order.

## See Also

- [RadWizard Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/wizard/overview)
- [LINQ OrderBy Method](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby)
- [Guid.NewGuid Method](https://docs.microsoft.com/en-us/dotnet/api/system.guid.newguid)
