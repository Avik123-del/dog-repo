import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../fontawesome-free-5.13.0-web/css/all.min.css";
function expand(n){
    let id=parseInt(n);
    document.getElementsByClassName("info")[n-1].classList.toggle("invisible");
}

export default class Card extends React.Component{
   

    render(props){ 
        return(
            <div className="card my-2 container" id={this.props.id}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top dog-img" src={this.props.url} />
                    </div>
                    <div className="col-md-5 card-body">
                        <h3>{this.props.name}</h3>
                        <button className="expand-info btn btn-outline-warning" onClick={()=>expand(this.props.id)}>
                            <i className="fas fa-chevron-circle-down fa-lg"></i>
                            <span>   Click Here To See More</span>
                        </button>
                        <p className="info invisible">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-5">Life Span</div>
                                    <div className="col-6 offset-1">{this.props.life_span==null?"Unknown":this.props.life_span}</div>
                                </div>
                                <div className="row">
                                    <div className="col-5">Temperament</div>
                                    <div className="col-6 offset-1">{(this.props.temperament.split(",")).join("  |")}</div>
                                </div>
                                <div className="row">
                                    <div className="col-5">Origin</div>
                                    <div className="col-6 offset-1">{this.props.origin==null?"Unknown":this.props.origin}</div>
                                </div>
                                <div className="row">
                                    <div className="col-5">Breed Group</div>
                                    <div className="col-6 offset-1">{this.props.breed_group==null?"Unknown":this.props.breed_group}</div>
                                </div>
                                <div className="row">
                                    <div className="col-5">Bred For</div>
                                    <div className="col-6 offset-1">{this.props.bred_for==null?"Unknown":this.props.bred_for}</div>
                                </div>
                               
                            </div>
                        </p>
                        
                    </div>
                </div>
            </div>
        );
    }
}