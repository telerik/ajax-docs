---
title: FixedContentEditor
page_title: FixedContentEditor | UI for ASP.NET AJAX Documentation
description: FixedContentEditor
slug: pdfprocessing/editing/fixedcontenteditor
tags: fixedcontenteditor
published: True
position: 4
---

# FixedContentEditor



__FixedContentEditor__ is utility class that is intended to simplify the process of creating and editing the content of an __IContentRootElement__ such as [](c26b1511-7f04-4793-8997-ed882ef015bf).

The current article will get you familiar with the following topics:

* [Creating FixedContentEditor](#creating-fixedcontenteditor)

* [Inserting Elements](#inserting-elements)

* [Positioning](#positioning)

* [Changing Current Styles](#changing-current-styles)

## Creating FixedContentEditor

__FixedContentEditor__ is always associated to a single __IContentRootElement__ which it takes as a constructor parameter when it is created. __Example 1__ shows how you can create an editor.

````C#
	            FixedContentEditor editor = new FixedContentEditor(contentRootElement);
````



The editor maintains an internal [Position]({%slug pdfprocessing/concepts/position%}) inside the content root element. When a new element is created, its position is being set to the current position of the editor. The initial position of the editor can be specified when it is created.

__Example 2__ demonstrates how you can create а FixedContentEditor with specific initial position.

````C#
	            FixedContentEditor editor = new FixedContentEditor(contentRootElement, initialPosition);
````



## Inserting Elements

Composing a [](f690fd5c-a977-4509-90d9-ed8d3ab84c92) normally requires to create all elements and specify exactly how they should look. The __FixedContentEditor__ takes care of most things for you. This section explains how you can add different type of elements.

### Inserting Text

Inserting а [](caddf2d7-c42e-4f10-ab51-57d9d3f91fde) can be done with the __public void DrawText(string text)__ method. __Example 3__ inserts a fragment with content "First text fragment.".

````C#
	            editor.DrawText("First text fragment.");
````



__Figure 1__ shows the result of __Example 3__.
>caption Figure 1: TextFragment Result

![Rad Pdf Processing Editing Fixed Content Editor 01](images/RadPdfProcessing_Editing_FixedContentEditor_01.png)

### Inserting Paragraph

__Example 4__ shows how you can use the __Block__ object to draw a paragraph.

````C#
	            Block block = new Block();
	            block.InsertText("First sentence.");
	            block.InsertText("Second sentence.");
	            editor.DrawBlock(block);
````



__Figure 2__ shows the result of __Example 4__.
>caption Figure 2: Paragraph

![Rad Pdf Processing Editing Fixed Content Editor 02](images/RadPdfProcessing_Editing_FixedContentEditor_02.png)

>tip Building a paragraph with the FixedContentEditor is much simpler than creating TextFragments yourself. The[Block]({%slug pdfprocessing/editing/block%})object would flow the content of a paragraph for you if this is necessary.
>


### Inserting Image

__FixedContentEditor__ provides several overloads for inserting an [](18fc2485-e8a1-4b19-a7ba-fdd755815212).

__public void DrawImage(Stream stream);__

__public void DrawImage(Stream stream, double width, double height);__

__public void DrawImage(Stream stream, Size size);__

__public void DrawImage(ImageSource source);__

__public void DrawImage(ImageSource source, Size size);__

__public void DrawImage(ImageSource source, double width, double height);__

__Example 5__ shows how you can add an image created from a Stream.

````C#
	            using (Stream stream = this.GetResourceStream("Telerik_logo.jpg"))
	            {
	                editor.DrawImage(stream, new Size(118, 28));
	            }
````


>caption Figure 3: Image Result

![Rad Pdf Processing Editing Fixed Content Editor 04](images/RadPdfProcessing_Editing_FixedContentEditor_04.png)

### Inserting Geometries

The following methods can be used to insert different [Geometries]({%slug pdfprocessing/concepts/geometry%}) in the document:

__public void DrawLine(Point point1, Point point2)__: Inserts a line between the specified points.

__public void DrawRectangle(Rect rectangle)__: Inserts a rectangle.

__public void DrawEllipse(Point center, double radiusX, double radiusY)__: Inserts an ellipse.

__public void DrawCircle(Point center, double radius)__: Inserts a circle.

__public void DrawPath(PathGeometry pathGeometry)__: Inserts a custom path geometry.

__Example 6__ shows how you can add an ellipse using one of FixedContentEditor's methods.

````C#
	            editor.DrawEllipse(new Point(250, 70), 136, 48);
````



### Inserting Clipping

__FixedContentEditor__ exposes a __Clipping__ property which defines the [Clipping]({%slug pdfprocessing/concepts/clipping%}) to be used for the inserted content elements. The following methods can be used to push and pop clippings:

__public IDisposable PushClipping(GeometryBase clip)__: Inserts a new clipping defined from the specified geometry.

__public IDisposable PushClipping(Rect clip)__: Inserts a new clipping defined from the specified rectangle.

__public Clipping PopClipping()__: Pops the last clipping, which was inserted with the editor.

When the returned __IDisposable__ object from the __PushClipping()__ method is disposed, the clipping is popped from the clippings in the editor.

When a new clipping is pushed, it is set as a clipping to the current clipping in the editor. __Example 7__ shows how a clipping can be pushed:

````C#
	            string visibleText = "The last word in this text is";
	            string text = string.Format("{0} clipped.", visibleText); //The last word in this text is clipped.
	            Block block = new Block();
	            block.InsertText(visibleText);
	            Size visisibleTextSize = block.Measure();
	
	            using (editor.PushClipping(new Rect(new Point(0, 0), visisibleTextSize)))
	            {
	                editor.DrawText(text);
	            }
````



__Figure 4__ shows the result of __Example 7__.
>caption Figure 4: Clipping Result

![Rad Pdf Processing Editing Fixed Content Editor 03](images/RadPdfProcessing_Editing_FixedContentEditor_03.png)

### Inserting Table

__FixedContentEditor__ exposes __DrawTable()__ method which allows you to easily position and draw tabular data in the PDF document. You can specify the size you need to fit the table in by using the appropriate overload of the __DrawTable()__ method.

__Example 8__ generates a table and draws it in some fixed size.

````C#
	            Table table = new Table();
	            Border border = new Border();
	            table.DefaultCellProperties.Borders = new TableCellBorders(border, border, border, border);
	            table.DefaultCellProperties.Padding = new Thickness(10);
	            TableRow firstRow = table.Rows.AddTableRow();
	            firstRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("First cell");
	            firstRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("Second cell");
	            firstRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("Third cell");
	            TableRow secondRow = table.Rows.AddTableRow();
	            secondRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("Forth cell");
	            secondRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("Fifth cell");
	            secondRow.Cells.AddTableCell().Blocks.AddBlock().InsertText("Sixth cell");
	
	            RadFixedDocument document = new RadFixedDocument();
	            RadFixedPage page = document.Pages.AddPage();
	            FixedContentEditor editor = new FixedContentEditor(page);
	            editor.Position.Translate(10, 10);
	            editor.DrawTable(table, new Size(180, double.PositiveInfinity));
````

![Rad Pdf Processing Editing Fixed Content Editor 06](images/RadPdfProcessing_Editing_FixedContentEditor_06.png)

## Positioning

The [Position]({%slug pdfprocessing/concepts/position%})property exposed by __FixedContentEditor__ allows an easy way to manipulate the position of inserted content elements.

The code in __Example 9__ shows how to manipulate the position of the inserted content elements and __Figure 5__ shows the result of the code.

````C#
	            editor.Position.Scale(1.5, 0.5);
	            editor.Position.Rotate(10);
	            editor.DrawText("Image:");
	            editor.Position.Translate(0, 20);
	            using (Stream stream = this.GetResourceStream("Telerik_logo.jpg"))
	            {
	                editor.DrawImage(stream, new Size(118, 28));
	            }
````


>caption Figure 5: Positioning Result

![Rad Pdf Processing Editing Fixed Content Editor 05](images/RadPdfProcessing_Editing_FixedContentEditor_05.png)

More detailed information about tables is avaialble in the [Table]({%slug pdfprocessing/editing/table%}) documentation article.

## Changing Current Styles

__FixedContentEditor__ has some properties and methods that affect how it will be rendered:

* __TextProperties and GraphicProperties__: Responsible for the properties of text and graphics. For more information see the [Text and Graphic Properties]({%slug pdfprocessing/editing/text-and-graphic-properties%}) article.

* __SaveTextProperties()__: Saves the TextProperties. It returns an IDisposable object which calls RestoreTextProperties() when disposed and can be used in using statement.

* __RestoreTextProperties()__: Restores the TextProperties.

* __SaveGraphicProperties()__: Saves the GraphicProperties. It returns an IDisposable object which calls RestoreGraphicProperties() when disposed and can be used in using statement.

* __RestoreGraphicProperties()__: Restores the GrahpicProperties.

* __SaveProperties()__: Saves both the text and the graphic properties. It returns an IDisposable object which calls RestoreProperties() when disposed and can be used in using statement.

* __RestoreProperties()__: Restores both text and graphic properties.

# See Also[](c26b1511-7f04-4793-8997-ed882ef015bf)

 * [Block]({%slug pdfprocessing/editing/block%})

 * [Position]({%slug pdfprocessing/concepts/position%})[](caddf2d7-c42e-4f10-ab51-57d9d3f91fde)[](18fc2485-e8a1-4b19-a7ba-fdd755815212)

 * [Geometry]({%slug pdfprocessing/concepts/geometry%})

 * [Clipping]({%slug pdfprocessing/concepts/clipping%})

 * [Table]({%slug pdfprocessing/editing/table%})
