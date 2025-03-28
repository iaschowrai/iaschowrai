import React from 'react'
import './Testimonials.css';
import Image01 from "../../../assets/images/avatar-1.png";
import Image02 from "../../../assets/images/avatar-2.png";
import Image03 from "../../../assets/images/avatar-3.png";
import Image04 from "../../../assets/images/avatar-4.png";




const Testimonials = () => {
  return (
<section className="testimonials">
    <h3 className="h3 testimonials-title">Testimonials</h3>
    <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
            <a href="#" className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                    <img src={Image01} alt="Daniel" width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">Daniel</h4>
                <div className="testimonials-text">
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Deserunt tenetur eligendi exercitationem hic unde vero rerum
                        quis veniam praesentium. Minus dolorem quam ipsa minima 
                        explicabo sapiente aperiam laboriosam tenetur modi. 
                    </p>
                </div>
            </a>
        </li>
        <li className="testimonials-item">
            <a href="#" className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                    <img src={Image02} alt="Daniel" width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">Daniel</h4>
                <div className="testimonials-text">
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Deserunt tenetur eligendi exercitationem hic unde vero rerum
                        quis veniam praesentium. Minus dolorem quam ipsa minima 
                        explicabo sapiente aperiam laboriosam tenetur modi. 
                    </p>
                </div>
            </a>
        </li>
        <li className="testimonials-item">
            <a href="#" className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                    <img src={Image03} alt="Daniel" width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">Daniel</h4>
                <div className="testimonials-text">
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Deserunt tenetur eligendi exercitationem hic unde vero rerum
                        quis veniam praesentium. Minus dolorem quam ipsa minima 
                        explicabo sapiente aperiam laboriosam tenetur modi. 
                    </p>
                </div>
            </a>
        </li>
        <li className="testimonials-item">
            <a href="#" className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                    <img src={Image04} alt="Daniel" width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">Daniel</h4>
                <div className="testimonials-text">
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Deserunt tenetur eligendi exercitationem hic unde vero rerum
                        quis veniam praesentium. Minus dolorem quam ipsa minima 
                        explicabo sapiente aperiam laboriosam tenetur modi. 
                    </p>
                </div>
            </a>
        </li>
    </ul>
</section>  )
}

export default Testimonials