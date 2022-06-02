/** @jsxImportSource theme-ui **/

const SM64Button = ({
  children,
  color,
  onClick,
  id,
  disabled,
  pressed
}: {
  children?: string
  color: string
  onClick: () => void
  id?: string
  disabled?: boolean
  pressed?: boolean
}) => {
  let btnColor
  switch (color) {
    case 'blue':
      btnColor = 'url(/images/buttons/btn-blue-edit.png)'
      break
    case 'pink':
      btnColor = 'url(/images/buttons/btn-pink-edit.png)'
      break
    case 'green':
      btnColor = 'url(/images/buttons/btn-green-edit.png)'
      break
    case 'yellow':
      btnColor = 'url(/images/buttons/btn-yellow-edit.png)'
      break
    case 'red':
      btnColor = 'url(/images/buttons/btn-red-edit.png)'
      break
    case 'stone':
      btnColor = 'url(/images/buttons/btn-red-edit.png)'
      break
    default:
      btnColor = 'none'
      break
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      id={id}
      sx={{
        borderStyle: 'none',
        margin: '0',
        fontFamily: 'TextboxFont',
        fontSize: '140%',
        color: '#fff',
        textDecoration: 'none',
        textShadow: 'rgb(0 0 0 / 32%) 2px 2px 1px',
        cursor: 'pointer',
        padding: '0',
        height: 'fit-content',
        background: `${btnColor} 100% 100%`,
      }}
    >
      <div
        sx={{
          // borderColor:
          //
          borderColor: pressed
            ? 'hsla(0,0%,94.1%,.3411764705882353) hsla(0,0%,94.1%,.3411764705882353) hsla(0,0%,94.1%,.3411764705882353) hsla(0,0%,94.1%,.3411764705882353)'
            : 'hsla(0,0%,94.1%,.3411764705882353) hsla(0,0%,94.1%,.3411764705882353) rgba(49,49,49,.7215686274509804) rgba(49,49,49,.7215686274509804)',
          borderStyle: 'solid',
          borderWidth: '5px',
          padding: '0.1em 0.5em',
          backgroundClip: 'padding-box',
          fontFamily: 'textbox',
        }}
      >
        {children}
      </div>
    </button>
  )
}
export default SM64Button
