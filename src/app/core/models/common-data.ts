export class CommonData {
    listId?: number = 0
    listValue?: string = '';
    id?: number;
    title?: string;
    centerId?: number;
}

export class CenterCommonData {
    listId?: number = 0
    listValue?: string = '';
    centerTaxGroupList: CommonData[];
}