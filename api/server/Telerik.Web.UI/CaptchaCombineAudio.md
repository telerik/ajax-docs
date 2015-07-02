---
title: Telerik.Web.UI.CaptchaCombineAudio
page_title: Telerik.Web.UI.CaptchaCombineAudio
description: Telerik.Web.UI.CaptchaCombineAudio
---

# Telerik.Web.UI.CaptchaCombineAudio

Class that combines the audio files (wav) of RadCaptcha to create the audio output.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.CaptchaCombineAudio

## Methods

###  ReadWaveHeader

Get information about every audio file.

#### Parameters

#### filePath `System.String`

The physical path to the file.

#### Returns

`System.Void` 

###  WriteHeaderToOutputStream

Outputs an empty wave file by writing its header.

#### Returns

`System.IO.MemoryStream` The memory stream of the empty file.

###  Concatenate

Concatenates Audio Files (wav) into a single file.

#### Parameters

#### filePaths `System.String`

The string array containing the physical path to each file.

#### Returns

`System.IO.MemoryStream` The MemoryStream of the concatenated audio files.

