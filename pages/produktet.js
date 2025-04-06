import { useState, useEffect } from 'react';
import Footer1 from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function Produktet() {
    const projects = [
        {
            id: 1,
            image: "/assets/img/project/project-1.jpg",
            title: "OSLO CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 2,
            image: "/assets/img/project/project-2.jpg",
            title: "COTTON CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 3,
            image: "/assets/img/project/project-3.jpg",
            title: "SOHO CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 4,
            image: "/assets/img/project/project-4.jpg",
            title: "MONICA CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 5,
            image: "/assets/img/project/project-5.jpg",
            title: "JAZZ CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 6,
            image: "/assets/img/project/project-6.jpg",
            title: "RUMBA CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 7,
            image: "/assets/img/project/project-7.jpg",
            title: "KIRA CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 8,
            image: "/assets/img/project/project-8.jpg",
            title: "JAZZ CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për tarracën, kopshtin apo lokalin tuaj."
        },
        {
            id: 9,
            image: "/assets/img/project/project-9.JPG",
            title: "RIO CHAIR SET & ESPINA CHAIR SET",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 10,
            image: "/assets/img/project/project-10.jpg",
            title: "ESPINA CHAIR SET",
            description: "Karrige elegante për çdo."
        },
        {
            id: 11,
            image: "/assets/img/project/project-11.JPG",
            title: "NOVA CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë."
        },
        {
            id: 12,
            image: "/assets/img/project/project-12.JPG",
            title: "RIO CHAIR SET",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 13,
            image: "/assets/img/project/project-13.JPG",
            title: "MONO CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për çdo ambient."
        },
        {
            id: 14,
            image: "/assets/img/project/project-14.JPG",
            title: "ESPINA CHAIR SET",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 15,
            image: "/assets/img/project/project-15.JPG",
            title: "AREON CHAIR SET",
            description: "Kombinim perfekt i stilit dhe rehatisë për lokalin tuaj."
        },
        {
            id: 16,
            image: "/assets/img/project/project-16.JPG",
            title: "Tavolina HPL ( Compact ) , Druri Masiv , MDF",
            description: "Tavolina për çdo ambient."
        },
        {
            id: 17,
            image: "/assets/img/project/project-17.JPG",
            title: "RIO CHAIR",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 18,
            image: "/assets/img/project/project-18.JPG",
            title: "RIO CHAIR",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 19,
            image: "/assets/img/project/project-19.JPG",
            title: "RIO CHAIR",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 20,
            image: "/assets/img/project/project-20.JPG",
            title: "RIO CHAIR",
            description: "Karrige elegante për çdo ambient."
        },
        {
            id: 21,
            image: "/assets/img/project/project-21.JPG",
            title: "",
            description: "Krijoni një ambijent modern me modelet tona elegante për çdo ambient."
        },
        {
            id: 22,
            image: "/assets/img/project/project-22.JPG",
            title: "ESPINA CHAIR SET",
            description: "Krijoni një ambijent modern me modelet tona elegante për çdo ambient."
        },
        {
            id: 23,
            image: "/assets/img/project/project-23.JPG",
            title: "",
            description: "Krijoni një ambijent modern me modelet tona"
        },
        {
            id: 24,
            image: "/assets/img/project/project-24.JPG",
            title: "SOFA LUX SET",
            description: "Krijoni një ambijent modern me modelet tona"
        },
        {
            id: 25,
            image: "/assets/img/project/project-25.JPG",
            title: "",
            description: "Krijoni një ambijent modern me modelet tona"
        },
        {
            id: 26,
            image: "/assets/img/project/project-26.JPG",
            title: "Nova ChairSet",
            description: "Krijoni një ambijent modern me modelet tona"
        },
        {
            id: 27,
            image: "/assets/img/project/project-27.JPG",
            title: "IBIZA ChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 28,
            image: "/assets/img/project/project-28.JPG",
            title: "Malta ChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 29,
            image: "/assets/img/project/project-29.JPG",
            title: "",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 30,
            image: "/assets/img/project/project-30.JPG",
            title: "Elegance ChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 31,
            image: "/assets/img/project/project-31.JPG",
            title: "Nova Chair",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 32,
            image: "/assets/img/project/project-32.JPG",
            title: "Nova ChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 33,
            image: "/assets/img/project/project-33.JPG",
            title: "Nova ChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 34,
            image: "/assets/img/project/project-34.JPG",
            title: "MonoChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 35,
            image: "/assets/img/project/project-35.JPG",
            title: "RioChairSet",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 36,
            image: "/assets/img/project/project-36.JPG",
            title: "CairoWood",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 37,
            image: "/assets/img/project/project-37.JPG",
            title: "CairoWood",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 38,
            image: "/assets/img/project/project-38.JPG",
            title: "Sofa Capo Set",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 39,
            image: "/assets/img/project/project-39.JPG",
            title: "Sofa Capo Set",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 40,
            image: "/assets/img/project/project-40.JPG",
            title: "Aragon Chair Set",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 41,
            image: "/assets/img/project/project-41.JPG",
            title: "RITA CHAIR",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 42,
            image: "/assets/img/project/project-42.JPG",
            title: "RIO Model & Tavolina HPL Compact",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 43,
            image: "/assets/img/project/project-43.JPG",
            title: "",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 44,
            image: "/assets/img/project/project-44.JPG",
            title: "RITA CHAIR SET",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 45,
            image: "/assets/img/project/project-45.JPG",
            title: "RITA CHAIR SET",
            description: "Krijoni një ambient modern me modelet tona"
        },
        {
            id: 46,
            image: "/assets/img/project/project-46.JPG",
            title: "",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 47,
            image: "/assets/img/project/project-47.JPG",
            title: "ARAGON CHAIR SET",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 48,
            image: "/assets/img/project/project-48.JPG",
            title: "RIO CHAIR SET",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 49,
            image: "/assets/img/project/project-49.JPG",
            title: "LOUIS CHAIR SET",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 50,
            image: "/assets/img/project/project-50.JPG",
            title: "ARDENO CHAIR SET",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 51,
            image: "/assets/img/project/project-51.JPG",
            title: "ESPINA CHAIR SET",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
        {
            id: 52,
            image: "/assets/img/project/project-52.JPG",
            title: "",
            description: "Krijoni një ambient modern me modelet më ekskluzive në treg"
        },
    ]

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    // Calculate total pages
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    // Get current projects
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Header />
            <section className="mt-3 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title mb-5">
                                <h1 >Produktet tona</h1>
                                <p className="mt-3 col-lg-8">
                                    Shikoni disa nga produktet tona më të fundit ku kemi implementuar zgjidhje të avancuara dhe dizajne moderne.
                                    Ne jemi krenarë për cilësinë, profesionalizmin dhe detajet që e bëjnë çdo projekt unik dhe funksional.
                                    Nga dizajnet elegante e deri te zgjidhjet praktike — gjithçka realizohet me përkushtim maksimal ndaj klientit.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        {currentProjects.map((project) => (
                            <div className="col-lg-3 col-md-6 mb-4 d-flex" key={project.id}>
                                <div className="project-card w-100 d-flex flex-column">
                                    <div className="project-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="img-fluid w-100"
                                            style={{
                                                borderRadius: '8px 8px 0 0',
                                                objectFit: 'cover',
                                                height: '250px',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <div className="project-info p-3 flex-grow-1 d-flex flex-column">
                                        <h3 className="h5 mb-2">{project.title}</h3>
                                        <p className="text-muted mb-0 flex-grow-1">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center mt-4">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                &laquo; Mbrapa
                                            </button>
                                        </li>

                                        {[...Array(totalPages).keys()].map(number => (
                                            <li
                                                key={number}
                                                className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => paginate(number + 1)}
                                                >
                                                    {number + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            >
                                                Tjetra &raquo;
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer1 />

            <style jsx>{`
                .project-card {
                    background: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                    height: 100%;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                }
                .project-image-container {
                    height: 250px;
                    overflow: hidden;
                }
                .page-item.active .page-link {
                    background-color: #000000;
                    border-color: #000000;
                    color: white;
                }
                .page-link {
                    color: #000000;
                    margin: 0 5px;
                    border-radius: 4px;
                }
                .page-link:hover {
                    background-color: #e9ecef;
                }
                .page-item.disabled .page-link {
                    color: #6c757d;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}