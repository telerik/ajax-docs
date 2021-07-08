---
title: Value is null after changing number format
description: Value is null after changing number format. Check it now!
type: how-to
page_title: Value is null after changing number format
slug: numerictextbox-value-is-null-after-changing-number-format
res_type: kb
---


## Problem

The server `Value` of the NumericTextbox is `null` (`Nothing`) after changing decimal formats on the client-side.

## Description

Happens only with certain cultures (like Dutch) where the decimal separator is a comma and not a dot, and the group (thousands) separator is a dot and not a comma. For example, the value one thousand (1000) looks like "1.000,00" in such cultures.

The decimal formats should not be changed on the client if the value is to be consumed on the server, because the server will expect the old format and this can cause issues.

Another problem is that this issue manifests only when running the application normally, in debug mode (F5), it does not manifest, so it is impossible to debug.

## Solution

If you will be using the value on the server, you should perform a postback and change the server properties to the desired format.

A workaround is to fetch the new input from the POST data and parse it through the current culture.

>note To update the display value, you should use only the `set_textBoxValue()` method. The `set_value()` method expects a number and parsing happens with default (en-US) culture, so a string where the decimal and group separators are switched will result in wrong values. For example, the `1000` value above would get parsed a `1`.
>

### Examples

The following code shows how to reproduce the problem in its simplest form, and how to work around it if necessary.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<script type="text/javascript">
    function ChangeResolution(s, e) {
        //this hardcodes a change from 2 decimal digits to 4, and assumes the value is 1000
        //for brevity, hardcoded values are used so the issue can be showcased. See more on changing formats here https://www.telerik.com/support/kb/aspnet-ajax/numerictextbox/details/change-numerictextbox-number-format-dynamically
        $find('RadNumericTextBox2').get_numberFormat().DecimalDigits = 4;
        $find('RadNumericTextBox2').set_textBoxValue("1.000,0000");
    }
</script>
<telerik:RadButton Text="click to change the format, then click the other button" OnClientClicked="ChangeResolution" AutoPostBack="false" ID="testBtn" runat="server" />
<br />
<telerik:RadButton ID="RadButton1" runat="server" Text="postback"></telerik:RadButton>
<br />
<telerik:RadNumericTextBox ID="RadNumericTextBox2" runat="server" NumberFormat-DecimalDigits="2" Value="1000"></telerik:RadNumericTextBox>
<br />
<asp:Label ID="lblValue" Text="the textbox value (1000) or the error will appear here" runat="server"></asp:Label>
````


````C#
private void _Default_Load(object sender, EventArgs e)
{
    // set Dutch culture where this manifests
    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("nl-NL");
    Thread.CurrentThread.CurrentUICulture = new CultureInfo("nl-NL");

    RadNumericTextBox2.Culture = Thread.CurrentThread.CurrentUICulture;

    // This is the workaround, uncomment for fix
    //if (Page.IsPostBack)
    //{
    //    RadNumericTextBox2.Value = double.Parse(Request(RadNumericTextBox2.UniqueID), Thread.CurrentThread.CurrentUICulture);
    //}
}

private void RadButton1_Click(object sender, EventArgs e)
{
    try
    {
        decimal val = System.Convert.ToDecimal(this.RadNumericTextBox2.Value);
        this.lblValue.Text = val;
    }
    catch (Exception ex)
    {
        this.lblValue.Text = ex.ToString();
    }
}
````
````VB
Private Sub _Default_Load(sender As Object, e As EventArgs) Handles Me.Load
    'set Dutch culture where this manifests
    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("nl-NL")
    Thread.CurrentThread.CurrentUICulture = New CultureInfo("nl-NL")
 
    RadNumericTextBox2.Culture = Thread.CurrentThread.CurrentUICulture
 
    'This is the workaround, uncomment for fix
    'If Page.IsPostBack Then
    '    RadNumericTextBox2.Value = Double.Parse(Request(RadNumericTextBox2.UniqueID), Thread.CurrentThread.CurrentUICulture)
    'End If
End Sub
 
Private Sub RadButton1_Click(sender As Object, e As EventArgs) Handles RadButton1.Click
    Try
        Dim val As Decimal = CDec(Me.RadNumericTextBox2.Value)
        Me.lblValue.Text = val
    Catch ex As Exception
        Me.lblValue.Text = ex.ToString()
    End Try
End Sub
````










