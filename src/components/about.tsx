import mazda from '../assets/mazda-about1.png'

export default function About() {
    return <div id="about" className="row mt-5 pt-5" >
        <div className="mt-5 pt-3 d-flex align-items-center col-md-5">
            <img className='col-lg-11' src={mazda} alt="" />
        </div>

        <div className="mt-5 pt-3 col-md-7 text-center">
            <h1 className='section-header my-4'> About</h1>
            <div className="px-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Illo ex dicta iusto sint voluptatum velit facere illum magnam beatae doloremque ea possimus, harum dolorem. Tenetur autem molestiae quaerat possimus laborum, laudantium officia nisi recusandae est, earum ducimus architecto?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Illo ex dicta iusto sint voluptatum velit facere illum magnam beatae doloremque ea possimus, harum dolorem. Tenetur autem molestiae quaerat possimus laborum, laudantium officia nisi recusandae est, earum ducimus architecto?
                <br /> <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Illo ex dicta iusto sint voluptatum velit facere illum magnam beatae doloremque ea possimus, harum dolorem. Tenetur autem molestiae quaerat possimus laborum, laudantium officia nisi recusandae est, earum ducimus architecto?
            </div>
        </div>

    </div>
}