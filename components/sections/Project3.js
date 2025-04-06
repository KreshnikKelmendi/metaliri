import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/img/project/project-1.jpg",
    category: "Karriga Restoranti",
    title: "OSLO CHAIR SET",
    alt: "OSLO CHAIR SET"
  },
  {
    id: 2,
    image: "/assets/img/project/project-2.jpg",
    category: "Tavolina Kafeneje",
    title: "COTTON CHAIR SET",
    alt: "COTTON CHAIR SET"
  },
  {
    id: 3,
    image: "/assets/img/project/project-3.jpg",
    category: "Banka Shkollore",
    title: "SOHO CHAIR SET",
    alt: "SOHO CHAIR SET"
  },
  {
    id: 4,
    image: "/assets/img/project/project-4.jpg",
    category: "Karriga Barit",
    title: "MONICA CHAIR SET",
    alt: "MONICA CHAIR SET"
  },
  {
    id: 5,
    image: "/assets/img/project/project-5.jpg",
    category: "JAZZ CHAIR SET",
    title: "JAZZ CHAIR SET",
    alt: "JAZZ CHAIR SET"
  },
  {
    id: 6,
    image: "/assets/img/project/project-6.jpg",
    category: "RUMBA CHAIR SET",
    title: "RUMBA CHAIR SET",
    alt: "RUMBA CHAIR SET"
  }
];

export default function Project3() {
  return (
    <>
      <section className="project-area-three">
        <div className="" data-background="/assets/img/bg/area_bg03.jpg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">Punët tona</span>
                <h2 className="title tg-element-title text-black">Disa nga produktet tona</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {projects.map((project) => (
              <div className="col-lg-4 col-md-6 col-sm-10" key={project.id}>
                <div className="project-item-two">
                  <div className="project-thumb-two">
                      <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="section-title white-title mt-2 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title" style={{color:"black"}}>{project.title}</span>
              </div>
                  <div className="project-content-two">
                    <span>{project.category}</span>
                    <h2 className="title">
                      {project.title}
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="learn-more-btn text-center mt-25">
            <Link href="/produktet" className="btn">Shiko të gjitha produktet</Link>
          </div>
        </div>
      </section>
    </>
  );
}