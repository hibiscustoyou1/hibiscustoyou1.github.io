(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/pl', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.pl = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Wyczyść'
      },
      datepicker: {
        now: 'Teraz',
        today: 'Dzisiaj',
        cancel: 'Anuluj',
        clear: 'Wyczyść',
        confirm: 'OK',
        selectDate: 'Wybierz datę',
        selectTime: 'Wybierz godzinę',
        startDate: 'Data początkowa',
        startTime: 'Godzina początkowa',
        endDate: 'Data końcowa',
        endTime: 'Czas końcowa',
        prevYear: 'Poprzedni rok',
        nextYear: 'Następny rok',
        prevMonth: 'Poprzedni miesiąc',
        nextMonth: 'Następny miesiąc',
        year: 'rok',
        month1: 'styczeń',
        month2: 'luty',
        month3: 'marzec',
        month4: 'kwiecień',
        month5: 'maj',
        month6: 'czerwiec',
        month7: 'lipiec',
        month8: 'sierpień',
        month9: 'wrzesień',
        month10: 'październik',
        month11: 'listopad',
        month12: 'grudzień',
        week: 'tydzień',
        weeks: {
          sun: 'niedz.',
          mon: 'pon.',
          tue: 'wt.',
          wed: 'śr.',
          thu: 'czw.',
          fri: 'pt.',
          sat: 'sob.'
        },
        months: {
          jan: 'STY',
          feb: 'LUT',
          mar: 'MAR',
          apr: 'KWI',
          may: 'MAJ',
          jun: 'CZE',
          jul: 'LIP',
          aug: 'SIE',
          sep: 'WRZ',
          oct: 'PAŹ',
          nov: 'LIS',
          dec: 'GRU'
        }
      },
      select: {
        loading: 'Ładowanie',
        noMatch: 'Brak dopasowań',
        noData: 'Brak danych',
        placeholder: 'Wybierz'
      },
      cascader: {
        noMatch: 'Brak dopasowań',
        loading: 'Ładowanie',
        placeholder: 'Wybierz',
        noData: 'Brak danych'
      },
      pagination: {
        goto: 'Idź do',
        pagesize: '/strona',
        total: 'Wszystkich {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Wiadomość',
        confirm: 'OK',
        cancel: 'Anuluj',
        error: 'Wiadomość zawiera niedozwolone znaki'
      },
      upload: {
        deleteTip: 'kliknij kasuj aby usunąć',
        delete: 'Kasuj',
        preview: 'Podgląd',
        continue: 'Kontynuuj'
      },
      table: {
        emptyText: 'Brak danych',
        confirmFilter: 'Potwierdź',
        resetFilter: 'Resetuj',
        clearFilter: 'Wszystko',
        sumText: 'Razem'
      },
      tree: {
        emptyText: 'Brak danych'
      },
      transfer: {
        noMatch: 'Brak dopasowań',
        noData: 'Brak danych',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Wpisz szukaną frazę',
        noCheckedFormat: 'razem: {total}',
        hasCheckedFormat: 'wybranych: {checked}/{total}'
      },
      image: {
        error: 'FAILED' // to be translated
      },
      pageHeader: {
        title: 'Back' // to be translated
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      },
      empty: {
        description: 'Brak danych'
      }
    }
  };
  module.exports = exports.default;
});