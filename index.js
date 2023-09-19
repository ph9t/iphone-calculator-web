const buttonDescs = [
  [
    { type: 'gen_op', name: 'clear', label: 'AC' },
    { type: 'gen_op', name: '', label: '±' },
    { type: 'gen_op', name: 'percentage', label: '%' },
    { type: 'bin_op', name: 'divide', label: '÷' },
  ],
  [
    { type: 'num', name: 'seven', label: '7' },
    { type: 'num', name: 'eight', label: '8' },
    { type: 'num', name: 'nine', label: '9' },
    { type: 'bin_op', name: 'multiply', label: '×' },
  ],
  [
    { type: 'num', name: 'four', label: '4' },
    { type: 'num', name: 'five', label: '5' },
    { type: 'num', name: 'six', label: '6' },
    { type: 'bin_op', name: 'subtract', label: '-' },
  ],
  [
    { type: 'num', name: 'one', label: '1' },
    { type: 'num', name: 'two', label: '2' },
    { type: 'num', name: 'three', label: '3' },
    { type: 'bin_op', name: 'add', label: '+' },
  ],
  [
    { type: 'num', name: 'zero', label: '0' },
    { type: 'gen_op', name: 'decimal', label: '.' },
    { type: 'gen_op', name: 'equals', label: '=' },
  ],
]

const buttons = document.querySelector('.buttons')

for (let buttonDescRow of buttonDescs) {
  const buttonRow = document.createElement('div')
  buttonRow.classList.add('button-row')

  for (let buttonDesc of buttonDescRow) {
    const button = document.createElement('div')
    button.classList.add('button')
    button.setAttribute('id', buttonDesc.name)
    button.setAttribute('data-button-type', buttonDesc.type)

    const span = document.createElement('span')
    span.textContent = buttonDesc.label

    if (buttonDesc.name === 'zero') button.classList.add('zero')

    button.appendChild(span)
    buttonRow.appendChild(button)
  }

  buttons.appendChild(buttonRow)
}
