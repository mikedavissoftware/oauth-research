import { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

function App() {
  const [user, setUser] = useState(null)

  const handleSuccess = (credentialResponse) => {
    const tokenDecoded = jwtDecode(credentialResponse.credential)
    console.log(tokenDecoded)
    setUser(tokenDecoded)
    console.log("Below you will find the ID token. Have fun decrypting THAT!")
    console.log(credentialResponse.credential)
  }

  const handleFailure = () => {
    setUser(null)
    console.error("Failed to authenticate with Google")
  }

  return (
    <GoogleOAuthProvider clientId="250221579461-l2roi24d7n7ojq333b2jede2k9744m19.apps.googleusercontent.com">
      <section id="center">
        <div>
          <h1>OAuth Test Application</h1>
        </div>
        <h2>
          Click the button below to test out your Google OAuth Connection!
        </h2>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
        <h3>
          OAuth Success: {user ? 
            (<span style={{color: "green"}}>Yes</span>) :
            (<span style={{color: "red"}}>No</span>)
          }
        </h3>
        {user &&
          <h4>
            User Email: {user.email}
          </h4>
        }
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </GoogleOAuthProvider>
  )
}

export default App
