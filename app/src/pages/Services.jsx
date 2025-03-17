
const Services = () => {
    return (
        <>
            <h1>Page Services</h1>
            
            <img src="./src/assets/images/banner.jpg" alt="ligne lumineuse droite puis partant dans tous les sens sur fond bleu foncé" class="img-fluid w-100" />
            
            <div className="container text-center">

                <div className="text-center border-bottom border-primary border-4 ">
                    <h2>Mon offre de services</h2>
                    <p>voici les prestations sur lesquelles je peux intervenir</p>
                </div>

            </div>
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">UX Design</h3>
                                <p class="card-text">L'UX Design est une discipline qui consiste à consevoir des produits (sites web, applications mobiles, logiciels, 
                                    objets connectés, ect.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur 
                                    la plus fluide et agréable possible.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Développement web</h3>
                                <p class="card-text">Le développement de site web consiste à créer des sites internet en utilisant des langages de 
                                    programmation (HTLM, CSS, JavaScript, PHP, ect.) et des frameworks (Boostrap, React, Angular, etc.). </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Référencement</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Services;
