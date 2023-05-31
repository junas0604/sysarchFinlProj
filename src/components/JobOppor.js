import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';



function JobOppor() {
    const pictures = [
        {
            id: 1,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lMpdboSDCjzMa6NE9X5M4qTcz9ZSfefn7w&usqp=CAU',
            linkUrl: '/pageOne',
        },
        {
            id: 2,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjquAYjC9nT44giXhdJ1_wJPTK0Oi0drQl9Q&usqp=CAU',
            linkUrl: '/pageTwo',
        },
    ];

    return (
        <form>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/350289253_928103791779601_8103827268069719477_n.png?stp=dst-png_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFKi9-j9M8Y3PftKv_k15IcFmrOqs7D26wWas6qzsPbrMNq-mgAzRfhJSQ2JSTh-FrYWyi53vOdomEpcmofX2Xu&_nc_ohc=JrUEbXtwCPQAX9taA4U&_nc_oc=AQkCLMQ5Uw3G-Z4YgvHNk7X1SZ4atmYlbvzNMHy5tG_E8ldh8KFxrnHh0v-XYbjkvRHGx9SJdOsAH5J0GpfG8kIq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ47zhlgxhICDfTc8-tCdhuV_6bn7dv1hq6xF-ruqGH9Q&oe=649E6D9A"
                        alt="Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        style={{ marginLeft: '20px' }}
                    />
                    <span className="ml-2" style={{ marginLeft: '10px' }}>
                        SoloCareerFinder
                    </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Registration">
                                Registration
                            </a>
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

                <table style={{ margin: '0 auto' }}>
                    <tbody>
                        {pictures.map((picture) => (
                            <tr key={picture.id}>
                                <td style={{ textAlign: 'center' }}>
                                    <Link to={picture.linkUrl}>
                                        <img
                                            src={picture.imageUrl}
                                            alt={`Picture ${picture.id}`}
                                            style={{ width: '100%', height: 'auto', marginTop: '30px' }}
                                        />
                                    </Link>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </form>
    );
}

export default JobOppor;
