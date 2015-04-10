---
title: RadMaskedTextBox Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: input/radmaskedtextbox/overview
tags: overview
published: True
position: 0
---

# RadMaskedTextBox Overview



__RadMaskedTextBox__ is an enhanced data entry control that uses a [mask]({%slug input/radmaskedtextbox/masks%}) to distinguish between proper and improper user input. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

You can use a mask to specify the accepted format such as IP address, telephone number, currency, and so on. In addition, you can use __RadMaskedTextBox__ together with [validators]({%slug input/how-to/validation%}) such as the __RequiredValidator__ and __RegularExpressionValidator__ controls to enforce any custom validation logic.

## Specifying the mask

At design time, to specify the mask that __RadMaskedTextBox__ uses to identify proper user input, set the __Mask__ property. There are three ways to set the __Mask__ property at design time:

* Type the mask string directly onto the __Mask__ property in the properties pane. This is the most direct method, but provides the least design-time support.

* From the __RadMaskedTextBox__[Smart Tag]({%slug input/design-time/smart-tag%}), choose __SetMask__ to bring up the [Input Mask Dialog]({%slug input/design-time/input-mask-dialog%}). This method lets you choose from pre-defined masks or enter your own custom mask and get immediate feedback about what the masked text box displays as a prompt to the user for that mask.

* Click the ellipsis button next to the __MaskParts__ property in the properties pane to bring up the [MaskPart Collection Editor]({%slug input/design-time/maskpart-collection-editor%}). This method lets you build up the mask bit by bit, so that you can easily configure each part of the mask using mask part properties. When you set the __MaskParts__ property, the __Mask__ property is automatically updated to the mask you build.

At run time, you can set the mask in the following ways:

* Set the __Mask__ property:



````C#
	        RadMaskedTextBox1.Mask = "(###) ### - ####";
````
````VB.NET
	        RadMaskedTextBox1.Mask = "(###) ### - ####"
````


* Build up a mask using the __MaskParts__ property:



````C#
	        EnumerationMaskPart enumPart = new EnumerationMaskPart();
	        enumPart.Items.Add("Mon");
	        enumPart.Items.Add("Tue");
	        enumPart.Items.Add("Wed");
	        enumPart.Items.Add("Thu");
	        enumPart.Items.Add("Fri");
	        enumPart.Items.Add("Sat");
	        enumPart.Items.Add("Sun");
	        RadMaskedTextBox1.MaskParts.Add(enumPart);
	        LiteralMaskPart literalPart = new LiteralMaskPart();
	        literalPart.Text = " ";
	        RadMaskedTextBox1.MaskParts.Add(literalPart);
	        RadMaskedTextBox1.MaskParts.Add(new DigitMaskPart());
````
````VB.NET
	        Dim enumPart As New EnumerationMaskPart()
	        enumPart.Items.Add("Mon")
	        enumPart.Items.Add("Tue")
	        enumPart.Items.Add("Wed")
	        enumPart.Items.Add("Thu")
	        enumPart.Items.Add("Fri")
	        enumPart.Items.Add("Sat")
	        enumPart.Items.Add("Sun")
	        RadMaskedTextBox1.MaskParts.Add(enumPart)
	        Dim literalPart As New LiteralMaskPart()
	        literalPart.Text = " "
	        RadMaskedTextBox1.MaskParts.Add(literalPart)
	        RadMaskedTextBox1.MaskParts.Add(New DigitMaskPart())
````


A number of properties control the way the mask is applied:

* __AllowEmptyEnumerations__ allows the enumerated parts of the mask to be left blank.

* __ZeroPadNumericRanges__ enforces the values of numeric range parts of the mask to have a fixed width.

* __NumericRangeAlign__ controls whether the values of numeric range parts are aligned to the left or to the right.

## Controlling the appearance of the masked text box

Prompt Characters

When a __RadMaskedTextBox__ control is displayed at run time, it represents the mask as a series of prompt characters for the text the user should enter and literal characters for literal strings that are part of the mask. Each mask position is shown with a single prompt character. You can specify the prompt character that the masked text box uses by setting the __PromptChar__ property. For example, if all of the characters to input are numbers, you could use the '#' character as a prompt:![Prompt character](images/PromptCharacter.png)

## Focus

You can give the masked text box a different appearance when it does not have focus (when the user is not editing its value):

* To change the mask that is used to format the value when the masked text box does not have focus (for example, to change the literal strings in the mask), set the __DisplayMask__ property. You can set the __DisplayMask__ property directly in the properties pane, or build it up bit by bit in the [MaskPart Collection Editor]({%slug input/design-time/maskpart-collection-editor%}) by setting the __DisplayMaskParts__ property.

>caution Note that the __DisplayMask__ should contain the __Mask's__ number of symbols in it. This means that the __DisplayMask__ can be longer but it should never be shorter than the __Mask__ .
>


* To change the prompt character for unentered values when the masked text box does not have focus (for example, to change it to a space), use the __DisplayPromptChar__ property. Note that the __DisplayPromptChar__property requires that you have also set a __DisplayMask__ (even if it is the same as __Mask__).

* To hide the prompts when the value has not been set and the masked text box does not have focus, set the __HideOnBlur__ property to __True__. You must set __HideOnBlur__ to __True__ if you want to use the __EmptyMessage__ property.

## Multi-line mode

You can allow the __RadMaskedTextBox__ to display its content in multiple lines by setting the __TextMode__ property to "MultiLine".![Multi-line RadMaskedTextBox](images/MultiLineMaskedTextBox.png)

## Masked text box value

__RadMaskedTextBox__ uses a number of properties to represent its value:

* __Text__: the text the user entered into the control. This value does not include any literal characters in the mask or prompt characters.

* __TextWithLiterals__: the text the user entered, plus any literal characters in the mask, but no prompt characters.

* __TextWithPrompt__: the text the user entered, with prompt characters for any characters the user has not yet entered, but with none of the literal characters from the mask. This property is read only.

* __TextWithPromptAndLiterals__: The value as it appears in the control, including the text the user entered plus any prompt characters for characters the user has not yet entered and any literal characters that come from the mask. This property is read only.

On the client side, the properties for the __RadMaskedTextBox__ value use the name "value" rather than "__Text__".There is no client-side analog to the __TextWithPrompt__property. Only the __value__ property (unadorned with prompts or literals) can be set. The client-side properties are

* __get_value__, __set_value__: the text the user entered into the control. This value does not include any literal characters in the mask or prompt characters.

* __get_valueWithLiterals__: the text the user entered, plus any literal characters in the mask, but no prompt characters.

* __get_valueWithPromptAndLiterals__: the value as it appears in the control, including any prompt characters and literal characters from the mask.

## Culture-specific masks

You can set different masks for different cultures in the codebehind. For example, a zip code in the USA is "#####-####' while in canada it has only 6 characters.

The following example shows how to use the current culture settings to set a culture-specific mask:



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (System.Threading.Thread.CurrentThread.CurrentCulture.Name == "en-US")
	        {
	            RadMaskedTextBox1.Mask = "#####-####";
	        }
	        else if (System.Threading.Thread.CurrentThread.CurrentCulture.Name == "en-CA")
	        {
	            RadMaskedTextBox1.Mask = "L#L#L#";
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If System.Threading.Thread.CurrentThread.CurrentCulture.Name = "en-US" Then
	            RadMaskedTextBox1.Mask = "#####-####"
	        ElseIf System.Threading.Thread.CurrentThread.CurrentCulture.Name = "en-CA" Then
	            RadMaskedTextBox1.Mask = "L#L#L#"
	        End If
	    End Sub
````


# See Also

 * [RadMaskedTextBox Client Object]({%slug input/client-side-programming/radmaskedtextbox-client-object%})
