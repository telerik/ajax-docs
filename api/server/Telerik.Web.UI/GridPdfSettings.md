---
title: Telerik.Web.UI.GridPdfSettings
page_title: Telerik.Web.UI.GridPdfSettings
description: Telerik.Web.UI.GridPdfSettings
---

# Telerik.Web.UI.GridPdfSettings

Container of misc. grouping settings of RadGrid control

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridPdfSettings

## Properties

###  AllowAdd `Boolean`

Allow content to be added to the PDF file

###  AllowCopy `Boolean`

Allow content to be copied from the PDF file

###  AllowModify `Boolean`

Allow the document to be modified

###  AllowPrinting `Boolean`

Allow the content of the PDF file to be printed

###  Author `String`

Document author

###  BorderColor `Color`

Determines the color of the borders

###  BorderStyle `GridPdfBorderStyle`

Determines the thickness of the border

###  BorderType `GridPdfBorderType`

Determines the border type for the exported RadGrid

###  ContentFilter `GridPdfFilter`

Determines the default content filter used by the PDF engine

###  Creator `String`

Document creator

###  DefaultFontFamily `String`

Determines the default font

###  DisableContentEncryption `Boolean`

Determines whether the content encryption will be disabled

###  FontType `FontType`

This property describes the different types of font embedding: Link,
                Embed and Subset.

#### Remarks
Possible values:
                Link
                            The font program is referenced by name in the rendered PDF. Anyone who
                            views a rendered PDF with a linked font program must have that font
                            installed on their computer otherwise it will not display correctly.
                        Embed
                            The entire font program is embedded in the rendered PDF. Embedding the
                            entire font program guarantees the PDF will display as intended by the
                            author on all computers, however this method does possess several
                            disadvantages:
                        
                                    Font programs can be extremely large and will significantly
                                    increase the size of the rendered PDF. For example, the MS
                                    Gothic TrueType collection is 8MB!
                                
                                    Certain font programs cannot be embedded due to license
                                    restrictions. If you attempt to embed a font program that
                                    disallows embedding, RadGrid will substitute the font with a
                                    base 14 font and generate a warning message.
                                Subset (default value)Subsetting a font will
                            generate a new font that is embedded in the rendered PDF that contains
                            only the chars referenced by RadGrid. For example, if a particular
                            RadGrid utilised the Verdana font referencing only the character 'A', a
                            subsetted font would be generated at run-time containing only the
                            information necessary to render the character 'A'.
                            Subsetting provides the benefits of embedding and significantly reduces
                            the size of the font program. However, small processing overhead is
                            incurred to generated the subsetted font.

###  ForceTextWrap `Boolean`

Determines what will happen when a given text is larger than the cell width (and there are no whitespaces inside).
            If set to true, the overflowing text will be carried over to the next line; otherwise (false) the text will break the cell boundaries

###  Keywords `String[]`

Document keywords (comma-separated)

###  PageBottomMargin `Unit`

The bottom margin of the page

###  PageFooter `GridPdfPageHeaderFooter`

This element holds the contents of the footer zone of the page

###  PageFooterMargin `GridPdfPageHeaderFooter`

The margin of the page footer

###  PageHeader `GridPdfPageHeaderFooter`

PageHeader element holds the contents of the header zone

###  PageHeaderMargin `GridPdfPageHeaderFooter`

The margin of the page header

###  PageHeight `Unit`

Gets or sets the page height that RadGrid will use when exporting to PDF.

#### Remarks
This setting will override any predefined value that comes from the PaperSize property.

###  PageLeftMargin `Unit`

The left margin of the page

###  PageRightMargin `Unit`

The right margin of the page

###  PageTitle `String`

Page title

###  PageTopMargin `Unit`

The top margin of the page

###  PageWidth `Unit`

Gets or sets the page width that RadGrid will use when exporting to PDF.

#### Remarks
This setting will override any predefined value that comes from the PaperSize property.

###  PaperSize `GridPaperSize`

Gets or sets the physical paper size that RadGrid will use when exporting to PDF.

#### Remarks
It will be overriden by setting PageWidth and PageHeight explicitly.

###  Producer `String`

Document producer

###  Subject `String`

Document subject

###  Title `String`

Document title

###  UserPassword `String`

Determines whether the exported document will be password protected.

