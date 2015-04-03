---
title: RadInputManager Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: input/radinputmanager/overview
tags: overview
published: True
position: 1
---

# RadInputManager Overview



## 

Broadly speaking, there are two groups of controls which are extended using the RadInputManager. The first are controls which are located directly on the page, such as a normal text box somewhere on the form. The second are text boxes located in another control- for example a text box nested in a repeater.

Additionally, within the RadInputManager, there are four types of settings which could be added:

1. telerik:DateInputSetting – the targeted text box will be accepting input in a date format

1. telerik:NumericTextBoxSetting – the targeted textbox will be accepting numeric input

1. telerik:RegExpTextBoxSetting – the targeted text box will be accepting characters corresponding to a specified regular expression

1. telerik:TextBoxSetting – the targeted text box will exhibit behavior like a normal RadTextBox

1. telerik:RadMaskedTextBoxSetting –	the targeted text box will exhibit behavior like a normal RadMaskedTextBox

Each one of these setting groups allows for different behavior. Let us assume that we have two standard textboxes on the form, and we wanted one of them to exhibit behavior similar to a RadTextBox, and the other one as a RadNumericTextBox. In this case, the declaration of the two textboxes, along with the RadInputManager, would look like this:

````ASPNET
	    <br />
	    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	    <br />
	    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
	    <br />
	    <telerik:RadInputManager ID="RadInputManager1" runat="server">
	        <telerik:TextBoxSetting BehaviorID="Setting1" EmptyMessage="EmptyMessage55">
	            <TargetControls>
	                <telerik:TargetInput ControlID="TextBox1" />
	            </TargetControls>
	        </telerik:TextBoxSetting>
	        <telerik:NumericTextBoxSetting Type="Currency" BehaviorID="Setting2">
	            <TargetControls>
	                <telerik:TargetInput ControlID="TextBox2" Enabled="true" />
	            </TargetControls>
	        </telerik:NumericTextBoxSetting>
	    </telerik:RadInputManager>
````



Each of the Setting tags contains a BehaviorID, which is used to identity settings pertaining to a given text box. These can later be retrieved on the client, for example, and access a property such as the EmptyMessage.



>caution Note that each input setting must have at least one target control, otherwise it will not be serialized to the client and its client object would not be instantiated.
>


Additionally, we can extend text boxes located in other controls. For example, let us assume that we have a repeater hosting a text box. Further, if we want the text box(es) nested in the repeater to accept only e-mail addresses (a regular expression is used to determine this behavior), the setup would look something like:

````ASPNET
	    <asp:Repeater ID="Repeater1" runat="server">
	        <ItemTemplate>
	            <br />
	            Internet e-mail address:
	            <asp:TextBox ID="TextBox1" Text="mailto:e-mail@goes.here" runat="server"></asp:TextBox>
	        </ItemTemplate>
	    </asp:Repeater>
	    <telerik:RadInputManager ID="RadInputManager1" runat="server">
	        <telerik:RegExpTextBoxSetting EmptyMessage="EmptyMessage" BehaviorID="Setting3" ValidationExpression="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
	            ErrorMessage="ErrorMessage">
	            <TargetControls>
	                <telerik:TargetInput ControlID="Repeater1" />
	            </TargetControls>
	        </telerik:RegExpTextBoxSetting>
	    </telerik:RadInputManager>
````



Below is a list of tables covering the most important properties of the elements discussed up to now:

## Common Settings


>caption  

|  __ *BehaviorID* __  | A unique id for the settings related to a given textbox. |
| ------ | ------ |
| __ *ClientEvents-OnBlur* __  __ ** __ |The name of the client side handler which will be raised when the control loses focus.|
| __ *ClientEvents-OnError* __  __ ** __ |The name of the client side function which will be called when an error occurs – the user enters invalid input. This event is not raised for the textbox control, since there is no input restriction.|
| __ *ClientEvents-OnFocus* __  __ ** __ |The name of the client side function which will be called when the control receives focus.|
| __ *ClientEvents-OnKeyPress* __  __ ** __ |The name of the client side function which will be called when the user presses a button, while the control has the focus.|
| __ *EmptyMessage* __ |The text which will be displayed before the user has entered any text.|
| __ *EmptyMessageCssClass* __ |The name of the css class which will be used to style the empty message text.|
| __ *InvalidCssClass* __ |The name of the css class, which will be used to style the control, when the user enters invalid input|
| __ *DisabledCssClass* __ |The name of the css class which will be used to style the control when it is disabled.|
| __ *SelectionOnFocus* __ |An enumeration which is used to determine how the input control behaves when it first gets input focus. The possible values are CaretToBeginning, CaretToEnd, None and SelectAll. The default one is CaretToEnd.|
| __ *InitializeOnClient* __ |A property which indicates whether the client event handlers and css classes will be set on the client.|
| __ *ErrorMessage* __ |A message which is displayed if the regular expression matching fails|

## TextBoxSettings


>caption  

|  __ *PasswordStrengthSettings* __  | A group of properties used for setting up the password strength check feature when using a TextBox with TextMode set to Password. More information is available[here]({%slug input/radtextbox/password-strength-checker%}). |
| ------ | ------ |

## RegExpTextBoxSetting


>caption  

|  __ *IsRequiredFields* __  __ ** __  | A property which indicates whether the corresponding textboxes are required to have some values entered, or may be empty |
| ------ | ------ |
| __ *ValidationExpression* __ |A regular expression, representing the matching criteria.|
| __ *ValidationGroup* __ |The ValidationGroup to which the regular expression setting is assigned.|

## NumericTextBoxSetting


>caption  

|  __ *KeepTrailingZerosOnFocus* __  | A property which determines if the zero numbers should remain when the control is focused, according to the DecimalDigits setting |
| ------ | ------ |
| __ *NumberFormat-AllowRounding* __ |A setting which specifies whether the user input may be rounded|
| __ *Type* __ |The type of the control – Currency/Number/Percent|
| __ *MaxValue* __ |The maximal numeric value which can be entered in the control|
| __ *MinValue* __ |The minimal numeric value which can be entered in the control|

## DateInputSetting


>caption  

|  __ *DateFormat* __  | The date format string for the control |
| ------ | ------ |
| __ *MaxDate* __ |The maximal date which the user will be allowed to enter|
| __ *MinDate* __ |The minimal date which the user will be allowed to enter|
| __ *SharedCalendarID* __ |Gets or sets the ID of the calendar that will be used for picking dates. Thisproperty allows you to configure several datepickers to use a single RadCalendar|
| __ *EnableShadows* __ |Gets or sets whether popup shadows will appear|
| __ *Overlay* __ |Gets or sets a value indicating whether the picker will create an overlay element to ensure popups are over a flash element or Java applet|
| __ *PopupDirection* __ |Gets or sets the direction in which the popup Calendar is displayed, with relation to the DatePicker control|
| __ *EnableScreenBoundaryDetection* __ |Gets or sets whether the screen boundaries should be taken into consideration when the Calendar or TimeView are displayed|

## RadMaskedTextBoxSetting


>caption  

|  __ *Mask* __  | The mask used to identify proper user input. |
| ------ | ------ |
| __ *PromptChar* __ |Defines the prompt char of the mask.|
| __ *AllowEmptyEnumerations* __ |Allows the enumerated parts of the mask to be left blank.|
| __ *ZeroPadNumericRanges* __ |Enforces the values of numeric range parts of the mask to have a fixed width.|
| __ *NumericRangeAlign* __ |Controls whether the values of numeric range parts are aligned to the left or to the right.|
| __ *DisplayMask* __ |Changes the mask that is used to format the value when the masked text box does not have focus.|
| __ *DisplayPromptChar* __ |Changes the prompt character for unentered values when the masked text box does not have focus.|
| __ *HideOnBlur* __ |Hides the prompts when the value has not been set and the masked text box does not have focus.|
