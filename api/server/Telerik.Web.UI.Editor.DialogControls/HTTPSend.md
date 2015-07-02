---
title: Telerik.Web.UI.Editor.DialogControls.HTTPSend
page_title: Telerik.Web.UI.Editor.DialogControls.HTTPSend
description: Telerik.Web.UI.Editor.DialogControls.HTTPSend
---

# Telerik.Web.UI.Editor.DialogControls.HTTPSend

Allow the transfer of data files using the W3C's 
            specification for HTTP multipart form data. 
            Microsoft's version has a bug where it does not 
            format the ending boundary correctly.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Editor.DialogControls.HTTPSend

## Properties

###  TransferHttpVersion `Version`

Allows you to specify the specific version 
            of HTTP to use for uploads.
            The dot NET stuff currently does not allow 
            you to remove the continue-100 header
            from 1.1 and 1.0 currently has a bug in it 
            where it adds the continue-100. 
            MS has sent a patch to remove the 
            continue-100 in HTTP 1.0.

###  FileContentType `String`

Used to change the content type of the file 
            being sent.
            Currently defaults to: text/xml. Other options 
            are text/plain or binary.

###  BeginBoundary `String`

The string that defines the begining boundary 
            of our multipart transfer as defined in the 
            w3c specs.
            This method also sets the Content and Ending 
            boundaries as defined by the w3c specs.

###  ContentBoundary `String`

The string that defines the content boundary 
            of our multipart transfer as defined in the 
            w3c specs.

###  EndingBoundary `String`

The string that defines the ending boundary 
            of our multipart transfer as defined in the 
            w3c specs.

###  ResponseText `StringBuilder`

The data returned to us after the transfer 
            is completed.

###  URL `String`

The web address of the recipient of the 
            transfer.

###  BufferSize `Int32`

Allows us to determine the size of the buffer 
            used to send a piece of the file at a time 
            out the IO stream. 
            Defaults to 1024 * 10.

###  Credentials `ICredentials`

Allows us to specified the credentials used 
            for the transfer.

###  Certificate `X509Certificate`

Allows us to specifiy the certificate to use 
            for secure communications.

###  KeepAlive `Boolean`

Gets or sets a value indicating whether to 
            make a persistent connection to the 
            Internet resource.

###  Expect100 `Boolean`

Gets or sets a value indicating whether the 
            Expect100-Continue header should be sent.

###  Pipelined `Boolean`

Gets or sets a value indicating whether to 
            pipeline the request to the Internet resource.

###  Chunked `Boolean`

Gets or sets a value indicating whether the 
            file can be sent in smaller packets.

## Methods

###  SendTextAsFile

Transmits a file to the web server stated 
            in the URL property. 
            You may call this several times and it will 
            use the values previously set for fields and URL.

#### Parameters

#### content `System.String`

the text to send

#### filename `System.String`

The local path of 
            the file to send.

#### Returns

`System.Void` 

###  SetFilename

Used to signal we want the output to go to a 
            text file verses being transfered to a URL.

#### Parameters

#### path `System.String`

The local path to the 
            output file.

#### Returns

`System.Void` 

###  SetField

Allows you to add some additional field data 
            to be sent along with the transfer. 
            This is usually used for things like userid 
            and password to validate the transfer.

#### Parameters

#### name `System.String`

The name of the 
            custom field.

#### value `System.String`

The value of the 
            custom field.

#### Returns

`System.Void` 

###  SetHeader

Allows you to add some additional header data 
            to be sent along with the transfer.

#### Parameters

#### name `System.String`

The name of the custom header.

#### value `System.String`

The value of the custom header.

#### Returns

`System.Void` 

###  GetStream

Determines if we have a file stream set, and 
            returns either the HttpWebRequest stream or 
            the file.

#### Returns

`System.IO.Stream` Either the HttpWebRequest stream or 
            the local output file.

###  GetResponse

Make the request to the web server and 
            retrieve it's response into a text buffer.

#### Returns

`System.Void` 

###  GetFormFields

Builds the proper format of the multipart 
            data that contains the form fields and 
            their respective values.

#### Returns

`System.String` All form fields, properly formatted 
            in a string.

###  GetFileHeader

Returns the proper content information for 
            the file we are sending.

#### Parameters

#### filename `System.String`

The local path to 
            the file that should be sent.

#### Returns

`System.String` All file headers, properly formatted 
            in a string.

###  GetFileTrailer

Creates the proper ending boundary for the 
            multipart upload.

#### Returns

`System.String` The ending boundary.

###  WriteString

Mainly used to turn the string into a byte 
            buffer and then write it to our IO stream.

#### Parameters

#### output `System.IO.Stream`

The stream to write to.

#### data `System.String`

The data to place into the stream.

#### Returns

`System.Void` 

###  WriteFile

Reads in the file a chunck at a time then 
            sends it to the output stream.

#### Parameters

#### output `System.IO.Stream`

The stream to write to.

#### filename `System.String`

The local path of the file to send.

#### Returns

`System.Void` 

