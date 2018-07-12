$(document).ready(function(){
  var $input = $('.input')

  var values = {
    first: null,
    second: null,
    operation: null
  }

  $('.calc').on('click', 'button', function(){
    var val = $(this).html()

    switch (val) {
      case 'C':
        values = {
          first: null,
          second: null,
          operation: null,
          move:false
        }
        break;
      case '/':
        if (values.first !== null) {
          values.operation = '/'
          values.move = true
        }
        break;
      case 'X':
        if (values.first !== null) {
          values.operation = 'X'
          values.move = true
        }
        break;
      case '-':
        if (values.first !== null) {
          values.operation = '-'
          values.move = true
        }
        break;
      case '+':
        if (values.first !== null) {
          values.operation = '+'
          values.move = true
        }
        break;
      case '=':
        values.move = false
        values.first = runequation(values)
        values.second = null
        values.operation = null
        $input.val(values.first)
        break;
      case '.':
        if (values.move) {
          values.second += '.'
        } else {
          values.first += '.'
        }
        break;
      default:
        console.log(values.first)
        if (values.first == null) {
          values.first = val + ''
          $input.val(values.first)
        } else {
          if (values.move) {
            if (values.second == null) {
              values.second = val
            } else {
              values.second += val + ''  
            }
            $input.val(values.second)
          } else {
            values.first += val + ''
            $input.val(values.first)
          }
        }
        break;
    }
  })


  function runequation(values) {
    switch (values.operation) {
      case '/':
        return Number(values.first) / Number(values.second)
      case 'X':
        return Number(values.first) * Number(values.second)
      case '-':
        return Number(values.first) - Number(values.second)
      case '+':
        return Number(values.first) + Number(values.second)
    }
  }
})