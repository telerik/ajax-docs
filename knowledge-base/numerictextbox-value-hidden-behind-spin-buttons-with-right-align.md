---
title: Value hidden behind spin buttons with right align in RadNumericTextBox
description: Value hidden behind spin buttons with right align in RadNumericTextBox. Check it now!
type: how-to
page_title: Value hidden behind spin buttons with right align in RadNumericTextBox
slug: numerictextbox-value-hidden-behind-spin-buttons-with-right-align
res_type: kb
---

## Problem

When the spin buttons are enabled (ShowSpinButtons="true"), and the text is moved to the right (EnabledStyle-HorizontalAlign="Right" which is also available for the other states) instead of the default left alignment, the value in RadNumericTextBox is hidden behind the arrow buttons.

This also happens in RTL scenarios because the RTL direction aligns the text to the right as well.

Sample to reproduce the issue:

````ASPX
<telerik:RadNumericTextBox ID="RadNumericTextBox1"
    runat="server"
    MinValue="0" MaxValue="100"
    Value="12.34"
    WrapperCssClass="floatedButtons"
    ShowSpinButtons="true"
    NumberFormat-AllowRounding="False"
    ReadOnlyStyle-HorizontalAlign="Right"
    NegativeStyle-HorizontalAlign="Right"
    InvalidStyle-HorizontalAlign="Right"
    HoveredStyle-HorizontalAlign="Right"
    FocusedStyle-HorizontalAlign="Right"
    EnabledStyle-HorizontalAlign="Right"
    EmptyMessageStyle-HorizontalAlign="Right"
    DisabledStyle-HorizontalAlign="Right" />
````

## Description

The HorizontalAlign property translates to a text-align: right CSS rule for the input. The input is partly behind the spin buttons that are adjacent in the HTML to it. In most cases there is no issue with that, because the text aligns to the left by default.

## Solution

Add padding to the input so the text in it cannot reach under the buttons.

````CSS
.RadInput.floatedButtons .riTextBox {
    padding-right: 42px;
}
````


