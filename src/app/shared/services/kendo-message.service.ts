import { MessageService, LocalizationService } from '@progress/kendo-angular-l10n';
import { Injectable } from '@angular/core';

const data = {
    fa: {
        rtl: true,
        messages: {
            'kendo.grid.noRecords': 'داده ای برای نمایش وجود ندارد.',
            'kendo.grid.pagerFirstPage': 'رفتن به صفحه اول',
            'kendo.grid.pagerPreviousPage': 'رفتن به صفحه قبلی',
            'kendo.grid.pagerNextPage': 'رفتن به صفحه بعدی',
            'kendo.grid.pagerLastPage': 'رفتن به صفحه آخر',
            'kendo.grid.pagerPage': 'صفحه',
            'kendo.grid.pagerOf': 'از',
            'kendo.grid.pagerItems': 'مورد',
            'kendo.grid.pagerItemsPerPage': 'آیتم در صفحه',
            'kendo.grid.filter': 'فیلتر',
            'kendo.grid.filterEqOperator': 'مساوی است با',
            'kendo.grid.filterNotEqOperator': 'نا مساوی است با',
            'kendo.grid.filterIsNullOperator': 'تهی باشد',
            'kendo.grid.filterIsNotNullOperator': 'تهی نباشد',
            'kendo.grid.filterIsEmptyOperator': 'خالی باشد',
            'kendo.grid.filterIsNotEmptyOperator': 'خالی نباشد',
            'kendo.grid.filterStartsWithOperator': 'شروع شود با',
            'kendo.grid.filterContainsOperator': 'شامل می شود',
            'kendo.grid.filterNotContainsOperator': 'شامل نمی شود',
            'kendo.grid.filterEndsWithOperator': 'پایان می یابد با',
            'kendo.grid.filterGteOperator': 'بزرگتر یا مساوی با',
            'kendo.datepicker.today': 'امروز',
            'kendo.timepicker.now': 'اکنون',
            'kendo.timepicker.nowLabel': 'اکنون',
            'kendo.timepicker.accept': 'انتخاب',
            'kendo.timepicker.acceptLabel': 'انتخاب',
            'kendo.timepicker.cancel': 'بستن',
            'kendo.timepicker.cancelLabel': 'بستن',
            'kendo.grid.groupPanelEmpty': 'عنوان ستون مورد نظر را اینجا بکشید'

        }
    },
    ar: {
        rtl: true,
        messages: {
            'kendo.grid.noRecords': 'لا یوجد رکورد',
            'kendo.datepicker.today': 'اليوم'
        }
    },
    en: {
        rtl: false,
        messages: {
            'kendo.grid.noRecords': 'No data to display.',
            'kendo.grid.pagerFirstPage': 'Go to the first page',
            'kendo.grid.pagerPreviousPage': 'Go to the previous page',
            'kendo.grid.pagerNextPage': 'Go to the next page',
            'kendo.grid.pagerLastPage': 'Go to the last page',
            'kendo.grid.pagerPage': 'Page',
            'kendo.grid.pagerOf': 'of',
            'kendo.grid.pagerItems': 'items',
            'kendo.grid.pagerItemsPerPage': 'items per page',
            'kendo.grid.filter': 'Filter',
            'kendo.grid.filterEqOperator': 'Is equal to',
            'kendo.grid.filterNotEqOperator': 'Is not equal to',
            'kendo.grid.filterIsNullOperator': 'Is null',
            'kendo.grid.filterIsNotNullOperator': 'Is not null',
            'kendo.grid.filterIsEmptyOperator': 'Is empty',
            'kendo.grid.filterIsNotEmptyOperator': 'Is not empty',
            'kendo.grid.filterStartsWithOperator': 'Starts with',
            'kendo.grid.filterContainsOperator': 'Contains',
            'kendo.grid.filterNotContainsOperator': 'Does not contain',
            'kendo.grid.filterEndsWithOperator': 'Ends with',
            'kendo.grid.filterGteOperator': 'Is greater than or equal to',
            'kendo.datepicker.today': 'Today'
        }
    }
};
@Injectable({ providedIn: 'root' },
)

export class KendoMessageService extends MessageService {

    constructor() {
        super();
        this.localeId = localStorage.getItem('language');
    }

    public set language(value: string) {
        const lang = data[value];
        if (lang) {
            this.localeId = value;
            this.notify(lang.rtl);
        }
    }

    public get language(): string {
        return this.localeId;
    }

    private localeId = 'fa';

    private get messages(): any {
        const lang = data[this.localeId];
        if (lang) {
            return lang.messages;
        }
    }

    public get(key: string): string {
        return this.messages[key];
    }
}
