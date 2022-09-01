import { Routes, Route } from 'react-router-dom';
import { Admin } from '../Pages/Admin';
import { Assignment } from '../Pages/Assignment';
import { Lectures } from '../Pages/Lectures';
import { Home } from '../Pages/Home';
export const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/lectures' element={<Lectures/>}/>
            <Route path='/admin' element={<Admin/>} />
            <Route path='/assignment' element={<Assignment/>} />
        </Routes>
    )
}