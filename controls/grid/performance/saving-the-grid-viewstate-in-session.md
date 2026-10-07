---
title: Save RadGrid ViewState in Session
page_title: Save RadGrid ViewState in Session
description: Learn how to store RadGrid page state in the ASP.NET Session to reduce hidden-field payloads while keeping ViewState-dependent features available.
slug: grid/performance/saving-the-grid-viewstate-in-session
components: ["grid"]
tags: grid,viewstate,session,pagestatepersister,performance
published: True
position: 2
---

# Save RadGrid ViewState in Session

When **RadGrid** uses features that require ViewState, disabling **EnableViewState** is not an option. You can instead move ASP.NET page state from the hidden field to Session to reduce the amount of state sent to the browser.

This approach requires ASP.NET Session state and increases server-side memory or session-storage usage. Evaluate session capacity, serialization, and load-balancing requirements before applying it. The ASP.NET **SessionPageStatePersister** does not store control state in Session by default, so configure `RequiresControlStateInSession=true` when the page depends on control state.

## Configure SessionPageStatePersister

Add the following field and **PageStatePersister** property to the page code-behind. The example applies to ASP.NET 3.x and 4.x.

> caption Store ASP.NET page state in Session for a RadGrid page

````C#
using System.Web.UI;

private PageStatePersister _persister;

protected override PageStatePersister PageStatePersister
{
    get
    {
        if (_persister == null)
        {
            _persister = new SessionPageStatePersister(this);
        }

        return _persister;
    }
}
````
````VB
Imports System.Web.UI

Private _persister As PageStatePersister

Protected Overrides ReadOnly Property PageStatePersister As PageStatePersister
    Get
        If _persister Is Nothing Then
            _persister = New SessionPageStatePersister(Me)
        End If

        Return _persister
    End Get
End Property
````

> caption Store control state in Session with ASP.NET page state

````XML
<system.web>
    <browserCaps>
        <case>
            RequiresControlStateInSession=true
        </case>
    </browserCaps>
</system.web>
````

For more information, see the [PageStatePersister class reference](https://learn.microsoft.com/en-us/dotnet/api/system.web.ui.pagestatepersister?view=netframework-4.8.1).

## See Also

- [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})
- [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%})
