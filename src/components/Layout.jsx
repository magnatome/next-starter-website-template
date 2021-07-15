import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <>
    {/* This would be a good place to put a main menu */}
    <main>{children}</main>
    {/* This would be a good place to put a footer */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
