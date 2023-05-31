import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from "mdb-react-ui-kit";

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password,
            });

            if (response.data === "exist") {
                history("/Home", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("Invalid email or password");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <form>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a className="navbar-brand" href="/">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/350289253_928103791779601_8103827268069719477_n.png?stp=dst-png_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFKi9-j9M8Y3PftKv_k15IcFmrOqs7D26wWas6qzsPbrMNq-mgAzRfhJSQ2JSTh-FrYWyi53vOdomEpcmofX2Xu&_nc_ohc=JrUEbXtwCPQAX9taA4U&_nc_oc=AQkCLMQ5Uw3G-Z4YgvHNk7X1SZ4atmYlbvzNMHy5tG_E8ldh8KFxrnHh0v-XYbjkvRHGx9SJdOsAH5J0GpfG8kIq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ47zhlgxhICDfTc8-tCdhuV_6bn7dv1hq6xF-ruqGH9Q&oe=649E6D9A" alt="Logo" width="40" height="40" className="d-inline-block align-top" style={{ marginLeft: '20px' }} />
                    <span className="ml-2" style={{ marginLeft: '10px' }}>SoloCareerFinder</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Registration">Registration</a>
                        </li>
                    </ul>
                </div>
            </nav>




            <div
                className="bg-image"
                style={{
                    backgroundColor: "Grey",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '112vh',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        position: 'absolute',
                        top: 65,
                        left: 0,
                        width: '100%',
                        height: '110%',
                    }}
                ></div>

                <MDBContainer fluid className="d-flex align-items-center justify-content-center">
                    <div className='mask gradient-custom-3'>
                        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                            <MDBCardBody className='px-5 text-center'>
                                <h2 className="text-uppercase text-center mb-5">Login Form</h2>

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Email Address"
                                    size="lg"
                                    id="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"

                                />

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Password"
                                    size="lg"
                                    id="Password"
                                    type="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />

                                <div className="d-flex justify-content-between mx-3 mb-4">
                                    <MDBCheckbox
                                        name="flexCheck"
                                        value=""
                                        id="flexCheckDefault"
                                        label="Remember me"
                                    />
                                    <a href="#!" style={{ marginLeft: '30px' }}>Forgot password?</a>
                                </div>

                                <MDBBtn className="mb-4" onClick={submit}>
                                    Sign in
                                </MDBBtn>

                                <div className="text-center">
                                    <p>
                                        Not a member? <Link to="/Registration">Sign up</Link>
                                    </p>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBContainer>
            </div>
        </form>
    );
}

export default Login;
