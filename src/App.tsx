import { lazy, Suspense, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import menuIcon from './images/ic_menu_black_24dp.svg'

const basic_examples = [
  'basic-demo',
  'transformcontrols-and-makedefault',
  'bounds-and-makedefault',
  'instanced-vertex-colors',
  'progressive-loading-states-with-suspense',
  'gltf-animations-re-used',
  're-using-gltfs',
  'mixing-html-and-webgl',
  'viewcube',
  'mixing-controls',
  'video-textures',
  'sky-dome-with-annotations',
  'tying-canvas-to-scroll-offset'
]

const Menu = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [examples, setExamples] = useState(basic_examples)

  const searchExamples = (event: any) => {
    const result = basic_examples.filter(item => item.includes(event.target.value))
    setExamples(result)
  }

  return (
    <>
      <div className='fixed m-4 p-3 bg-white z-10 rounded-full cursor-pointer'>
        <img src={menuIcon} onClick={() => setShowMenu(true)} alt='' />
      </div>

      {showMenu && <div className='fixed bg-slate-100 w-[300px] h-full overflow-x-hidden z-20'>
        <div className='h-12 flex justify-between items-center border-b border-b-[#e8e8e8]'>
          <h1 className='pl-4 text-[#049ef4]'>R3F Examples</h1>
          <div className='bg-[url("./images/ic_close_black_24dp.svg")] bg-center
            w-12 h-12 bg-no-repeat cursor-pointer'
            onClick={() => setShowMenu(false)}
            ></div>
        </div>
        <div className='overflow-hidden w-[300px]'>
          <div className='flex items-center h-12 p-4 border-b border-b-[#e8e8e8]'>
            <input className='bg-[url("./images/ic_search_black_24dp.svg")] bg-transparent
              bg-no-repeat border-none outline-none w-full pl-8 text-[#444]' 
              onChange={searchExamples}
            />
          </div>
          <div className='px-4 overflow-x-hidden overflow-y-auto'>
            <h2 className='my-4 font-medium text-[#049ef4]'>Basic Examples</h2>
            {examples.map(item => (
              <div 
                key={item} 
                className='pb-1 font-medium hover:text-[#049ef4] cursor-pointer'
                onClick={() => navigate('/'+item)}
              >
                {item.replaceAll('-', ' ')}
              </div>
            ))}
          </div>
        </div>
      </div>}
    </>
  )
}

const App = () => {
  const routes: any[] = []
  basic_examples.forEach(item => {
    const Component = lazy(() => import(`./basic-examples/${item}/Example`))
    routes.push(<Route key={item} path={item} element={
      <Component>
        <Menu />
      </Component>
    } />)
  })

  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map(route => route)}
        <Route path='*' element={ <Navigate to='/basic-demo' /> } />
      </Routes>
    </Suspense>
  )
}

export default App
