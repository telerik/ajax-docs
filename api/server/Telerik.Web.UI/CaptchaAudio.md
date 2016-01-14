---
title: Telerik.Web.UI.CaptchaAudio
page_title: Telerik.Web.UI.CaptchaAudio
description: Telerik.Web.UI.CaptchaAudio
---

# Telerik.Web.UI.CaptchaAudio

Class that implements the audio code feature of the RadCaptcha control

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.CaptchaAudio

## Properties

###  AudioMemoryStream `MemoryStream`

Gets the Memory stream to which the wave will be outputted.

###  CanSpeak `Boolean`

Gets or sets a bool value indicating whether the Text (code)should be spoken or concatenated from the provided wav files.

###  TextToSpeak `String`

Gets the Text (code) to be spoken by the RadCaptcha.

## Methods

###  GetWaveStream

Creates the Memory stream to which the wave will be outputted.

#### Parameters

#### currentApplicationPath `System.String`

The path to the current application.

#### Returns

`System.IO.MemoryStream` Memory stream that contains the audio code.

###  SpeakText

Speaks the currently saved text in the TextToSpeak property.

#### Returns

`System.Void` 

