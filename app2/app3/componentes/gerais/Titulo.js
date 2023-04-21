import { useState } from 'react';


function Titulo() {
    

    const [emailInserido, setEmailInserido] = useState('Introduza o seu email'); 

    function aceitaEmail(e) { 
        
        setEmailInserido(e.target.value); 
    } 
    return (
        <section class="cta-section theme-bg-light py-5">
            <div class="container text-center single-col-max-width">
                <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
                <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                <div class="single-form-max-width pt-3 mx-auto">
                    <div class="signup-form row g-2 g-lg-2 align-items-center">
                        <div class="col-12 col-md-9">
                            <label class="sr-only" for="semail">Your email</label>
            
                            <input value={emailInserido} onChange={aceitaEmail} type="email" id="semail" name="semail1" class="form-control me-md-1 semail" placeholder="Enter email" />
                                                    </div>
                        <div class="col-12 col-md-2">
            

                            <button class="btn btn-primary" onClick={() => setEmailInserido('')}>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <p>Verificação de email inserido: {emailInserido}</p> 
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Titulo;