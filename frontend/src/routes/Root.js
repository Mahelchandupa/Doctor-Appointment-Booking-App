import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root;