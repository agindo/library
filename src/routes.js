import React from'react';
import { Route, Switch, Redirect } from'react-router-dom';
import AddBook from './components/AddBook';
import ListBooks from './components/ListBooks';

const Routes = () => (
<Switch>
    {/* Route ini menggunakan path /home untuk menampilkan component ListBooks*/}
    <Route path="/home" component={ListBooks}/>
    {/* TODO: Arahkan route pada path /tambah yang menampilkan component AddBook */}
    {/* Buatu rout disini */}
    <Route path="/tambah" component={AddBook}/>
    <Redirect from='/' to='/home' />    
</Switch>
);
 
export default Routes;

