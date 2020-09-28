import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Medivia Loot Helper</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Description"
          content="Simple tool to help Medivians sell their loot."
        />
        <link rel="shortcut icon" href="../../favicon.png" type="image/png" />
      </Head>

      <div>{children}</div>
    </div>
  )
}
export default Layout