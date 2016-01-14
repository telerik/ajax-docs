---
title: Telerik.Web.UI.Scheduler.SchedulerPdfSettings
page_title: Telerik.Web.UI.Scheduler.SchedulerPdfSettings
description: Telerik.Web.UI.Scheduler.SchedulerPdfSettings
---

# Telerik.Web.UI.Scheduler.SchedulerPdfSettings

Container of misc. grouping settings of RadScheduler control

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.Scheduler.SchedulerPdfSettings

## Properties

###  AllowAdd `Boolean`

Gets or sets the allow add.

###  AllowCopy `Boolean`

Gets or sets the allow copy.

###  AllowModify `Boolean`

Gets or sets the allow modify.

###  AllowPaging `Boolean`

Gets or sets whether paging is enabled.

###  AllowPrinting `Boolean`

Gets or sets the allow printing.

###  Author `String`

Gets or sets the author.

###  Creator `String`

Gets or sets the creator.

###  DefaultFontFamily `String`

Gets or sets the default font family.

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
                                    disallows embedding, RadScheduler will substitute the font with a
                                    base 14 font and generate a warning message.
                                Subset (default value)Subsetting a font will
                            generate a new font that is embedded in the rendered PDF that contains
                            only the chars referenced by RadScheduler. For example, if a particular
                            RadScheduler utilised the Verdana font referencing only the character 'A', a
                            subsetted font would be generated at run-time containing only the
                            information necessary to render the character 'A'.
                            Subsetting provides the benefits of embedding and significantly reduces
                            the size of the font program. However, small processing overhead is
                            incurred to generated the subsetted font.

###  Keywords `String[]`

Gets or sets the comma delimited list of keywords.

###  PageBottomMargin `Unit`

Gets or sets the page bottom margin.

###  PageFooterMargin `Unit`

Gets or sets the page footer margin.

###  PageHeaderMargin `Unit`

Gets or sets the page header margin.

###  PageHeight `Unit`

Gets or sets the page height that RadScheduler will use when exporting to PDF.

#### Remarks
This setting will override any predefined value that comes from the PaperSize property.

###  PageLeftMargin `Unit`

Gets or sets the page left margin.

###  PageRightMargin `Unit`

Gets or sets the page right margin.

###  PageTitle `String`

Gets or sets the page title.

###  PageTopMargin `Unit`

Gets or sets the page top margin.

###  PageWidth `Unit`

Gets or sets the page width that RadScheduler will use when exporting to PDF.

#### Remarks
This setting will override any predefined value that comes from the PaperSize property.

###  PaperOrientation `SchedulerPaperOrientation`

Gets or sets the physical paper orientation that RadScheduler will use when exporting to PDF.

#### Remarks
It will be overridden by setting PageWidth and PageHeight explicitly.

###  PaperSize `SchedulerPaperSize`

Gets or sets the physical paper size that RadScheduler will use when exporting to PDF.

#### Remarks
It will be overridden by setting PageWidth and PageHeight explicitly.

###  Producer `String`

Gets or sets the producer.

###  StyleSheets `String[]`

Gets or sets the comma delimited list of stylesheets that RadScheduler will use when exporting to PDF.

###  Subject `String`

Gets or sets the subject.

###  Title `String`

Gets or sets the title.

###  UserPassword `String`

Gets or sets the user password.If you set a password, the exported document will be password protected.

