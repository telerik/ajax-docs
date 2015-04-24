---
title: Custom
page_title: Custom | RadFilter for ASP.NET AJAX Documentation
description: Custom
slug: filter/field-editors/custom
tags: custom
published: True
position: 1
---

# Custom



Apart from the built-in field editors, the RadFilter also provides the option to use a custom one.

## Defining custom field editors

When defining a custom field editor, you should inherit the *RadFilterDataFieldEditor* class and override the following methods:

* *CopySettings* - it takes the base editor for aparameter. Set its properties here;

* *ExtractValues* - return the value used for building the filter expression;

* *InitializeEditor* - set up the controls in the editor here;

* *SetEditorValues* - set the retained filter value to the control in the editor here.

You can find the code for the definition of a custom field editor with a RadComboBox in it	below:

>note The names of the custom filter classes should differ from the names of the built-in filters ones.
>




````C#
namespace CustomEditors
{
    public class RadCustomFilterDropDownEditor : RadFilterDataFieldEditor
    {
        protected override void CopySettings(RadFilterDataFieldEditor baseEditor)
        {
            base.CopySettings(baseEditor);
            var editor = baseEditor as RadCustomFilterDropDownEditor;
            if (editor != null)
            {
                DataSource = editor.DataSource;
                DataTextField = editor.DataTextField;
                DataValueField = editor.DataValueField;
            }
        }

        public override System.Collections.ArrayList ExtractValues()
        {
            ArrayList list = new ArrayList();
            list.Add(_combo.SelectedValue);
            return list;
        }

        public override void InitializeEditor(System.Web.UI.Control container)
        {
            _combo = new RadComboBox();
            _combo.ID = "MyCombo";
            _combo.DataTextField = DataTextField;
            _combo.DataValueField = DataValueField;
            _combo.DataSource = DataSource;           
            _combo.DataBind();
            container.Controls.Add(_combo);             
        }

        public override void SetEditorValues(System.Collections.ArrayList values)
        {
            if (values != null && values.Count > 0)
            {
                if (values[0] == null)
                    return;
                var item = _combo.FindItemByValue(values[0].ToString());
                if (item != null)
                    item.Selected = true;
            }
        }


        public string DataTextField
        {
            get
            {
                return (string)ViewState["DataTextField"] ?? string.Empty;
            }
            set
            {
                ViewState["DataTextField"] = value;
            }
        }
        public string DataValueField
        {
            get
            {
                return (string)ViewState["DataValueField"] ?? string.Empty;
            }
            set
            {
                ViewState["DataValueField"] = value;
            }
        }
        public DataTable DataSource
        {
            get
            {
                return (DataTable)ViewState["DataSource"] ?? new DataTable();
            }
            set
            {
                ViewState["DataSource"] = value;
            }
        }

        private RadComboBox _combo;
    }
}
````
````VB.NET
Namespace CustomEditors
    Public Class RadCustomFilterDropDownEditor
        Inherits RadFilterDataFieldEditor
        Protected Overrides Sub CopySettings(ByVal baseEditor As RadFilterDataFieldEditor)
            MyBase.CopySettings(baseEditor)
            Dim editor = TryCast(baseEditor, RadCustomFilterDropDownEditor)
            If editor IsNot Nothing Then
                DataSource = editor.DataSource
                DataTextField = editor.DataTextField
                DataValueField = editor.DataValueField
            End If
        End Sub

        Public Overrides Function ExtractValues() As System.Collections.ArrayList
            Dim list As New ArrayList()
            list.Add(_combo.SelectedValue)
            Return list
        End Function

        Public Overrides Sub InitializeEditor(ByVal container As System.Web.UI.Control)
            _combo = New RadComboBox()
            _combo.ID = "MyCombo"
            _combo.DataTextField = DataTextField
            _combo.DataValueField = DataValueField
            _combo.DataSource = DataSource
            _combo.DataBind()
            container.Controls.Add(_combo)
        End Sub

        Public Overrides Sub SetEditorValues(ByVal values As System.Collections.ArrayList)
            If values IsNot Nothing AndAlso values.Count > 0 Then
                If values(0) Is Nothing Then
                    Return
                End If
                Dim item = _combo.FindItemByValue(values(0).ToString())
                If item IsNot Nothing Then
                    item.Selected = True
                End If
            End If
        End Sub


        Public Property DataTextField() As String
            Get
                Return If(DirectCast(ViewState("DataTextField"), String), String.Empty)
            End Get
            Set(ByVal value As String)
                ViewState("DataTextField") = value
            End Set
        End Property
        Public Property DataValueField() As String
            Get
                Return If(DirectCast(ViewState("DataValueField"), String), String.Empty)
            End Get
            Set(ByVal value As String)
                ViewState("DataValueField") = value
            End Set
        End Property
        Public Property DataSource() As DataTable
            Get
                Return If(DirectCast(ViewState("DataSource"), DataTable), New DataTable())
            End Get
            Set(ByVal value As DataTable)
                ViewState("DataSource") = value
            End Set
        End Property

        Private _combo As RadComboBox
    End Class
End Namespace
````


## Using custom field editors

When have a custom editor defined, you can use it in the field editors collection of the RadFilter after you have registered its namespace	in the corresponding page and set it as an editor in the *FieldEditorCreating*	event:

````ASPNET
<%@ Register Namespace="CustomEditors" TagPrefix="custom" %>
````





````ASPNET
<telerik:RadFilter runat="server" ID="RadFilter1" FilterContainerID="SqlDataSource1"
    OnFieldEditorCreating="RadFilter1_FieldEditorCreating" ExpressionPreviewPosition="Bottom">
    <FieldEditors>
        <custom:RadCustomFilterDropDownEditor FieldName="ShipCountry" DataTextField="ShipCountry"
            DataValueField="ShipCountry" />
    </FieldEditors>
</telerik:RadFilter>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, ShipCity, ShipCountry FROM Orders">
</asp:SqlDataSource>
````
````C#
public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    return myDataTable;
}


protected void Page_Load(object sender, EventArgs e)
{
    RadCustomFilterDropDownEditor filterEditor = RadFilter1.FieldEditors[0] as RadCustomFilterDropDownEditor;
    filterEditor.DataSource = GetDataTable("SELECT DISTINCT ShipCountry FROM Orders");
}

protected void RadFilter1_FieldEditorCreating(object sender, RadFilterFieldEditorCreatingEventArgs e)
{
    if (e.EditorType == "RadCustomFilterDropDownEditor")
    {
        e.Editor = new RadCustomFilterDropDownEditor();
    }
}
````
````VB.NET
Public Function GetDataTable(ByVal query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)

    Dim myDataTable As New DataTable()

    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try

    Return myDataTable
End Function


Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    Dim filterEditor As RadCustomFilterDropDownEditor = TryCast(RadFilter1.FieldEditors(0), RadCustomFilterDropDownEditor)
    filterEditor.DataSource = GetDataTable("SELECT DISTINCT ShipCountry FROM Orders")
End Sub

Protected Sub RadFilter1_FieldEditorCreating(ByVal sender As Object, ByVal e As RadFilterFieldEditorCreatingEventArgs)
    If e.EditorType = "RadCustomFilterDropDownEditor" Then
        e.Editor = New RadCustomFilterDropDownEditor()
    End If
End Sub
````

