import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/146648077?v=4"/>
        <Dropdown pointing="top right" text='Erdi'>
            <Dropdown.Menu>
                <Dropdown.Item text="Profile" icon="user" />
                <Dropdown.Item onClick={signOut} text="Logout" icon="sign-out" />
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
