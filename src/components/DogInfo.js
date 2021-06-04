import React from "react";
import Dogdata from "../DogData/Dogdata.json";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Card from "./Card";
import logo from "../images/logo.png"


export default class DogInfo extends React.Component{

    render(){
        let Dogs=Dogdata.slice(0,20);
        return(
                <div>
                   <nav className="navbar navbar-light bg-light navbar-expand-sm fixed-top">
                       
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" className="logo"/>
                        </a>
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav mx-3 mt-4">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Dogs<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        { 
                            Dogs.map(
                                (Dog,index)=>{
                                    return (
                                        <Card url={Dog.image.url} name={Dog.name} life_span={Dog.life_span} temperament={Dog.temperament} origin={Dog.origin} breed_group={Dog.breed_group} bred_for={Dog.bred_for} id={Dog.id}/> 
                                    )
                                }
                             )
                        }
                    </div>
                   
                   <footer className="bg-light">
                        <hr/>
                        <div className="container-fluid">
                        <div className="row">
                            <div class="col-lg-3 offset-lg-1 col-sm-5 offset-sm-1 lead">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Your Profile</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 offset-lg-1 col-sm-5 offset-sm-1 lead">
                                <h5>Company</h5>
                                <ul className="list-unstyled">
                                    <li>Help & Contact</li>
                                    <li>Teams</li>
                                    <li>Articles</li>
                                    <li>Help & Contact</li>
                                    <li>Subscription FAQs</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 offset-lg-1 col-sm-5 offset-sm-1  lead">
                                <h5>Categories</h5>
                                <ul className="list-unstyled">
                                    <li>New</li>
                                    <li>Popular</li>
                                    <li>business & economics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-5 col-6 offset-4 mt-3">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-center">
                            <div className="col-auto">2020,Avik Tarfadar ALL &copy; RESERVED.</div>
                        </div>
                        </div>
                    </footer>
                </div>
            );
    };
}







