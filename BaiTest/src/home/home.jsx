import { Select } from "../component/select/select";
import { Header } from "../component/header/header";
import { Button } from "../component/button/button";
import { Card } from "../component/card/card";
import { Footer } from "../component/footer/footer";
import "./home.css"
import { useEffect, useState } from "react";
export const Home = () => {
    const data = [
        {
            img: "/bg (1).png",
            name: "Square Textured Striped",
            rate: 4.5,
            price: "$150.00",
            color: ["#272D43", "#A93A3A", "#E1D6C7"],
            discountPrice: "",
            soldOut: "Sold Out",
            discount: "",
            preOder: ""
        },
        {
            img: "/img (3).png",
            name: "Square Textured Striped",
            rate: 5,
            price: "$490.00",
            color: ["#EEEEEE", "#D6D6D6", "#C2CADF"],
            discountPrice: "$150.00",
            soldOut: "",
            discount: "",
            preOder: ""
        },
        {
            img: "/img (4).png",
            name: "Square Textured Striped",
            rate: 4.5,
            price: "$150.00",
            color: ["#08382C", "#492919", "#DFD3C2"],
            discountPrice: "",
            soldOut: "",
            discount: "-10%",
            preOder: "Pre-Order"
        },
        {
            img: "/img (5).png",
            name: "Square Textured Striped",
            rate: 5,
            price: "$150.00",
            color: ["#08382C", "#492919", "#DFD3C2"],
            discountPrice: "",
            soldOut: "",
            discount: "",
            preOder: ""
        },
        {
            img: "/bg (1).png",
            name: "Square Textured Striped T-shirt",
            rate: 5,
            price: "$490.00",
            color: ["#272D43", "#A93A3A", "#E1D6C7"],
            discountPrice: "$150.00",
            soldOut: "",
            discount: "-10%",
            preOder: "Pre-Order"
        },
        {
            img: "/img (9).png",
            name: "Square Textured Striped T-shirt",
            rate: 5,
            price: "$150.00",
            color: ["#272D43", "#A93A3A", "#E1D6C7"],
            discountPrice: "",
            soldOut: "",
            discount: "",
            preOder: ""
        },
    ]
    const [end, setEnd] = useState(0)
    const [skip, setSkip] = useState(1)
    const [limit, setLimit] = useState(2)
    const [responsive,setResponsive] = useState(false)
    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth <= 580) {
                setEnd(2);
                setResponsive(true)
            } else {
                setEnd(4);
                setResponsive(false)
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const start = (skip - 1) * limit

    const dataNew = data.slice(start, start + end)
    const totalPage = Math.ceil(data.length / limit)
    const handlePrev = () => {
        if (skip > 1) {
            setSkip((pre) => pre - 1)
        }

    }
    const handleNext = () => {
        if (skip < totalPage) {
            setSkip((pre) => pre + 1)
        }

    }

    return (
        <div id="home" >
            <Header></Header>
            <div className="mainHome">
                <div className="bannerPromotion">
                    <div className="SleevelessDress">
                        <img width="100%" src="/img (6).png" alt="" />
                        <div className="contentSleevelessDress">
                            <p>Inspired by Play</p>
                            <h3>Sleeveless Dress</h3>
                            <Button content={"Shop Save"}></Button>
                        </div>

                    </div>
                    <div className="BoysComfyStyles">
                        <img width="100%" src="/img (1).png" alt="" />
                        <div className="contentSleevelessDress">
                            <p>Buy 1 get 1—Holiday Sale!</p>
                            <h3>Boys Comfy Styles</h3>
                            <Button content={"Shop Save"}></Button>
                        </div>

                    </div>

                </div>
                <div className="scrollText">
                    <div>
                        <span>
                            Subscribe and get 10% off your first purchase
                        </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_1_957)">
                                    <path d="M10 18.7503C13.8 18.7503 16.9417 15.917 17.4333 12.2503C17.5083 11.717 17.0333 11.242 16.5 11.317C12.8333 11.8086 10 14.9503 10 18.7503ZM4.66667 8.95864C4.66667 10.1086 5.60001 11.042 6.75001 11.042C7.19167 11.042 7.59167 10.9086 7.93334 10.6753L7.91667 10.8336C7.91667 11.9836 8.85 12.917 10 12.917C11.15 12.917 12.0833 11.9836 12.0833 10.8336L12.0667 10.6753C12.4 10.9086 12.8083 11.042 13.25 11.042C14.4 11.042 15.3333 10.1086 15.3333 8.95864C15.3333 8.12531 14.8417 7.41697 14.1417 7.08364C14.8417 6.75031 15.3333 6.04197 15.3333 5.20864C15.3333 4.05864 14.4 3.12531 13.25 3.12531C12.8083 3.12531 12.4083 3.25864 12.0667 3.49197L12.0833 3.33364C12.0833 2.18364 11.15 1.25031 10 1.25031C8.85 1.25031 7.91667 2.18364 7.91667 3.33364L7.93334 3.49197C7.60001 3.25864 7.19167 3.12531 6.75001 3.12531C5.60001 3.12531 4.66667 4.05864 4.66667 5.20864C4.66667 6.04197 5.15834 6.75031 5.85834 7.08364C5.15834 7.41697 4.66667 8.12531 4.66667 8.95864ZM10 5.00031C11.15 5.00031 12.0833 5.93364 12.0833 7.08364C12.0833 8.23364 11.15 9.16697 10 9.16697C8.85 9.16697 7.91667 8.23364 7.91667 7.08364C7.91667 5.93364 8.85 5.00031 10 5.00031ZM2.56667 12.2503C3.05834 15.917 6.2 18.7503 10 18.7503C10 14.9503 7.16667 11.8086 3.5 11.317C2.96667 11.242 2.49167 11.717 2.56667 12.2503Z" fill="#111111" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_957">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>
                            Great-free returns product within 10 days
                        </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_1_957)">
                                    <path d="M10 18.7503C13.8 18.7503 16.9417 15.917 17.4333 12.2503C17.5083 11.717 17.0333 11.242 16.5 11.317C12.8333 11.8086 10 14.9503 10 18.7503ZM4.66667 8.95864C4.66667 10.1086 5.60001 11.042 6.75001 11.042C7.19167 11.042 7.59167 10.9086 7.93334 10.6753L7.91667 10.8336C7.91667 11.9836 8.85 12.917 10 12.917C11.15 12.917 12.0833 11.9836 12.0833 10.8336L12.0667 10.6753C12.4 10.9086 12.8083 11.042 13.25 11.042C14.4 11.042 15.3333 10.1086 15.3333 8.95864C15.3333 8.12531 14.8417 7.41697 14.1417 7.08364C14.8417 6.75031 15.3333 6.04197 15.3333 5.20864C15.3333 4.05864 14.4 3.12531 13.25 3.12531C12.8083 3.12531 12.4083 3.25864 12.0667 3.49197L12.0833 3.33364C12.0833 2.18364 11.15 1.25031 10 1.25031C8.85 1.25031 7.91667 2.18364 7.91667 3.33364L7.93334 3.49197C7.60001 3.25864 7.19167 3.12531 6.75001 3.12531C5.60001 3.12531 4.66667 4.05864 4.66667 5.20864C4.66667 6.04197 5.15834 6.75031 5.85834 7.08364C5.15834 7.41697 4.66667 8.12531 4.66667 8.95864ZM10 5.00031C11.15 5.00031 12.0833 5.93364 12.0833 7.08364C12.0833 8.23364 11.15 9.16697 10 9.16697C8.85 9.16697 7.91667 8.23364 7.91667 7.08364C7.91667 5.93364 8.85 5.00031 10 5.00031ZM2.56667 12.2503C3.05834 15.917 6.2 18.7503 10 18.7503C10 14.9503 7.16667 11.8086 3.5 11.317C2.96667 11.242 2.49167 11.717 2.56667 12.2503Z" fill="#111111" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_957">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>
                            Subscribe and get 10% off your first purchase
                        </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_1_957)">
                                    <path d="M10 18.7503C13.8 18.7503 16.9417 15.917 17.4333 12.2503C17.5083 11.717 17.0333 11.242 16.5 11.317C12.8333 11.8086 10 14.9503 10 18.7503ZM4.66667 8.95864C4.66667 10.1086 5.60001 11.042 6.75001 11.042C7.19167 11.042 7.59167 10.9086 7.93334 10.6753L7.91667 10.8336C7.91667 11.9836 8.85 12.917 10 12.917C11.15 12.917 12.0833 11.9836 12.0833 10.8336L12.0667 10.6753C12.4 10.9086 12.8083 11.042 13.25 11.042C14.4 11.042 15.3333 10.1086 15.3333 8.95864C15.3333 8.12531 14.8417 7.41697 14.1417 7.08364C14.8417 6.75031 15.3333 6.04197 15.3333 5.20864C15.3333 4.05864 14.4 3.12531 13.25 3.12531C12.8083 3.12531 12.4083 3.25864 12.0667 3.49197L12.0833 3.33364C12.0833 2.18364 11.15 1.25031 10 1.25031C8.85 1.25031 7.91667 2.18364 7.91667 3.33364L7.93334 3.49197C7.60001 3.25864 7.19167 3.12531 6.75001 3.12531C5.60001 3.12531 4.66667 4.05864 4.66667 5.20864C4.66667 6.04197 5.15834 6.75031 5.85834 7.08364C5.15834 7.41697 4.66667 8.12531 4.66667 8.95864ZM10 5.00031C11.15 5.00031 12.0833 5.93364 12.0833 7.08364C12.0833 8.23364 11.15 9.16697 10 9.16697C8.85 9.16697 7.91667 8.23364 7.91667 7.08364C7.91667 5.93364 8.85 5.00031 10 5.00031ZM2.56667 12.2503C3.05834 15.917 6.2 18.7503 10 18.7503C10 14.9503 7.16667 11.8086 3.5 11.317C2.96667 11.242 2.49167 11.717 2.56667 12.2503Z" fill="#111111" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_957">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>
                            Great-free returns product within 10 days
                        </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_1_957)">
                                    <path d="M10 18.7503C13.8 18.7503 16.9417 15.917 17.4333 12.2503C17.5083 11.717 17.0333 11.242 16.5 11.317C12.8333 11.8086 10 14.9503 10 18.7503ZM4.66667 8.95864C4.66667 10.1086 5.60001 11.042 6.75001 11.042C7.19167 11.042 7.59167 10.9086 7.93334 10.6753L7.91667 10.8336C7.91667 11.9836 8.85 12.917 10 12.917C11.15 12.917 12.0833 11.9836 12.0833 10.8336L12.0667 10.6753C12.4 10.9086 12.8083 11.042 13.25 11.042C14.4 11.042 15.3333 10.1086 15.3333 8.95864C15.3333 8.12531 14.8417 7.41697 14.1417 7.08364C14.8417 6.75031 15.3333 6.04197 15.3333 5.20864C15.3333 4.05864 14.4 3.12531 13.25 3.12531C12.8083 3.12531 12.4083 3.25864 12.0667 3.49197L12.0833 3.33364C12.0833 2.18364 11.15 1.25031 10 1.25031C8.85 1.25031 7.91667 2.18364 7.91667 3.33364L7.93334 3.49197C7.60001 3.25864 7.19167 3.12531 6.75001 3.12531C5.60001 3.12531 4.66667 4.05864 4.66667 5.20864C4.66667 6.04197 5.15834 6.75031 5.85834 7.08364C5.15834 7.41697 4.66667 8.12531 4.66667 8.95864ZM10 5.00031C11.15 5.00031 12.0833 5.93364 12.0833 7.08364C12.0833 8.23364 11.15 9.16697 10 9.16697C8.85 9.16697 7.91667 8.23364 7.91667 7.08364C7.91667 5.93364 8.85 5.00031 10 5.00031ZM2.56667 12.2503C3.05834 15.917 6.2 18.7503 10 18.7503C10 14.9503 7.16667 11.8086 3.5 11.317C2.96667 11.242 2.49167 11.717 2.56667 12.2503Z" fill="#111111" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_957">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>
                            Subscribe and get 10% off your first purchase
                        </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9" clipPath="url(#clip0_1_957)">
                                    <path d="M10 18.7503C13.8 18.7503 16.9417 15.917 17.4333 12.2503C17.5083 11.717 17.0333 11.242 16.5 11.317C12.8333 11.8086 10 14.9503 10 18.7503ZM4.66667 8.95864C4.66667 10.1086 5.60001 11.042 6.75001 11.042C7.19167 11.042 7.59167 10.9086 7.93334 10.6753L7.91667 10.8336C7.91667 11.9836 8.85 12.917 10 12.917C11.15 12.917 12.0833 11.9836 12.0833 10.8336L12.0667 10.6753C12.4 10.9086 12.8083 11.042 13.25 11.042C14.4 11.042 15.3333 10.1086 15.3333 8.95864C15.3333 8.12531 14.8417 7.41697 14.1417 7.08364C14.8417 6.75031 15.3333 6.04197 15.3333 5.20864C15.3333 4.05864 14.4 3.12531 13.25 3.12531C12.8083 3.12531 12.4083 3.25864 12.0667 3.49197L12.0833 3.33364C12.0833 2.18364 11.15 1.25031 10 1.25031C8.85 1.25031 7.91667 2.18364 7.91667 3.33364L7.93334 3.49197C7.60001 3.25864 7.19167 3.12531 6.75001 3.12531C5.60001 3.12531 4.66667 4.05864 4.66667 5.20864C4.66667 6.04197 5.15834 6.75031 5.85834 7.08364C5.15834 7.41697 4.66667 8.12531 4.66667 8.95864ZM10 5.00031C11.15 5.00031 12.0833 5.93364 12.0833 7.08364C12.0833 8.23364 11.15 9.16697 10 9.16697C8.85 9.16697 7.91667 8.23364 7.91667 7.08364C7.91667 5.93364 8.85 5.00031 10 5.00031ZM2.56667 12.2503C3.05834 15.917 6.2 18.7503 10 18.7503C10 14.9503 7.16667 11.8086 3.5 11.317C2.96667 11.242 2.49167 11.717 2.56667 12.2503Z" fill="#111111" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_957">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>
                            Great-free returns product within 10 days
                        </span>
                    </div>

                </div>
                <div className="featureCategories">
                    <h3>Featured Collections</h3>
                    <p>Elevate your style with our chic featured collection—where fashion meets flair effortlessly.
                    </p>
                    <div className="category">
                        <div className="sp1">
                            <img src="/bg (1).jpg" alt="" />
                            <div className="boxButton">
                                <Button content={"Clothing"}></Button>
                            </div>
                        </div>
                        <div className="categoriesMiddle">
                            <div className="sp2">
                                <img src="/bg (2).jpg" alt="" />
                                <div className="boxButton">
                                    <Button content={"Sunglasses"}></Button>
                                </div>
                            </div>
                            <div className="sp3">
                                <img src="/bg.png" alt="" />
                                <div className="boxButton">
                                    <Button content={"Bags"}></Button>
                                </div>
                            </div>
                        </div>
                        <div className="sp4">
                            <img src="bg (3).jpg" alt="" />
                            <div className="boxButton">
                                <Button content={"Sneaker"}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newArrivals">
                    <h3>New Arrivals</h3>
                    <p>Here’s some of our new arrivals products people are in love with.
                    </p>
                    <div className="page">
                        <div className="pageNewArrivals">
                            <div className="prev" onClick={() => handlePrev()}>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.14062 8.1875C5.27604 8.32292 5.34375 8.48438 5.34375 8.67188C5.34375 8.84896 5.27604 9 5.14062 9.125C5.01562 9.26042 4.85938 9.32812 4.67188 9.32812C4.48438 9.32812 4.32812 9.26042 4.20312 9.125L0.203125 5.125C0.0677083 5 0 4.84896 0 4.67188C0 4.48438 0.0677083 4.32292 0.203125 4.1875L4.20312 0.1875C4.32812 0.0625 4.48438 0 4.67188 0C4.85938 0 5.01562 0.0625 5.14062 0.1875C5.27604 0.322917 5.34375 0.484375 5.34375 0.671875C5.34375 0.848958 5.27604 1 5.14062 1.125L1.60938 4.65625L5.14062 8.1875Z" fill="#111111" />
                                </svg>
                            </div>
                            <div className="next" onClick={() => handleNext()}>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.14062 9.125C1.01562 9.26042 0.859375 9.32812 0.671875 9.32812C0.484375 9.32812 0.328125 9.26042 0.203125 9.125C0.0677083 9 0 8.84896 0 8.67188C0 8.48438 0.0677083 8.32292 0.203125 8.1875L3.73438 4.65625L0.203125 1.125C0.0677083 1 0 0.848958 0 0.671875C0 0.484375 0.0677083 0.322917 0.203125 0.1875C0.328125 0.0625 0.484375 0 0.671875 0C0.859375 0 1.01562 0.0625 1.14062 0.1875L5.14062 4.1875C5.27604 4.32292 5.34375 4.48438 5.34375 4.67188C5.34375 4.84896 5.27604 5 5.14062 5.125L1.14062 9.125Z" fill="#111111" />
                                </svg>

                            </div>
                        </div>
                    </div>


                    <div className="listNewArrivals">
                        {
                            dataNew.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Card
                                            responsive={responsive}
                                            img={item.img}
                                            name={item.name}
                                            rate={item.rate}
                                            price={item.price}
                                            color={item.color}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            soldOut={item.soldOut}
                                            preOder={item.preOder}
                                        />
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
            </div>

            <div className="fixed">
                <div className="backToTop">
                    <a href="#home">
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79688 3.53125H7.8125C7.9375 3.65625 8 3.8125 8 4C8 4.17708 7.9375 4.33333 7.8125 4.46875C7.67708 4.59375 7.51562 4.65625 7.32812 4.65625C7.15104 4.65625 6.99479 4.59375 6.85938 4.46875L4 1.60938L1.14062 4.46875C1.00521 4.59375 0.84375 4.65625 0.65625 4.65625C0.479167 4.65625 0.328125 4.59375 0.203125 4.46875C0.0677083 4.33333 0 4.17708 0 4C0 3.8125 0.0677083 3.65625 0.203125 3.53125L3.53125 0.1875C3.65625 0.0625 3.8125 0 4 0C4.1875 0 4.34375 0.0625 4.46875 0.1875L7.79688 3.53125ZM7.79688 8.1875H7.8125C7.9375 8.32292 8 8.48438 8 8.67188C8 8.84896 7.9375 9 7.8125 9.125C7.67708 9.26042 7.51562 9.32812 7.32812 9.32812C7.15104 9.32812 6.99479 9.26042 6.85938 9.125L4 6.26562L1.14062 9.125C1.00521 9.26042 0.84375 9.32812 0.65625 9.32812C0.479167 9.32812 0.328125 9.26042 0.203125 9.125C0.0677083 9 0 8.84896 0 8.67188C0 8.48438 0.0677083 8.32292 0.203125 8.1875L3.53125 4.85938C3.65625 4.72396 3.8125 4.65625 4 4.65625C4.1875 4.65625 4.34375 4.72396 4.46875 4.85938L7.79688 8.1875Z" fill="white" />
                        </svg>
                    </a>


                </div>
                <div className="chat">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3464 10.4778V14.9046C18.3464 15.1923 18.3354 15.469 18.3024 15.7346C18.0491 18.7227 16.2983 20.2056 13.0719 20.2056H12.6314C12.3562 20.2056 12.0919 20.3384 11.9267 20.5598L10.6053 22.3305C10.0217 23.1162 9.07471 23.1162 8.4911 22.3305L7.16971 20.5598C7.02656 20.3716 6.70724 20.2056 6.46499 20.2056H6.02453C2.51185 20.2056 0.75 19.3314 0.75 14.9046V10.4778C0.75 7.23521 2.23657 5.47557 5.19867 5.22103C5.46294 5.18783 5.73823 5.17676 6.02453 5.17676H13.0719C16.5846 5.17676 18.3464 6.94747 18.3464 10.4778Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.75 6.05109V10.4779C22.75 13.7316 21.2634 15.4801 18.3013 15.7347C18.3344 15.4691 18.3454 15.1924 18.3454 14.9047V10.4779C18.3454 6.94751 16.5835 5.17679 13.0709 5.17679H6.0235C5.7372 5.17679 5.46191 5.18786 5.19763 5.22106C5.4509 2.24405 7.20173 0.75 10.4281 0.75H17.4755C20.9881 0.75 22.75 2.52072 22.75 6.05109Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4089 13.2003H13.4188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.55346 13.2003H9.56337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.69994 13.2003H5.70985" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </div>
            <Footer responsive={responsive} />
        </div>
    )
}