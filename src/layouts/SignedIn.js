import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({handleSignOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"/>
                <Dropdown pointing="top right" text="Tolga">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info"/>
                        <Dropdown.Item text="Sign Out" icon="sign-out" onClick={handleSignOut}/>                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
