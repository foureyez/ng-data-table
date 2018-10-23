import { faSort } from '@fortawesome/free-solid-svg-icons';

export class Column {
    id: string;
    title: string;
    sortable: boolean;
    sortType: string;
    sortIcon: Object;

    constructor(id: string, title: string, sortable: boolean) {
        this.id = id;
        this.title = title;
        this.sortable = sortable;
        if (sortable) {
            this.sortIcon = faSort;
            this.sortType = 'none';
        }
    }
}
