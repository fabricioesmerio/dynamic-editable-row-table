
export interface ConfigFeEditableRowTable {
    tableTitle?: string;
    primarykey: any;
    tableConfig: Array<TableConfig>
    actions: Array<ActionsRowTable>
}

interface ActionsRowTable {
    name: string;
    event: string;
    type: 'primary' | 'danger' | 'warning'
}

interface TableConfig {
    header: string;
    model: string;
    editable: boolean;
    type: 'text' | 'number' | 'checkbox' | 'date'
}