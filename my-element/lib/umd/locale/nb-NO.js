(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/nb-NO', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.nbNO = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Tøm'
      },
      datepicker: {
        now: 'Nå',
        today: 'I dag',
        cancel: 'Avbryt',
        clear: 'Tøm',
        confirm: 'OK',
        selectDate: 'Velg dato',
        selectTime: 'Velg tidspunkt',
        startDate: 'Start Dato',
        startTime: 'Start Tidspunkt',
        endDate: 'Sluttdato',
        endTime: 'Sluttidspunkt',
        prevYear: 'Forrige År',
        nextYear: 'Neste År',
        prevMonth: 'Forrige Måned',
        nextMonth: 'Neste Måned',
        year: '',
        month1: 'Januar',
        month2: 'Februar',
        month3: 'Mars',
        month4: 'April',
        month5: 'Mai',
        month6: 'Juni',
        month7: 'Juli',
        month8: 'August',
        month9: 'September',
        month10: 'Oktober',
        month11: 'November',
        month12: 'Desember',
        // week: 'week',
        weeks: {
          sun: 'Søn',
          mon: 'Man',
          tue: 'Tir',
          wed: 'Ons',
          thu: 'Tor',
          fri: 'Fre',
          sat: 'Lør'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Des'
        }
      },
      select: {
        loading: 'Laster',
        noMatch: 'Ingen samsvarende data',
        noData: 'Ingen data',
        placeholder: 'Velg'
      },
      cascader: {
        noMatch: 'Ingen samsvarende data',
        loading: 'Laster',
        placeholder: 'Velg',
        noData: 'Ingen data'
      },
      pagination: {
        goto: 'Gå til',
        pagesize: '/side',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'OK',
        cancel: 'Avbryt',
        error: 'Ugyldig input'
      },
      upload: {
        deleteTip: 'trykk slett for å ta bort',
        delete: 'Slett',
        preview: 'Forhåndsvisning',
        continue: 'Fortsett'
      },
      table: {
        emptyText: 'Ingen Data',
        confirmFilter: 'Bekreft',
        resetFilter: 'Tilbakestill',
        clearFilter: 'Alle',
        sumText: 'Sum'
      },
      tree: {
        emptyText: 'Ingen Data'
      },
      transfer: {
        noMatch: 'Ingen samsvarende data',
        noData: 'Ingen data',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Tast inn nøkkelord',
        noCheckedFormat: '{total} gjenstander',
        hasCheckedFormat: '{checked}/{total} sjekket'
      },
      image: {
        error: 'MISLYKTES'
      },
      pageHeader: {
        title: 'Tilbake'
      },
      popconfirm: {
        confirmButtonText: 'Ja',
        cancelButtonText: 'Nei'
      },
      empty: {
        description: 'Ingen Data'
      }
    }
  };
  module.exports = exports.default;
});