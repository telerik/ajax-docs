---
title: Change Input type of RadNumericTextBox from Client Side
description: See how to change the numeric type from number to currency and percent on the client
type: how-to
page_title: Change Input type of the Numeric TextBox on the client
slug: numerictextbox-change-input-type-on-the-client
position: 
tags: 
ticketid: 1432528
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadNumericTextBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
You can specify the number type on the server via the Type property. On the client this can be done via the set_numberFormat() method.


## Solution
The sample below shows how to change the RadNumericBox type on the client via the set_numberFormat method and what arguments it accepts. Click on the checkbox to change the type from number, to currency and then to percent.


````JavaScript
        <script type="text/javascript">
            function changeType(checkBox) {
                var numBox = $find("<%= RadNumericTextBox1.ClientID %>");
                var value = numBox.get_value();
                if (checkBox.checked) {
                    numBox.set_numberFormat({
                        AllowRounding: true,
                        CultureNativeDecimalSeparator: ".",
                        DecimalDigits: 2,
                        DecimalSeparator: ".",
                        GroupSeparator: ",",
                        GroupSizes: 3,
                        KeepNotRoundedValue: false,
                        KeepTrailingZerosOnFocus: false,
                        NegativePattern: "($n)",
                        NegativeSign: "-",
                        NumericPlaceHolder: "n",
                        PositivePattern: "$n"
                    })
                    numBox.clear();
                    numBox.set_value(value);
                }
                else {
                    numBox.set_numberFormat({
                        AllowRounding: true,
                        CultureNativeDecimalSeparator: ".",
                        DecimalDigits: 2,
                        DecimalSeparator: ".",
                        GroupSeparator: ",",
                        GroupSizes: 3,
                        KeepNotRoundedValue: false,
                        KeepTrailingZerosOnFocus: false,
                        NegativePattern: "-n %",
                        NegativeSign: "-",
                        NumericPlaceHolder: "n",
                        PositivePattern: "n %"
                    });
                    numBox.clear();
                    numBox.set_value(value);
                }
            }
        </script>
        <telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" Value="11">
        </telerik:RadNumericTextBox>
        <br />
        <asp:CheckBox ID="CheckBox1" runat="server" onclick="changeType(this)" Text="Change Type" />
````

