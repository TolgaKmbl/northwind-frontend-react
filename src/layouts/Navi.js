import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Menu, Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

export default function Navi() {
	
    const {cartItems} = useSelector(state => state.cart)
	const [isLoggedIn, setIsLoggedIn] = useState(true)

    const history = useHistory()

    const handleSignOut = () => {
        setIsLoggedIn(false)
        history.push("/")
    }

    const handleSignIn = () => {
        setIsLoggedIn(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Link to="/">
                        <Menu.Item
                            name='home'
                        />
                    </Link>
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0 && <CartSummary/>}
                        {
                            isLoggedIn ? <SignedIn handleSignOut={handleSignOut}/> : <SignedOut handleSignIn={handleSignIn}/>
                        } 
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
