import { faSort } from '@fortawesome/free-solid-svg-icons';

export class Column {
    id: string;
    title: string;
    sortable: boolean;
    filterable: boolean;
    link: string;
    sortType: string;
    sortIcon: Object;

    constructor(id: string, title: string, sortable: boolean, filterable: boolean, link: string) {
        this.id = id;
        this.title = title;
        this.sortable = sortable;
        this.filterable = filterable;
        this.link = link;
        if (sortable) {
            this.sortIcon = faSort;
            this.sortType = 'none';
        }
    }
}
