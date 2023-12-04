import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.temlate'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}

// 190 ms Scripting
// 1408 ms Rendering

// 94 ms Scripting
// 720 ms Rendering

// 26 ms  Scripting
// 147 ms  Rendering
