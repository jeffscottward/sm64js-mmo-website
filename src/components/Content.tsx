/** @jsxImportSource theme-ui **/
const Content = ({ children }: {
  children?: any
}) => {
  return (
    <section
      className="Content"
      sx={{
        width: '100%',
        maxWidth: '1080px',
        my: [0,4],
        mx: 'auto',
        p: 4,
        bg: 'rgba(255,255,255,.9)'
      }}
    > 
      {children}
    </section>
  )
}
export default Content
