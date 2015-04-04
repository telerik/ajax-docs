---
title: Custom Editors Extending Auto-Generated Editors
page_title: Custom Editors Extending Auto-Generated Editors | UI for ASP.NET AJAX Documentation
description: Custom Editors Extending Auto-Generated Editors
slug: grid/data-editing/grid-editors/custom-editors-extending-auto-generated-editors
tags: custom,editors,extending,auto-generated,editors
published: True
position: 1
---

# Custom Editors Extending Auto-Generated Editors



You can create your own custom column editor class that extends one of the standard column editor base classes such as __GridTextColumnEditor__, __GridDropDownColumnEditor__, or __GridBoolColumnEditor__. You can then enhance the editing capabilities of your grid columns by replacing the auto-generated editor with an instance of your own custom editor.

There are two ways to attach a column editor to a column in your grid:

* Declaratively, at design time (for styling purposes only).

* In the code-behind, using the __CreateColumnEditor__ event.

## Attaching a custom column editor declaratively

In an ASPX file, you can attach an instance of your custom editor to a column by adding an instance to the page and setting the __ColumnEditorID__ property of the column to the ID of the column editor:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" Width="97%" AutoGenerateColumns="False">
	    <MasterTableView>
	      <Columns>
	        <telerik:GridBoundColumn ColumnEditorID="TextEditor1" DataField="ShipName" HeaderText="Ship name"
	          UniqueName="ShipName">
	        </telerik:GridBoundColumn>
	        <telerik:GridEditCommandColumn />
	      </Columns>
	    </MasterTableView></telerik:RadGrid><br />
	  <telerik:GridTextBoxColumnEditor ID="TextEditor1" runat="server">
	    <TextBoxStyle BackColor="#edffc3" BorderColor="#ecbb0d" BorderStyle="Solid" ForeColor="#7fa822" />
	  </telerik:GridTextBoxColumnEditor>
````



## Using the CreateColumnEditor event

In a __CreateColumnEditor__ event handler, you can attach an instance of your custom editor to a column by assigning the __e.ColumnEditor__ parameter of the handler:

>tabbedCode

````C#
	
	    protected void RadGrid1_CreateColumnEditor(object sender, Telerik.Web.UI.GridCreateColumnEditorEventArgs e)
	    {
	        GridBoundColumn column = e.Column as GridBoundColumn;
	        if (column != null && column.DataField == "ShipAddress")
	        {
	            e.ColumnEditor = new MultiLineTextBoxColumnEditor(column);
	        }
	        if (column != null && column.DataField == "OrderDate")
	        {
	            e.ColumnEditor = new DateColumnEditor(column);
	        }
	    }
	
````
````VB.NET
	    Private Sub RadGrid1_CreateColumnEditor(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridCreateColumnEditorEventArgs) Handles RadGrid1.CreateColumnEditor
	        Dim column As GridBoundColumn = TryCast(e.Column, GridBoundColumn)
	        If column IsNot Nothing AndAlso column.DataField = "ShipAddress" Then
	            e.ColumnEditor = New MultiLineTextBoxColumnEditor(column)
	        End If
	        If column IsNot Nothing AndAlso column.DataField = "OrderDate" Then
	            e.ColumnEditor = New DateColumnEditor(column)
	        End If
	    End Sub
````
>end

## Implementing Custom Column Editors

When implementing a custom column editor, your editor class should extend __GridColumnEditorBase__, which implements the __IColumnEditor__ interface. Depending on the type of data your column editor handles, it is a good idea to use __GridTextColumnEditor__, __GridBoolColumnEditor__, or __GridDropDownColumnEditor__ as a base class, because these provide additional support for handling a particular type of data.

In the implementation of your column editor class, You must override the following methods:

* __LoadControlsFromContainer__: This method is where your column editor should extract values from the __TableCell__ of the grid and assign them to the controls it contains.

* __AddControlsToContainer__: This method is where your column editor should create its child controls and add them to its Controls collection.

* __IsInitialized__: This method should return a boolean value indicating whether it is fully loaded and bound, ready for use.

In addition, if you are using __GridTextColumnEditor__, __GridBoolColumnEditor__, or __GridDropDownColumnEditor__ as a base class, you need to provide an implementation for the property that represents the edited value:

* For __GridTextColumnEditor__, this is the __Text__ property (of type __String__).

* For __GridBoolColumnEditor__, this is the __Value__ property (of type __Boolean__).

* For __GridDropDownColumnEditor__, this includes both the __SelectedText__ and __SelectedValue__ properties (of type __String__).

>note Custom editors for each column should inherit the corresponding classes. For example to extend a RadGridBoundColumn's editor you need to inherit GridTextColumnEditor.
>


The example below shows the implementation of two custom column editor classes. Both custom editors extend the __GridTextColumnEditor__ class and can be attached to a __GridBoundColumn__. The first represents an editor with multi-line textbox. The second handles __DateTime__ values.

>tabbedCode

````C#
	
	    public class MultiLineTextBoxColumnEditor : GridTextColumnEditor
	    {
	        private TextBox textBox;
	
	        public MultiLineTextBoxColumnEditor(IGridEditableColumn owner)
	        {
	            base.SetOwner(owner);
	        }
	
	        protected override void LoadControlsFromContainer()
	        {
	            this.textBox = this.ContainerControl.Controls[0] as TextBox;
	        }
	        public override bool IsInitialized
	        {
	            get
	            {
	                return this.textBox != null;
	            }
	        }
	        public override string Text
	        {
	            get
	            {
	                return this.textBox.Text;
	            }
	            set
	            {
	                this.textBox.Text = value;
	            }
	        }
	        protected override void AddControlsToContainer()
	        {
	            this.textBox = new TextBox();
	            this.textBox.TextMode = TextBoxMode.MultiLine;
	            this.textBox.Rows = 4;
	            this.textBox.Columns = 40;
	            this.textBox.BackColor = Color.Crimson;
	            this.textBox.ForeColor = Color.White;
	            this.ContainerControl.Controls.Add(this.textBox);
	        }
	    }
	
	    private class DateColumnEditor : GridTextColumnEditor
	    {
	        private TextBox textBox;
	        private CustomValidator validator;
	        private RequiredFieldValidator reqValidator;
	
	        public DateColumnEditor(IGridEditableColumn owner)
	        {
	            base.SetOwner(owner);
	        }
	
	        protected override void LoadControlsFromContainer()
	        {
	            this.textBox = this.ContainerControl.Controls[0] as TextBox;
	        }
	        public override bool IsInitialized
	        {
	            get
	            {
	                return this.textBox != null;
	            }
	        }
	        public override string Text
	        {
	            get
	            {
	                return this.textBox.Text;
	            }
	            set
	            {
	                this.textBox.Text = value;
	            }
	        }
	        protected override void AddControlsToContainer()
	        {
	            this.textBox = new TextBox();
	            this.ContainerControl.Controls.Add(this.textBox);
	            this.validator = new CustomValidator();
	            this.textBox.ID = "tbDate";
	            this.validator.ServerValidate += new ServerValidateEventHandler(this.ValidateDate);
	            this.validator.ControlToValidate = this.textBox.ID;
	            this.validator.ErrorMessage = " Please, enter a valid date";
	            this.reqValidator = new RequiredFieldValidator();
	            this.reqValidator.ErrorMessage = "This field is required.";
	            this.reqValidator.ControlToValidate = this.textBox.ID;
	            this.ContainerControl.Controls.Add(this.validator);
	            this.ContainerControl.Controls.Add(this.reqValidator);
	        }
	        private void ValidateDate(object sender, ServerValidateEventArgs args)
	        {
	            try
	            {
	                string[] expectedFormats = { "d", "D", "f", "F", "G", "g" };
	                DateTime.ParseExact(args.Value, expectedFormats, null, DateTimeStyles.AllowWhiteSpaces);
	                args.IsValid = true;
	            }
	            catch (Exception ex)
	            {
	                args.IsValid = false;
	                this.validator.Attributes["title"] = ex.Message;
	            }
	        }
	    }
	
````
````VB.NET
	    Public Class MultiLineTextBoxColumnEditor
	        Inherits GridTextColumnEditor
	        Private textBox As TextBox
	
	        Public Sub New(owner As IGridEditableColumn)
	            MyBase.SetOwner(owner)
	        End Sub
	
	        Protected Overrides Sub LoadControlsFromContainer()
	            Me.textBox = TryCast(Me.ContainerControl.Controls(0), TextBox)
	        End Sub
	        Public Overrides ReadOnly Property IsInitialized() As Boolean
	            Get
	                Return Me.textBox IsNot Nothing
	            End Get
	        End Property
	        Public Overrides Property Text() As String
	            Get
	                Return Me.textBox.Text
	            End Get
	            Set(value As String)
	                Me.textBox.Text = value
	            End Set
	        End Property
	        Protected Overrides Sub AddControlsToContainer()
	            Me.textBox = New TextBox()
	            Me.textBox.TextMode = TextBoxMode.MultiLine
	            Me.textBox.Rows = 4
	            Me.textBox.Columns = 40
	            Me.textBox.BackColor = Color.Crimson
	            Me.textBox.ForeColor = Color.White
	            Me.ContainerControl.Controls.Add(Me.textBox)
	        End Sub
	    End Class
	
	    Private Class DateColumnEditor
	        Inherits GridTextColumnEditor
	        Private textBox As TextBox
	        Private WithEvents validator As CustomValidator
	        Private reqValidator As RequiredFieldValidator
	
	        Public Sub New(owner As IGridEditableColumn)
	            MyBase.SetOwner(owner)
	        End Sub
	
	        Protected Overrides Sub LoadControlsFromContainer()
	            Me.textBox = TryCast(Me.ContainerControl.Controls(0), TextBox)
	        End Sub
	        Public Overrides ReadOnly Property IsInitialized() As Boolean
	            Get
	                Return Me.textBox IsNot Nothing
	            End Get
	        End Property
	        Public Overrides Property Text() As String
	            Get
	                Return Me.textBox.Text
	            End Get
	            Set(value As String)
	                Me.textBox.Text = value
	            End Set
	        End Property
	        Protected Overrides Sub AddControlsToContainer()
	            Me.textBox = New TextBox()
	            Me.ContainerControl.Controls.Add(Me.textBox)
	            Me.validator = New CustomValidator()
	            Me.textBox.ID = "tbDate"
	            Me.validator.ControlToValidate = Me.textBox.ID
	            Me.validator.ErrorMessage = " Please, enter a valid date"
	            Me.reqValidator = New RequiredFieldValidator()
	            Me.reqValidator.ErrorMessage = "This field is required."
	            Me.reqValidator.ControlToValidate = Me.textBox.ID
	            Me.ContainerControl.Controls.Add(Me.validator)
	            Me.ContainerControl.Controls.Add(Me.reqValidator)
	        End Sub
	        Private Sub ValidateDate(ByVal source As System.Object, _
	     ByVal args As ServerValidateEventArgs) Handles validator.ServerValidate
	            Try
	                Dim expectedFormats As String() = {"d", "D", "f", "F", "G", "g"}
	                DateTime.ParseExact(args.Value, expectedFormats, Nothing, DateTimeStyles.AllowWhiteSpaces)
	                args.IsValid = True
	            Catch ex As Exception
	                args.IsValid = False
	                Me.validator.Attributes("title") = ex.Message
	            End Try
	        End Sub
	    End Class
````
>end

For a live example that demonstrates custom column editors, see [Custom column editors](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/ExtractValues/DefaultVB.aspx).
