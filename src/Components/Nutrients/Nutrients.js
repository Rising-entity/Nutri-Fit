import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/Nutrients.css";
import apple from "../images/apple.jpg";
import biryani from "../images/biryani.jpg";
import poha from "../images/poha.jpg";
import rice from "../images/rice.jpg";
import orange from "../images/orange.jpg";
import dosa from "../images/dosa.jpg";
import chicken from "../images/chicken.jpg";
import idli from "../images/idli.jpg";


import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../Spinner/Spinner";


function Nutrients(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        setInput(props.food);
    }, [])

    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(1);
    const [input, setInput] = useState("");
    const [content, setContent] = useState({
        name: "",
        sugar: 0,
        carbohydrates: 0,
        cholesterol: 0,
        potassium: 0,
        protein: 0,
        sodium: 0,
        saturatedFat: 0,
        totalFat: 0,
        serving_size: 0
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [input])
    
    //for seraching food from home
    // useEffect(() => {
    //     // if (props.food !== "") {
    //     setInput(props.food);
    //     fetchData();
    //     console.log("Food:", props.food); // Access the `food` prop directly
    //     // }
    // }, [props.food]);


    //for seraching food from nutrients
    useEffect(() => {
        if (input !== "") {
            fetchData();
        }
    }, [input]);



    function myAsyncFunction() {
        if (input !== "") {
            const options = {
                method: "GET",
                url: `https://api.api-ninjas.com/v1/nutrition?query=${input}`,
                headers: {
                    "X-Api-Key": "izpCpFRVLARboYtD/C/BCg==lEnnuehzvLKPEGM2",
                },
            };

            return axios
                .request(options)
                .then(function (response) {
                    console.log(response);
                    const content2 = response.data;
                    const content = content2[0];
                    if (content2.length > 0) {
                        const content = content2[0];
                        setFound(content2.length);
                        setContent({
                            name: content.name,
                            sugar: content.sugar_g,
                            carbohydrates: content.carbohydrates_total_g,
                            cholesterol: content.cholesterol_mg,
                            potassium: content.potassium_mg,
                            protein: content.protein_g,
                            sodium: content.sodium_mg,
                            saturatedFat: content.fat_saturated_g,
                            totalFat: content.fat_total_g,
                            serving_size: content.serving_size_g,
                        });
                    } else {
                        setFound(0); // No elements found in the response
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }

    function temp() {
        let inputValue = document.getElementById("example-search-input2").value;
        // await setInput(document.getElementById("example-search-input2").value);
        setInput(inputValue);
        console.log("helllo", input);

    }

    async function fetchData() {
        setLoading(true);
        try {
            await myAsyncFunction();
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-3 mb-2">
            {loading ? (
                <Spinner />
            ) : (
                <div className="container">
                    <div className="my-3 py-3 rounded-2" style={{ backgroundColor: "rgb(240, 240, 240)" }}>

                        <h1 className="text-center" style={{ fontFamily: "'Merriweather', serif" }}>Search food</h1>
                        <div className="col-md-6 mx-auto">
                            <div className="row no-gutters mt-3 align-items-center mx-auto">
                                <div className="col col-md-8">
                                    <input
                                        className="form-control border-secondary rounded-pill pr-5"
                                        type="search"
                                        placeholder="search"
                                        id="example-search-input2"
                                        name="search"
                                    // value={input}
                                    // onChange={(e) => setInput(e.target.value)}
                                    />

                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5"
                                        type="button"
                                        onClick={temp}
                                    >
                                        search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 py-1 rounded-2" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                        <div className="container my-5">
                            {found === 0 ? (
                                <p className="fw-bold text-center" style={{ color: "red" }}>Food not found, try to enter another food</p>
                            ) : (
                                <>
                                    <div className="row">
                                        <h5 className="my-3 fw-bold">Food Name: <span className="food">{content.name}</span> ({content.serving_size}gm)</h5>
                                    </div>

                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <h5 className="fw-bold">Sugar: <span className="food">{content.sugar}</span> g</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Carbohydrates: <span className="food">{content.carbohydrates}</span>g</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Cholesterol: <span className="food">{content.cholesterol}</span> mg</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Potassium:<span className="food">{content.potassium}</span> mg</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Protein:<span className="food">{content.protein}</span> g</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Sodium: <span className="food">{content.sodium}</span> mg</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Saturated Fat:<span className="food">{content.saturatedFat}</span> g</h5>
                                        </div>
                                        <div className="col">
                                            <h5 className="fw-bold">Total Fat: <span className="food">{content.totalFat}</span> g</h5>
                                        </div>
                                    </div>
                                    <hr />



                                </>
                            )}
                            <div>

                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col-md-12 my-4">
                                            <h3 className="fw-bold">common seraches</h3>
                                        </div>
                                    </div>


                                    {/* <!-- our value card start --> */}
                                    <div className="row row-cols-1 row-cols-md-4 g-4">

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={apple} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Apple </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" onClick={function () {
                                                            setInput("apple");

                                                        }}  >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard ">
                                                <img src={biryani} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Biryani </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="biryani" onClick={function () {
                                                            setInput("biryani");

                                                        }} >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={poha} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Poha </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="poha" onClick={function () {
                                                            setInput("poha");

                                                        }}  >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={rice} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Rice </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="rice" onClick={function () {
                                                            setInput("rice");

                                                        }}  >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={orange} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Orange </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="orange" onClick={function () {
                                                            setInput("orange");

                                                        }} >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={dosa} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Dosa </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="dosa" onClick={function () {
                                                            setInput("dosa");

                                                        }}  >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={chicken} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="chicken" onClick={function () {
                                                            setInput("chicken");

                                                        }} >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col ">
                                            <div className="card h-100 border-0 shadow valuecard">
                                                <img src={idli} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Idli </h5>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <button type="button" className="btn btn-success rounded-5 grnbtn" name="idle" onClick={function () {
                                                            setInput("idli");

                                                        }} >  search </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- our value card end --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default Nutrients;