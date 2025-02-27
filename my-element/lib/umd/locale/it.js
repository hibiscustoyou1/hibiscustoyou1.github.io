(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/it', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.it = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Pulisci'
      },
      datepicker: {
        now: 'Ora',
        today: 'Oggi',
        cancel: 'Cancella',
        clear: 'Pulisci',
        confirm: 'OK',
        selectDate: 'Seleziona data',
        selectTime: 'Seleziona ora',
        startDate: 'Data inizio',
        startTime: 'Ora inizio',
        endDate: 'Data fine',
        endTime: 'Ora fine',
        prevYear: 'Anno precedente',
        nextYear: 'Anno successivo',
        prevMonth: 'Mese precedente',
        nextMonth: 'Mese successivo',
        year: 'anno',
        month1: 'Gennaio',
        month2: 'Febbraio',
        month3: 'Marzo',
        month4: 'Aprile',
        month5: 'Maggio',
        month6: 'Giugno',
        month7: 'Luglio',
        month8: 'Agosto',
        month9: 'Settembre',
        month10: 'Ottobre',
        month11: 'Novembre',
        month12: 'Dicembre',
        // week: 'settimana',
        weeks: {
          sun: 'Dom',
          mon: 'Lun',
          tue: 'Mar',
          wed: 'Mer',
          thu: 'Gio',
          fri: 'Ven',
          sat: 'Sab'
        },
        months: {
          jan: 'Gen',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mag',
          jun: 'Giu',
          jul: 'Lug',
          aug: 'Ago',
          sep: 'Set',
          oct: 'Ott',
          nov: 'Nov',
          dec: 'Dic'
        }
      },
      select: {
        loading: 'Caricamento',
        noMatch: 'Nessuna corrispondenza',
        noData: 'Nessun dato',
        placeholder: 'Seleziona'
      },
      cascader: {
        noMatch: 'Nessuna corrispondenza',
        loading: 'Caricamento',
        placeholder: 'Seleziona',
        noData: 'Nessun dato'
      },
      pagination: {
        goto: 'Vai a',
        pagesize: '/pagina',
        total: 'Totale {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'OK',
        cancel: 'Annulla',
        error: 'Input non valido'
      },
      upload: {
        deleteTip: 'Premi cancella per rimuovere',
        delete: 'Cancella',
        preview: 'Anteprima',
        continue: 'Continua'
      },
      table: {
        emptyText: 'Nessun dato',
        confirmFilter: 'Conferma',
        resetFilter: 'Reset',
        clearFilter: 'Tutti',
        sumText: 'Somma'
      },
      tree: {
        emptyText: 'Nessun dato'
      },
      transfer: {
        noMatch: 'Nessuna corrispondenza',
        noData: 'Nessun dato',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Inserisci filtro',
        noCheckedFormat: '{total} elementi',
        hasCheckedFormat: '{checked}/{total} selezionati'
      },
      image: {
        error: 'ERRORE'
      },
      pageHeader: {
        title: 'Indietro'
      },
      popconfirm: {
        confirmButtonText: 'Sì',
        cancelButtonText: 'No'
      },
      empty: {
        description: 'Nessun dato'
      }
    }
  };
  module.exports = exports.default;
});