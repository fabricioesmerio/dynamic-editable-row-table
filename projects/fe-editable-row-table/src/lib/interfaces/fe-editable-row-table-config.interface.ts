
export interface ConfigFeEditableRowTable {
    tableTitle?: string;
    primarykey: any;
    tableConfig: Array<TableConfig>
    bntActions: Array<ButtonsAction>
}

export interface ButtonsAction {
    label: string;
    event: string;
    type: 'primary' | 'danger' | 'warning'
}

export interface TableConfig {
    header: string;
    model: string;
    editable: boolean;
    type: 'text' | 'number' | 'checkbox' | 'date'
}