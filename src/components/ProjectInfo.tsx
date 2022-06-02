/** @jsxImportSource theme-ui **/

const ProjectInfo = () => {
  return (
    <details sx={{ cursor: 'pointer'}}>
      <summary>This project is currently still being developed.</summary>
      <p>
        This project is currently still being developed. This page may be live from time
        to time for testing, but there may be glitches and performance issues. The server
        will go down and restart at random times without warning. If you would like to
        help with the project or have feedback please{' '}
        <a className="descriptionContact" href="/credits.html">
          contact me
        </a>{' '}
        or report a problem on{' '}
        <a className="descriptionContact" href="https://github.com/sm64js/sm64js/issues">
          Github
        </a>
        .
      </p>
    </details>
  )
}
export default ProjectInfo
