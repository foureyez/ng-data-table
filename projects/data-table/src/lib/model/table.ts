import { Column } from "./column";
import { Row } from "./row";

export class Table {
    columns: Column[];
    rows: Row[];

    setColumns(columns : Column[]){
        this.columns = columns;
    }

    setRows(rows: Object[]) {
        let tmp = new Array<Row>();

        rows.forEach(row => {  
            tmp.push(new Row(row));
        });
        this.rows = tmp;
    }

}