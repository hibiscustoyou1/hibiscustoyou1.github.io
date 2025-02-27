(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/lt', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.lt = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Valyti'
      },
      datepicker: {
        now: 'Dabar',
        today: 'Šiandien',
        cancel: 'Atšaukti',
        clear: 'Valyti',
        confirm: 'OK',
        selectDate: 'Pasirink datą',
        selectTime: 'Pasirink laiką',
        startDate: 'Data nuo',
        startTime: 'Laikas nuo',
        endDate: 'Data iki',
        endTime: 'Laikas iki',
        prevYear: 'Metai atgal',
        nextYear: 'Metai į priekį',
        prevMonth: 'Mėn. atgal',
        nextMonth: 'Mėn. į priekį',
        year: '',
        month1: 'Sausis',
        month2: 'Vasaris',
        month3: 'Kovas',
        month4: 'Balandis',
        month5: 'Gegužė',
        month6: 'Birželis',
        month7: 'Liepa',
        month8: 'Rugpjūtis',
        month9: 'Rugsėjis',
        month10: 'Spalis',
        month11: 'Lapkritis',
        month12: 'Gruodis',
        // week: 'savaitė',
        weeks: {
          sun: 'S.',
          mon: 'Pr.',
          tue: 'A.',
          wed: 'T.',
          thu: 'K.',
          fri: 'Pn.',
          sat: 'Š.'
        },
        months: {
          jan: 'Sau',
          feb: 'Vas',
          mar: 'Kov',
          apr: 'Bal',
          may: 'Geg',
          jun: 'Bir',
          jul: 'Lie',
          aug: 'Rugp',
          sep: 'Rugs',
          oct: 'Spa',
          nov: 'Lap',
          dec: 'Gruo'
        }
      },
      select: {
        loading: 'Kraunasi',
        noMatch: 'Duomenų nerasta',
        noData: 'Nėra duomenų',
        placeholder: 'Pasirink'
      },
      cascader: {
        noMatch: 'Duomenų nerasta',
        loading: 'Kraunasi',
        placeholder: 'Pasirink',
        noData: 'Nėra duomenų'
      },
      pagination: {
        goto: 'Eiti į',
        pagesize: '/p',
        total: 'Viso {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Žinutė',
        confirm: 'OK',
        cancel: 'Atšaukti',
        error: 'Klaida įvestuose duomenyse'
      },
      upload: {
        deleteTip: 'spauskite "Trinti" norėdami pašalinti',
        delete: 'Trinti',
        preview: 'Peržiūrėti',
        continue: 'Toliau'
      },
      table: {
        emptyText: 'Duomenų nerasta',
        confirmFilter: 'Patvirtinti',
        resetFilter: 'Atstatyti',
        clearFilter: 'Išvalyti',
        sumText: 'Suma'
      },
      tree: {
        emptyText: 'Nėra duomenų'
      },
      transfer: {
        noMatch: 'Duomenų nerasta',
        noData: 'Nėra duomenų',
        titles: ['Sąrašas 1', 'Sąrašas 2'],
        filterPlaceholder: 'Įvesk raktažodį',
        noCheckedFormat: 'Viso: {total}',
        hasCheckedFormat: 'Pažymėta {checked} iš {total}'
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
        description: 'Duomenų nerasta'
      }
    }
  };
  module.exports = exports.default;
});