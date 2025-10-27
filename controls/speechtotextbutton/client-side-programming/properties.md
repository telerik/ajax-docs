---
title: Properties
page_title: SpeechToTextButton JavaScript Properties
description: "JavaScript properties and methods of the Telerik WebForms SpeechToTextButton component."
slug: speechtotextbutton/client-side-programming/properties
tags: properties,speechtotextbutton
published: True
position: 1
---

# Properties

SpeechToTextButton-specific properties to configure recognition behavior, appearance (fill mode, size, rounded corners, theme color), icons, and more.

## Getters

| Name                    | Return Type                                                                                                                        | Description                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `get_enabled()`         | `bool`                                                                                                                             | Gets whether the SpeechToTextButton is enabled.              |
| `get_fillMode()`        | [`Telerik.Web.UI.RadSpeechToTextButtonFillMode`]({%slug speechtotextbutton/client-side-programming/enums#fillmode%})               | Gets the fill mode applied to the button.                    |
| `get_icon()`            | `string`                                                                                                                           | Gets the icon shown when the button is idle (not listening). |
| `get_integrationMode()` | [`Telerik.Web.UI.RadSpeechToTextButtonIntegrationMode`]({%slug speechtotextbutton/client-side-programming/enums#integrationmode%}) | Gets the speech integration mode.                            |
| `get_interimResults()`  | `bool`                                                                                                                             | Gets whether interim (partial) results are returned.         |
| `get_isContinuous()`    | `bool`                                                                                                                             | Gets whether recognition runs in continuous mode.            |
| `get_isListening()`     | `bool`                                                                                                                             | Gets whether the control is currently listening.             |
| `get_language()`        | `string`                                                                                                                           | Gets the language (BCP-47 tag) used for recognition.         |
| `get_maxAlternatives()` | `number`                                                                                                                           | Gets the maximum number of alternative transcripts returned. |
| `get_messages()`        | `Object`                                                                                                                           | Gets the current messages (localizable text) configuration.  |
| `get_rounded()`         | [`Telerik.Web.UI.RadSpeechToTextButtonRounded`]({%slug speechtotextbutton/client-side-programming/enums#rounded%})                 | Gets the rounded (border radius) style.                      |
| `get_size()`            | [`Telerik.Web.UI.RadSpeechToTextButtonSize`]({%slug speechtotextbutton/client-side-programming/enums#size%})                       | Gets the size applied to the button.                         |
| `get_stopIcon()`        | `string`                                                                                                                           | Gets the icon shown while the button is active (listening).  |
| `get_themeColor()`      | [`Telerik.Web.UI.RadSpeechToTextButtonThemeColor`]({%slug speechtotextbutton/client-side-programming/enums#themecolor%})           | Gets the theme color applied to the button.                  |

## Setters

| Name                         | Parameter                                                                                                                          | Description                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `set_enabled(value)`         | `bool`                                                                                                                             | Enables or disables the SpeechToTextButton.                    |
| `set_fillMode(value)`        | [`Telerik.Web.UI.RadSpeechToTextButtonFillMode`]({%slug speechtotextbutton/client-side-programming/enums#fillmode%})               | Sets the fill mode of the button.                              |
| `set_icon(value)`            | `string`                                                                                                                           | Sets the idle-state icon.                                      |
| `set_integrationMode(value)` | [`Telerik.Web.UI.RadSpeechToTextButtonIntegrationMode`]({%slug speechtotextbutton/client-side-programming/enums#integrationmode%}) | Sets the speech integration mode.                              |
| `set_interimResults(value)`  | `bool`                                                                                                                             | Enables or disables interim (partial) results.                 |
| `set_isContinuous(value)`    | `bool`                                                                                                                             | Enables or disables continuous recognition mode.               |
| `set_language(value)`        | `string`                                                                                                                           | Sets the recognition language (BCP-47 tag).                    |
| `set_maxAlternatives(value)` | `number`                                                                                                                           | Sets the maximum number of alternative transcripts to return.  |
| `set_messages(value)`        | `Object`                                                                                                                           | Merges and sets the messages (localizable text) configuration. |
| `set_rounded(value)`         | [`Telerik.Web.UI.RadSpeechToTextButtonRounded`]({%slug speechtotextbutton/client-side-programming/enums#rounded%})                 | Sets the rounded (border radius) style.                        |
| `set_size(value)`            | [`Telerik.Web.UI.RadSpeechToTextButtonSize`]({%slug speechtotextbutton/client-side-programming/enums#size%})                       | Sets the size of the button.                                   |
| `set_stopIcon(value)`        | `string`                                                                                                                           | Sets the active (listening) icon.                              |
| `set_themeColor(value)`      | [`Telerik.Web.UI.RadSpeechToTextButtonThemeColor`]({%slug speechtotextbutton/client-side-programming/enums#themecolor%})           | Sets the theme color of the button.                            |

## Methods

| Name                 | Description                                         |
| -------------------- | --------------------------------------------------- |
| `abortRecognition()` | Aborts the current recognition session immediately. |
| `startRecognition()` | Starts a speech recognition session.                |
| `stopRecognition()`  | Stops recognition and finalizes any partial input.  |
| `destroy()`          | Destroys the SpeechToTextButton widget instance.    |

### Set Messages

`set_messages()` expects a **Messages** objct to be passed to it.

```JavaScript
function pageLoadHandler(sender, args) {
    let speechToTextButton = $find('<%= RadSpeechToTextButton1.ClientID %>');

    let newMessages = {
        start: "Start speech recognition",
        stop: "Stop speech recognition",
        unsupported: "Speech recognition is not supported in this browser.",
        notInitialized: "Speech recognition is not initialized."
    };

    speechToTextButton.set_messages(newMessages);
}

Sys.Application.add_load(pageLoadHandler);
```

## Next Steps

- [Events]({%slug otpinput/client-side-programming/events%})
- [Enums]({%slug otpinput/client-side-programming/enums%})
