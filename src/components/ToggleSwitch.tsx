/** @jsxImportSource theme-ui **/
const ToggleSwitch = ({
  checked = false,
  color,
  onChange,
  onClick,
  id,
}: {
  checked: boolean
  color?: string
  id?: string
  onChange?: () => void
  onClick: () => void
}) => {
  let baseSizing = {
    width: 50,
  }
  return (
    <div
      sx={{
        'input[type="checkbox"]': {
          height: '0',
          width: '0',
          visibility: 'hidden',
          position: 'absolute',
        },
        '& label': {
          cursor: 'pointer',
          textIndent: '-9999px',
          width: baseSizing.width + 'px',
          height: baseSizing.width / 2 + 'px',
          background: 'grey',
          display: 'block',
          borderRadius: baseSizing.width,
          position: 'relative',
        },

        'label:after': {
          content: '""',
          position: 'absolute',
          top: baseSizing.width / 40 + 'px',
          left: baseSizing.width / 40 + 'px',
          width: (baseSizing.width / 2) * 0.9 + 'px',
          height: (baseSizing.width / 2) * 0.9 + 'px',
          background: '#fff',
          borderRadius: baseSizing.width,
          transition: '0.3s',
        },

        'input:checked + label': {
          background: '#03891C',
        },

        'input:checked + label:after': {
          left: `calc(100% - ${baseSizing.width / 40}px)`,
          transform: 'translateX(-100%)',
        },

        'label:active:after': {
          width: 0.65 * baseSizing.width + 'px',
        },
      }}
    >
      
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => {}}
          onClick={onClick}
        />
        <label htmlFor={id}>Toggle</label>
      
    </div>
  )
}

export default ToggleSwitch
