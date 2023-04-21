function Titulo() {
    return (
        <section class="cta-section theme-bg-light py-5">
            <div class="container text-center single-col-max-width">
                <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
                <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                <div class="single-form-max-width pt-3 mx-auto">
                    <form class="signup-form row g-2 g-lg-2 align-items-center">
                        <div class="col-12 col-md-9">
                            <label class="sr-only" for="semail">Your email</label>
                            <input type="email" id="semail" name="semail1" class="form-control me-md-1 semail" placeholder="Enter email" />
                        </div>
                        <div class="col-12 col-md-2">
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Titulo;