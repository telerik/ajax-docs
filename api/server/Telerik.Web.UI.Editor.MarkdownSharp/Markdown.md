---
title: Telerik.Web.UI.Editor.MarkdownSharp.Markdown
page_title: Telerik.Web.UI.Editor.MarkdownSharp.Markdown
description: Telerik.Web.UI.Editor.MarkdownSharp.Markdown
---

# Telerik.Web.UI.Editor.MarkdownSharp.Markdown

Markdown is a text-to-HTML conversion tool for web writers. 
            Markdown allows you to write using an easy-to-read, easy-to-write plain text format, 
            then convert it to structurally valid XHTML (or HTML).

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Editor.MarkdownSharp.Markdown

## Properties

###  AutoHyperlink `Boolean`

when true, (most) bare plain URLs are auto-hyperlinked  
            WARNING: this is a significant deviation from the markdown spec

###  AutoNewLines `Boolean`

when true, RETURN becomes a literal newline  
            WARNING: this is a significant deviation from the markdown spec

###  EmptyElementSuffix `String`

use ">" for HTML output, or " />" for XHTML output

###  EncodeProblemUrlCharacters `Boolean`

when true, problematic URL characters like [, ], (, and so forth will be encoded 
            WARNING: this is a significant deviation from the markdown spec

###  LinkEmails `Boolean`

when false, email addresses will never be auto-linked  
            WARNING: this is a significant deviation from the markdown spec

###  StrictBoldItalic `Boolean`

when true, bold and italic require non-word characters on either side  
            WARNING: this is a significant deviation from the markdown spec

###  Version `String`

current version of MarkdownSharp;  
            see http://code.google.com/p/markdownsharp/ for the latest code or to contribute

## Methods

###  DoAnchors

Turn Markdown link shortcuts into HTML anchor tags

#### Remarks
[link text](url "title") 
            [link text][id] 
            [id]

#### Returns

`System.String` 

###  DoAutoLinks

Turn angle-delimited URLs into HTML anchor tags

#### Remarks
<http://www.example.com>

#### Returns

`System.String` 

###  DoBlockQuotes

Turn Markdown > quoted blocks into HTML blockquote blocks

#### Returns

`System.String` 

###  DoCodeBlocks

/// Turn Markdown 4-space indented code into HTML pre code blocks

#### Returns

`System.String` 

###  DoCodeSpans

Turn Markdown `code spans` into HTML code tags

#### Returns

`System.String` 

###  DoHardBreaks

Turn markdown line breaks (two space at end of line) into HTML break tags

#### Returns

`System.String` 

###  DoHeaders

Turn Markdown headers into HTML header tags

#### Remarks
Header 1  
            ========  
            
            Header 2  
            --------  
            
            # Header 1  
            ## Header 2  
            ## Header 2 with closing hashes ##  
            ...  
            ###### Header 6

#### Returns

`System.String` 

###  DoHorizontalRules

Turn Markdown horizontal rules into HTML hr tags

#### Remarks
***  
            * * *  
            ---
            - - -

#### Returns

`System.String` 

###  DoImages

Turn Markdown image shortcuts into HTML img tags.

#### Remarks
![alt text][id]
            ![alt text](url "optional title")

#### Returns

`System.String` 

###  DoItalicsAndBold

Turn Markdown *italics* and **bold** into HTML strong and em tags

#### Returns

`System.String` 

###  DoLists

Turn Markdown lists into HTML ul and ol and li tags

#### Returns

`System.String` 

###  EncodeAmpsAndAngles

Encode any ampersands (that aren't part of an HTML entity) and left or right angle brackets

#### Returns

`System.String` 

###  EncodeCode

Encode/escape certain Markdown characters inside code blocks and spans where they are literals

#### Returns

`System.String` 

###  EncodeEmailAddress

encodes email address randomly  
            roughly 10% raw, 45% hex, 45% dec 
            note that @ is always encoded and : never is

#### Returns

`System.String` 

###  EncodeProblemUrlChars

hex-encodes some unusual "problem" chars in URLs to avoid URL detection problems

#### Returns

`System.String` 

###  EscapeBackslashes

Encodes any escaped characters such as \`, \*, \[ etc

#### Returns

`System.String` 

###  EscapeBoldItalic

escapes Bold [ * ] and Italic [ _ ] characters

#### Returns

`System.String` 

###  EscapeSpecialCharsWithinTagAttributes

Within tags -- meaning between < and > -- encode [\ ` * _] so they 
            don't conflict with their use in Markdown for code, italics and strong. 
            We're replacing each such character with its corresponding hash 
            value; this is likely overkill, but it should prevent us from colliding 
            with the escape values by accident.

#### Returns

`System.String` 

###  FormParagraphs

splits on two or more newlines, to form "paragraphs";    
            each paragraph is then unhashed (if it is a hash) or wrapped in HTML p tag

#### Returns

`System.String` 

###  GetBlockPattern

derived pretty much verbatim from PHP Markdown

#### Returns

`System.String` 

###  GetNestedBracketsPattern

Reusable pattern to match balanced [brackets]. See Friedl's 
            "Mastering Regular Expressions", 2nd Ed., pp. 328-331.

#### Returns

`System.String` 

###  GetNestedParensPattern

Reusable pattern to match balanced (parens). See Friedl's 
            "Mastering Regular Expressions", 2nd Ed., pp. 328-331.

#### Returns

`System.String` 

###  HashHTMLBlocks

replaces any block-level HTML blocks with hash entries

#### Returns

`System.String` 

###  Normalize

convert all tabs to _tabWidth spaces; 
            standardizes line endings from DOS (CR LF) or Mac (CR) to UNIX (LF); 
            makes sure text ends with a couple of newlines; 
            removes any blank lines (only spaces) in the text

#### Returns

`System.String` 

###  Outdent

Remove one level of line-leading spaces

#### Returns

`System.String` 

###  ProcessListItems

Process the contents of a single ordered or unordered list, splitting it
            into individual list items.

#### Returns

`System.String` 

###  RepeatString

this is to emulate what's evailable in PHP

#### Returns

`System.String` 

###  RunBlockGamut

Perform transformations that form block-level tags like paragraphs, headers, and list items.

#### Returns

`System.String` 

###  RunSpanGamut

Perform transformations that occur *within* block-level tags like paragraphs, headers, and list items.

#### Returns

`System.String` 

###  StripLinkDefinitions

Strips link definitions from text, stores the URLs and titles in hash references.

#### Remarks
^[id]: url "optional title"

#### Returns

`System.String` 

###  TokenizeHTML

returns an array of HTML tokens comprising the input string. Each token is 
            either a tag (possibly with nested, tags contained therein, such 
            as `<a href="<MTFoo>">`, or a run of text between tags. Each element of the 
            array is a two-element array; the first is either 'tag' or 'text'; the second is 
            the actual value.

#### Returns

`System.Collections.Generic.List`1` 

###  Transform

Transforms the provided Markdown-formatted text to HTML;  
            see https://en.wikipedia.org/wiki/Markdown

#### Remarks
The order in which other subs are called here is
            essential. Link and image substitutions need to happen before
            EscapeSpecialChars(), so that any *'s or _'s in the a
            and img tags get encoded.

#### Returns

`System.String` 

###  Unescape

swap back in all the special characters we've hidden

#### Returns

`System.String` 

