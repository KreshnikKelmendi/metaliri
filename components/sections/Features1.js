import Link from "next/link"

export default function Features1() {
    return (
        <>
            <section className="features-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">Materiale Premium</h4>
                                        <p>Përdorim materiale të cilësisë më të lartë për prodhimin e shërbimeve tona.</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp"   data-wow-delay=".4s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">Ekspertizë Profesionale</h4>
                                        <p>Ekipi ynë i ekspertëve garanton dizajne funksionale dhe të qëndrueshme për çdo nevojë.</p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">Mbështetje Pas Shitjes</h4>
                                        <p>Ofrojmë shërbim pas-shitje dhe mirëmbajtje për të garantuar jetëgjatësinë e produkteve.</p>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}