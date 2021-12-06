import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({handleSignIn}) {
    return (
        <div>
            <Menu.Item>
                <Button.Group>
                    <Button>Sign In</Button>
                    <Button.Or text='&amp;' />
                    <Button positive onClick={handleSignIn}>Log In</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
