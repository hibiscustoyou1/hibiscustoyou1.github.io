(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/sv-SE', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.svSE = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Töm'
      },
      datepicker: {
        now: 'Nu',
        today: 'Idag',
        cancel: 'Avbryt',
        clear: 'Töm',
        confirm: 'OK',
        selectDate: 'Välj datum',
        selectTime: 'Välj tid',
        startDate: 'Startdatum',
        startTime: 'Starttid',
        endDate: 'Slutdatum',
        endTime: 'Sluttid',
        prevYear: 'Föregående år',
        nextYear: 'Nästa år',
        prevMonth: 'Föregående månad',
        nextMonth: 'Nästa månad',
        year: '',
        month1: 'Januari',
        month2: 'Februari',
        month3: 'Mars',
        month4: 'April',
        month5: 'Maj',
        month6: 'Juni',
        month7: 'Juli',
        month8: 'Augusti',
        month9: 'September',
        month10: 'Oktober',
        month11: 'November',
        month12: 'December',
        // week: 'week',
        weeks: {
          sun: 'Sön',
          mon: 'Mån',
          tue: 'Tis',
          wed: 'Ons',
          thu: 'Tor',
          fri: 'Fre',
          sat: 'Lör'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Maj',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Laddar',
        noMatch: 'Hittade inget',
        noData: 'Ingen data',
        placeholder: 'Välj'
      },
      cascader: {
        noMatch: 'Hittade inget',
        loading: 'Laddar',
        placeholder: 'Välj',
        noData: 'Ingen data'
      },
      pagination: {
        goto: 'Gå till',
        pagesize: '/sida',
        total: 'Totalt {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Meddelande',
        confirm: 'OK',
        cancel: 'Avbryt',
        error: 'Felaktig inmatning'
      },
      upload: {
        deleteTip: 'press delete to remove', // to be translated
        delete: 'Radera',
        preview: 'Förhandsvisa',
        continue: 'Fortsätt'
      },
      table: {
        emptyText: 'Inga Data',
        confirmFilter: 'Bekräfta',
        resetFilter: 'Återställ',
        clearFilter: 'Alla',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Ingen data'
      },
      transfer: {
        noMatch: 'Hittade inget',
        noData: 'Ingen data',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      },
      image: {
        error: 'FAILED' // to be translated
      },
      pageHeader: {
        title: 'Bakåt' // to be translated
      },
      popconfirm: {
        confirmButtonText: 'Ja',
        cancelButtonText: 'Nej'
      },
      empty: {
        description: 'Inga Data'
      }
    }
  };
  module.exports = exports.default;
});