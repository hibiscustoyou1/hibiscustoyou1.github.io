(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/es', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.es = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Confirmar',
        clear: 'Limpiar'
      },
      datepicker: {
        now: 'Ahora',
        today: 'Hoy',
        cancel: 'Cancelar',
        clear: 'Limpiar',
        confirm: 'Confirmar',
        selectDate: 'Seleccionar fecha',
        selectTime: 'Seleccionar hora',
        startDate: 'Fecha Incial',
        startTime: 'Hora Inicial',
        endDate: 'Fecha Final',
        endTime: 'Hora Final',
        prevYear: 'Año Anterior',
        nextYear: 'Próximo Año',
        prevMonth: 'Mes Anterior',
        nextMonth: 'Próximo Mes',
        year: '',
        month1: 'enero',
        month2: 'febrero',
        month3: 'marzo',
        month4: 'abril',
        month5: 'mayo',
        month6: 'junio',
        month7: 'julio',
        month8: 'agosto',
        month9: 'septiembre',
        month10: 'octubre',
        month11: 'noviembre',
        month12: 'diciembre',
        // week: 'semana',
        weeks: {
          sun: 'dom',
          mon: 'lun',
          tue: 'mar',
          wed: 'mié',
          thu: 'jue',
          fri: 'vie',
          sat: 'sáb'
        },
        months: {
          jan: 'ene',
          feb: 'feb',
          mar: 'mar',
          apr: 'abr',
          may: 'may',
          jun: 'jun',
          jul: 'jul',
          aug: 'ago',
          sep: 'sep',
          oct: 'oct',
          nov: 'nov',
          dec: 'dic'
        }
      },
      select: {
        loading: 'Cargando',
        noMatch: 'No hay datos que coincidan',
        noData: 'Sin datos',
        placeholder: 'Seleccionar'
      },
      cascader: {
        noMatch: 'No hay datos que coincidan',
        loading: 'Cargando',
        placeholder: 'Seleccionar',
        noData: 'Sin datos'
      },
      pagination: {
        goto: 'Ir a',
        pagesize: '/página',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'Aceptar',
        cancel: 'Cancelar',
        error: 'Entrada inválida'
      },
      upload: {
        deleteTip: 'Pulse Eliminar para retirar',
        delete: 'Eliminar',
        preview: 'Vista Previa',
        continue: 'Continuar'
      },
      table: {
        emptyText: 'Sin Datos',
        confirmFilter: 'Confirmar',
        resetFilter: 'Reiniciar',
        clearFilter: 'Limpiar',
        sumText: 'Suma'
      },
      tree: {
        emptyText: 'Sin Datos'
      },
      transfer: {
        noMatch: 'No hay datos que coincidan',
        noData: 'Sin datos',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Ingresar palabra clave',
        noCheckedFormat: '{total} artículos',
        hasCheckedFormat: '{checked}/{total} revisados'
      },
      image: {
        error: 'HA FALLADO'
      },
      pageHeader: {
        title: 'Volver'
      },
      popconfirm: {
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      },
      empty: {
        description: 'Sin Datos'
      }
    }
  };
  module.exports = exports.default;
});